import { Component, ElementRef, Input, OnInit, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ContractService from '../../services/contract.service';
import { Global } from '../../services/Global';
import LoanService from '../../services/loan.service';
import ModelService from '../../services/model.service';
import { ContractV2Component } from '../contract.component';
import { SignatureComponent } from '../signature/signature.component';
import { Contract } from '../types/Contract';
import { map, filter, flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'mlc-templates-signaturepad',
    templateUrl: './signaturepad.component.html',
    styleUrls: ['./signaturepad.component.css']
})
export class SignaturePadComponent implements OnInit {
    constructor(
        readonly route: ActivatedRoute,
        readonly router: Router,
        readonly global: Global,
        readonly models: ModelService,
        public contractService: ContractService,
        readonly loanService: LoanService) { }

    isAddendum = false;

    ngOnInit() {
        this.isAddendum = this.router.url.includes("addenda");
        this.route.paramMap.pipe(filter(paramMap => this.isAddendum ? paramMap.has('ID') : paramMap.has('loanID')),
            map(paramMap => this.isAddendum ? paramMap.get('ID') : paramMap.get('loanID')),
            map(Number),
            flatMap(async id => {
                this.loading = true;
                try {
                    return this.isAddendum
                        ? await this.contractService.byAddendum(id)
                        : await this.contractService.byLoan(id);
                } finally {
                    this.loading = false;
                }
            }))
            .subscribe(contract => {
                this.Contract = contract;
                if (this.Contract?.Signatures?.length)
                    this.Show = 'Signature';
                else if (this.Contract?.Initials?.length)
                    this.Show = 'Initials';
                else
                    this.Show = 'Contract';
            });
    }

    get touched(): boolean {
        if (this.SignatureComponent)
            return this.SignatureComponent.points.length > 0;
        if (this.InitialsComponent)
            return this.InitialsComponent.points.length > 0;
        return false;
    }
    get validSignature(): boolean {
        if (this.SignatureComponent)
            return this.SignatureComponent.touching || this.SignatureComponent.drawing || this.SignatureComponent.SignatureValid;
        return false;
    }
    get validInitial(): boolean {
        if (this.InitialsComponent)
            return this.InitialsComponent.SignatureValid;
        return false;
    }

    @ViewChild('signature', { static: false }) SignatureComponent!: SignatureComponent;
    @ViewChild('initials', { static: false }) InitialsComponent!: SignatureComponent;
    @ViewChild('contract', { static: false }) ContractComponent!: ContractV2Component;

    contractDisplay() {
        if (this.Show === 'Contract')
            return 'block';
        else
            return 'hidden';
    }

    Signature?: string;
    Initials?: string;
    loading = false;

    Show: 'None' | 'Signature' | 'Initials' | 'Contract' | 'Waiting' = 'None';

    contract?: Contract;
    @Input() set Contract(value) {
        if (this.contract !== value) {
            this.contract = value;
            this.Signature = undefined;
            this.Initials = undefined;
        }
    }
    get Contract() { return this.contract; }

    applySignature() {
        if (this.Contract) {
            this.Signature = this.SignatureComponent.Image;
            this.Show = (this.Contract.Initials.length > 0 && this.Initials === undefined) ? 'Initials' : 'Contract';
        }
    }
    clearSignature() {
        this.SignatureComponent.clear();
        if (this.Contract)
            this.Signature = undefined;
    }
    applyInitials() {
        if (this.Contract) {
            this.Initials = this.InitialsComponent.Image;
            this.Show = 'Contract';
        }
    }
    clearInitials() {
        this.InitialsComponent.clear();
        if (this.Contract)
            this.Initials = undefined;
    }

    async contractStatus(event: { Contract: Contract, Signatures: { Completed: number, Total: number }, Initials: { Completed: number, Total: number } }) {
        if (event.Signatures.Total === event.Signatures.Completed && event.Initials.Total === event.Initials.Completed) {
            if (this.Contract) {
                this.Show = 'Waiting';
                const contract = await this.contractService.signContract(event.Contract);
                const loanRequest = await this.models.byID(
                    'LoanRequest',
                    event.Contract.LoanRequest.ID,
                    { Status: { Type: {} }, PreviousLoan: {} }
                );

                switch (this.global.storeStateCode) {
                    case "LA":
                        if (this.loanService.renewal || loanRequest.PreviousLoan && (loanRequest.LoanSelection && loanRequest.LoanSelection.Type === 'PDLS.LCL')) {
                            this.router.navigate(['/rolloverFinalize']);
                            return;
                        }
                        break;
                }

                const loan = await this.loanService.finalizeRequest(contract.LoanRequest.ID);
                if (!loan) {
                    const refetchLoanRequest = await this.models.byID(
                        'LoanRequest',
                        loanRequest.ID,
                        { Status: { Type: {} }}
                    );
                    if (refetchLoanRequest?.Status?.Type?.Name == "Declined") {
                        this.router.navigate(['/loan', 'denial']);
                        return;
                    }
                }
                this.router.navigate(['/account/congratulations/loan']);
            }
        }
    }
}
