import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { PageComponent } from "./page/page.component";
import { Contract } from "./types/Contract";
import { Initials } from "./types/Initials";
import { Signature } from "./types/Signature";

@Component({
    selector: "mlc-template-contract",
    templateUrl: "./contract.component.html",
    styleUrls: ["./contract.component.css"]
})
export class ContractV2Component implements OnInit {
    constructor(private host: ElementRef<HTMLElement>) { }

    currentPage: any = {};
    pageIndex: number = 0;
    documentIndex: number = 0;

    totalPages: number = 0;
    currentPageNumber: number = 1;

    contract!: Contract;
    get Contract() { return this.contract; }
    @Input() set Contract(value) { this.contract = value; }
	@Input() LoanID!: number;
	@Input() TransactionID!: number;

    @Output() status = new EventEmitter();

    async ngOnInit() {
        if (this.Contract) {
            this.currentPage = this.Contract.Documents[this.documentIndex].Pages[this.pageIndex];
            this.Contract.Documents.forEach(doc => {
                this.totalPages += doc.Pages.length;
            });
        }
    }

    async setPrevPage() {
        if (this.pageIndex === 0 && this.documentIndex === 0)
            return;

        this.currentPageNumber--;
        this.pageIndex--;

        //go to previous document and set pageIndex to the length-1
        if (this.pageIndex < 0) {
            this.documentIndex--;
            this.pageIndex = this.Contract.Documents[this.documentIndex].Pages.length - 1;
        }

        this.scrollTop();
        this.currentPage = this.Contract.Documents[this.documentIndex].Pages[this.pageIndex];
    }

    async setNextPage() {
        if (this.Pages.first.IncompleteSignatures.length > 0) {
            const required = this.Pages.first.IncompleteSignatures.filter(x => !x.Signature || !x.Signature.Optional);
            if (required.length > 0) {
                const y = (required[0].location.y - required[0].size.height) / 2;
                window.scrollTo(0, y);

            } else {
                const optionals = this.Pages.first.IncompleteSignatures.filter(x => x.Signature && x.Signature.Optional);
                if (optionals.length > 0) {
                    const optional = optionals[0];
                    optional.Skip = true;
                    const y = (optional.location.y - optional.size.height) / 2;
                    window.scrollTo(0, y);
                }
            }
            return;
        }
        if (this.Pages.first.IncompleteInitials.length > 0) {
            const required = this.Pages.first.IncompleteInitials.filter(x => !x.Initials || !x.Initials.Optional);
            if (required.length > 0) {
                const y = (required[0].location.y - required[0].size.height) / 2;
                window.scrollTo(0, y);
            } else {
                const optionals = this.Pages.first.IncompleteInitials.filter(x => x.Initials && x.Initials.Optional);
                if (optionals.length > 0) {
                    const optional = optionals[0];
                    optional.Skip = true;
                    const y = (optional.location.y - optional.size.height) / 2;
                    window.scrollTo(0, y);
                }
            }
            return;
        }


        //If this is the last page in the document:
        if (this.pageIndex === (this.Contract.Documents[this.documentIndex].Pages.length - 1)) {
            //if this is the last document:
            if (this.documentIndex === (this.Contract.Documents.length - 1))
                return;

            this.documentIndex++;
            this.pageIndex = -1;
        }

        this.currentPageNumber++;
        this.pageIndex++;
        this.scrollTop();
        this.currentPage = this.Contract.Documents[this.documentIndex].Pages[this.pageIndex];
    }

    scrollTop() {
        window.scrollTo(0, 0);

        //let tag = this.host.nativeElement;
        //while (tag.nodeName.toUpperCase() != "HTML" || !tag) {
        //	tag = <HTMLElement>tag.parentElement;
        //}
        //tag.scrollTo(0, 0);
    }

    isSigned(signature: Signature): boolean {
        if (signature.Image === undefined) {
            if (this.Pages && this.Pages.first)
                this.Pages.first.removeSignature(signature);
        }

        return (signature.Image !== undefined);
    }
    isInitialed(initials: Initials): boolean {
        return (initials.Image !== undefined);
    }


    @ViewChildren(PageComponent) Pages = new QueryList<PageComponent>();


    @Input() Signature?: string;
    @Input() Initials?: string;

    @Output() signed = new EventEmitter<{ signed: number, total: number }>();
    sign(signature: Signature) {
        this.Pages.forEach(pageComponent => {
            pageComponent.Signatures.forEach(signatureComponent => {
                if (signatureComponent.Signature === signature && this.Signature) {
                    pageComponent.applySignature(signature, this.Signature);
                }
            });
        });
        this.checkStatus();
    }

    checkStatus() {
        const status = { Contract: this.Contract, Signatures: { Completed: 0, Total: 0 }, Initials: { Completed: 0, Total: 0 } };
        for (const document of this.Contract.Documents) {
            for (const page of document.Pages) {
                for (const signature of page.Signatures) {
                    status.Signatures.Total++;
                    if (signature.Image || signature.Optional === true)
                        status.Signatures.Completed++;
                }
                for (const initials of page.Initials) {
                    status.Initials.Total++;
                    if (initials.Image || initials.Optional === true)
                        status.Initials.Completed++;
                }
            }
        }
        this.status.emit(status);
    }

    @Output() initialed = new EventEmitter<{ initialed: number, total: number }>();
    initial(initials: Initials) {
        const status = { initialed: 0, total: 0 };
        if (this.Initials) {
            this.Pages.forEach(pageComponent => {
                pageComponent.Initials.forEach(initialsComponent => {
                    status.total++;
                    if (initialsComponent.Initials === initials && this.Initials) {
                        initialsComponent.Initials.Image = this.Initials;
                        initialsComponent.Initials.Size = initialsComponent.size;
                        initialsComponent.Initials.Date = new Date();
                        pageComponent.applyInitials(initials, this.Initials);
                    }
                    if (initials.Image)
                        status.initialed++;
                });
            });
        }
        this.initialed.emit(status);
        this.checkStatus();
    }

    //nextPage() {
    //    const pageScroll = { x: 0, y: 0 };
    //    if (this.SelectedPage.IncompleteSignatures.length > 0) {
    //        const requiredSignatures = this.SelectedPage.IncompleteSignatures.filter(x => !x.Signature || !x.Signature.Optional);
    //        if (requiredSignatures.length > 0) {
    //            const requiredSignature = requiredSignatures[0];

    //            const host = this.host.nativeElement;
    //            pageScroll.y = requiredSignature.location.y - (requiredSignature.size.height / 2) * -1;
    //            pageScroll.y += (host.getBoundingClientRect().height - requiredSignature.size.height) / 2;
    //            this.scrollPageTo(this.SelectedPage, pageScroll);
    //        }
    //        else {
    //            const optionalSignatures = this.SelectedPage.IncompleteSignatures.filter(x => x.Signature && x.Signature.Optional);
    //            if (optionalSignatures.length > 0) {
    //                const optionalSignature = optionalSignatures[0];
    //                optionalSignature.Skip = true;

    //                const host = this.host.nativeElement;
    //                pageScroll.y = optionalSignature.location.y - (optionalSignature.size.height / 2) * -1;
    //                pageScroll.y += (host.getBoundingClientRect().height - optionalSignature.size.height) / 2;
    //                this.scrollPageTo(this.SelectedPage, pageScroll);
    //            }
    //        }
    //        return;
    //    }
    //    if (this.SelectedPage.IncompleteInitials.length > 0) {
    //        const requiredInitials = this.SelectedPage.IncompleteInitials.filter(x => !x.Initials.Optional);
    //        if (requiredInitials.length > 0) {
    //            const requiredInitial = requiredInitials[0];

    //            const host = this.host.nativeElement;
    //            pageScroll.y = requiredInitial.location.y - (requiredInitial.size.height / 2) * -1;
    //            pageScroll.y += (host.getBoundingClientRect().height - requiredInitial.size.height) / 2;
    //            this.scrollPageTo(this.SelectedPage, pageScroll);
    //        }
    //        else {
    //            const optionalInitials = this.SelectedPage.IncompleteInitials.filter(x => x.Initials.Optional);
    //            if (optionalInitials.length > 0) {
    //                const optionalInitial = optionalInitials[0];
    //                optionalInitial.Skip = true;

    //                const host = this.host.nativeElement;
    //                pageScroll.y = optionalInitial.location.y - (optionalInitial.size.height / 2) * -1;
    //                pageScroll.y += (host.getBoundingClientRect().height - optionalInitial.size.height) / 2;
    //                this.scrollPageTo(this.SelectedPage, pageScroll);
    //            }
    //        }
    //        return;
    //    }

    //    let index = 0;
    //    if (this.selectedPage) {
    //        index = this.Pages.toArray().indexOf(this.selectedPage);
    //        index++;
    //    }
    //    if (this.Pages.length > index)
    //        this.SelectedPage = this.Pages.toArray()[index];
    //}   
}