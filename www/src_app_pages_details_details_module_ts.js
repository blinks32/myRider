"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details_module_ts"],{

/***/ 6244:
/*!*********************************************************!*\
  !*** ./src/app/pages/details/details-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 5362);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ 557:
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 6244);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 5362);







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage]
    })
], DetailsPageModule);



/***/ }),

/***/ 5362:
/*!***********************************************!*\
  !*** ./src/app/pages/details/details.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var _workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.html?ngResource */ 6366);
/* harmony import */ var _details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.page.scss?ngResource */ 791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/avatar.service */ 5083);
/* harmony import */ var src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/overlay.service */ 5596);











let DetailsPage = class DetailsPage {
  constructor(overlay, authy, auth, avatar, router) {
    this.overlay = overlay;
    this.authy = authy;
    this.auth = auth;
    this.avatar = avatar;
    this.router = router;
  }

  ngOnInit() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(200)]
      }),
      lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(200)]
      }),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(200)]
      })
    });
  }

  signIn() {
    var _this = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this.form.valid) {
          _this.form.markAllAsTouched();

          return;
        }

        _this.overlay.showLoader("");

        _this.authy.onAuthStateChanged( /*#__PURE__*/function () {
          var _ref = (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
            const result = yield _this.avatar.createUser(_this.form.value.fullname + '' + _this.form.value.lastname, _this.form.value.email, '', user.phoneNumber, user.uid);

            if (!result) {
              _this.overlay.showAlert('Upload failed', 'There was a problem uploading your avatar.');
            } else {
              yield _this.avatar.createCard('Cash', 0, 'cash', 'None');

              _this.overlay.hideLoader();

              _this.router.navigateByUrl('home');
            }

            console.log("Uploaded");
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } catch (e) {
        console.log(e);
      }
    })();
  }

};

DetailsPage.ctorParameters = () => [{
  type: src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_5__.OverlayService
}, {
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.Auth
}, {
  type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__.AvatarService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}];

DetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-details',
  template: _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DetailsPage);


/***/ }),

/***/ 791:
/*!************************************************************!*\
  !*** ./src/app/pages/details/details.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-footer ion-row {\n  background: transparent;\n  display: block;\n}\nion-footer ion-row ion-fab-button {\n  margin-right: 2.5vh;\n}\nion-footer ion-row ion-list ion-list-header ion-label {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\nion-footer ion-row ion-list ion-input, ion-footer ion-row ion-list ion-text {\n  font-size: 1rem;\n  font-weight: bold;\n}\nion-footer ion-row ion-list .error {\n  font-size: 0.75em !important;\n}\nion-toolbar, ion-header {\n  height: 44px;\n}\nion-img {\n  margin: auto;\n  width: auto;\n}\nion-slides {\n  height: 440px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0FBRFI7QUFFUTtFQUNJLG1CQUFBO0FBQVo7QUFNZ0I7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBSnBCO0FBT1k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFMaEI7QUFRUTtFQUNJLDRCQUFBO0FBTlo7QUFZQTtFQUVFLFlBQUE7QUFWRjtBQWFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFWRjtBQWFBO0VBQ0UsYUFBQTtBQVZGIiwiZmlsZSI6ImRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tZm9vdGVyIHtcbiAgICBpb24tcm93IHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIuNXZoO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1saXN0IHtcbiAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG4gICAgICAgICAgICAvLyAgIHBhZGRpbmctYm90dG9tOiA4dmg7XG4gICAgICAgICAgICBpb24tbGlzdC1oZWFkZXIge1xuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taW5wdXQsIGlvbi10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXJ7XG4gXG4gIGhlaWdodDogNDRweDtcbn1cblxuaW9uLWltZ3tcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogNDQwcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 6366:
/*!************************************************************!*\
  !*** ./src/app/pages/details/details.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border ion-padding\">\n  <ion-list>\n    <ion-list-header class=\"ion-padding-top\" >\n      <ion-label color=\"primary\" class=\"ion-text-center\">\n        <h1>Personal Info</h1>\n        </ion-label>\n  </ion-list-header>\n\n\n      \n    <ion-item-group class=\"ion-margin-horizontal\">\n      <form [formGroup]=\"form\">\n\n\n        <div class=\"ion-margin-vertical\">\n          \n          <ion-item class=\"ion-margin\">\n\n\n            <ion-input \n              formControlName=\"fullname\" \n              placeholder=\"First Name\" \n              type=\"text\"\n              minlength=\"1\"\n              maxlength=\"200\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin\">\n\n            <ion-input \n              formControlName=\"lastname\" \n              placeholder=\"Last Name\" \n              type=\"text\"\n              minlength=\"1\"\n              maxlength=\"200\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin\">\n            <ion-input \n            formControlName=\"email\" \n            placeholder=\"Your Email\" \n            type=\"text\"\n            minlength=\"1\"\n            maxlength=\"200\">\n          </ion-input>\n          </ion-item>\n\n        </div>\n\n      </form>\n\n\n      <ion-button size=\"large\" type=\"submit\" [disabled]=\"!form.valid\" color=\"primary\" (click)=\"signIn()\" expand=\"block\">\n       Continue\n        <ion-icon  color='light' slot=\"end\" name=\"arrow-forward\"></ion-icon>\n       \n      </ion-button>\n\n    </ion-item-group>\n\n\n\n\n      </ion-list>\n</ion-header>\n\n\n<ion-content class=\"ion-no-border\">\n\n    <ion-list class=\"ion-no-padding\" lines=\"none\">\n     \n    </ion-list>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details_module_ts.js.map