"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_promotion_promotion_module_ts"],{

/***/ 3973:
/*!*************************************************************!*\
  !*** ./src/app/pages/promotion/promotion-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionPageRoutingModule": () => (/* binding */ PromotionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _promotion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion.page */ 1242);




const routes = [
    {
        path: '',
        component: _promotion_page__WEBPACK_IMPORTED_MODULE_0__.PromotionPage
    }
];
let PromotionPageRoutingModule = class PromotionPageRoutingModule {
};
PromotionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PromotionPageRoutingModule);



/***/ }),

/***/ 2145:
/*!*****************************************************!*\
  !*** ./src/app/pages/promotion/promotion.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionPageModule": () => (/* binding */ PromotionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _promotion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion-routing.module */ 3973);
/* harmony import */ var _promotion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion.page */ 1242);







let PromotionPageModule = class PromotionPageModule {
};
PromotionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _promotion_routing_module__WEBPACK_IMPORTED_MODULE_0__.PromotionPageRoutingModule
        ],
        declarations: [_promotion_page__WEBPACK_IMPORTED_MODULE_1__.PromotionPage]
    })
], PromotionPageModule);



/***/ }),

/***/ 1242:
/*!***************************************************!*\
  !*** ./src/app/pages/promotion/promotion.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionPage": () => (/* binding */ PromotionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _promotion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion.page.html?ngResource */ 1924);
/* harmony import */ var _promotion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion.page.scss?ngResource */ 8445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let PromotionPage = class PromotionPage {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
    goBack() {
        this.nav.pop();
    }
};
PromotionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
PromotionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-promotion',
        template: _promotion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_promotion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PromotionPage);



/***/ }),

/***/ 8445:
/*!****************************************************************!*\
  !*** ./src/app/pages/promotion/promotion.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9tb3Rpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1924:
/*!****************************************************************!*\
  !*** ./src/app/pages/promotion/promotion.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\">\n        <ion-back-button></ion-back-button>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> Promotion </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img src=\"../../../assets/imgs/promo.svg\"></ion-img>\n\n  <ion-list-header style=\"margin-top: 10%\">\n    <ion-label color=\"primary\" class=\"ion-text-center\">\n      <h1>No Promo yet</h1>\n      <p>unfortunately we have no promos yet.</p></ion-label>\n</ion-list-header>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_promotion_promotion_module_ts.js.map