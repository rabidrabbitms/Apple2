(self["webpackChunkfirst_avenu"] = self["webpackChunkfirst_avenu"] || []).push([["src_app_account_account_module_ts"],{

/***/ 34742:
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountPageRoutingModule": () => (/* binding */ accountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _account_buying_power_decision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.buying-power-decision */ 10839);
/* harmony import */ var _account_buying_power__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.buying-power */ 42131);
/* harmony import */ var _account_buying_power_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.buying-power-form */ 74831);
/* harmony import */ var _account_coupons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.coupons */ 50923);
/* harmony import */ var _account_faq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.faq */ 23575);
/* harmony import */ var _account_help__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.help */ 88202);
/* harmony import */ var _account_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.info */ 15731);
/* harmony import */ var _account_make_payment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.make-payment */ 44356);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account.page */ 97282);
/* harmony import */ var _account_profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account.profile */ 14806);
/* harmony import */ var _account_purchases__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account.purchases */ 31091);
/* harmony import */ var _account_refer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account.refer */ 58705);
/* harmony import */ var _account_security__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account.security */ 29356);
/* harmony import */ var _info_account_info_details__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./info/account.info.details */ 13484);
/* harmony import */ var _info_account_info_debit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./info/account.info.debit */ 64838);
/* harmony import */ var _info_account_info_bank__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./info/account.info.bank */ 79910);
/* harmony import */ var _info_account_info_income__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./info/account.info.income */ 51956);
/* harmony import */ var _account_refer_share__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./account.refer.share */ 92742);
/* harmony import */ var _account_refer_myreferrals__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./account.refer.myreferrals */ 38841);
/* harmony import */ var _account_refer_payout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./account.refer.payout */ 81062);
/* harmony import */ var _account_refer_statement__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./account.refer.statement */ 78979);
























const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_8__.accountPage,
    },
    {
        path: 'profile',
        component: _account_profile__WEBPACK_IMPORTED_MODULE_9__.accountProfile
    },
    {
        path: 'info',
        component: _account_info__WEBPACK_IMPORTED_MODULE_6__.accountInfo
    },
    {
        path: 'info-details',
        component: _info_account_info_details__WEBPACK_IMPORTED_MODULE_13__.accountInfoDetails
    },
    {
        path: 'info-debit',
        component: _info_account_info_debit__WEBPACK_IMPORTED_MODULE_14__.accountInfoDebit
    },
    {
        path: 'info-bank',
        component: _info_account_info_bank__WEBPACK_IMPORTED_MODULE_15__.accountInfoBank
    },
    {
        path: 'info-income',
        component: _info_account_info_income__WEBPACK_IMPORTED_MODULE_16__.accountInfoIncome
    },
    {
        path: 'purchases',
        component: _account_purchases__WEBPACK_IMPORTED_MODULE_10__.accountPurchases
    },
    {
        path: 'refer',
        component: _account_refer__WEBPACK_IMPORTED_MODULE_11__.accountRefer
    },
    {
        path: 'refer-share',
        component: _account_refer_share__WEBPACK_IMPORTED_MODULE_17__.accountReferShare
    },
    {
        path: 'refer-referrals',
        component: _account_refer_myreferrals__WEBPACK_IMPORTED_MODULE_18__.accountReferReferrals
    },
    {
        path: 'refer-payout',
        component: _account_refer_payout__WEBPACK_IMPORTED_MODULE_19__.accountReferPayout
    },
    {
        path: 'refer-statement',
        component: _account_refer_statement__WEBPACK_IMPORTED_MODULE_20__.accountReferStatement
    },
    {
        path: 'coupons',
        component: _account_coupons__WEBPACK_IMPORTED_MODULE_3__.accountCoupons
    },
    {
        path: 'help',
        component: _account_help__WEBPACK_IMPORTED_MODULE_5__.accountHelp
    },
    {
        path: 'faq',
        component: _account_faq__WEBPACK_IMPORTED_MODULE_4__.accountFAQ
    },
    {
        path: 'payment',
        component: _account_make_payment__WEBPACK_IMPORTED_MODULE_7__.accountMakePayment
    },
    {
        path: 'security',
        component: _account_security__WEBPACK_IMPORTED_MODULE_12__.accountSecurity
    },
    {
        path: 'buying-power',
        component: _account_buying_power__WEBPACK_IMPORTED_MODULE_1__.accountBuyingPower
    },
    {
        path: 'buying-power-form',
        component: _account_buying_power_form__WEBPACK_IMPORTED_MODULE_2__.accountBuyingPowerForm
    },
    {
        path: 'buying-power-decision',
        component: _account_buying_power_decision__WEBPACK_IMPORTED_MODULE_0__.accountBuyingPowerDecision
    }
];
let accountPageRoutingModule = class accountPageRoutingModule {
};
accountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule]
    })
], accountPageRoutingModule);



/***/ }),

/***/ 10839:
/*!**********************************************************!*\
  !*** ./src/app/account/account.buying-power-decision.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountBuyingPowerDecision": () => (/* binding */ accountBuyingPowerDecision)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_buying_power_decision_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.buying-power-decision.html */ 98626);
/* harmony import */ var _account_buying_power_decision_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.buying-power-decision.scss */ 64636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);






let accountBuyingPowerDecision = class accountBuyingPowerDecision {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.approved = 'true';
            yield this.delay(5000);
            this.approved = 'false';
            yield this.delay(5000);
            this.approved = 'manual';
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};
accountBuyingPowerDecision.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location }
];
accountBuyingPowerDecision = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-buying-power-decision',
        template: _raw_loader_account_buying_power_decision_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_buying_power_decision_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountBuyingPowerDecision);



/***/ }),

/***/ 74831:
/*!******************************************************!*\
  !*** ./src/app/account/account.buying-power-form.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountBuyingPowerForm": () => (/* binding */ accountBuyingPowerForm)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_buying_power_form_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.buying-power-form.html */ 26997);
/* harmony import */ var _account_buying_power_form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.buying-power-form.scss */ 1626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountBuyingPowerForm = class accountBuyingPowerForm {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
        this.income = false;
        this.bank = false;
    }
    ngOnInit() {
    }
    open(module) {
        if (module === "income") {
            this.income = !this.income;
        }
        if (module === "bank") {
            this.bank = !this.bank;
        }
    }
};
accountBuyingPowerForm.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountBuyingPowerForm = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-buying-power-form',
        template: _raw_loader_account_buying_power_form_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_buying_power_form_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountBuyingPowerForm);



/***/ }),

/***/ 42131:
/*!*************************************************!*\
  !*** ./src/app/account/account.buying-power.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountBuyingPower": () => (/* binding */ accountBuyingPower)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_buying_power_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.buying-power.html */ 20249);
/* harmony import */ var _account_buying_power_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.buying-power.scss */ 1487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountBuyingPower = class accountBuyingPower {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountBuyingPower.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountBuyingPower = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-buying-power',
        template: _raw_loader_account_buying_power_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_buying_power_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountBuyingPower);



/***/ }),

/***/ 50923:
/*!********************************************!*\
  !*** ./src/app/account/account.coupons.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountCoupons": () => (/* binding */ accountCoupons)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_coupons_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.coupons.html */ 25159);
/* harmony import */ var _account_coupons_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.coupons.scss */ 15578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountCoupons = class accountCoupons {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountCoupons.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountCoupons = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-coupons',
        template: _raw_loader_account_coupons_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_coupons_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountCoupons);



/***/ }),

/***/ 23575:
/*!****************************************!*\
  !*** ./src/app/account/account.faq.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountFAQ": () => (/* binding */ accountFAQ)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_faq_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.faq.html */ 12813);
/* harmony import */ var _account_faq_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.faq.scss */ 5018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountFAQ = class accountFAQ {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountFAQ.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountFAQ = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-faq',
        template: _raw_loader_account_faq_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_faq_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountFAQ);



/***/ }),

/***/ 88202:
/*!*****************************************!*\
  !*** ./src/app/account/account.help.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountHelp": () => (/* binding */ accountHelp)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_help_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.help.html */ 54727);
/* harmony import */ var _account_help_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.help.scss */ 90274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountHelp = class accountHelp {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountHelp.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountHelp = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-help',
        template: _raw_loader_account_help_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_help_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountHelp);



/***/ }),

/***/ 15731:
/*!*****************************************!*\
  !*** ./src/app/account/account.info.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountInfo": () => (/* binding */ accountInfo)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_info_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.info.html */ 30266);
/* harmony import */ var _account_info_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.info.scss */ 9004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountInfo = class accountInfo {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
        this.detail = true;
        this.income = false;
        this.bank = false;
        this.debit = false;
    }
    ngOnInit() {
    }
    select(id) {
        if (id === "income") {
            this.detail = false;
            this.bank = false;
            this.debit = false;
            this.income = true;
        }
        if (id === "bank") {
            this.detail = false;
            this.income = false;
            this.debit = false;
            this.bank = true;
        }
        if (id === "debit") {
            this.detail = false;
            this.bank = false;
            this.income = false;
            this.debit = true;
        }
        if (id === "detail") {
            this.bank = false;
            this.income = false;
            this.debit = false;
            this.detail = true;
        }
        console.log(id);
        console.log(this.income);
    }
    loadImageFromDevice(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            let blob = new Blob([new Uint8Array(reader.result)]);
        };
    }
};
accountInfo.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountInfo = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-info',
        template: _raw_loader_account_info_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_info_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountInfo);



/***/ }),

/***/ 44356:
/*!*************************************************!*\
  !*** ./src/app/account/account.make-payment.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountMakePayment": () => (/* binding */ accountMakePayment)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_make_payment_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.make-payment.html */ 55854);
/* harmony import */ var _account_make_payment_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.make-payment.scss */ 53983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountMakePayment = class accountMakePayment {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountMakePayment.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountMakePayment = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-make-payment',
        template: _raw_loader_account_make_payment_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_make_payment_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountMakePayment);



/***/ }),

/***/ 63879:
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountPageModule": () => (/* binding */ accountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 97282);
/* harmony import */ var _utilities_explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/explore-container/explore-container.module */ 89716);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-routing.module */ 34742);
/* harmony import */ var _account_refer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.refer */ 58705);
/* harmony import */ var _account_coupons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.coupons */ 50923);
/* harmony import */ var _account_help__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.help */ 88202);
/* harmony import */ var _account_faq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.faq */ 23575);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _account_make_payment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.make-payment */ 44356);
/* harmony import */ var _account_purchases__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account.purchases */ 31091);
/* harmony import */ var _nav_nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../nav/nav */ 25780);
/* harmony import */ var _account_profile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account.profile */ 14806);
/* harmony import */ var _account_info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account.info */ 15731);
/* harmony import */ var _account_buying_power__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account.buying-power */ 42131);
/* harmony import */ var _account_buying_power_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./account.buying-power-form */ 74831);
/* harmony import */ var _account_buying_power_decision__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./account.buying-power-decision */ 10839);
/* harmony import */ var _account_security__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./account.security */ 29356);
/* harmony import */ var _info_account_info_bank__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./info/account.info.bank */ 79910);
/* harmony import */ var _info_account_info_debit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./info/account.info.debit */ 64838);
/* harmony import */ var _info_account_info_details__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./info/account.info.details */ 13484);
/* harmony import */ var _info_account_info_income__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./info/account.info.income */ 51956);
/* harmony import */ var _account_refer_share__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./account.refer.share */ 92742);
/* harmony import */ var _account_refer_myreferrals__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./account.refer.myreferrals */ 38841);
/* harmony import */ var _account_refer_payout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./account.refer.payout */ 81062);
/* harmony import */ var _account_refer_statement__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./account.refer.statement */ 78979);































let accountPageModule = class accountPageModule {
};
accountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule,
            _utilities_explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterModule.forChild([{ path: '', component: _account_page__WEBPACK_IMPORTED_MODULE_0__.accountPage }]),
            _account_routing_module__WEBPACK_IMPORTED_MODULE_2__.accountPageRoutingModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__.MatExpansionModule,
        ],
        declarations: [
            _account_page__WEBPACK_IMPORTED_MODULE_0__.accountPage,
            _account_profile__WEBPACK_IMPORTED_MODULE_10__.accountProfile,
            _account_purchases__WEBPACK_IMPORTED_MODULE_8__.accountPurchases,
            _account_refer__WEBPACK_IMPORTED_MODULE_3__.accountRefer,
            _account_refer_share__WEBPACK_IMPORTED_MODULE_20__.accountReferShare,
            _account_refer_myreferrals__WEBPACK_IMPORTED_MODULE_21__.accountReferReferrals,
            _account_refer_payout__WEBPACK_IMPORTED_MODULE_22__.accountReferPayout,
            _account_refer_statement__WEBPACK_IMPORTED_MODULE_23__.accountReferStatement,
            _account_coupons__WEBPACK_IMPORTED_MODULE_4__.accountCoupons,
            _account_help__WEBPACK_IMPORTED_MODULE_5__.accountHelp,
            _account_faq__WEBPACK_IMPORTED_MODULE_6__.accountFAQ,
            _account_make_payment__WEBPACK_IMPORTED_MODULE_7__.accountMakePayment,
            _nav_nav__WEBPACK_IMPORTED_MODULE_9__.NavPage,
            _account_info__WEBPACK_IMPORTED_MODULE_11__.accountInfo,
            _account_buying_power__WEBPACK_IMPORTED_MODULE_12__.accountBuyingPower,
            _account_buying_power_form__WEBPACK_IMPORTED_MODULE_13__.accountBuyingPowerForm,
            _account_buying_power_decision__WEBPACK_IMPORTED_MODULE_14__.accountBuyingPowerDecision,
            _account_security__WEBPACK_IMPORTED_MODULE_15__.accountSecurity,
            _info_account_info_bank__WEBPACK_IMPORTED_MODULE_16__.accountInfoBank,
            _info_account_info_debit__WEBPACK_IMPORTED_MODULE_17__.accountInfoDebit,
            _info_account_info_details__WEBPACK_IMPORTED_MODULE_18__.accountInfoDetails,
            _info_account_info_income__WEBPACK_IMPORTED_MODULE_19__.accountInfoIncome
        ]
    })
], accountPageModule);



/***/ }),

/***/ 97282:
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountPage": () => (/* binding */ accountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.page.html */ 65688);
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.scss */ 72111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountPage = class accountPage {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountPage);



/***/ }),

/***/ 14806:
/*!********************************************!*\
  !*** ./src/app/account/account.profile.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountProfile": () => (/* binding */ accountProfile)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_profile_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.profile.html */ 25360);
/* harmony import */ var _account_profile_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.profile.scss */ 34268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountProfile = class accountProfile {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountProfile.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountProfile = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-profile',
        template: _raw_loader_account_profile_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_profile_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountProfile);



/***/ }),

/***/ 31091:
/*!**********************************************!*\
  !*** ./src/app/account/account.purchases.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountPurchases": () => (/* binding */ accountPurchases)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_purchases_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.purchases.html */ 46279);
/* harmony import */ var _account_purchases_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.purchases.scss */ 68986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountPurchases = class accountPurchases {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountPurchases.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountPurchases = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-purchases',
        template: _raw_loader_account_purchases_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_purchases_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountPurchases);



/***/ }),

/***/ 38841:
/*!******************************************************!*\
  !*** ./src/app/account/account.refer.myreferrals.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountReferReferrals": () => (/* binding */ accountReferReferrals)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_refer_myreferrals_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.refer.myreferrals.html */ 15340);
/* harmony import */ var _account_refer_myreferrals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.refer.myreferrals.scss */ 64413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountReferReferrals = class accountReferReferrals {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountReferReferrals.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountReferReferrals = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-referrals',
        template: _raw_loader_account_refer_myreferrals_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_refer_myreferrals_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountReferReferrals);



/***/ }),

/***/ 81062:
/*!*************************************************!*\
  !*** ./src/app/account/account.refer.payout.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountReferPayout": () => (/* binding */ accountReferPayout)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_refer_payout_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.refer.payout.html */ 21420);
/* harmony import */ var _account_refer_payout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.refer.payout.scss */ 46972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountReferPayout = class accountReferPayout {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
        this.redeemableUSD = 0;
    }
    ngOnInit() {
    }
};
accountReferPayout.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountReferPayout = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-refer-payout',
        template: _raw_loader_account_refer_payout_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_refer_payout_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountReferPayout);



/***/ }),

/***/ 92742:
/*!************************************************!*\
  !*** ./src/app/account/account.refer.share.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountReferShare": () => (/* binding */ accountReferShare)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_refer_share_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.refer.share.html */ 59942);
/* harmony import */ var _account_refer_share_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.refer.share.scss */ 57098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountReferShare = class accountReferShare {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountReferShare.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountReferShare = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-refer-share',
        template: _raw_loader_account_refer_share_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_refer_share_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountReferShare);



/***/ }),

/***/ 78979:
/*!****************************************************!*\
  !*** ./src/app/account/account.refer.statement.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountReferStatement": () => (/* binding */ accountReferStatement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_refer_statement_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.refer.statement.html */ 54810);
/* harmony import */ var _account_refer_statement_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.refer.statement.scss */ 91814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountReferStatement = class accountReferStatement {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
        this.redeemableUSD = 0;
    }
    ngOnInit() {
    }
};
accountReferStatement.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountReferStatement = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-refer-statement',
        template: _raw_loader_account_refer_statement_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_refer_statement_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountReferStatement);



/***/ }),

/***/ 58705:
/*!******************************************!*\
  !*** ./src/app/account/account.refer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountRefer": () => (/* binding */ accountRefer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_refer_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.refer.html */ 88624);
/* harmony import */ var _account_refer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.refer.scss */ 17976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountRefer = class accountRefer {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountRefer.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountRefer = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-refer',
        template: _raw_loader_account_refer_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_refer_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountRefer);



/***/ }),

/***/ 29356:
/*!*********************************************!*\
  !*** ./src/app/account/account.security.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountSecurity": () => (/* binding */ accountSecurity)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_security_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.security.html */ 95599);
/* harmony import */ var _account_security_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.security.scss */ 75008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);






let accountSecurity = class accountSecurity {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
    face() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: `Do you want to allow 
    “First Avenu”
    to use Face ID ?`,
                subHeader: 'Enabling Face ID allows you quick and secure access to your account.',
                buttons: ["Don't Allow", "OK"]
            });
            yield alert.present();
        });
    }
};
accountSecurity.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location }
];
accountSecurity = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-security',
        template: _raw_loader_account_security_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_security_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountSecurity);



/***/ }),

/***/ 79910:
/*!***************************************************!*\
  !*** ./src/app/account/info/account.info.bank.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountInfoBank": () => (/* binding */ accountInfoBank)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_info_bank_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.info.bank.html */ 54427);
/* harmony import */ var _account_info_bank_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.info.bank.scss */ 45952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountInfoBank = class accountInfoBank {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountInfoBank.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountInfoBank = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-info-bank',
        template: _raw_loader_account_info_bank_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_info_bank_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountInfoBank);



/***/ }),

/***/ 64838:
/*!****************************************************!*\
  !*** ./src/app/account/info/account.info.debit.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountInfoDebit": () => (/* binding */ accountInfoDebit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_info_debit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.info.debit.html */ 80388);
/* harmony import */ var _account_info_debit_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.info.debit.scss */ 4602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountInfoDebit = class accountInfoDebit {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountInfoDebit.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountInfoDebit = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-info-debit',
        template: _raw_loader_account_info_debit_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_info_debit_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountInfoDebit);



/***/ }),

/***/ 13484:
/*!******************************************************!*\
  !*** ./src/app/account/info/account.info.details.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountInfoDetails": () => (/* binding */ accountInfoDetails)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_info_details_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.info.details.html */ 34239);
/* harmony import */ var _account_info_details_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.info.details.scss */ 65817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountInfoDetails = class accountInfoDetails {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountInfoDetails.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountInfoDetails = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-info-details',
        template: _raw_loader_account_info_details_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_info_details_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountInfoDetails);



/***/ }),

/***/ 51956:
/*!*****************************************************!*\
  !*** ./src/app/account/info/account.info.income.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountInfoIncome": () => (/* binding */ accountInfoIncome)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_info_income_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.info.income.html */ 84154);
/* harmony import */ var _account_info_income_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.info.income.scss */ 19980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let accountInfoIncome = class accountInfoIncome {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
accountInfoIncome.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
accountInfoIncome = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account-info-income',
        template: _raw_loader_account_info_income_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_info_income_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], accountInfoIncome);



/***/ }),

/***/ 64636:
/*!************************************************************!*\
  !*** ./src/app/account/account.buying-power-decision.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header3 {\n  font-weight: 700 !important;\n  font-size: 14px !important;\n  font-family: \"text\" !important;\n  color: #484751 !important;\n}\n\n.header2 {\n  font-weight: 700 !important;\n  font-size: 14px !important;\n  font-family: \"text\" !important;\n  color: #6976ec !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuYnV5aW5nLXBvd2VyLWRlY2lzaW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFFRiIsImZpbGUiOiJhY2NvdW50LmJ1eWluZy1wb3dlci1kZWNpc2lvbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcjMge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogJ3RleHQnICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHJnYmEoNzIsNzEsODEsMSkgIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyMiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBcInRleHRcIiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2JhKDEwNSwgMTE4LCAyMzYsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 1626:
/*!********************************************************!*\
  !*** ./src/app/account/account.buying-power-form.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header3 {\n  font-weight: 700 !important;\n  font-size: 14px !important;\n  font-family: \"text\" !important;\n  color: #484751 !important;\n}\n\n.header2 {\n  font-weight: 700 !important;\n  font-size: 14px !important;\n  font-family: \"text\" !important;\n  color: #6976ec !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuYnV5aW5nLXBvd2VyLWZvcm0uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQUVGIiwiZmlsZSI6ImFjY291bnQuYnV5aW5nLXBvd2VyLWZvcm0uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIzIHtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICd0ZXh0JyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2JhKDcyLDcxLDgxLDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRlcjIge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogXCJ0ZXh0XCIgIWltcG9ydGFudDtcclxuICBjb2xvcjogcmdiYSgxMDUsIDExOCwgMjM2LCAxKSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 1487:
/*!***************************************************!*\
  !*** ./src/app/account/account.buying-power.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header3 {\n  font-weight: 700 !important;\n  font-size: 14px !important;\n  font-family: \"text\" !important;\n  color: #484751 !important;\n}\n\n.header2 {\n  font-weight: 700 !important;\n  font-size: 14px !important;\n  font-family: \"text\" !important;\n  color: #6976ec !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuYnV5aW5nLXBvd2VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFFRiIsImZpbGUiOiJhY2NvdW50LmJ1eWluZy1wb3dlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcjMge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogJ3RleHQnICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHJnYmEoNzIsNzEsODEsMSkgIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyMiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBcInRleHRcIiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2JhKDEwNSwgMTE4LCAyMzYsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 15578:
/*!**********************************************!*\
  !*** ./src/app/account/account.coupons.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".iframe {\n  width: 100%;\n  min-height: 500px;\n  height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuY291cG9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImFjY291bnQuY291cG9ucy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlmcmFtZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 5018:
/*!******************************************!*\
  !*** ./src/app/account/account.faq.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-row {\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuZmFxLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoiYWNjb3VudC5mYXEuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yb3cge1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 90274:
/*!*******************************************!*\
  !*** ./src/app/account/account.help.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmhlbHAuc2NzcyJ9 */");

/***/ }),

/***/ 9004:
/*!*******************************************!*\
  !*** ./src/app/account/account.info.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".agreement-check {\n  font-weight: 400 !important;\n  font-size: 12px !important;\n  font-family: \"text\" !important;\n  color: #141B41 !important;\n}\n\n.ion-text-left {\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuaW5mby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUYiLCJmaWxlIjoiYWNjb3VudC5pbmZvLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWdyZWVtZW50LWNoZWNrIHtcclxuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwidGV4dFwiICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMxNDFCNDEgIWltcG9ydGFudDtcclxufVxyXG4uaW9uLXRleHQtbGVmdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 53983:
/*!***************************************************!*\
  !*** ./src/app/account/account.make-payment.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header2 {\n  font-weight: 700 !important;\n  font-size: 14px !important;\n  font-family: \"text\" !important;\n  color: #6976ec !important;\n}\n\n.header3 {\n  font-weight: 700 !important;\n  font-size: 14px !important;\n  font-family: \"text\" !important;\n  color: #484751 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQubWFrZS1wYXltZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFFRiIsImZpbGUiOiJhY2NvdW50Lm1ha2UtcGF5bWVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcjIge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogXCJ0ZXh0XCIgIWltcG9ydGFudDtcclxuICBjb2xvcjogcmdiYSgxMDUsIDExOCwgMjM2LCAxKSAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXIzIHtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICd0ZXh0JyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2JhKDcyLDcxLDgxLDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 72111:
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-text-left {\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJhY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tdGV4dC1sZWZ0IHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 34268:
/*!**********************************************!*\
  !*** ./src/app/account/account.profile.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-text-left {\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucHJvZmlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJhY2NvdW50LnByb2ZpbGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tdGV4dC1sZWZ0IHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 68986:
/*!************************************************!*\
  !*** ./src/app/account/account.purchases.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header3 {\n  font-weight: 700 !important;\n  font-size: 14px !important;\n  font-family: \"text\" !important;\n  color: #484751 !important;\n}\n\n.header2 {\n  font-weight: 700 !important;\n  font-size: 14px !important;\n  font-family: \"text\" !important;\n  color: #6976ec !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucHVyY2hhc2VzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFFRiIsImZpbGUiOiJhY2NvdW50LnB1cmNoYXNlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcjMge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogJ3RleHQnICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHJnYmEoNzIsNzEsODEsMSkgIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyMiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBcInRleHRcIiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2JhKDEwNSwgMTE4LCAyMzYsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 64413:
/*!********************************************************!*\
  !*** ./src/app/account/account.refer.myreferrals.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-text-left {\n  margin-right: auto;\n}\n\nion-row {\n  margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucmVmZXIubXlyZWZlcnJhbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREYiLCJmaWxlIjoiYWNjb3VudC5yZWZlci5teXJlZmVycmFscy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uaW9uLXRleHQtbGVmdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 46972:
/*!***************************************************!*\
  !*** ./src/app/account/account.refer.payout.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-text-left {\n  margin-right: auto;\n}\n\nion-row {\n  margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucmVmZXIucGF5b3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGIiwiZmlsZSI6ImFjY291bnQucmVmZXIucGF5b3V0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5pb24tdGV4dC1sZWZ0IHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 17976:
/*!********************************************!*\
  !*** ./src/app/account/account.refer.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-text-left {\n  margin-right: auto;\n}\n\nion-row {\n  margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucmVmZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREYiLCJmaWxlIjoiYWNjb3VudC5yZWZlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uaW9uLXRleHQtbGVmdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 57098:
/*!**************************************************!*\
  !*** ./src/app/account/account.refer.share.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-text-left {\n  margin-right: auto;\n}\n\nion-row {\n  margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucmVmZXIuc2hhcmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREYiLCJmaWxlIjoiYWNjb3VudC5yZWZlci5zaGFyZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uaW9uLXRleHQtbGVmdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 91814:
/*!******************************************************!*\
  !*** ./src/app/account/account.refer.statement.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-text-left {\n  margin-right: auto;\n}\n\nion-row {\n  margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucmVmZXIuc3RhdGVtZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGIiwiZmlsZSI6ImFjY291bnQucmVmZXIuc3RhdGVtZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5pb24tdGV4dC1sZWZ0IHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 75008:
/*!***********************************************!*\
  !*** ./src/app/account/account.security.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LnNlY3VyaXR5LnNjc3MifQ== */");

/***/ }),

/***/ 45952:
/*!*****************************************************!*\
  !*** ./src/app/account/info/account.info.bank.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmluZm8uYmFuay5zY3NzIn0= */");

/***/ }),

/***/ 4602:
/*!******************************************************!*\
  !*** ./src/app/account/info/account.info.debit.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmluZm8uZGViaXQuc2NzcyJ9 */");

/***/ }),

/***/ 65817:
/*!********************************************************!*\
  !*** ./src/app/account/info/account.info.details.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmluZm8uZGV0YWlscy5zY3NzIn0= */");

/***/ }),

/***/ 19980:
/*!*******************************************************!*\
  !*** ./src/app/account/info/account.info.income.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmluZm8uaW5jb21lLnNjc3MifQ== */");

/***/ }),

/***/ 98626:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.buying-power-decision.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-text color=\"primary\">\r\n        <h1 class=\"header\">Buying Power</h1>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <img src=\"../assets/Train-Buying-Power.gif\" />\r\n  </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <h1 class=\"header1\">We're Working on it!</h1>\r\n    </ion-row>\r\n    <ion-row style=\"margin:1em;\"  class=\"ion-justify-content-center\">\r\n      <h1 class=\"header1\">You will be notified by email after our team has completed the review of your account!</h1>\r\n    </ion-row>\r\n    <ion-row style=\"margin:1em;\" class=\"ion-justify-content-center\">\r\n      <ion-button color=\"tertiary\" routerLink=\"../../shop\">Back to Shop</ion-button>\r\n    </ion-row>\r\n  <app-explore-container name=\"account page\"></app-explore-container>\r\n</ion-content>\r\n");

/***/ }),

/***/ 26997:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.buying-power-form.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-text class=\"body-body\"><strong>Upgrade your buying power!</strong> Have you had an increase in income or have less expenses than when you first applied? See if your buying power can be increased by updating your information below.</ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"8\">\r\n      <ion-row style=\"margin-top:3px\">\r\n        <ion-text style=\"padding-top:6px;\">Update income?</ion-text>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-toggle [(ngModel)]=\"income\" (ionChange)=\"Open('income')\"></ion-toggle>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"income\">\r\n    <ion-col>\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-row style=\"margin-top:1em;\">\r\n              <ion-label><ion-icon name=\"alert-circle-outline\"></ion-icon>Pay Cycle</ion-label>\r\n            </ion-row>\r\n            <ion-row>\r\n              <p>A wizard is being developed for the paycycle. the user will pick thier next 4 paydates and it will spit out a paycycle</p>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-item style=\"width:100%\">\r\n                <ion-datetime value=\"\" placeholder=\"Next Pay Date\"></ion-datetime>\r\n              </ion-item>\r\n            </ion-row>\r\n            <ion-row style=\"padding-top:1em;\">\r\n              <ion-label><ion-icon name=\"alert-circle-outline\"></ion-icon>Net Monthly Income</ion-label>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-input typeof=\"transaction-amount\" placeholder=\"Enter Take Home Pay\"></ion-input>\r\n            </ion-row>\r\n            <ion-row>\r\n              <select class=\"incomeSelect\">\r\n                <option style=\"opacity:.5\">Income Type</option>\r\n              </select>\r\n            </ion-row>\r\n            <ion-row style=\"padding-top:1em;\" class=\"ion-justify-content-center\">\r\n              <ion-checkbox></ion-checkbox> <ion-label style=\"padding-left: .5em; font-size: small;\">Direct Deposit</ion-label>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"8\">\r\n      <ion-row style=\"margin-top:3px\">\r\n        <ion-text style=\"padding-top:6px;\">Update bank?</ion-text>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-toggle [(ngModel)]=\"bank\" (ionChange)=\"Open('bank')\"></ion-toggle>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-card *ngIf=\"bank\">\r\n    <ion-card>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row>\r\n            <ion-text class=\"body-body\">\r\n              Please enter your bank routing number (9-digit number) and account information. Your data is protected with bank-level security.\r\n            </ion-text>\r\n          </ion-row>\r\n          <ion-row style=\"margin-top:1em;\">\r\n            <ion-input placeholder=\"Enter Routing Number\"></ion-input>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-input placeholder=\"Enter Bank Name\"></ion-input>\r\n          </ion-row>\r\n          <ion-row>\r\n            <select class=\"incomeSelect\">\r\n              <option style=\"opacity:.5\">Choose Account Type</option>\r\n              <option style=\"opacity:.5\">Checking</option>\r\n              <option style=\"opacity:.5\">Savings</option>\r\n            </select>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-input placeholder=\"Enter Account Number\"></ion-input>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n    <ion-row>\r\n    </ion-row>\r\n  </ion-card>\r\n  <ion-row style=\"margin-top:1em;\" class=\"ion-justify-content-center\">\r\n    <ion-button color=\"tertiary\" routerLink=\"../buying-power-decision\">Upgrade Me</ion-button>\r\n  </ion-row>\r\n  <ion-row style=\"margin-top:1em;\" class=\"ion-justify-content-center\">\r\n    <ion-text class=\"body-body\">This will not affect your credit score!</ion-text>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ 20249:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.buying-power.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-text color=\"primary\">\r\n        <h1 class=\"header\">Buying Power</h1>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <img src=\"../assets/Train-Buying-Power.gif\" />\r\n  </ion-row>\r\n  <ion-row style=\"margin-top:1em;\" class=\"ion-justify-content-center\">\r\n    <h1 class=\"header1\">Current Purchasing Power:</h1>\r\n  </ion-row>\r\n  <ion-row style=\"margin-top:1em;\" class=\"ion-justify-content-center\">\r\n    <h1 class=\"header\">[$ Amount]</h1>\r\n  </ion-row>\r\n  <ion-row style=\"margin:1em;\" class=\"ion-justify-content-center\">\r\n    <ion-text class=\"body-body\">Your current Buying Power is directly affected by your outstanding First Avenu purchases. </ion-text>\r\n  </ion-row>\r\n  <ion-row style=\"margin-top:1em;\" class=\"ion-justify-content-center\">\r\n    <ion-button color=\"tertiary\" routerLink=\"../buying-power-form\">Increase Power</ion-button>\r\n  </ion-row>\r\n  <ion-row style=\"margin-top:1em;\" class=\"ion-justify-content-center\">\r\n    <ion-text class=\"body-body\"><a>Continue Shopping</a></ion-text>\r\n  </ion-row>\r\n  <app-explore-container name=\"account page\"></app-explore-container>\r\n</ion-content>\r\n");

/***/ }),

/***/ 25159:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.coupons.html ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n<ion-col class=\"container-fluid h-100\">\r\n    <h1 class=\"header\">\r\n     First Avenu Coupons\r\n      <!--<gift-icon></gift-icon>-->\r\n    </h1>\r\n    <ion-card style=\"padding: 0px;\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <iframe src=\"https://web.groupinterest.com/go?apiKey=aadd9275c8e452ebd1cb5e09a7897d71\" frameborder=\"0\" class=\"iframe\"></iframe>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n</ion-col>\r\n");

/***/ }),

/***/ 12813:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.faq.html ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-text color=\"primary\">\r\n    <h1>FAQs</h1>\r\n  </ion-text>\r\n    <ion-grid>\r\n      <ion-row class=\"row\">\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Does pre-qualifying on First Avenue affect my credit?\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-text class=\"body-body\">\r\n                  No!  We use various non-traditional ways to determine your purchasing power level. While this may reflect a “soft check” by certain credit reporting agencies, it does NOT affect your FICO score.\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </ion-row>\r\n      <ion-row class=\"row\">\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Can I purchase more than one item?\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-text class=\"body-body\">\r\n                  You can purchase anything you want, up until your maximum amount of purchasing power. Even better, a you pay down your convenient payments, you could become eligible to purchase additional items.\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </ion-row>\r\n      <ion-row class=\"row\">\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Does First Avenue change interest?\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-text class=\"body-body\">\r\n                  No. You pay our retail price if you pay all at once, or if you choose easy payments.\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </ion-row>\r\n      <ion-row class=\"row\">\r\n        <mat-accordion style=\"width:100%\">\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                What are coupons about?\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-text class=\"body-body\">\r\n                  In addition to great vacations and special buys from First Avenue, we are always on the look out for great deals around the country and online to save you money shopping, going to restaurants and more. Our couponing feature is 100% free for you to use and enjoy!\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </ion-row>\r\n      <ion-row class=\"row\">\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Any limits on how much I can earn from referrals?\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-text class=\"body-body\">\r\n                  There might be, based on the US population, but we are far from having everyone as a member.  So feel free to encourage all of your friends and family to sign up for First Avenue!\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </ion-row>\r\n    </ion-grid>\r\n  <app-explore-container name=\"account page\"></app-explore-container>\r\n</ion-content>\r\n");

/***/ }),

/***/ 54727:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.help.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-text color=\"primary\">\r\n    <h1>Help!</h1>\r\n  </ion-text>\r\n  <ion-card>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <img src=\"../assets/Help.svg\" />\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"light\" routerLink=\"../../messages\">\r\n              <ion-text>Message Us</ion-text>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"light\">\r\n              <ion-text>Email Us</ion-text>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"light\">\r\n              <ion-text>Call Us -9am-11PM EST. M-F</ion-text>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"light\" routerLink=\"../faq\">\r\n              <ion-text>FAQs</ion-text>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n  <app-explore-container name=\"account page\"></app-explore-container>\r\n</ion-content>\r\n");

/***/ }),

/***/ 30266:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.info.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-text color=\"primary\">\r\n        <h1 class=\"header\">My Info</h1>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-card>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <img src=\"../assets/Lookylooky.svg\" />\r\n        </ion-row>\r\n       \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n  <app-explore-container name=\"account page\"></app-explore-container>\r\n</ion-content>\r\n");

/***/ }),

/***/ 55854:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.make-payment.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n\r\n<ion-content [fullscreen]=\"false\">\r\n  <h1>Make A Payment</h1>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <img src=\"../assets/Pointing Sign.svg\" />\r\n  </ion-row>\r\n  <ion-card>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-row>\r\n          <h2>Product Name</h2>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-row style=\"margin-top:.5em;\">\r\n          <ion-text class=\"header2\"><u>Ready For Pickup</u></ion-text>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row>\r\n          <ion-text class=\"header3\"> Next Payment Due: [Due Date]</ion-text>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top:1em;\">\r\n          <ion-text class=\"body-body\">Our agreement is for [$ amount] to be paid back over [# time based] payments of [$ amount] starting on [date].</ion-text>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top:1em;\">\r\n          <ion-text class=\"body-body\">[# time based] payments of [Payment amount] remain.</ion-text>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"margin-top:1em;\">\r\n          <ion-button color=\"tertiary\" expand=\"full\">Make Payment</ion-button>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-row>\r\n          <h2>Vacation Name</h2>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-row style=\"margin-top:.5em;\">\r\n          <ion-text class=\"header2\"><u>Registered</u></ion-text>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row>\r\n          <ion-text class=\"header3\"> Next Payment Due: [Due Date]</ion-text>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top:1em;\">\r\n          <ion-text class=\"body-body\">Our agreement is for [$ amount] to be paid back over [# time based] payments of [$ amount] starting on [date].</ion-text>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top:1em;\">\r\n          <ion-text class=\"body-body\">[# time based] payments of [Payment amount] remain.</ion-text>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"margin-top:1em;\">\r\n          <ion-button color=\"tertiary\" expand=\"full\">Make Payment</ion-button>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n  <app-explore-container name=\"account page\"></app-explore-container>\r\n</ion-content>\r\n");

/***/ }),

/***/ 65688:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-text color=\"primary\">\r\n        <h1 class=\"header\">Account</h1>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-card>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <img src=\"../assets/Lookylooky.svg\" />\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"medium\" routerLink=\"./profile\">\r\n              <ion-text class=\"ion-text-left\">My Profile</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"medium\" routerLink=\"./purchases\">\r\n              <ion-text class=\"ion-text-left\">My Purchases</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"medium\" routerLink=\"./refer\">\r\n              <ion-text class=\"ion-text-left\">Refer A Friend</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"medium\" routerLink=\"./coupons\">\r\n              <ion-text class=\"ion-text-left\">Coupons</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"medium\" routerLink=\"./help\">\r\n              <ion-text class=\"ion-text-left\">Help</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"medium\">\r\n              <ion-text>Log Out</ion-text>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n    <app-explore-container name=\"account page\"></app-explore-container>\r\n</ion-content>\r\n");

/***/ }),

/***/ 25360:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.profile.html ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-text color=\"primary\">\r\n        <h1 class=\"header\">My Profile</h1>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-card>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <img src=\"../assets/Lookylooky.svg\" />\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"medium\" routerLink=\"../payment\">\r\n              <ion-text class=\"ion-text-left\">Make A Payment</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"medium\" routerLink=\"../buying-power\">\r\n              <ion-text class=\"ion-text-left\">Buying Power</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"medium\" routerLink=\"../security\">\r\n              <ion-text class=\"ion-text-left\">Security Settings</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"medium\" routerLink=\"../info-details\">\r\n              <ion-text class=\"ion-text-left\">Details</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"medium\" routerLink=\"../info-income\">\r\n              <ion-text class=\"ion-text-left\">Income</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"medium\" routerLink=\"../info-bank\">\r\n              <ion-text class=\"ion-text-left\">Bank</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"medium\" routerLink=\"../info-debit\">\r\n              <ion-text class=\"ion-text-left\">Debit</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n  <app-explore-container name=\"account page\"></app-explore-container>\r\n</ion-content>\r\n");

/***/ }),

/***/ 46279:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.purchases.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-text color=\"primary\">\r\n    <h1>My Purchases</h1>\r\n  </ion-text>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <img src=\"../assets/VacationInfo.svg\" />\r\n  </ion-row>\r\n  <ion-row style=\"margin-top:1em;\">\r\n    <mat-accordion style=\"width:100%\">\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <h2>[Vacation Name]</h2>   <ion-text class=\"header2\" style=\"padding-left:2em;\"><u>Register Now</u></ion-text>\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text class=\"header3\">Purchased: [Date]</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <h5>Certificate<br /> Number:</h5>\r\n          </ion-col>\r\n          <ion-col>\r\n            <h3>[Number]</h3>\r\n          </ion-col>\r\n          <ion-col>\r\n            <h5>Expiration<br /> Date:</h5>\r\n          </ion-col>\r\n          <ion-col>\r\n            <h3>[Date]</h3>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n              <ion-button color=\"tertiary\">\r\n                <ion-text>Make Payment</ion-text>\r\n              </ion-button>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"margin-top:1em;\">\r\n    <mat-accordion style=\"width:100%\">\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <h2>[Vacation Name]</h2>   <ion-text class=\"header2\" style=\"padding-left:2em;\"><u>Registered</u></ion-text>\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text class=\"header3\">Purchased: [Date]</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <h5>Certificate<br /> Number:</h5>\r\n          </ion-col>\r\n          <ion-col>\r\n            <h3>[Number]</h3>\r\n          </ion-col>\r\n          <ion-col>\r\n            <h5>Expiration<br /> Date:</h5>\r\n          </ion-col>\r\n          <ion-col>\r\n            <h3>[Date]</h3>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text class=\"body-body\">Scheduled Dates:  Dec. 9 - Dec. 13, 2021</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text class=\"body-body\">Destination:  Orlando, Florida</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text class=\"body-body\"><strong>Remember:</strong>  First Avenu provides access to your vacation through easy payments. For all travel related questions, please call our travel partner.</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <h1 style=\"color:'#FF006E'\"><a href=\"tel:1-866-747-4778\">1-866-747-4778</a></h1>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-text class=\"body-body\">[x] payments of [Payment amount] due.</ion-text>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n              <ion-button color=\"tertiary\">\r\n                <ion-text>Make Payment</ion-text>\r\n              </ion-button>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"margin-top:1em;\">\r\n    <mat-accordion style=\"width:100%\">\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <h2>[Vacation Name]</h2>   <ion-text class=\"header2\" style=\"padding-left:2em;\"><u>Completed</u></ion-text>\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text class=\"header3\">Purchased: [Date]</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <h5>Certificate<br /> Number:</h5>\r\n          </ion-col>\r\n          <ion-col>\r\n            <h3>[Number]</h3>\r\n          </ion-col>\r\n          <ion-col>\r\n            <h5>Expiration<br /> Date:</h5>\r\n          </ion-col>\r\n          <ion-col>\r\n            <h3>[Date]</h3>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text class=\"body-body\">Scheduled Dates:  Dec. 9 - Dec. 13, 2021</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text class=\"body-body\">Destination:  Orlando, Florida</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text class=\"body-body\"><strong>Remember:</strong>  First Avenu provides access to your vacation through easy payments. For all travel related questions, please call our travel partner.</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <h1 style=\"color:'#FF006E'\"><a href=\"tel:1-866-747-4778\">1-866-747-4778</a></h1>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-text class=\"body-body\">[x] payments of [Payment amount] due.</ion-text>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n              <ion-button color=\"tertiary\">\r\n                <ion-text>Make Payment</ion-text>\r\n              </ion-button>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </ion-row>\r\n\r\n\r\n  <ion-row style=\"margin-top:1em;\">\r\n    <mat-accordion style=\"width:100%\">\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <h2>[Product Name]</h2>   <ion-text class=\"header2\" style=\"padding-left:2em;\"><u>Working On It</u></ion-text>\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text class=\"header3\">Purchased: [Date]</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"margin-top:1em\">\r\n          <ion-col>\r\n            <ion-text class=\"body-header\"> We'll let you know when it's ready for pick up!</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"margin-top:1em\">\r\n          <ion-text class=\"body-body\">[x] payments of [Payment amount] due.</ion-text>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n              <ion-button color=\"tertiary\">\r\n                <ion-text>Make Payment</ion-text>\r\n              </ion-button>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </ion-row>\r\n  <ion-row style=\"margin-top:1em;\">\r\n    <mat-accordion style=\"width:100%\">\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <h2>[Product Name]</h2>   <ion-text class=\"header2\" style=\"padding-left:2em;\"><u>Ready</u></ion-text>\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text class=\"header3\">Purchased: [Date]</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"margin-top:1em\">\r\n          <ion-text>You can now pick up your purchase:</ion-text>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-text>At our partner [Store Brand]</ion-text>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-text>[Store Address]</ion-text>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-text>[Store Phone]</ion-text>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-col>\r\n            <ion-text style=\"padding-left:1em;\">[Store hours]</ion-text>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-text class=\"header2\" style=\"padding-left:1em;\">Find On Map</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"margin-top:1em\">\r\n          <ion-text class=\"body-body\">[x] payments of [Payment amount] due.</ion-text>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n              <ion-button color=\"tertiary\">\r\n                <ion-text>Make Payment</ion-text>\r\n              </ion-button>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"margin-top:1em;\">\r\n    <mat-accordion style=\"width:100%\">\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <h2>[Product Name]</h2>   <ion-text class=\"header2\" style=\"padding-left:2em;\"><u>Claimed</u></ion-text>\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text class=\"header3\">Purchased: [Date]</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"margin-top:1em\">\r\n          <ion-col>\r\n            <ion-text class=\"body-header\"> Our records show that this product was picked up on: [pick-up date]</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"margin-top:1em\">\r\n          <ion-text class=\"body-body\">[x] payments of [Payment amount] due.</ion-text>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n              <ion-button color=\"tertiary\">\r\n                <ion-text>Make Payment</ion-text>\r\n              </ion-button>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </ion-row>\r\n  <app-explore-container name=\"account page\"></app-explore-container>\r\n</ion-content>\r\n");

/***/ }),

/***/ 88624:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.refer.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-card>\r\n    <ion-grid>\r\n      <ion-row style=\"margin-top: -17px;\">\r\n        <ion-col>\r\n          <img src=\"../assets/refer_a_friend_banner_824x290.png\" style=\"width: 100%;\" />\r\n        </ion-col>\r\n      </ion-row>\r\n      <h1 class=\"header1\" style=\"color: #003E6A !important\">\r\n        $20 for you,<br>\r\n        $10 for them!\r\n      </h1>\r\n      <h6 class=\"header2\" style=\"color: #ef8529 !important\">YOU EARN</h6>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <h2 class=\"header2\" style=\"color: #194e25 !important\">\r\n              <b>$20</b>\r\n            </h2>\r\n          </ion-row>\r\n          <ion-row class=\"ion-justify-content-center\" style=\"background-color: #ef8529\">\r\n            <ion-text class=\"body-body\" style=\"color:#fff !important\">1-10</ion-text>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <h2 class=\"header2\" style=\"color: #194e25 !important\">\r\n              <b>$30</b>\r\n            </h2>\r\n          </ion-row>\r\n          <ion-row class=\"ion-justify-content-center\" style=\"background-color: #ef8529\">\r\n            <ion-text class=\"body-body\" style=\"color:#fff !important\">11-25</ion-text>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <h2 class=\"header2\" style=\"color: #194e25 !important\">\r\n              <b>$50</b>\r\n            </h2>\r\n          </ion-row>\r\n          <ion-row class=\"ion-justify-content-center\" style=\"background-color: #ef8529\">\r\n            <ion-text class=\"body-body\" style=\"color:#fff !important\">26+</ion-text>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\" style=\"background-color: #ef8529;\">\r\n        <ion-text class=\"body-body\" style=\"color:#fff !important\">PER EACH FRIEND'S FIRST LOAN</ion-text>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <h6 class=\"body-body\" style=\"color:#ef8529 !important\">FRIENDS GET $10 FOR FIRST LOAN</h6>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <small><b><u>Refer A Friend Disclosure</u></b></small>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"full\" color=\"medium\" routerLink=\"../refer-share\">\r\n            <ion-text class=\"ion-text-left\">Send/Share</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"full\" color=\"medium\" routerLink=\"../refer-referrals\">\r\n            <ion-text class=\"ion-text-left\">Referrals</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"full\" color=\"medium\" routerLink=\"../refer-payout\">\r\n            <ion-text class=\"ion-text-left\">Payout</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"full\" color=\"medium\" routerLink=\"../refer-statement\">\r\n            <ion-text class=\"ion-text-left\">Statement</ion-text><img src=\"../assets/ArrowRight.svg\" />\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ 15340:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.refer.myreferrals.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-card>\r\n    <h1 class=\"header1\"> No one you've referred has signed up yet.</h1>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 21420:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.refer.payout.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-card>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-text class=\"body-body\">\r\n            Referred:<br>\r\n            {{referrals?.length}} Friends<br>\r\n            <small><b>(Received Funding)</b></small>\r\n          </ion-text>\r\n          <ion-text class=\"body-body\" style=\"color:orangered !important\">\r\n            Payout:<br>\r\n            {{redeemableUSD | currency: 'USD'}} Available\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col>\r\n          <img class=\"img-responsive\"\r\n               src=\"../assets/ReferAFriend_symbol.png\" />\r\n        </ion-col>\r\n      </ion-row>\r\n      <form id=\"redemption-form\" [formGroup]=\"form\" (ngSubmit)=\"redeem()\" *ngIf=\"redeemableUSD > 4.99\">\r\n        <ion-row class=\"ion-justify-content-center\">\r\n            <h5 class=\"font-weight-bold mt-3\" style=\"font-size: 18px\">How much would you like to redeem?</h5>\r\n            <ion-range formControlName=\"amount\"\r\n                        [options]=\"sliderOptions\"></ion-range>\r\n            <validation [control]=\"form.controls.amount\"></validation>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <select class=\"form-control\" formControlName=\"method\">\r\n              <option [selected]=\"true\" [ngValue]=\"undefined\">--Select Method--</option>\r\n              <option *ngFor=\"let option of redemptionOptions\" [ngValue]=\"option.method\">\r\n                {{option.method}}<span *ngIf=\"option.fee > 0\">: Fee {{option.fee | currency: 'USD'}}</span>\r\n              </option>\r\n            </select>\r\n            <validation [control]=\"form.controls.method\"></validation>\r\n            <div *ngIf=\"loans && form.value.method === 'LoanPayment'\"\r\n                 class=\"form-group\">\r\n              <label for=\"loan\">Loan</label>\r\n              <ng-container>\r\n                <select required\r\n                        class=\"form-control\"\r\n                        formControlName=\"loan\">\r\n                  <option [selected]=\"true\" [ngValue]=\"undefined\">--Select Loan--</option>\r\n                  <option *ngFor=\"let loan of loans\"\r\n                          [ngValue]=\"loan\">\r\n                    <ng-container *ngTemplateOutlet=\"loanDisplay; context: {loan: loan}\"></ng-container>\r\n                  </option>\r\n                </select>\r\n              </ng-container>\r\n              <validation [control]=\"form.controls.loan\"></validation>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <h3 class=\"header2\">VIP Member Exclusive</h3>\r\n            <ion-text class=\"body-body\">By Choosing: <b>Apply to Loan</b></ion-text>\r\n            <ion-text class=\"body-body\"  style=\"line-height: normal;\">\r\n              Get rewarded even more for applying the reward directly onto an active\r\n              loan! For payments <b>under $100, an extra 5% is added</b> and for\r\n              payments <b>$100 & over, an extra 10% is added!</b> This is only available\r\n              for users with an active loan.\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <button type=\"submit\" form=\"redemption-form\" [disabled]=\"processing\" class=\"btn btn-block btn-primary\">\r\n              {{ form.value.method === 'LoanPayment' ? 'Apply ' + (form.value.amount * loanBonus | currency:'USD') + ' to loan (' + ((form.value.amount * loanBonus) - form.value.amount | currency:'USD')  + ' bonus)' : 'Redeem ' + (form.value.amount | currency:'USD') }}\r\n            </button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n\r\n      <ion-row *ngIf=\"redeemableUSD < 5\">\r\n        <ion-col>\r\n          <h3 class=\"header3\">VIP Member Exclusive</h3>\r\n          <ion-text class=\"body-body\" style=\"line-height: normal;\">\r\n            As soon as you have $5 or more in referral credits, come back to redeem!\r\n          </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 59942:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.refer.share.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-card>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <h1 class=\"header\">Send/Share via...</h1>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <img class=\"img-responsive w-100 img-shadow clickable-img\"\r\n             src=\"../assets/btn_sms.png\" />\r\n      </ion-col>\r\n      <ion-col>\r\n        <img class=\"img-responsive w-100 img-shadow clickable-img\"\r\n             src=\"../assets/btn_email.png\" />\r\n      </ion-col>\r\n      <ion-col>\r\n        <img class=\"img-responsive w-100 img-shadow clickable-img\"\r\n             src=\"../assets/btn_facebook.png\" />\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <img class=\"img-responsive w-100 img-shadow clickable-img\"\r\n             src=\"../assets/btn_twitter.png\" />\r\n      </ion-col>\r\n      <ion-col>\r\n        <img class=\"img-responsive w-100 img-shadow clickable-img\"\r\n             src=\"../assets/btn_copylink.png\" />\r\n      </ion-col>\r\n      <ion-col>\r\n        <img class=\"img-responsive w-100 img-shadow clickable-img\"\r\n             src=\"../assets/btn_share.png\" />\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <img class=\"img-responsive w-100 img-shadow clickable-img\"\r\n             src=\"../assets/btn_download_print.png\" />\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 54810:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.refer.statement.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-card>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-text class=\"body-body\" style=\"color: #ef8529 !important;\">\r\n                Total Payout Earned:<br>\r\n                <span style=\"font-size: 24px; color: #ef8529 !important;\">$0.00</span>\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-text class=\"body-body\" >\r\n                Total Redeemed Payout:<br>\r\n                <span style=\"font-size: 24px;\">$0.00</span>\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col>\r\n          <img class=\"img-responsive\"\r\n               src=\"../assets/ReferAFriend_symbol.png\" />\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-text>Date</ion-text>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-text>Method</ion-text>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-text>Amount</ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-text></ion-text>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-text></ion-text>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-text></ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 95599:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.security.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-text color=\"primary\">\r\n        <h1>Security Settings</h1>\r\n      </ion-text>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-text style=\"padding-left:6em;\"><a>Log Out</a></ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-card>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <img src=\"../assets/Binoculars.svg\" />\r\n        </ion-row>\r\n        <ion-row style=\"margin-top:2em;\">\r\n          <ion-col>\r\n            <ion-button expand=\"full\" color=\"light\">\r\n              <ion-text>Password Reset</ion-text>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <ion-row>\r\n              <ion-row style=\"margin-top:3px\">\r\n                <ion-text style=\"padding-top:6px;\">Use Face ID?</ion-text>\r\n              </ion-row>\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-toggle [(ngModel)]=\"faceID\" (ionChange)=\"face()\"></ion-toggle>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <ion-row style=\"margin-top:3px\">\r\n              <ion-text style=\"padding-top:6px;\">Use Finger Print?</ion-text>\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-toggle [(ngModel)]=\"fingerPrint\" (ionChange)=\"finger()\"></ion-toggle>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <ion-row style=\"margin-top:3px\">\r\n              <ion-text style=\"padding-top:6px;\">Enable Push Notifications?</ion-text>\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-toggle></ion-toggle>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <ion-row style=\"margin-top:3px\">\r\n              <ion-text style=\"padding-top:6px;\">Opt in for sms communications?</ion-text>\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-toggle></ion-toggle>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <ion-row style=\"margin-top:3px\">\r\n              <ion-text style=\"padding-top:6px;\">Opt in for Email communications?</ion-text>\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-toggle></ion-toggle>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n  <app-explore-container name=\"account page\"></app-explore-container>\r\n</ion-content>\r\n");

/***/ }),

/***/ 54427:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/info/account.info.bank.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-text color=\"primary\">\r\n        <h1 class=\"header\">Bank</h1>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-grid>\r\n    <ion-card>\r\n      <ion-row>\r\n        <ion-col size=\"8\">\r\n          <ion-text class=\"body-header\">Primary Bank</ion-text>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button color=\"tertiary\" expand=\"full\">Verify</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top:2em;\">\r\n        <ion-text class=\"body-body\">[Primary Bank Name] ending in [last 4]</ion-text>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top:2em;\">\r\n        <ion-text class=\"body-header\">Your Bank Account(s)</ion-text>\r\n      </ion-row>\r\n      <ion-row style=\"border:.5px solid black; margin-top:1em\">\r\n        <ion-col size=\"8\">\r\n          <ion-text>[Bank Name]</ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-text>[last 4]</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"border:.5px solid black; margin-top:.5em\">\r\n        <ion-col size=\"8\">\r\n          <ion-text>[Bank Name]</ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-text>[last 4]</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top:1em;\">\r\n        <ion-button color=\"tertiary\" expand=\"full\">Add A Bank Account</ion-button>\r\n      </ion-row>\r\n    </ion-card>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 80388:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/info/account.info.debit.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-text color=\"primary\">\r\n        <h1 class=\"header\">Details</h1>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-grid>\r\n    <ion-card>\r\n      <ion-row>\r\n        <ion-col size=\"8\">\r\n          <ion-text class=\"body-header\">Primary Card</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top:2em;\">\r\n        <ion-text class=\"body-body\">Card ending in [last 4]</ion-text>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top:2em;\">\r\n        <ion-text class=\"body-header\">Your Debit Card(s)</ion-text>\r\n      </ion-row>\r\n      <ion-row style=\"border:.5px solid black; margin-top:1em\">\r\n        <ion-col size=\"8\">\r\n          <ion-text>Card ending in [Last 4]</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"border:.5px solid black; margin-top:1em\">\r\n        <ion-col size=\"8\">\r\n          <ion-text>Card ending in [Last 4]</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top:1em;\">\r\n        <ion-button color=\"tertiary\" expand=\"full\">Add A Debit Card</ion-button>\r\n      </ion-row>\r\n    </ion-card>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 34239:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/info/account.info.details.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-text color=\"primary\">\r\n        <h1 class=\"header\">Details</h1>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-grid>\r\n    <ion-card>\r\n      <ion-row>\r\n        <ion-text class=\"body-header\">Account Details</ion-text>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top:1em;\">\r\n        <ion-text class=\"body-body\">[First Name]   [Last Name]</ion-text>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top:2em;\">\r\n        <ion-col>\r\n          <ion-input typeof=\"street-address\" style=\"border-bottom:1px solid lightgrey;\" placeholder=\"Address\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-input typeof=\"address-level2\" style=\"border-bottom:1px solid lightgrey;\" placeholder=\"Apt\\Ste.\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <select class=\"stateSelect\">\r\n            <option style=\"opacity:.5\">State</option>\r\n            <option *ngFor=\"let state of states\">{{state}}</option>\r\n          </select>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-input typeof=\"postal-code\" style=\"border-bottom:1px solid lightgrey;\" placeholder=\"Zip Code\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-input typeof=\"tel-area-code\" style=\"border-bottom:1px solid lightgrey;\" placeholder=\"Mobile Phone\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-input typeof=\"tel-area-code\" style=\"border-bottom:1px solid lightgrey;\" placeholder=\"Work Phone\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-input typeof=\"tel-area-code\" style=\"border-bottom:1px solid lightgrey;\" placeholder=\"Landline Phone\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-button color=\"tertiary\" expand=\"full\">Save</ion-button>\r\n      </ion-row>\r\n    </ion-card>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 84154:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/info/account.info.income.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-text color=\"primary\">\r\n        <h1 class=\"header\">Income</h1>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-grid>\r\n    <ion-card>\r\n      <ion-row>\r\n        <ion-text class=\"body-header\">Account Income</ion-text>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-text class=\"body-header\">Primary</ion-text>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row>\r\n            <ion-text class=\"body-body\">Company:</ion-text>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-text>[Company]</ion-text>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-row>\r\n            <ion-text class=\"body-body\">Job Title:</ion-text>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-text>[Job title]</ion-text>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row>\r\n            <ion-text class=\"body-body\">Company:</ion-text>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-text>[Company]</ion-text>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-row>\r\n            <ion-text class=\"body-body\">Job Title:</ion-text>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-text>[Job title]</ion-text>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top:1em;\">\r\n        <ion-text class=\"body-header\">Your Income(s)</ion-text>\r\n      </ion-row>\r\n      <ion-row style=\"border:.5px solid black; margin-top:1em;\">\r\n        <ion-col>\r\n          <ion-text class=\"body-body\">[Name of Income]</ion-text>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-text class=\"body-body\">[$ Amount]</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top:1em;\">\r\n        <ion-col>\r\n          <ion-text class=\"body-body\">TOTAL Net Monthly Income:</ion-text>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-text class=\"body-body\">[$ Amount]</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top:1em;\">\r\n        <ion-button color=\"tertiary\" expand=\"full\">Add An Income</ion-button>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top:2em\">\r\n        <ion-text class=\"body-header\">Upload Supporting Documents</ion-text>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top:1em\">\r\n        <ion-col style=\"margin:1em;\">\r\n          <input type=\"file\" (change)=\"loadImageFromDevice($event)\" class=\"upload\"\r\n                 accept=\"image/png, image/jpeg\">\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_account_account_module_ts.js.map