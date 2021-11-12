(self["webpackChunkfirst_avenu"] = self["webpackChunkfirst_avenu"] || []).push([["src_app_nav_tabs_tabs_module_ts"],{

/***/ 34820:
/*!*************************************************!*\
  !*** ./src/app/nav/tabs/tabs-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 80427);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'shop',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_http_service_ts"), __webpack_require__.e("default-src_app_nav_nav_ts-src_app_utilities_explore-container_explore-container_module_ts"), __webpack_require__.e("src_app_shop_shop_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../shop/shop.module */ 7838)).then(m => m.shopPageModule)
            },
            {
                path: 'shop/vacations',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_http_service_ts"), __webpack_require__.e("default-src_app_nav_nav_ts-src_app_utilities_explore-container_explore-container_module_ts"), __webpack_require__.e("src_app_shop_shop_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../shop/shop.module */ 7838)).then(m => m.shopPageModule)
            },
            {
                path: 'messages',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_http_service_ts"), __webpack_require__.e("default-src_app_nav_nav_ts-src_app_utilities_explore-container_explore-container_module_ts"), __webpack_require__.e("src_app_messages_messages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../messages/messages.module */ 84812)).then(m => m.messagesPageModule)
            },
            {
                path: 'account',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_http_service_ts"), __webpack_require__.e("default-src_app_nav_nav_ts-src_app_utilities_explore-container_explore-container_module_ts"), __webpack_require__.e("src_app_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../account/account.module */ 63879)).then(m => m.accountPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/shop',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: './login/login.module',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 92727:
/*!*****************************************!*\
  !*** ./src/app/nav/tabs/tabs.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 34820);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 80427);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 80427:
/*!***************************************!*\
  !*** ./src/app/nav/tabs/tabs.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 92721);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 64504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 64504:
/*!*****************************************!*\
  !*** ./src/app/nav/tabs/tabs.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 92721:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/tabs/tabs.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"shop\">\r\n      <ion-icon src=\"./assets/icon/LookyIcon.svg\"></ion-icon>\r\n      <ion-label>Shop</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"messages\">\r\n      <ion-icon src=\"./assets/icon/Message.svg\"></ion-icon>\r\n      <ion-label>Messages</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"account\">\r\n      <ion-icon src=\"./assets/icon/Account.svg\"></ion-icon>\r\n      <ion-label>Account</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_nav_tabs_tabs_module_ts.js.map