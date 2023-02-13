"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_phone-detail_phone-detail_module_ts"],{

/***/ 7329:
/*!*******************************************************************!*\
  !*** ./src/app/pages/phone-detail/phone-detail-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneDetailPageRoutingModule": () => (/* binding */ PhoneDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _phone_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-detail.page */ 8465);




const routes = [
    {
        path: '',
        component: _phone_detail_page__WEBPACK_IMPORTED_MODULE_0__.PhoneDetailPage
    }
];
let PhoneDetailPageRoutingModule = class PhoneDetailPageRoutingModule {
};
PhoneDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PhoneDetailPageRoutingModule);



/***/ }),

/***/ 7112:
/*!***********************************************************!*\
  !*** ./src/app/pages/phone-detail/phone-detail.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneDetailPageModule": () => (/* binding */ PhoneDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _phone_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-detail-routing.module */ 7329);
/* harmony import */ var _phone_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-detail.page */ 8465);







let PhoneDetailPageModule = class PhoneDetailPageModule {
};
PhoneDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _phone_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhoneDetailPageRoutingModule
        ],
        declarations: [_phone_detail_page__WEBPACK_IMPORTED_MODULE_1__.PhoneDetailPage]
    })
], PhoneDetailPageModule);



/***/ }),

/***/ 8465:
/*!*********************************************************!*\
  !*** ./src/app/pages/phone-detail/phone-detail.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneDetailPage": () => (/* binding */ PhoneDetailPage)
/* harmony export */ });
/* harmony import */ var _workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _phone_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-detail.page.html?ngResource */ 4173);
/* harmony import */ var _phone_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone-detail.page.scss?ngResource */ 1210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_otp_otp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/otp/otp.component */ 3096);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/avatar.service */ 5083);
/* harmony import */ var src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/overlay.service */ 5596);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 2340);














let PhoneDetailPage = class PhoneDetailPage {
  constructor(modalCtrl, auth, authy, router, nav, authY, avatar, overlay, route) {
    this.modalCtrl = modalCtrl;
    this.auth = auth;
    this.authy = authy;
    this.router = router;
    this.nav = nav;
    this.authY = authY;
    this.avatar = avatar;
    this.overlay = overlay;
    this.route = route;
    this.CountryCode = '+1';
    this.CountryJson = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.CountryJson;
    this.flag = "https://cdn.kcak11.com/CountryFlags/countries/ng.svg";
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.details = params["details"];
    });
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(10)]
      })
    });
  }

  countryCodeChange($event) {
    console.log($event.detail.value.toString());
    this.CountryCode = $event.detail.value.toString();
  }

  signIn() {
    var _this = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.approve2) try {
        if (!_this.form.valid) {
          _this.form.markAllAsTouched();

          return;
        }

        console.log(_this.form.value);
        _this.approve2 = true;
        console.log(_this.details);
        const response = yield _this.auth.signInWithPhoneNumber(_this.CountryCode + _this.form.value.phone);
        _this.approve2 = false;
        const options = {
          component: src_app_otp_otp_component__WEBPACK_IMPORTED_MODULE_3__.OtpComponent,
          componentProps: {
            phone: _this.form.value.phone,
            countryCode: _this.CountryCode
          },
          swipeToClose: true
        };

        const modal = _this.modalCtrl.create(options);

        (yield modal).present();
        const data = (yield modal).onWillDismiss();

        _this.authy.onAuthStateChanged( /*#__PURE__*/function () {
          var _ref = (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
            if (user) {
              const result = yield _this.avatar.createUser(_this.details.user.displayName, _this.details.user.email, _this.details.user.photoURL || '', _this.CountryCode + _this.form.value.phone, user.uid);
              yield _this.avatar.createCard('Cash', 0, 'cash', 'None');

              _this.router.navigateByUrl('home');
            }

            _this.overlay.hideLoader();
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } catch (e) {
        console.log(e);

        _this.overlay.showAlert('Error', JSON.stringify(e));

        _this.approve2 = false;
      }
    })();
  }

};

PhoneDetailPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.Auth
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
}, {
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.Auth
}, {
  type: src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_5__.AvatarService
}, {
  type: src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_6__.OverlayService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}];

PhoneDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-phone-detail',
  template: _phone_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_phone_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PhoneDetailPage);


/***/ }),

/***/ 1210:
/*!**********************************************************************!*\
  !*** ./src/app/pages/phone-detail/phone-detail.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "@keyframes slide-left {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100px);\n  }\n}\n@keyframes slide-right {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(100px);\n  }\n}\n.slide-left {\n  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n.slide-right {\n  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\nion-footer ion-row {\n  background: transparent;\n  display: block;\n}\nion-footer ion-row ion-fab-button {\n  margin-right: 2.5vh;\n}\nion-footer ion-row ion-list ion-list-header ion-label {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\nion-footer ion-row ion-list ion-input, ion-footer ion-row ion-list ion-text {\n  font-size: 1rem;\n  font-weight: bold;\n}\nion-footer ion-row ion-list .error {\n  font-size: 0.75em !important;\n}\nion-toolbar, ion-header {\n  height: 44px;\n}\nion-img {\n  margin: auto;\n  width: auto;\n}\nion-slides {\n  height: 440px;\n}\n.pm-awesome-divider {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSTtJQUNFLHdCQUFBO0VBQUo7RUFFRTtJQUNFLDZCQUFBO0VBQUo7QUFDRjtBQUdFO0VBQ0U7SUFDRSx3QkFBQTtFQURKO0VBR0U7SUFDRSw0QkFBQTtFQURKO0FBQ0Y7QUFJQTtFQUNDLG9FQUFBO0FBRkQ7QUFLQTtFQUNDLHFFQUFBO0FBRkQ7QUFNSTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQUhSO0FBSVE7RUFDSSxtQkFBQTtBQUZaO0FBUWdCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQU5wQjtBQVNZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBUGhCO0FBVVE7RUFDSSw0QkFBQTtBQVJaO0FBY0E7RUFFRSxZQUFBO0FBWkY7QUFlQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBWkY7QUFlQTtFQUNFLGFBQUE7QUFaRjtBQWdCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBYkoiLCJmaWxlIjoicGhvbmUtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBzbGlkZS1yaWdodCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XG4gICAgfVxuICB9XG4gIFxuLnNsaWRlLWxlZnQge1xuXHRhbmltYXRpb246IHNsaWRlLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG59XG5cbi5zbGlkZS1yaWdodCB7XG5cdGFuaW1hdGlvbjogc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG59XG5cbmlvbi1mb290ZXIge1xuICAgIGlvbi1yb3cge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMi41dmg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxpc3Qge1xuICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgICAgICAgICAgIC8vICAgcGFkZGluZy1ib3R0b206IDh2aDtcbiAgICAgICAgICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pbnB1dCwgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tdG9vbGJhciwgaW9uLWhlYWRlcntcbiBcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG5pb24taW1ne1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA0NDBweDtcbn1cblxuXG4ucG0tYXdlc29tZS1kaXZpZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuIl19 */";

/***/ }),

/***/ 4173:
/*!**********************************************************************!*\
  !*** ./src/app/pages/phone-detail/phone-detail.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-list lines=\"none\">\n    <ion-list-header class=\"ion-padding-top\" >\n      <ion-label color=\"primary\" class=\"ion-text-center\">\n        <h1>Enter Phone Number</h1>\n        </ion-label>\n  </ion-list-header>\n\n\n      \n    <ion-item-group class=\"ion-margin-horizontal\">\n      <form [formGroup]=\"form\">\n\n        <div id=\"sign-in-button\"></div>\n\n        <div class=\"ion-margin-vertical\">\n          \n          <ion-item class=\"ion-margin\">\n               <ion-label>{{CountryCode}}</ion-label>\n              <ion-select interface=\"action-sheet\" (ionChange)=\"countryCodeChange($event)\">\n                <ion-select-option *ngFor=\"let country of CountryJson\">\n                    {{country.dialCode}} {{country.name}}\n                </ion-select-option>\n              </ion-select>\n         \n\n            <ion-input \n              formControlName=\"phone\" \n              placeholder=\"Enter Mobile Number\" \n              type=\"tel\"\n              clearInput\n              minlength=\"10\"\n              maxlength=\"10\">\n            </ion-input>\n          </ion-item>\n\n\n          <ion-text *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">\n            <ion-text class=\"error\" *ngIf=\"form.get('phone').hasError('required')\" color=\"danger\">\n              * Please enter the Mobile Number\n            </ion-text>\n            <ion-text class=\"error\" *ngIf=\"form.get('phone').hasError('minlength') \n              && !form.get('phone').hasError('required')\" color=\"danger\">\n              * Please enter a valid Mobile Number\n            </ion-text>\n          </ion-text>\n            \n        </div>\n\n        \n            <ion-button shape=\"round\" size=\"large\" type=\"submit\" [disabled]=\"!form.get('phone').valid\" color=\"secondary\" (click)=\"signIn()\" expand=\"block\">\n              <ion-label *ngIf=\"!approve2\">Continue</ion-label>\n              <ion-icon *ngIf=\"!approve2\" color='light' slot=\"end\" name=\"arrow-forward\"></ion-icon>\n              <ion-progress-bar *ngIf=\"approve2\" color='light' type=\"indeterminate\"></ion-progress-bar>\n            </ion-button>\n        \n\n      </form>\n\n\n    \n\n    </ion-item-group>\n\n\n\n\n      </ion-list>\n</ion-header>\n\n\n<ion-content class=\"ion-no-border\">\n\n    <ion-list class=\"ion-no-padding\" lines=\"none\">\n     \n    </ion-list>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_phone-detail_phone-detail_module_ts.js.map