(self["webpackChunkfirst_avenu"] = self["webpackChunkfirst_avenu"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.loading */ 83693);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);
/* harmony import */ var _login_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.register */ 59108);
/* harmony import */ var _login_signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.signin */ 85508);
/* harmony import */ var _login_verify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.verify */ 65899);








const routes = [
    {
        path: '',
        component: _login_loading__WEBPACK_IMPORTED_MODULE_0__.LoginLoading
    },
    {
        path: 'landing',
        component: _login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage
    },
    {
        path: 'app-login-register',
        component: _login_register__WEBPACK_IMPORTED_MODULE_2__.LoginRegister
    },
    {
        path: 'verify',
        component: _login_verify__WEBPACK_IMPORTED_MODULE_4__.LoginVerify
    },
    {
        path: 'signin',
        component: _login_signin__WEBPACK_IMPORTED_MODULE_3__.LoginSignin
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 41057:
/*!*******************************************!*\
  !*** ./src/app/login/login.background.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginBackground": () => (/* binding */ LoginBackground)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_background_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.background.html */ 40094);
/* harmony import */ var _login_background_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.background.scss */ 417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let LoginBackground = class LoginBackground {
    constructor(animationCtrl, alertController) {
        this.animationCtrl = animationCtrl;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.createAnimation('.cloud', 'horizontal', '0', '1000', 100000);
        this.createAnimation('.cloud2', 'horizontal', '0', '1000', 200000);
        this.createAnimation('.cloud3', 'horizontal', '0', '1000', 300000);
        this.createAnimation('.cloud4', 'horizontal', '0', '1000', 100000);
        this.createAnimation('.cloud5', 'horizontal', '0', '1000', 200000);
        this.createAnimation('.cloud6', 'horizontal', '0', '-1000', 200000);
        this.createAnimation('.cloud7', 'horizontal', '0', '1000', 200000);
        this.createAnimation('.cloud8', 'horizontal', '0', '1000', 200000);
        this.createAnimation('.balloon', 'horizontal', '0', '1000', 100000);
        this.createAnimation('.airplane', 'horizontal', '0', '-1000', 50000);
        this.createAnimation('.sailboat', 'horizontal', '0', '-1000', 900000);
        this.createAnimation('.boat', 'horizontal', '0', '10000', 800000);
    }
    createAnimation(element, movementStyle, movementStart, movementEnd, duration) {
        if (movementStyle == 'vertical') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        if (movementStyle == 'horizontal') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        else {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .fromTo('transform', 'rotate(' + movementStart + 'deg)', 'rotate(' + movementEnd + 'deg)');
            animation.play();
        }
    }
};
LoginBackground.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AnimationController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController }
];
LoginBackground = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login-background',
        template: _raw_loader_login_background_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_background_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginBackground);



/***/ }),

/***/ 83693:
/*!****************************************!*\
  !*** ./src/app/login/login.loading.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginLoading": () => (/* binding */ LoginLoading)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_loading_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.loading.html */ 9861);
/* harmony import */ var _login_loading_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.loading.scss */ 6573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);







let LoginLoading = class LoginLoading {
    constructor(alertController, location, router) {
        this.alertController = alertController;
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.delay(5000);
            this.router.navigate(['../landing']);
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};
LoginLoading.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoginLoading = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'login-loading',
        template: _raw_loader_login_loading_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_loading_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginLoading);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);
/* harmony import */ var _login_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.register */ 59108);
/* harmony import */ var _login_signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.signin */ 85508);
/* harmony import */ var _login_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.loading */ 83693);
/* harmony import */ var _login_verify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.verify */ 65899);
/* harmony import */ var _login_background__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.background */ 41057);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/utilities.module */ 93081);













let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_7__.UtilitiesModule
        ],
        declarations: [_login_background__WEBPACK_IMPORTED_MODULE_6__.LoginBackground, _login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage, _login_register__WEBPACK_IMPORTED_MODULE_2__.LoginRegister, _login_signin__WEBPACK_IMPORTED_MODULE_3__.LoginSignin, _login_loading__WEBPACK_IMPORTED_MODULE_4__.LoginLoading, _login_verify__WEBPACK_IMPORTED_MODULE_5__.LoginVerify]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let LoginPage = class LoginPage {
    constructor(animationCtrl) {
        this.animationCtrl = animationCtrl;
        this.chats = [];
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.chats = [
            new Chat(1, "Hi, I'm Looky! I'm always looking out for great values for you", "Hi, I'm Looky!  ...", true, false),
            new Chat(2, "You can select from a wide range of vacation options made affordable through easy payments with no interest.", "You can select from  ...", false, true),
            new Chat(3, "Plus, every quarter we offer limited-availability special buys of cool products available with easy payments with no interest.", "Plus every quarter we offer  ...", false, true),
            new Chat(4, "Sign up today - there is no obligation to buy!", "Sign up today  ...", false, true)
        ];
        //this.ArrayPlusDelay(this.chats, function (obj) { obj.Hidden = false; obj.Selected = true; }, 5000);
        let counter = 1;
        let elemID = 4;
        const timer = setInterval(() => {
            if (counter > (this.chats.length - 1))
                clearInterval(timer);
            if (counter > 1) {
                const previousElem = document.getElementById("chat" + (elemID).toString());
                this.chats[counter - 2].Selected = false;
                const moveChat = this.animationCtrl.create()
                    .addElement(previousElem)
                    .duration(750)
                    .easing('ease-in')
                    .fromTo('transform', 'translateY(-75px)', 'translateY(-245px)');
                moveChat.play();
            }
            const chat = this.chats[counter - 1];
            chat.Hidden = false;
            chat.Selected = true;
            const elem = document.getElementById("chat" + (elemID).toString());
            const animation = this.animationCtrl.create()
                .addElement(elem)
                .duration(4500)
                .beforeStyles({ top: '225px' })
                .easing('ease-in')
                .fromTo('transform', '150px', '150px');
            animation.play();
            counter++;
            elemID--;
        }, 5000);
        this.loading = false;
    }
    showChat(chat) {
        chat.Selected = true;
        chat.Hidden = false;
    }
    selectChat(chat) {
        for (let c of this.chats) {
            c.Selected = false;
        }
        chat.Selected = true;
    }
    createAnimation(element, movementStart, movementEnd, duration) {
        const animation = this.animationCtrl.create()
            .addElement(document.querySelector(element))
            .duration(duration)
            .easing('ease-in')
            .fromTo('transform', 'translateY(' + movementStart + 'px)', 'translateY(' + movementEnd + 'px)');
        animation.play();
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AnimationController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login-page',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);

class Chat {
    constructor(order, longText, shortText, selected, hidden) {
        this.Order = order;
        this.LongText = longText;
        this.ShortText = shortText;
        this.Selected = selected;
        this.Hidden = hidden;
    }
}


/***/ }),

/***/ 59108:
/*!*****************************************!*\
  !*** ./src/app/login/login.register.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRegister": () => (/* binding */ LoginRegister)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_register_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.register.html */ 5161);
/* harmony import */ var _login_register_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.register.scss */ 52197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);






let LoginRegister = class LoginRegister {
    constructor(animationCtrl, alertController, formBuilder) {
        this.animationCtrl = animationCtrl;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            VerifyPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            Zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    ngOnInit() {
        this.createAnimation('.chat1', '', '0', '5', 950);
    }
    createAnimation(element, movementStyle, movementStart, movementEnd, duration) {
        if (movementStyle == 'vertical') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        if (movementStyle == 'horizontal') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        else {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration).keyframes([
                { offset: 0, transform: 'scale(0.1))', opacity: '0.25' },
                { offset: 0.5, transform: 'scale(0.8)', opacity: '.5' },
                { offset: 1, transform: 'scale(1)', opacity: '1' }
            ]);
            animation.play();
        }
    }
};
LoginRegister.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AnimationController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
LoginRegister = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login-register',
        template: _raw_loader_login_register_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_register_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginRegister);



/***/ }),

/***/ 85508:
/*!***************************************!*\
  !*** ./src/app/login/login.signin.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginSignin": () => (/* binding */ LoginSignin)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_signin_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.signin.html */ 27342);
/* harmony import */ var _login_signin_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.signin.scss */ 35163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ 73071);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 38605);









let LoginSignin = class LoginSignin {
    constructor(animationCtrl, alertController, router, route, formBuilder, userService, storage) {
        this.animationCtrl = animationCtrl;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.storage = storage;
        this.form = this.formBuilder.group({
            FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            VerifyPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            Zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        this.step = 'username';
        this.messageIcon = "fa-exclamation";
        this.user = {};
        this.loading = false;
        this.processing = false;
        this.credentials = {};
    }
    ngOnInit() {
        this.createAnimation('.chat1', '', '0', '5', 950);
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
        console.log(this.returnUrl);
    }
    createAnimation(element, movementStyle, movementStart, movementEnd, duration) {
        if (movementStyle == 'vertical') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        if (movementStyle == 'horizontal') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        else {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration).keyframes([
                { offset: 0, transform: 'scale(0.1))', opacity: '0.25' },
                { offset: 0.5, transform: 'scale(0.8)', opacity: '.5' },
                { offset: 1, transform: 'scale(1)', opacity: '1' }
            ]);
            animation.play();
        }
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.processing = true;
            const response = yield this.userService.login(this.credentials);
            console.log(response);
            console.log('hit');
            if (response)
                yield this.router.navigate(['/tabs/tabs/shop']);
        });
    }
};
LoginSignin.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AnimationController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.default },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage }
];
LoginSignin = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'signin',
        template: _raw_loader_login_signin_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_signin_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginSignin);



/***/ }),

/***/ 65899:
/*!***************************************!*\
  !*** ./src/app/login/login.verify.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginVerify": () => (/* binding */ LoginVerify)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_verify_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.verify.html */ 23107);
/* harmony import */ var _login_verify_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.verify.scss */ 68615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let LoginVerify = class LoginVerify {
    constructor(animationCtrl) {
        this.animationCtrl = animationCtrl;
        this.show = false;
    }
    ngOnInit() {
        this.createAnimation('.chat1', '', '0', '5', 950);
    }
    show1() {
        this.show = true;
        this.createAnimation('.chat2', '', '0', '5', 950);
    }
    createAnimation(element, movementStyle, movementStart, movementEnd, duration) {
        if (movementStyle == 'vertical') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        if (movementStyle == 'horizontal') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        else {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration).keyframes([
                { offset: 0, transform: 'scale(0.1))', opacity: '0.25' },
                { offset: 0.5, transform: 'scale(0.8)', opacity: '.5' },
                { offset: 1, transform: 'scale(1)', opacity: '1' }
            ]);
            animation.play();
        }
    }
};
LoginVerify.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AnimationController }
];
LoginVerify = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login-verify',
        template: _raw_loader_login_verify_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_verify_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginVerify);



/***/ }),

/***/ 73071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _utilities_with_expiry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/with-expiry */ 78541);
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Global */ 23211);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ 6858);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 38605);








let UserService = class UserService {
    constructor(router, global, http, storage) {
        this.router = router;
        this.global = global;
        this.http = http;
        this.storage = storage;
    }
    validatePassword(credentials) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.http.post({ method: 'Signin', controller: 'User' }, Object.assign({}, credentials));
            }
            catch (e) {
                throw e;
            }
        });
    }
    login(credentials) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                var response = yield this.http.post('MLC.Data.Model.User', { method: 'Signin', controller: 'User' }, Object.assign(Object.assign({ Portal: this.global.brandCode + "FA-App", Device: navigator.userAgent }, credentials), { TypeMapping: {
                        User: {
                            Person: {
                                Customer: {
                                    Status: {
                                        Type: {}
                                    },
                                    Store: {
                                        Brand: {},
                                        Address: {
                                            Zip: {
                                                City: {
                                                    State: {}
                                                }
                                            }
                                        },
                                        MainPhone: {
                                            Phone: {}
                                        },
                                        Email: {}
                                    }
                                }
                            }
                        }
                    } }));
                console.log(response);
                //const userWithExpiry = withExpiry({ ...User, Token });
                this.storage.set(`user`, response.User);
                this.storage.set('Token', response.Token);
                return response;
            }
            catch (e) {
                throw e;
            }
        });
    }
    initiateTwitterSignin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield this.http.fetch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.default.endpointBaseUrl}/user/initiatetwittersignin`, {
                method: 'POST'
            });
            const redirectUrl = yield response.json();
            window.location.assign(redirectUrl);
        });
    }
    hasTwitterCredentials() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield this.http.fetch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.default.endpointBaseUrl}/user/hastwittercredentials`);
            return yield response.json();
        });
    }
    easyPayLogin({ lastName, ssnLast4, dob }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const { User, LoanID, Token } = yield this.http.post('MLC.Data.Model.User', { method: 'EasyPaySignin', controller: 'User' }, { Input: { LastName: lastName, SSNLast4: ssnLast4, DOB: dob } });
            const userWithExpiry = (0,_utilities_with_expiry__WEBPACK_IMPORTED_MODULE_1__.default)(Object.assign(Object.assign({}, User), { LoanID, Token }));
            localStorage.easyPayUser = JSON.stringify(userWithExpiry);
            return userWithExpiry;
        });
    }
    fetchUsername(username) {
        return this.http.post('MLC.Data.Model.User', { method: 'FetchUsername', controller: 'User' }, { Input: { Username: username.trim() } });
    }
    validateEmail(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (value) {
                const valid = yield this.http.post({ controller: 'User', method: 'ValidEmail' }, { Input: value });
                if (!valid)
                    return { email: true };
            }
        });
    }
    canRegister(ssn) {
        return this.http.post('MLC.Data.Model.User', { method: 'CanRegister', controller: 'User' }, { Input: { SSN: ssn } });
    }
    register(userInfo) {
        var _a;
        return this.http.post({ method: 'Register', controller: 'User' }, {
            FirstName: userInfo.firstName,
            LastName: userInfo.lastName,
            Username: userInfo.username,
            Phone: (_a = userInfo.phone) === null || _a === void 0 ? void 0 : _a.replace(/\(|\)|\s|-/, ''),
            Password: userInfo.password,
            ConfirmPassword: userInfo.confirmPassword,
            DOB: userInfo.dob,
            SSN: userInfo.ssn,
            Referrer: userInfo.referrer
        });
    }
    recoverPassword(recoveryInfo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.http.post({ method: 'ForgotPassword', controller: 'User' }, {
                Username: recoveryInfo.username,
                ClientName: window.location.pathname.match(/easymoneynow\.com/i) ? 'Easy Money Group' : 'Minute Loan Center'
            });
            return 'Recovery successful! Check your email.';
        });
    }
    recoverUsername(recoveryInfo) {
        return this.http.post({ method: 'ForgotUsername', controller: 'User' }, {
            LastName: recoveryInfo.lastName,
            DOB: recoveryInfo.dob,
            SSN: recoveryInfo.ssn
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _Global__WEBPACK_IMPORTED_MODULE_2__.Global },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__.default },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({ providedIn: 'root' })
], UserService);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserService);


/***/ }),

/***/ 8422:
/*!************************************************!*\
  !*** ./src/app/utilities/pipes/filter.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let FilterPipe = class FilterPipe {
    transform(items, predicateOrProperties, negate = false) {
        const predicate = typeof predicateOrProperties === 'function'
            ? predicateOrProperties
            : (item) => {
                if (!negate)
                    return Object.entries(predicateOrProperties).every(([key, value]) => item[key] === value);
                else
                    return Object.entries(predicateOrProperties).every(([key, value]) => item[key] !== value);
            };
        return items && items.filter(predicate);
    }
};
FilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'filter' })
], FilterPipe);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterPipe);


/***/ }),

/***/ 59504:
/*!************************************************!*\
  !*** ./src/app/utilities/pipes/format.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let FormatPipe = class FormatPipe {
    transform(value, kind) {
        let month;
        let day;
        let d;
        switch (value && kind) {
            case "phone":
                return typeof value === 'string' && `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6, 10)}` || '';
            case "date":
                const dateString = typeof value === 'string' ? value : value.toISOString();
                //Handle Zero Time Dates differently than "real" dates:
                if (dateString.split('T').length > 1) {
                    if (dateString.split('T')[1].replace('Z', '').replace('-05:00', '') === "00:00:00" || dateString.split('T')[1].replace('Z', '').replace('-05:00', '') === "02:00:00") {
                        const result = dateString.split('T')[0].split('-');
                        return `${paddingZero(result[1])}/${paddingZero(result[2])}/${result[0]}`;
                    }
                }
                d = new Date(dateString);
                d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
                month = paddingZero((d.getMonth() + 1).toString());
                day = paddingZero(d.getDate().toString());
                return `${month}/${day}/${d.getFullYear()}`;
            case "dateTime":
                const dateTimeString = typeof value === 'string' ? value : value.toISOString();
                //Handle Zero Time Dates differently than "real" dates:
                if (dateTimeString.split('T').length > 1) {
                    if (dateTimeString.split('T')[1].replace('Z', '').replace('-05:00', '') === "00:00:00" || dateTimeString.split('T')[1].replace('Z', '').replace('-05:00', '') === "02:00:00") {
                        const result = dateTimeString.split('T')[0].split('-');
                        return `${paddingZero(result[1])}/${paddingZero(result[2])}/${result[0]}`;
                    }
                }
                d = new Date(dateTimeString);
                d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
                month = paddingZero((d.getMonth() + 1).toString());
                day = paddingZero(d.getDate().toString());
                let clock = "am";
                let hours = d.getHours();
                if (hours >= 12) {
                    clock = "pm";
                    if (hours > 12)
                        hours = hours - 12;
                }
                const minutes = paddingZero(d.getMinutes().toString());
                return `${month}/${day}/${d.getFullYear()}  -  ${hours}:${minutes} ${clock}`;
            case "shortDate":
                const shortDateString = typeof value === 'string' ? value : value.toISOString();
                //Handle Zero Time Dates differently than "real" dates:
                if (shortDateString.split('T')[1].replace('Z', '').replace('-05:00', '') === "00:00:00" || shortDateString.split('T')[1].replace('Z', '').replace('-05:00', '') === "02:00:00") {
                    const result = shortDateString.split('T')[0].split('-');
                    return `${result[1]}/${result[2]}`;
                }
                d = new Date(shortDateString);
                d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
                return (d.getMonth() + 1) + "/" + d.getDate();
            case "time":
                value = new Date(value).toISOString();
                const date = new Date(value);
                const time = date.toTimeString().split(" ");
                return time[0];
            case "last4":
                if (typeof value === 'string' && value.length > 4)
                    return value.substring(value.length - 4);
                return typeof value === 'string' && value || '';
            case "capitalize":
                return typeof value === 'string' && (value[0].toUpperCase() + value.substr(1).toLowerCase()) || '';
            default:
                return value && value.toString();
        }
    }
};
FormatPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'format' })
], FormatPipe);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormatPipe);
function paddingZero(value) {
    if (value.length < 2)
        return "0" + value;
    return value;
}


/***/ }),

/***/ 76835:
/*!**********************************************!*\
  !*** ./src/app/utilities/pipes/html.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 39075);



let HTMLPipe = class HTMLPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
};
HTMLPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer }
];
HTMLPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({ name: "html" })
], HTMLPipe);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLPipe);


/***/ }),

/***/ 91932:
/*!**********************************************!*\
  !*** ./src/app/utilities/pipes/mask.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let MaskPipe = class MaskPipe {
    transform(value, arg) {
        if (!value)
            return value;
        value = value.substring(value.length - 4);
        switch (arg) {
            case "ssn":
                return "XXX-XX-" + value;
            case "card":
                return "XXXX-XXXX-XXXX-" + value;
            case "routing":
                return "XXXXX" + value;
            case "bank":
                return "XXXXXX" + value;
            default:
                return value;
        }
    }
};
MaskPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'mask' })
], MaskPipe);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaskPipe);


/***/ }),

/***/ 76034:
/*!*************************************************!*\
  !*** ./src/app/utilities/pipes/preview.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let PreviewPipe = class PreviewPipe {
    transform(value, args) {
        if (!value)
            return value;
        if (!args)
            args = 20;
        if (value.length > args)
            return value.substring(0, args) + '...';
        return value;
    }
};
PreviewPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'preview' })
], PreviewPipe);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewPipe);


/***/ }),

/***/ 7681:
/*!**********************************************!*\
  !*** ./src/app/utilities/pipes/safe.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 39075);



let SafePipe = class SafePipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value, kind = 'html') {
        switch (kind) {
            case 'html':
                return this.domSanitizer.bypassSecurityTrustHtml(value);
            case 'resource':
                return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
            case 'script':
                return this.domSanitizer.bypassSecurityTrustScript(value);
            case 'style':
                return this.domSanitizer.bypassSecurityTrustStyle(value);
            case 'url':
                return this.domSanitizer.bypassSecurityTrustUrl(value);
        }
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer }
];
SafePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'safe'
    })
], SafePipe);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SafePipe);


/***/ }),

/***/ 60661:
/*!**********************************************!*\
  !*** ./src/app/utilities/pipes/skip.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let SkipPipe = class SkipPipe {
    transform(values, count) {
        return values && values.slice(count);
    }
};
SkipPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'skip' })
], SkipPipe);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkipPipe);


/***/ }),

/***/ 3523:
/*!**********************************************!*\
  !*** ./src/app/utilities/pipes/sort.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sort */ 26749);



let SortPipe = class SortPipe {
    constructor() {
        this.transform = _sort__WEBPACK_IMPORTED_MODULE_0__.default;
    }
};
SortPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({ name: 'sort' })
], SortPipe);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortPipe);


/***/ }),

/***/ 35527:
/*!**********************************************!*\
  !*** ./src/app/utilities/pipes/take.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let TakePipe = class TakePipe {
    transform(values, count) {
        return values && values.slice(0, count);
    }
};
TakePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'take' })
], TakePipe);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TakePipe);


/***/ }),

/***/ 26749:
/*!***********************************!*\
  !*** ./src/app/utilities/sort.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sort)
/* harmony export */ });
function sort(value, args = [], direction) {
    const compareFn = typeof args === 'function'
        ? function (a, b) {
            const aKey = args(a);
            const bKey = args(b);
            const result = compareTextuallyOrNumerically(aKey, bKey);
            return direction === 'desc' ? -result : result;
        }
        : function (a, b) {
            for (const arg of args) {
                const keys = arg.key.split('.');
                const aVal = getValue(a, keys);
                const bVal = getValue(b, keys);
                let result = compareTextuallyOrNumerically(aVal, bVal);
                if (arg.direction === 'desc')
                    result = result * -1;
                if (result !== 0)
                    return result;
            }
            return 0;
        };
    return value.slice().sort(compareFn);
}
function getValue(obj, keys) {
    const key = keys[0];
    const value = keys.length > 1 && obj && getValue(obj[key], keys.slice(1)) || obj[key];
    return value;
}
function compareTextuallyOrNumerically(a, b) {
    const aValue = Number.isNaN(Number(a)) ? String(a) : Number(a);
    const bValue = Number.isNaN(Number(b)) ? String(b) : Number(b);
    return typeof aValue === 'string' && typeof bValue === 'string' ? aValue.localeCompare(bValue) : Number(aValue) - Number(bValue);
}


/***/ }),

/***/ 93081:
/*!***********************************************!*\
  !*** ./src/app/utilities/utilities.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilitiesModule": () => (/* binding */ UtilitiesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/sort.pipe */ 3523);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/filter.pipe */ 8422);
/* harmony import */ var _pipes_format_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/format.pipe */ 59504);
/* harmony import */ var _pipes_mask_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/mask.pipe */ 91932);
/* harmony import */ var _pipes_preview_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/preview.pipe */ 76034);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/safe.pipe */ 7681);
/* harmony import */ var _pipes_html_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/html.pipe */ 76835);
/* harmony import */ var _pipes_take_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/take.pipe */ 35527);
/* harmony import */ var _pipes_skip_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/skip.pipe */ 60661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);











let UtilitiesModule = class UtilitiesModule {
};
UtilitiesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_0__.default,
            _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.default,
            _pipes_format_pipe__WEBPACK_IMPORTED_MODULE_2__.default,
            _pipes_mask_pipe__WEBPACK_IMPORTED_MODULE_3__.default,
            _pipes_preview_pipe__WEBPACK_IMPORTED_MODULE_4__.default,
            _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__.default,
            _pipes_html_pipe__WEBPACK_IMPORTED_MODULE_6__.default,
            _pipes_take_pipe__WEBPACK_IMPORTED_MODULE_7__.default,
            _pipes_skip_pipe__WEBPACK_IMPORTED_MODULE_8__.default
        ],
        exports: [
            _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_0__.default,
            _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.default,
            _pipes_format_pipe__WEBPACK_IMPORTED_MODULE_2__.default,
            _pipes_mask_pipe__WEBPACK_IMPORTED_MODULE_3__.default,
            _pipes_preview_pipe__WEBPACK_IMPORTED_MODULE_4__.default,
            _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__.default,
            _pipes_html_pipe__WEBPACK_IMPORTED_MODULE_6__.default,
            _pipes_take_pipe__WEBPACK_IMPORTED_MODULE_7__.default,
            _pipes_skip_pipe__WEBPACK_IMPORTED_MODULE_8__.default
        ],
    })
], UtilitiesModule);



/***/ }),

/***/ 417:
/*!*********************************************!*\
  !*** ./src/app/login/login.background.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".cloud {\n  z-index: 2;\n}\n\n.cloud2 {\n  z-index: 2;\n}\n\n.cloud3 {\n  z-index: 2;\n}\n\n.cloud4 {\n  z-index: 2;\n}\n\n.cloud4 {\n  z-index: 2;\n}\n\n.balloon {\n  z-index: 2;\n}\n\n.airplane {\n  z-index: 2;\n}\n\n.sailboat {\n  z-index: 2;\n}\n\n.boat {\n  z-index: 2;\n}\n\n.palms {\n  z-index: 2;\n}\n\n.outer {\n  overflow: hidden;\n  position: relative;\n}\n\n.inner {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  right: -100px;\n  top: 50px;\n  z-index: 3;\n}\n\n.inner2 {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  left: -30px;\n  top: 150px;\n  z-index: 3;\n}\n\n.inner3 {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  right: -10px;\n  top: 200px;\n  z-index: 3;\n}\n\n.inner4 {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  left: -50px;\n  top: 300px;\n  z-index: 3;\n}\n\n.inner5 {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  right: -31px;\n  top: 325px;\n  z-index: 3;\n}\n\n.inner6 {\n  position: absolute;\n  height: 0px;\n  width: 100px;\n  right: 0px;\n  top: 25px;\n  z-index: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmJhY2tncm91bmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFGQTtFQUNFLFVBQUE7QUFLRjs7QUFIQTtFQUNFLFVBQUE7QUFNRjs7QUFKQTtFQUNFLFVBQUE7QUFPRjs7QUFMQTtFQUNFLFVBQUE7QUFRRjs7QUFOQTtFQUNFLFVBQUE7QUFTRjs7QUFQQTtFQUNFLFVBQUE7QUFVRjs7QUFSQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFXRjs7QUFSQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFXRjs7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFZRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFhRjs7QUFYQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFjRjs7QUFaQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFlRjs7QUFiQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFnQkYiLCJmaWxlIjoibG9naW4uYmFja2dyb3VuZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3VkIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5jbG91ZDIge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmNsb3VkMyB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uY2xvdWQ0IHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5jbG91ZDQge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmJhbGxvb24ge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmFpcnBsYW5lIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5zYWlsYm9hdCB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uYm9hdCB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4ucGFsbXMge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLm91dGVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmlubmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcmlnaHQ6IC0xMDBweDtcclxuICB0b3A6IDUwcHg7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4uaW5uZXIyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbGVmdDogLTMwcHg7XHJcbiAgdG9wOiAxNTBweDtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcbi5pbm5lcjMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICByaWdodDogLTEwcHg7XHJcbiAgdG9wOiAyMDBweDtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcbi5pbm5lcjQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBsZWZ0OiAtNTBweDtcclxuICB0b3A6IDMwMHB4O1xyXG4gIHotaW5kZXg6MztcclxufVxyXG4uaW5uZXI1IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcmlnaHQ6IC0zMXB4O1xyXG4gIHRvcDogMzI1cHg7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4uaW5uZXI2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHJpZ2h0OjBweDtcclxuICB0b3A6IDI1cHg7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 6573:
/*!******************************************!*\
  !*** ./src/app/login/login.loading.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5sb2FkaW5nLnNjc3MifQ== */");

/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".show {\n  display: none;\n}\n\n/*.bubble:after {\n  content: '';\n  position: absolute;\n  left: 70%;\n  bottom: -50px;\n  border: 25px solid;\n  border-color: #333 transparent transparent #333;\n}\n*/\n\n.chat {\n  transform: scale(0);\n  position: relative;\n  background: #6976ec;\n  border-radius: 0.4em;\n  margin-bottom: 2em;\n  z-index: 999;\n}\n\n.chat:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: 22px solid transparent;\n  border-top-color: #6976ec;\n  border-bottom: 0;\n  border-right: 0;\n  margin-left: -11px;\n  margin-bottom: -22px;\n}\n\n.chat-finished {\n  transform: scale(0);\n  position: relative;\n  background: #6976ec;\n  border-radius: 0.4em;\n  margin-bottom: 2em;\n  opacity: 0.85;\n  z-index: 999;\n}\n\n.chat-finished1 {\n  transform: scale(0);\n  position: relative;\n  background: #6976ec;\n  border-radius: 0.4em;\n  margin-bottom: 2em;\n  opacity: 0.75;\n  z-index: 999;\n}\n\n.chat-finished2 {\n  transform: scale(0);\n  position: relative;\n  background: #6976ec;\n  border-radius: 0.4em;\n  margin-bottom: 2em;\n  opacity: 0.65;\n  z-index: 998;\n}\n\n.bubble {\n  position: relative;\n  background-color: white;\n  border: 2px solid #333;\n  border-radius: 25px;\n  padding: 5px;\n  z-index: 999;\n  opacity: 1;\n}\n\n.tail {\n  width: 20px;\n  height: 21px;\n  margin-top: -13px;\n  margin-left: 20%;\n  z-index: 999;\n}\n\n.transparent {\n  opacity: 0.5;\n}\n\n.background {\n  z-index: 10;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFHQTs7Ozs7Ozs7Q0FBQTs7QUFVQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSUY7O0FBREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0FBS0o7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQU1GIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qLmJ1YmJsZTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDcwJTtcclxuICBib3R0b206IC01MHB4O1xyXG4gIGJvcmRlcjogMjVweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMzMzMgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzMzMztcclxufVxyXG4qL1xyXG5cclxuLmNoYXQge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICM2OTc2ZWM7XHJcbiAgYm9yZGVyLXJhZGl1czogLjRlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcbi5jaGF0OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyOiAyMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICM2OTc2ZWM7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxuICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC0yMnB4O1xyXG59XHJcbi5jaGF0LWZpbmlzaGVkIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjNjk3NmVjO1xyXG4gIGJvcmRlci1yYWRpdXM6IC40ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gIG9wYWNpdHk6IC44NTtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuLmNoYXQtZmluaXNoZWQxIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjNjk3NmVjO1xyXG4gIGJvcmRlci1yYWRpdXM6IC40ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gIG9wYWNpdHk6IC43NTtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuLmNoYXQtZmluaXNoZWQyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjNjk3NmVjO1xyXG4gIGJvcmRlci1yYWRpdXM6IC40ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gIG9wYWNpdHk6LjY1O1xyXG4gIHotaW5kZXg6IDk5ODtcclxufVxyXG4uYnViYmxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi50YWlse1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICB6LWluZGV4Ojk5OTtcclxufVxyXG4udHJhbnNwYXJlbnR7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufVxyXG4uYmFja2dyb3VuZCB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 52197:
/*!*******************************************!*\
  !*** ./src/app/login/login.register.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".chat1 {\n  transform: scale(0);\n}\n\n.registration-input input {\n  max-height: 10px;\n  height: 10px;\n  padding: 0px;\n}\n\n.background {\n  z-index: 10;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnJlZ2lzdGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFHRiIsImZpbGUiOiJsb2dpbi5yZWdpc3Rlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQxIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcbi5yZWdpc3RyYXRpb24taW5wdXQgaW5wdXQge1xyXG4gIG1heC1oZWlnaHQ6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmc6MHB4O1xyXG59XHJcbi5iYWNrZ3JvdW5kIHtcclxuICB6LWluZGV4OiAxMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 35163:
/*!*****************************************!*\
  !*** ./src/app/login/login.signin.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".chat1 {\n  transform: scale(0);\n}\n\n.background {\n  z-index: 10;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n\n.foregrouns {\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnNpZ25pbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDSSxZQUFBO0FBR0oiLCJmaWxlIjoibG9naW4uc2lnbmluLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdDEge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuLmJhY2tncm91bmQge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmZvcmVncm91bnN7XHJcbiAgICB6LWluZGV4Ojk5OTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 68615:
/*!*****************************************!*\
  !*** ./src/app/login/login.verify.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".chat1 {\n  transform: scale(0);\n}\n\n.registration-input input {\n  max-height: 10px;\n  height: 10px;\n  padding: 0px;\n}\n\n.background {\n  z-index: 10;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnZlcmlmeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBR0YiLCJmaWxlIjoibG9naW4udmVyaWZ5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdDEge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1pbnB1dCBpbnB1dCB7XHJcbiAgbWF4LWhlaWdodDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZzowcHg7XHJcbn1cclxuLmJhY2tncm91bmQge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 40094:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.background.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"body\">\r\n  <div class=\"outer\">\r\n    <div class=\"inner\">\r\n      <img class=\"airplane\" src=\"../assets/Airplane1.svg\" />\r\n    </div>\r\n    <div class=\"inner2\">\r\n      <img class=\"balloon\" src=\"../assets/HotAirBalloon.svg\" />\r\n    </div>\r\n    <div class=\"inner3\">\r\n      <img class=\"sailboat\" src=\"../assets/Sailboat1.svg\" style=\"padding-right:3em\" />\r\n    </div>\r\n    <div class=\"inner4\">\r\n      <img class=\"boat\" src=\"../assets/Boat.svg\" />\r\n    </div>\r\n    <div class=\"inner5\">\r\n      <img class=\"palms\" src=\"../assets/PalmTrees.svg\" />\r\n    </div>\r\n    <div class=\"inner6\">\r\n      <img class=\"cloud6\" src=\"../assets/Cloud2.svg\" />\r\n    </div>\r\n    <ion-grid style=\"height:600px\">\r\n      <ion-row>\r\n        <ion-col size=\"3\">\r\n          <ion-row class=\"ion-justify-content-left\">\r\n              <img class=\"cloud\" src=\"../assets/Cloud.svg\" style=\"padding-left:3em\" />\r\n          </ion-row>\r\n          <ion-row class=\"ion-justify-content-left\" style=\"padding-top:2em\">\r\n              <img class=\"cloud2\" src=\"../assets/Cloud2.svg\" style=\"padding-top:2em\" />\r\n            <ion-col>\r\n              <ion-row class=\"ion-justify-content-center\">\r\n                <img class=\"cloud3\" src=\"../assets/Cloud3.svg\" style=\"padding-right:3em\" />\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-row>\r\n                <img class=\"cloud4\" src=\"../assets/Cloud.svg\" style=\"padding-left:3em\" />\r\n                <img class=\"cloud5\" src=\"../assets/Cloud2.svg\" style=\"padding-top:3em\" />\r\n            </ion-row>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 9861:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.loading.html ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-row style=\"margin-top:12em;\">\r\n    <ion-col>\r\n      <img src=\"../assets/Looky-Turn.gif\" />\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"loading\">Some type of cool loading animation.  Maybe the blue line that we have in SOAR.</div>\r\n<div *ngIf=\"!loading\">\r\n  \r\n    <app-login-background class=\"background\"></app-login-background>\r\n  <ion-grid style=\"position: absolute; top: 0; left: 0; z-index: 9999;\">\r\n\r\n\r\n    <ion-row style=\"position: absolute; top: 225px; left: 0; z-index: 9999;\">\r\n      <ion-col>\r\n        <ion-grid *ngFor=\"let chat of chats | sort: [{key:'Order', direction:'desc'}]; let i=index\"  [ngClass]=\"chat.Hidden === true ? 'ion-hide' : ''\" style=\"z-index:9999;\" (click)=\"selectChat(chat)\" id=\"chat{{i}}\">\r\n          <ion-row *ngIf=\"!chat.hidden\" [ngClass]=\"chat.Selected ? 'no-padding bubble' : 'no-padding bubble transparent'\" style=\"z-index:9999\">\r\n            <ion-col class=\"no-padding\">\r\n              <ion-text style=\"z-index:9999\" *ngIf=\"!chat.Selected\" [hidden]=\"chat.Hidden\" ng-style=\"chat.Hidden === true ? height: '0px' : ''\">{{chat.ShortText}}</ion-text>\r\n              <ion-text style=\"z-index:9999\" *ngIf=\"chat.Selected\" [hidden]=\"chat.Hidden\" ng-style=\"chat.Hidden === true ? height: '0px' : ''\">{{chat.LongText}}</ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row *ngIf=\"chat.Selected\" class=\"no-padding\" style=\"margin-top: -2px; z-index: 9999\">\r\n            <ion-col class=\"no-padding\" style=\"z-index: 9999;\">\r\n              <img src=\"../assets/TaylorsDip.svg\" class=\"tail\" />\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"z-index:999; margin-top:22em;\">\r\n          <img src=\"../assets/Lookylooky.svg\" style=\"z-index:999\" />\r\n          <img src=\"../assets/FirstAvenulogin.svg\" style=\"padding-top: 1em; z-index: 999\" />\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-button color=\"tertiary\" expand=\"block\" style=\"padding-top: 1em; z-index: 999\" href=\"/tabs/tabs/shop\">Get Started!</ion-button>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"padding-top: 1em; z-index: 999\">\r\n          <ion-text style=\"z-index:999;\"> Already a member? <a href=\"signin\">Login here</a>.</ion-text>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ 5161:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.register.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n    <app-login-background class=\"background\"></app-login-background>\r\n  <ion-grid  style=\"position: absolute; top: 0; left: 0;\">\r\n    <ion-row style=\"margin-top:8em;\">\r\n      <ion-col>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"padding-top:.5em\">\r\n          <img class=\"chat1\" src=\"../assets/LookyTalkRegister.svg\" style=\"z-index:999\" />\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <img class=\"looky\" src=\"../assets/Lookylooky.svg\"style=\"z-index:999\" />\r\n          <img class=\"marquee\" src=\"../assets/FirstAvenulogin.svg\" style=\"padding-top:5px; z-index:999\" />\r\n        </ion-row>\r\n        <ion-row style=\"padding:0em\">\r\n          <ion-col style=\"padding:0em\">\r\n            <ion-card style=\"z-index:999\">\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-input class=\"registration-input\" placeholder=\"First Name\" style=\"border-bottom:1px solid lightgrey;z-index:999; height:min-content\"></ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-input class=\"registration-input\" placeholder=\"Last Name\" style=\"border-bottom: 1px solid lightgrey; z-index: 999;\"></ion-input>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-input class=\"registration-input\" inputmode=\"email\" typeof=\"email\" max=\"100\" pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\" style=\"border-bottom: 1px solid lightgrey; z-index: 999;\" placeholder=\"Email\">\r\n                  </ion-input>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-input class=\"registration-input\" typeof=\"new-password\" min=\"8\" max=\"100\" style=\"border-bottom: 1px solid lightgrey; z-index: 999;\" placeholder=\"Password\">\r\n                  </ion-input>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-input class=\"registration-input\" typeof=\"new-password\" min=\"8\" max=\"100\" style=\"border-bottom: 1px solid lightgrey; z-index: 999;\" placeholder=\"Confirm Password\">\r\n                  </ion-input>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"4\">\r\n                  <ion-input class=\"registration-input\" typeof=\"postal-code\" style=\"border-bottom: 1px solid lightgrey; z-index: 999;\" placeholder=\"Zip Code\">\r\n                  </ion-input>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-text style=\"z-index: 999;\">There is no obligation to make any purchase</ion-text>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-button style=\"z-index: 999;\" color=\"tertiary\" expand=\"full\" href=\"verify\">Show Me More!</ion-button>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-text style=\"z-index: 999;\">Already a member? <a href=\"signin\">Login here</a></ion-text>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 27342:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.signin.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n    <app-login-background class=\"background\"></app-login-background>\r\n  <ion-grid class=\"foreground\" style=\"position: absolute; top: 0; left: 0;\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"padding-top:9em\">\r\n          <img class=\"chat1\" src=\"../assets/LookyTalkSignIn.svg\" style=\"z-index:9999\" />\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"padding:0em\">\r\n          <img class=\"looky\" src=\"../assets/Lookylooky.svg\" style=\"z-index:9999\" />\r\n          <img class=\"marquee\" src=\"../assets/FirstAvenulogin.svg\" style=\"padding-top: 5px; z-index: 9999\" />\r\n        </ion-row>\r\n        <ion-row style=\"padding:0em\">\r\n          <ion-col style=\"padding:0em\">\r\n            <ion-card style=\"z-index:9999\">\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-input inputmode=\"username\" typeof=\"email\" max=\"100\" pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\" style=\"border-bottom: 1px solid lightgrey; z-index: 9999\"[(ngModel)]=\"credentials.Username\" placeholder=\"Email\">\r\n                  </ion-input>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-input typeof=\"current-password\" min=\"8\" max=\"100\" style=\"border-bottom: 1px solid lightgrey; z-index: 9999\"[(ngModel)]=\"credentials.Password\" placeholder=\"Password\">\r\n                  </ion-input>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"padding-top: .25em; z-index:9999\">\r\n          <ion-text style=\" z-index:9999\">Forgot your sign in?</ion-text>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"padding-top: .25em; z-index: 9999\">\r\n          <ion-button color=\"tertiary\" expand=\"full\" style=\"padding-top: 0em; z-index: 9999\" (click)=login()>Log In</ion-button>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"padding-top: .25em; z-index: 9999\">\r\n          <ion-checkbox style=\"z-index:9999\"></ion-checkbox> <ion-label style=\"padding-left:.5em; font-size:small; z-index:9999\">Remember Me!</ion-label>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"padding-top: .25em; z-index: 9999\">\r\n          <ion-text style=\"z-index:9999\">Don't Have an account? <a href=\"app-login-register\">Register here</a></ion-text>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 23107:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.verify.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n    <app-login-background class=\"background\"></app-login-background>\r\n  <ion-grid style=\"position: absolute; top: 0; left: 0; min-width: 100%; min-height: 800px; z-index: 999\">\r\n    <ion-row  style=\"margin-top: 12em; z-index: 999\">\r\n      <ion-col>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"padding-top:.5em\">\r\n          <img class=\"chat1\" style=\"z-index:999\" src=\"../assets/EmailSent.svg\" *ngIf=\"!show\" />\r\n          <img class=\"chat2\" style=\"z-index:999\" src=\"../assets/LookyFound.svg\" *ngIf=\"show\" />\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <img class=\"looky\" style=\"z-index:999\" src=\"../assets/Lookylooky.svg\" />\r\n        </ion-row>\r\n        <ion-row style=\"padding:0em\">\r\n          <ion-col style=\"padding:0em\">\r\n            <ion-card>\r\n              <ion-row class=\"ion-justify-content-center\" style=\"margin-top:4em;\">\r\n                <ion-text class=\"header1\"style=\"z-index:999\" *ngIf=\"!show\">Please verify your email</ion-text>\r\n                <ion-text class=\"header1\"style=\"z-index:999\" *ngIf=\"show\">Thanks [First Name]</ion-text>\r\n              </ion-row>\r\n              <ion-row class=\"ion-justify-content-center\" style=\"margin-top:1em;\">\r\n                <ion-text class=\"body-body\"style=\"z-index:999\" *ngIf=\"!show\">Looky sent a verification email to:</ion-text>\r\n                <ion-text class=\"body-body\" style=\"z-index:999\" *ngIf=\"show\">Email Confirmed</ion-text>\r\n              </ion-row>\r\n              <ion-row class=\"ion-justify-content-center\">\r\n                <ion-text class=\"body-body\"style=\"z-index:999\" *ngIf=\"!show\">[user’s email address]</ion-text>\r\n              </ion-row>\r\n              <ion-row class=\"ion-justify-content-center\" style=\"margin-top:2em;\">\r\n                <ion-button color=\"tertiary\" style=\"z-index:999\" expand=\"full\" (click)=\"show1()\" *ngIf=\"!show\">Resend Email</ion-button>\r\n                <ion-button color=\"tertiary\" style=\"z-index:999\" expand=\"full\" routerLink=\"../tabs/tabs/shop\" *ngIf=\"show\">Done</ion-button>\r\n              </ion-row>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map