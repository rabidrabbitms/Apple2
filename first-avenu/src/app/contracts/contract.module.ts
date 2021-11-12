import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContractV2Component } from './contract.component';
import { PageInitialsComponent } from './page/initials/initials.component';
import { PageComponent } from './page/page.component';
import { PagePipe } from './page/pagepipe';
import { PageSignatureComponent } from './page/signature/signature.component';
import { SignatureComponent } from './signature/signature.component';
import { SignaturePadComponent } from './signaturepad/signaturepad.component';
import { RouterModule } from '@angular/router';
import { UtilitiesModule } from '../utilities/utilities.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: ':loanID', component: SignaturePadComponent },
            { path: 'addenda/:ID', component: SignaturePadComponent }
        ]),
    UtilitiesModule
    ],
    providers: [],
    declarations: [ContractV2Component, PagePipe, PageComponent, SignatureComponent, PageSignatureComponent, PageInitialsComponent, SignaturePadComponent],
    exports: [ContractV2Component, PagePipe, PageComponent, SignatureComponent, PageSignatureComponent, PageInitialsComponent, SignaturePadComponent]
})
export default class ContractModule { }
