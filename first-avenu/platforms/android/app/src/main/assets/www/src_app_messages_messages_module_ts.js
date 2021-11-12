(self["webpackChunkfirst_avenu"] = self["webpackChunkfirst_avenu"] || []).push([["src_app_messages_messages_module_ts"],{

/***/ 69967:
/*!*****************************************************!*\
  !*** ./src/app/messages/messages-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messagesPageRoutingModule": () => (/* binding */ messagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _messages_landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.landing */ 32719);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page */ 63567);





const routes = [
    {
        path: 'messages',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_1__.messagesPage,
    },
    {
        path: 'messages-landing',
        component: _messages_landing__WEBPACK_IMPORTED_MODULE_0__.messagesLanding,
    },
    {
        path: '',
        redirectTo: 'messages-landing',
        pathMatch: 'full'
    }
];
let messagesPageRoutingModule = class messagesPageRoutingModule {
};
messagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], messagesPageRoutingModule);



/***/ }),

/***/ 32719:
/*!**********************************************!*\
  !*** ./src/app/messages/messages.landing.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messagesLanding": () => (/* binding */ messagesLanding)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_messages_landing_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./messages.landing.html */ 89732);
/* harmony import */ var _messages_landing_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.landing.scss */ 55901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let messagesLanding = class messagesLanding {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        };
    }
    ngOnInit() {
    }
};
messagesLanding.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
messagesLanding = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-messages-landing',
        template: _raw_loader_messages_landing_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_messages_landing_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], messagesLanding);



/***/ }),

/***/ 84812:
/*!*********************************************!*\
  !*** ./src/app/messages/messages.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messagesPageModule": () => (/* binding */ messagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page */ 63567);
/* harmony import */ var _utilities_explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/explore-container/explore-container.module */ 89716);
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages-routing.module */ 69967);
/* harmony import */ var _messages_landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages.landing */ 32719);
/* harmony import */ var _nav_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav/nav */ 25780);










let messagesPageModule = class messagesPageModule {
    constructor() {
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true,
            speed: 400
        };
    }
};
messagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _utilities_explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _messages_routing_module__WEBPACK_IMPORTED_MODULE_2__.messagesPageRoutingModule
        ],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_0__.messagesPage, _messages_landing__WEBPACK_IMPORTED_MODULE_3__.messagesLanding, _nav_nav__WEBPACK_IMPORTED_MODULE_4__.NavPage]
    })
], messagesPageModule);



/***/ }),

/***/ 63567:
/*!*******************************************!*\
  !*** ./src/app/messages/messages.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messagesPage": () => (/* binding */ messagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./messages.page.html */ 13273);
/* harmony import */ var _messages_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page.scss */ 42969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let messagesPage = class messagesPage {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
    }
};
messagesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
messagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-messages',
        template: _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_messages_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], messagesPage);



/***/ }),

/***/ 55901:
/*!************************************************!*\
  !*** ./src/app/messages/messages.landing.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  border-radius: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmxhbmRpbmcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0YiLCJmaWxlIjoibWVzc2FnZXMubGFuZGluZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 42969:
/*!*********************************************!*\
  !*** ./src/app/messages/messages.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  border-radius: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0YiLCJmaWxlIjoibWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 89732:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.landing.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-slides [options]=\"{ slidesPerView:1, autoplay: {delay: 10000} }\" pager=\"true\">\r\n        <ion-slide>\r\n          <img src=\"../assets/message1.png\" />\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <img src=\"../assets/message2.png\" />\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <img src=\"../assets/message3.png\" />\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\" style=\"padding-top:4em;\">\r\n    <ion-col>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <a>Turn On Notifications</a>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <ion-button color=\"tertiary\" routerLink=\"../messages\">Let's Go</ion-button>\r\n  </ion-row>\r\n</ion-content>\r\n<ion-footer>\r\n \r\n</ion-footer>\r\n");

/***/ }),

/***/ 13273:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav></nav>\r\n\r\n<ion-content [fullscreen]=\"false\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <p>Hello & Welcome to the First Avenu Messages</p>\r\n            <p>To start a new conversation, select from the options below or begin typing a new message.</p>\r\n            <p>Please do not share any sensitive account information here, such as account password or expiration dates.</p>\r\n            <p>this session may be monitored</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-textarea class=\"message-input\" placeholder=\"Type a message here\" rows=\"1\" autocapitalize=\"off\"\r\n                  #messageInput\r\n                  (keydown.enter)=\"sendMessage();false\"></ion-textarea>\r\n    <ion-send-button slot=\"end\">\r\n      <ion-button (click)=\"sendMessage()\">\r\n        <ion-icon slot=\"icon-only\" name=\"send-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-send-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_messages_messages_module_ts.js.map