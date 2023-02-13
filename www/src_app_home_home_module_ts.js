"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../autocomplete/autocomplete.component */ 5860);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _services_geocode_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/geocode.service */ 8793);
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/map.service */ 9947);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/auth.service */ 7556);










 // import { Marker } from '@capacitor/google-maps';






let HomePage = class HomePage {
  constructor(authService, auth, map, nav, platform, firestore, database, ngZone, geocode, overlay, modalCtrl) {
    this.authService = authService;
    this.auth = auth;
    this.map = map;
    this.nav = nav;
    this.platform = platform;
    this.firestore = firestore;
    this.database = database;
    this.ngZone = ngZone;
    this.geocode = geocode;
    this.overlay = overlay;
    this.modalCtrl = modalCtrl;
    this.profile = null;
    this.address = 'Unknown';
    this.cash = false;
    this.state = [];
    this.showResetLocationButton = false;
    this.destinationAddress = 'Drag To Pick Destination';
    this.locationAddress = 'Loading...';
    this.price = 0;
    this.current_Request_Number = -1;
  } //start the scene


  ngOnInit() {
    var _this = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.EnterBookingStage();

        yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__.Geolocation.checkPermissions();
        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__.Geolocation.getCurrentPosition();
        _this.coordinates = coordinates;
        yield _this.map.createMap(_this.mapRef.nativeElement, coordinates);
        _this.mapy = true;

        _this.database.getCards().subscribe(d => {
          console.log(d);
          _this.cards = d;

          _this.cards.forEach(element => {
            console.log(element);

            if (element.selected == true) {
              _this.selected = element;
              _this.selectedCard = element.name;
              if (_this.selectedCard == 'cash') _this.cash = true;
              console.log(_this.selectedCard);
            }
          });
        });

        _this.database.getKnownPlaces().subscribe(d => {
          _this.places = d.slice(0, 3);
          _this.places;
          console.log(d);
        });

        _this.actualLocation = _this.map.actualLocation;
        _this.locationAddress = _this.map.locationAddress;
        _this.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        }; //this.database.CreateNewDriver(coordinates);

        _this.map.newMap.setOnCameraIdleListener(g => {
          _this.ngZone.run(() => {
            _this.showResetLocationButton = true;
          });
        });

        _this.map.newMap.setOnCameraIdleListener(g => {
          _this.ngZone.run( /*#__PURE__*/(0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            console.log(g);

            if (_this.mapPinStage) {
              const address = yield _this.geocode.getAddress(g.latitude, g.longitude);
              _this.D_LatLng = {
                lat: g.latitude,
                lng: g.longitude
              };
              _this.actualDestination = _this.map.actualLocation;
              ;
              _this.destinationAddress = address.data.results[1].address_components[0].long_name + ' ' + address.data.results[1].address_components[1].long_name;
            }
          }));
        });

        yield _this.map.newMap.enableCurrentLocation(true);
        _this.price = null;
      } catch (e) {
        _this.overlay.showAlert('Error', e);
      }

      yield _this.checkDriversAround(_this.coordinates);
    })();
  }

  logout() {
    var _this2 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.authService.logout();
    })();
  }

  ionViewDidLeave() {
    if (this.listen) this.listen.unsubscribe();
  }

  ionViewDidEnter() {
    var _this3 = this;

    if (this.coordinates) this.listen = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(5000).subscribe( /*#__PURE__*/(0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.checkDriversAround(_this3.coordinates);
    }));
  }

  simulateDriverAPP() {
    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let coords = {
        coords: {
          latitude: 51.5074,
          longitude: 0.1278
        }
      };
    })();
  } /// Show all drivers around the user and reset marker states


  checkDriversAround(cord) {
    var _this4 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let numbs = [];
        const center = [cord.coords.latitude, cord.coords.longitude];
        const radiusInM = 500 * 1000;
        const drivers = yield _this4.database.checkDriversWithin(center, radiusInM); //Start Listening for any changes within;

        _this4.current_Request_Number = 0;
        console.log("Should show drivers here  " + drivers);

        if (drivers.length == 0) {
          _this4.NoDrivers = true;
        } else {
          _this4.NoDrivers = false;
          console.log(drivers);
          _this4.drivers_Requested = [];
          _this4._carmarkers = [];
          drivers.forEach((element, key, arr) => {
            numbs.push(element.duration);
            const min = Math.min(...numbs);
            _this4.driver_duration_apart = min;

            if (element.duration <= 1000 && element.onlineState == true) {
              _this4.drivers_Requested.push(element);

              console.log(_this4.drivers_Requested);
              _this4.carname = _this4.drivers_Requested[0].Driver_car;
              _this4.driver_ID = _this4.drivers_Requested[0].Driver_id;
              _this4.driver_number_of_seats = _this4.drivers_Requested[0].seats;
              _this4.DriverLatLng = {
                lat: _this4.drivers_Requested[0].Driver_lat,
                lng: _this4.drivers_Requested[0].Driver_lng
              }; //  alert(this.drivers_Requested[0]);
            } else {
              if (Object.is(arr.length - 1, key)) {
                _this4.NoDrivers = true;
              }
            } //alert(JSON.stringify(element));
            // console.log(min);
            // console.log(element);


            _this4.closeDrivers = element;
          });
        }
      } catch (e) {
        _this4.overlay.showAlert('Error', e);
      }
    })();
  }

  chooseCard(even) {
    var _this5 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(even);

      _this5.overlay.showLoader('Please wait..');

      yield _this5.database.updateCArd(_this5.selected.name, _this5.selected.number, _this5.selected.type, _this5.selected.id, false);

      _this5.cards.forEach( /*#__PURE__*/function () {
        var _ref3 = (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (element) {
          console.log(element);

          if (element.name == even.detail.value) {
            yield _this5.database.updateCArd(element.name, element.number, element.type, element.id, true);

            _this5.overlay.hideLoader();
          }
        });

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }

  StartRide() {
    var _this6 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this6.marker1) {
          yield _this6.map.newMap.removeMarker(_this6.marker1.toString());
          _this6.marker1 = null;
          console.log('removed ', _this6.marker1);
        }

        if (_this6.marker2) {
          yield _this6.map.newMap.removeMarker(_this6.marker2.toString());
          _this6.marker2 = null;
          console.log('removed ', _this6.marker2);
        }

        if (_this6._carmarkers) {
          _this6._carmarkers.forEach( /*#__PURE__*/function () {
            var _ref4 = (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (element) {
              console.log(element, _this6._carmarkers);
              yield _this6.map.newMap.removeMarker(element);
              console.log('removed ', element);
              _this6._carmarkers = null;
            });

            return function (_x2) {
              return _ref4.apply(this, arguments);
            };
          }());
        }

        _this6.map.newMap.enableCurrentLocation(false);

        _this6.BookRide();
      } catch (e) {
        _this6.overlay.showAlert('MArker Error', e);
      }
    })();
  }

  BookRide() {
    var _this7 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this7.overlay.showLoader('');

      if (_this7.driver_marker) {
        yield _this7.map.newMap.removeMarker(_this7.driver_marker);
        _this7.driver_marker = null;
      }

      if (_this7.rider_marker) {
        yield _this7.map.newMap.removeMarker(_this7.rider_marker);
        _this7.rider_marker = null;
      }

      let driver = _this7.drivers_Requested[_this7.current_Request_Number];
      const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(_this7.firestore, `Request`, driver.Driver_id);
      const unsub = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.onSnapshot)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(_this7.firestore, "Drivers", driver.Driver_id), /*#__PURE__*/function () {
        var _ref5 = (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (doc) {
          if (_this7.price && doc.data().onlineState == true) {
            unsub();
            yield _this7.database.RequestRideWithRiderDetails(_this7.LatLng, _this7.destinationAddress, _this7.locationAddress, _this7.D_LatLng, driver.Driver_id, _this7.price, _this7.cash); //alert(driver);
            //  if (driver != undefined){

            _this7.currentDriver = driver;
            console.log(driver); // doc.data() is never undefined for query doc snapshots

            console.log(doc.data()); // Driver Things;

            _this7.DriverLatLng = {
              lat: _this7.drivers_Requested[_this7.current_Request_Number].Driver_lat,
              lng: _this7.drivers_Requested[_this7.current_Request_Number].Driver_lng
            };
            yield _this7.createAndMoveMarkersOnRealtime(_this7.DriverLatLng, false, false);

            _this7.overlay.hideLoader();

            _this7.EnterSearchingStage(); //after some time check if the next element has a driver if no request from driver, then close request and start a new request.


            console.log('This is the driver ' + driver);

            _this7.startTimer(driver, 20);

            _this7.numCalls = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(20000).subscribe( /*#__PURE__*/(0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              // await this.database.updateDriverOnlineState(driver.Driver_id)
              // await this.database.CreateandUpdateDriver(coords, driver.Driver_id)
              _this7.countDown.unsubscribe(); ///if the the there is still a driver in the array then call him else cancel the request


              if (_this7.drivers_Requested[_this7.current_Request_Number + 1] != null) {
                _this7.current_Request_Number++;
                console.log(driver);

                _this7.BookRide();

                _this7.unsubscribe();

                _this7.numCalls.unsubscribe();

                console.log('requested another driver' + _this7.current_Request_Number);
              } else {
                _this7.numCalls.unsubscribe();

                _this7.unsubscribe();

                _this7.GoHome();

                console.log('No more Drivers To Request' + _this7.current_Request_Number);

                if (_this7.driver_marker) {
                  yield _this7.map.newMap.removeMarker(_this7.driver_marker.toString());
                  _this7.driver_marker = null;
                }

                if (_this7.rider_marker) {
                  yield _this7.map.newMap.removeMarker(_this7.rider_marker.toString());
                  _this7.rider_marker = null;
                }
              }
            }));
            _this7.unsubscribe = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.onSnapshot)(userDocRef, /*#__PURE__*/function () {
              var _ref7 = (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (doc) {
                // console.log(snapshot);
                //If the driver rejects the request then close request and start a new one     
                if (doc.data().cancel == true) {
                  _this7.countDown.unsubscribe();

                  _this7.numCalls.unsubscribe(); ///if the the there is still a driver in the array then call him else cancel the request


                  if (_this7.drivers_Requested[_this7.current_Request_Number + 1].Driver_id) {
                    _this7.current_Request_Number++;

                    _this7.BookRide();

                    _this7.unsubscribe();

                    console.log('requested another driver' + _this7.current_Request_Number);
                  } else {
                    _this7.unsubscribe();

                    _this7.GoHome();

                    console.log('No more Drivers To Request' + _this7.current_Request_Number);

                    if (_this7.driver_marker) {
                      yield _this7.map.newMap.removeMarker(_this7.driver_marker.toString());
                      _this7.driver_marker = null;
                    }

                    if (_this7.rider_marker) {
                      yield _this7.map.newMap.removeMarker(_this7.rider_marker.toString());
                      _this7.rider_marker = null;
                    }
                  } //  await this.database.RestartRequestSinceReject(this.drivers_Requested[this.current_Request_Number].id)

                }

                if (doc.data().start == true) {
                  _this7.driverInfo = doc.data();

                  if (_this7.canCheck) {
                    //show rider marker going to destination on realtime with updates;
                    _this7.canCheck = false;

                    _this7.clearPrevMarkers();

                    _this7.updateDriverSubcription = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(4000).subscribe( /*#__PURE__*/(0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                      yield _this7.createAndMoveMarkersOnRealtime(_this7.D_LatLng, true, true);
                      _this7.canCheck = true;
                    }));
                  }

                  console.log(doc.data());

                  _this7.EnterDrivingToDestinationStage();

                  if (doc.data().cancel == true) {
                    if (!_this7.riderCleared) {
                      _this7.overlay.showAlert('Driver', 'Cancelled');
                    } else {
                      _this7.overlay.showAlert('You', 'Cancelled');
                    }

                    _this7.unsubscribe();

                    _this7.GoHome();
                  }
                }

                if (doc.data().stop == true) {
                  _this7.unsubscribe(); //this.overlay.showAlert('Ride', 'Completed');


                  _this7.ClearRide();

                  yield _this7.database.createHistory(doc.data());
                  if (_this7.countDown) _this7.countDown.unsubscribe();
                }

                if (doc.data().Driver_name && doc.data().stop == false && doc.data().start == false && doc.data().cancel == false) {
                  _this7.driverInfo = doc.data();

                  _this7.countDown.unsubscribe();

                  _this7.numCalls.unsubscribe();

                  _this7.DriverLatLng = {
                    lat: doc.data().Driver_lat,
                    lng: doc.data().Driver_lng
                  };

                  if (_this7.canCheck) {
                    // show rider marker and driver marker coming together;
                    _this7.canCheck = false;

                    _this7.clearPrevMarkers();

                    _this7.updateDriverSubcription = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(4000).subscribe( /*#__PURE__*/(0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                      _this7.canCheck = true;
                      yield _this7.createAndMoveMarkersOnRealtime(_this7.DriverLatLng, true, false);
                    }));
                  }

                  console.log(doc.data());

                  _this7.EnterTrackingStage();
                }
              });

              return function (_x4) {
                return _ref7.apply(this, arguments);
              };
            }()); // timer(10000).subscribe(async ()=>{
            //   this.database.PushDriverToRequest(driver);
            //  })
          } else {
            if (_this7.countDown) _this7.countDown.unsubscribe();

            if (_this7.drivers_Requested[_this7.current_Request_Number + 1] != null) {
              _this7.current_Request_Number++;
              console.log(driver);

              _this7.BookRide();

              console.log('requested another driver' + _this7.current_Request_Number);
            } else {
              _this7.GoHome();

              _this7.overlay.showAlert('Busy', 'The Requested Driver is currently Busy, Please Try again');

              console.log('No more Drivers To Request' + _this7.current_Request_Number);
            }
          } // }else{
          //   this.NoDrivers = true;
          //   this.EnterNoDriverStage();
          // }

        });

        return function (_x3) {
          return _ref5.apply(this, arguments);
        };
      }());
    })();
  }

  startTimer(driver, sec) {
    var _this8 = this;

    this.countDown = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(1000).subscribe( /*#__PURE__*/(0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this8.database.UpdateCountDown(sec, driver);
      sec--;

      if (sec == 0) {
        _this8.countDown.unsubscribe();
      }
    }));
  }

  goBackTOAutocomplete() {
    var _this9 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this9.marker1) {
        yield _this9.map.newMap.removeMarker(_this9.marker1);
        _this9.marker1 = null;
      }

      if (_this9.marker2) {
        yield _this9.map.newMap.removeMarker(_this9.marker2);
        _this9.marker2 = null;
      }

      if (_this9._carmarkers) {
        _this9._carmarkers.forEach( /*#__PURE__*/function () {
          var _ref11 = (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (element) {
            console.log(element, _this9._carmarkers);
            yield _this9.map.newMap.removeMarker(element);
            console.log('removed ', element);
          });

          return function (_x5) {
            return _ref11.apply(this, arguments);
          };
        }());
      }

      _this9.showAutocompleteModal();
    })();
  } //open the search section for autocomplete


  showAutocompleteModal() {
    var _this10 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        component: _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__.AutocompleteComponent,
        componentProps: {
          LatLng: _this10.LatLng,
          locationAddress: _this10.locationAddress
        },
        swipeToClose: true
      }; // this.map.newMap.hide();

      const modal = yield _this10.modalCtrl.create(options);
      modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      console.log(data); // this.map.newMap.show();

      _this10.data = data;

      if (data.pinOnMap) {
        _this10.EnterMapPinStage();

        _this10.mapPinDrag = true;
      }

      if (data.home) {
        _this10.EnterBookingStage();

        yield _this10.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this10.LatLng
        });
      }

      if (data.searching) {
        _this10.database.AddKnownPlace(data);

        _this10.destinationAddress = data.full;
        _this10.actualDestination = data.whole.full;
        const latLng = yield _this10.geocode.getLatLng(data.whole.description);
        _this10.D_LatLng = {
          lat: latLng.data.results[0].geometry.location.lat,
          lng: latLng.data.results[0].geometry.location.lng
        };

        _this10.getDistanceandDirections();
      }
    })();
  }

  RequestRide(dat) {
    var _this11 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this11.NoDrivers) {
        _this11.destinationAddress = dat.place.full;
        _this11.actualDestination = dat.place.whole.full;
        const latLng = yield _this11.geocode.getLatLng(dat.place.whole.description);
        _this11.D_LatLng = {
          lat: latLng.data.results[0].geometry.location.lat,
          lng: latLng.data.results[0].geometry.location.lng
        };

        _this11.getDistanceandDirections();
      } else {
        _this11.EnterNoDriverStage();
      }
    })();
  } //reset the map to the user location view


  resetLocation() {
    var _this12 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this12.LatLng);
      yield _this12.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this12.LatLng
      });
      _this12.showResetLocationButton = false;
    })();
  } ///get the distance and directions to destination


  getDistanceandDirections() {
    var _this13 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this13.listen) _this13.listen.unsubscribe();

      if (_this13.D_LatLng.lat) {
        if (!_this13.NoDrivers) {
          _this13.EnterConfirmStage();
        } else {
          _this13.EnterNoDriverStage();
        }

        var origin1 = new google.maps.LatLng(_this13.LatLng.lat, _this13.LatLng.lng);
        var origin2 = new google.maps.LatLng(_this13.D_LatLng.lat, _this13.D_LatLng.lng);
        if (!_this13.NoDrivers) var request = {
          origin: origin1,
          destination: origin2,
          travelMode: google.maps.TravelMode.DRIVING
        };

        _this13.geocode.directions.route(request, /*#__PURE__*/function () {
          var _ref12 = (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
            if (status == 'OK') {
              _this13.direction = response;
              _this13.distance = response.routes[0].legs[0].distance.value;
              _this13.bounds = response.routes[0].bounds;
              _this13.price = _this13.distance / 10;
              yield _this13.UpdateCarMarker(_this13.closeDrivers);
              yield _this13.createAndAddMarkers(_this13.LatLng, _this13.D_LatLng, _this13.bounds);
            } else {
              _this13.overlay.showAlert('Direction ERROR', JSON.stringify(response));
            }
          });

          return function (_x6, _x7) {
            return _ref12.apply(this, arguments);
          };
        }());
      } else {
        _this13.overlay.showAlert('Drag Map', 'Drag the map and stop on your required destination');
      }
    })();
  } //create and update car markers on the map.


  UpdateCarMarker(element) {
    var _this14 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let latlng = {
        lat: element.Driver_lat,
        lng: element.Driver_lng
      };
      const markers = yield _this14.map.newMap.addMarker({
        coordinate: latlng,
        iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
        title: 'My 2'
      });
      if (markers) _this14._carmarkers.push(markers.toString());
      console.log(_this14._carmarkers, markers.toString());
    })();
  } //Return to Map page


  GoHome() {
    var _this15 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this15.map.newMap.enableCurrentLocation(true);
      _this15.current_Request_Number = 0;
      _this15.price = null;
      _this15.listen = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(5000).subscribe( /*#__PURE__*/(0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this15.checkDriversAround(_this15.coordinates);
      }));

      _this15.EnterBookingStage();

      yield _this15.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this15.LatLng
      });
    })();
  }

  GotoSupport() {
    var _this16 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this16.nav.navigateForward('support');
    })();
  }

  clearPrevMarkers() {
    var _this17 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this17.driver_marker) {
        yield _this17.map.newMap.removeMarker(_this17.driver_marker.toString());
        _this17.driver_marker = null;
      }

      if (_this17.rider_marker) {
        yield _this17.map.newMap.removeMarker(_this17.rider_marker.toString());
        _this17.rider_marker = null;
      }
    })();
  } //Return to Map page


  ReturnHome() {
    var _this18 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this18.EnterBookingStage();

      yield _this18.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this18.LatLng
      });
    })();
  } //Cancel the Current Ride Request.....


  CancelRide() {
    var _this19 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this19.overlay.showLoader('Please Wait..');

      if (_this19.driver_marker) {
        yield _this19.map.newMap.removeMarker(_this19.driver_marker.toString());
        _this19.driver_marker = null;
      }

      if (_this19.rider_marker) {
        yield _this19.map.newMap.removeMarker(_this19.rider_marker.toString());
        _this19.rider_marker = null;
      }

      let coords = {
        coords: {
          latitude: _this19.currentDriver.Driver_lat,
          longitude: _this19.currentDriver.Driver_lng
        }
      };

      _this19.unsubscribe();

      _this19.numCalls.unsubscribe();

      _this19.riderCleared = true;
      yield _this19.database.cancelRide(_this19.currentDriver.Driver_id);
      yield _this19.map.newMap.enableCurrentLocation(true);
      _this19.current_Request_Number = 0;
      _this19.price = null;
      _this19.listen = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(5000).subscribe( /*#__PURE__*/(0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this19.checkDriversAround(_this19.coordinates);
      }));

      _this19.EnterBookingStage();

      _this19.overlay.hideLoader();

      yield _this19.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this19.LatLng
      });
    })();
  } ///Clear the ride that has already started


  ClearRide() {
    var _this20 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this20.EnterBookingStage();

      if (_this20.driver_marker) {
        yield _this20.map.newMap.removeMarker(_this20.driver_marker);
        _this20.driver_marker = null;
      }

      if (_this20.rider_marker) {
        yield _this20.map.newMap.removeMarker(_this20.rider_marker);
        _this20.rider_marker = null;
      }

      yield _this20.map.newMap.enableCurrentLocation(true);
      _this20.current_Request_Number = 0;
      _this20.price = null;
      _this20.listen = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(5000).subscribe( /*#__PURE__*/(0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this20.checkDriversAround(_this20.coordinates);
      }));
      yield _this20.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this20.LatLng,
        bearing: 0
      });
    })();
  }

  CallDriver() {
    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } ///create markers and possition them in the view of the user


  createAndMoveMarkersOnRealtime(otherLatLng, state, isDestination) {
    var _this21 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var origin1 = new google.maps.LatLng(_this21.LatLng.lat, _this21.LatLng.lng);
      var origin2 = new google.maps.LatLng(otherLatLng.lat, otherLatLng.lng);
      var request = {
        origin: origin2,
        destination: origin1,
        travelMode: google.maps.TravelMode.DRIVING
      };

      _this21.geocode.directions.route(request, /*#__PURE__*/function () {
        var _ref16 = (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
          if (status == 'OK') {
            _this21.bounds = response.routes[0].bounds;
            _this21.duration = response.routes[0].legs[0].duration.text;
            let markerUrl;

            if (!isDestination) {
              markerUrl = 'https://i.ibb.co/KDy365b/hatchback.png';
            } else {
              markerUrl = 'https://i.ibb.co/bWx9V64/favourite.png';
            }

            _this21.driver_marker = yield _this21.map.newMap.addMarker({
              coordinate: otherLatLng,
              iconUrl: markerUrl,
              title: 'My 2'
            });
            _this21.rider_marker = yield _this21.map.newMap.addMarker({
              coordinate: _this21.LatLng,
              iconUrl: "https://i.ibb.co/N9LXGk3/home-1.png",
              title: 'My 2'
            });
            const locs = [{
              geoCode: {
                latitude: _this21.LatLng.lat,
                longitude: _this21.LatLng.lng
              }
            }, {
              geoCode: {
                latitude: otherLatLng.lat,
                longitude: otherLatLng.lng
              }
            }];
            let go = {
              lat: (yield _this21.map.CalculateCenter(locs)).latitude,
              lng: (yield _this21.map.CalculateCenter(locs)).longitude
            };

            if (state) {
              yield _this21.map.newMap.setPadding({
                top: 0,
                left: 0,
                right: 0,
                bottom: 600
              });
            }

            let mapDim = {
              height: _this21.mapRef.nativeElement.offsetHeight / 2,
              width: _this21.mapRef.nativeElement.offsetWidth
            };
            yield _this21.map.newMap.setCamera({
              animate: true,
              animationDuration: 500,
              zoom: yield _this21.map.getBoundsZoomLevel(_this21.bounds, mapDim),
              coordinate: go,
              bearing: 0
            });
            _this21.canCheck = true;
          } else {
            _this21.overlay.showAlert('Direction ERROR', JSON.stringify(response));
          }
        });

        return function (_x8, _x9) {
          return _ref16.apply(this, arguments);
        };
      }());
    })();
  } ///create markers and possition them in the view of the user


  createAndAddMarkers(loc, des, bounds) {
    var _this22 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this22.marker1 = yield _this22.map.newMap.addMarker({
        coordinate: loc,
        iconUrl: "https://i.ibb.co/N9LXGk3/home-1.png",
        title: 'My 2'
      });
      _this22.marker2 = yield _this22.map.newMap.addMarker({
        coordinate: des,
        iconUrl: 'https://i.ibb.co/bWx9V64/favourite.png',
        title: 'My 2'
      });
      const locs = [{
        geoCode: {
          latitude: loc.lat,
          longitude: loc.lng
        }
      }, {
        geoCode: {
          latitude: des.lat,
          longitude: des.lng
        }
      }];
      let go = {
        lat: (yield _this22.map.CalculateCenter(locs)).latitude,
        lng: (yield _this22.map.CalculateCenter(locs)).longitude
      };
      let mapDim = {
        height: _this22.mapRef.nativeElement.offsetHeight / 2,
        width: _this22.mapRef.nativeElement.offsetWidth
      };
      yield _this22.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: yield _this22.map.getBoundsZoomLevel(bounds, mapDim),
        coordinate: go,
        bearing: 0
      });
    })();
  }

  EnterBookingStage() {
    this.bookingStage = true;
    this.confirmStage = false;
    this.trackingStage = false;
    this.searchingStage = false;
    this.noDriverStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterMapPinStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.searchingStage = false;
    this.noDriverStage = false;
    this.mapPinStage = true;
    this.drivingToDestinationStage = false;
  }

  EnterConfirmStage() {
    this.bookingStage = false;
    this.confirmStage = true;
    this.trackingStage = false;
    this.searchingStage = false;
    this.noDriverStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterSearchingStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.searchingStage = true;
    this.noDriverStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterNoDriverStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.searchingStage = false;
    this.noDriverStage = true;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterTrackingStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = true;
    this.searchingStage = false;
    this.noDriverStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterDrivingToDestinationStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.searchingStage = false;
    this.mapPinStage = false;
    this.noDriverStage = false;
    this.drivingToDestinationStage = true;
  }

};

HomePage.ctorParameters = () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService
}, {
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__.Auth
}, {
  type: _services_map_service__WEBPACK_IMPORTED_MODULE_7__.MapService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform
}, {
  type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.Firestore
}, {
  type: _services_avatar_service__WEBPACK_IMPORTED_MODULE_8__.AvatarService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.NgZone
}, {
  type: _services_geocode_service__WEBPACK_IMPORTED_MODULE_6__.GeocodeService
}, {
  type: _services_overlay_service__WEBPACK_IMPORTED_MODULE_5__.OverlayService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController
}];

HomePage.propDecorators = {
  mapRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild,
    args: ['map']
  }],
  mapElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild,
    args: ['mapElement']
  }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 8793:
/*!*********************************************!*\
  !*** ./src/app/services/geocode.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeocodeService": () => (/* binding */ GeocodeService)
/* harmony export */ });
/* harmony import */ var _workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @googlemaps/google-maps-services-js */ 7614);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _overlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.service */ 5596);






let GeocodeService = class GeocodeService {
  constructor(client, overlay) {
    this.client = client;
    this.overlay = overlay;
    this.service = new google.maps.DistanceMatrixService();
    this.directions = new google.maps.DirectionsService();
  } //convert the lat and lng numbers to an actual address


  getAddress(lat, lng) {
    var _this = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const address = yield _this.client.reverseGeocode({
          params: {
            latlng: {
              lat: lat,
              lng: lng
            },
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey
          },
          timeout: 5000 // milliseconds

        });
        console.log(address);
        return address;
      } catch (e) {
        _this.overlay.showAlert('GeoError', e);
      }
    })();
  } //convert the address to lat and lng


  getLatLng(addressi) {
    var _this2 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const latlng = yield _this2.client.geocode({
          params: {
            address: addressi,
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey
          },
          timeout: 5000 // milliseconds

        });
        return latlng;
      } catch (e) {
        _this2.overlay.showAlert('GeoError', e);

        console.log(e);
      }
    })();
  } //Get the distance between the origin and destination


  getDirections(from, to) {
    var _this3 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {} catch (e) {
        _this3.overlay.showAlert('GeoError', e);

        console.log(e);
      }
    })();
  }

};

GeocodeService.ctorParameters = () => [{
  type: _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_1__.Client
}, {
  type: _overlay_service__WEBPACK_IMPORTED_MODULE_3__.OverlayService
}];

GeocodeService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], GeocodeService);


/***/ }),

/***/ 9947:
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapService": () => (/* binding */ MapService)
/* harmony export */ });
/* harmony import */ var _workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/google-maps */ 4822);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _geocode_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geocode.service */ 8793);
/* harmony import */ var _overlay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.service */ 5596);







let MapService = class MapService {
  constructor(overlay, geocode) {
    this.overlay = overlay;
    this.geocode = geocode;
    this.locationAddress = 'Loading..';
  } //create google maps get the map movement listener


  createMap(ref, coords) {
    var _this = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.newMap = yield _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_1__.GoogleMap.create({
          id: 'my-cool-map',
          element: ref,
          apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey,
          config: {
            center: {
              lat: 5.5122138,
              lng: 7.4919135
            },
            zoom: 8
          }
        });
        _this.LatLng = {
          lat: coords.coords.latitude,
          lng: coords.coords.longitude
        };

        _this.newMap.enableTrafficLayer(true);

        _this.newMap.enableCurrentLocation(true);

        yield _this.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this.LatLng
        });
        const address = yield _this.geocode.getAddress(_this.LatLng.lat, _this.LatLng.lng);
        _this.actualLocation = address.data.results[0].formatted_address;
        _this.locationAddress = address.data.results[1].address_components[0].long_name + ' ' + address.data.results[1].address_components[1].long_name;
      } catch (e) {
        alert(e);
      }
    })();
  }

  CalculateCenter(locations) {
    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var latitude = 0,
          longitude = 0;

      for (var location of locations) {
        longitude += location.geoCode.longitude;
        latitude += location.geoCode.latitude;
      }

      latitude = latitude / locations.length;
      longitude = longitude / locations.length;
      yield latitude, longitude;
      return {
        latitude,
        longitude
      };
    })();
  }

  getBoundsZoomLevel(bounds, mapDim) {
    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var WORLD_DIM = {
        height: 256,
        width: 256
      };
      var ZOOM_MAX = 21;

      function latRad(lat) {
        var sin = Math.sin(lat * Math.PI / 180);
        var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
        return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
      }

      function zoom(mapPx, worldPx, fraction) {
        return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
      }

      var ne = bounds.getNorthEast();
      var sw = bounds.getSouthWest();
      var latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;
      var lngDiff = ne.lng() - sw.lng();
      var lngFraction = (lngDiff < 0 ? lngDiff + 360 : lngDiff) / 360;
      var latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
      var lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);
      yield Math.min(latZoom, lngZoom, ZOOM_MAX);
      return Math.min(latZoom, lngZoom, ZOOM_MAX);
    })();
  }

};

MapService.ctorParameters = () => [{
  type: _overlay_service__WEBPACK_IMPORTED_MODULE_4__.OverlayService
}, {
  type: _geocode_service__WEBPACK_IMPORTED_MODULE_3__.GeocodeService
}];

MapService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], MapService);


/***/ }),

/***/ 591:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7621:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 591);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8391)).then(m => new m.GeolocationWeb())
});



/***/ }),

/***/ 5325:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapType": () => (/* binding */ MapType)
/* harmony export */ });
var MapType;

(function (MapType) {
  /**
   * Basic map.
   */
  MapType["Normal"] = "Normal";
  /**
   * Satellite imagery with roads and labels.
   */

  MapType["Hybrid"] = "Hybrid";
  /**
   * Satellite imagery with no labels.
   */

  MapType["Satellite"] = "Satellite";
  /**
   * Topographic data.
   */

  MapType["Terrain"] = "Terrain";
  /**
   * No base map tiles.
   */

  MapType["None"] = "None";
})(MapType || (MapType = {}));

/***/ }),

/***/ 1819:
/*!************************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/implementation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitorGoogleMaps": () => (/* binding */ CapacitorGoogleMaps)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);

const CapacitorGoogleMaps = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('CapacitorGoogleMaps', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_google-maps_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 601)).then(m => new m.CapacitorGoogleMapsWeb())
});
CapacitorGoogleMaps.addListener('isMapInFocus', data => {
  var _a;

  const x = data.x;
  const y = data.y;
  const elem = document.elementFromPoint(x, y);
  const internalId = (_a = elem === null || elem === void 0 ? void 0 : elem.dataset) === null || _a === void 0 ? void 0 : _a.internalId;
  const mapInFocus = internalId === data.mapId;
  CapacitorGoogleMaps.dispatchMapEvent({
    id: data.mapId,
    focus: mapInFocus
  });
});


/***/ }),

/***/ 4822:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_1__.GoogleMap),
/* harmony export */   "MapType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.MapType)
/* harmony export */ });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ 5325);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 8968);
/* eslint-disable @typescript-eslint/no-namespace */




/***/ }),

/***/ 8968:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/map.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* binding */ GoogleMap)
/* harmony export */ });
/* harmony import */ var _workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./implementation */ 1819);




class MapCustomElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'ios') {
      this.style.overflow = 'scroll';
      this.style['-webkit-overflow-scrolling'] = 'touch';
      const overflowDiv = document.createElement('div');
      overflowDiv.style.height = '200%';
      this.appendChild(overflowDiv);
    }
  }

}

customElements.define('capacitor-google-map', MapCustomElement);
class GoogleMap {
  constructor(id) {
    this.element = null;

    this.handleScrollEvent = () => this.updateMapBounds();

    this.id = id;
  }
  /**
   * Creates a new instance of a Google Map
   * @param options
   * @param callback
   * @returns GoogleMap
   */


  static create(options, callback) {
    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newMap = new GoogleMap(options.id);

      if (!options.element) {
        throw new Error('container element is required');
      }

      if (options.config.androidLiteMode === undefined) {
        options.config.androidLiteMode = false;
      }

      newMap.element = options.element;
      newMap.element.dataset.internalId = options.id;
      const elementBounds = options.element.getBoundingClientRect();
      options.config.width = elementBounds.width;
      options.config.height = elementBounds.height;
      options.config.x = elementBounds.x;
      options.config.y = elementBounds.y;
      options.config.devicePixelRatio = window.devicePixelRatio;

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        newMap.initScrolling();
      }

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
        options.element = {};
      }

      yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.create(options);

      if (callback) {
        const onMapReadyListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMapReady', data => {
          if (data.mapId == newMap.id) {
            callback(data);
            onMapReadyListener.remove();
          }
        });
      }

      return newMap;
    })();
  }
  /**
   * Enable marker clustering
   *
   * @returns void
   */


  enableClustering() {
    var _this = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableClustering({
        id: _this.id
      });
    })();
  }
  /**
   * Disable marker clustering
   *
   * @returns void
   */


  disableClustering() {
    var _this2 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.disableClustering({
        id: _this2.id
      });
    })();
  }
  /**
   * Adds a marker to the map
   *
   * @param marker
   * @returns created marker id
   */


  addMarker(marker) {
    var _this3 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addMarker({
        id: _this3.id,
        marker
      });
      return res.id;
    })();
  }
  /**
   * Adds multiple markers to the map
   *
   * @param markers
   * @returns array of created marker IDs
   */


  addMarkers(markers) {
    var _this4 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addMarkers({
        id: _this4.id,
        markers
      });
      return res.ids;
    })();
  }
  /**
   * Remove marker from the map
   *
   * @param id id of the marker to remove from the map
   * @returns
   */


  removeMarker(id) {
    var _this5 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.removeMarker({
        id: _this5.id,
        markerId: id
      });
    })();
  }
  /**
   * Remove markers from the map
   *
   * @param ids array of ids to remove from the map
   * @returns
   */


  removeMarkers(ids) {
    var _this6 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.removeMarkers({
        id: _this6.id,
        markerIds: ids
      });
    })();
  }
  /**
   * Destroy the current instance of the map
   */


  destroy() {
    var _this7 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        _this7.disableScrolling();
      }

      _this7.removeAllMapListeners();

      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.destroy({
        id: _this7.id
      });
    })();
  }
  /**
   * Update the map camera configuration
   *
   * @param config
   * @returns
   */


  setCamera(config) {
    var _this8 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.setCamera({
        id: _this8.id,
        config
      });
    })();
  }
  /**
   * Sets the type of map tiles that should be displayed.
   *
   * @param mapType
   * @returns
   */


  setMapType(mapType) {
    var _this9 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.setMapType({
        id: _this9.id,
        mapType
      });
    })();
  }
  /**
   * Sets whether indoor maps are shown, where available.
   *
   * @param enabled
   * @returns
   */


  enableIndoorMaps(enabled) {
    var _this10 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableIndoorMaps({
        id: _this10.id,
        enabled
      });
    })();
  }
  /**
   * Controls whether the map is drawing traffic data, if available.
   *
   * @param enabled
   * @returns
   */


  enableTrafficLayer(enabled) {
    var _this11 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableTrafficLayer({
        id: _this11.id,
        enabled
      });
    })();
  }
  /**
   * Show accessibility elements for overlay objects, such as Marker and Polyline.
   *
   * Only available on iOS.
   *
   * @param enabled
   * @returns
   */


  enableAccessibilityElements(enabled) {
    var _this12 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableAccessibilityElements({
        id: _this12.id,
        enabled
      });
    })();
  }
  /**
   * Set whether the My Location dot and accuracy circle is enabled.
   *
   * @param enabled
   * @returns
   */


  enableCurrentLocation(enabled) {
    var _this13 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableCurrentLocation({
        id: _this13.id,
        enabled
      });
    })();
  }
  /**
   * Set padding on the 'visible' region of the view.
   *
   * @param padding
   * @returns
   */


  setPadding(padding) {
    var _this14 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.setPadding({
        id: _this14.id,
        padding
      });
    })();
  }
  /**
   * Get the map's current viewport latitude and longitude bounds.
   *
   * @returns {LatLngBounds}
   */


  getMapBounds() {
    var _this15 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.getMapBounds({
        id: _this15.id
      });
    })();
  }

  initScrolling() {
    const ionContents = document.getElementsByTagName('ion-content'); // eslint-disable-next-line @typescript-eslint/prefer-for-of

    for (let i = 0; i < ionContents.length; i++) {
      ionContents[i].scrollEvents = true;
    }

    window.addEventListener('ionScroll', this.handleScrollEvent);
    window.addEventListener('scroll', this.handleScrollEvent);
    window.addEventListener('resize', this.handleScrollEvent);

    if (screen.orientation) {
      screen.orientation.addEventListener('change', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    } else {
      window.addEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    }
  }

  disableScrolling() {
    window.removeEventListener('ionScroll', this.handleScrollEvent);
    window.removeEventListener('scroll', this.handleScrollEvent);
    window.removeEventListener('resize', this.handleScrollEvent);

    if (screen.orientation) {
      screen.orientation.removeEventListener('change', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    } else {
      window.removeEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    }
  }

  updateMapBounds() {
    if (this.element) {
      const mapRect = this.element.getBoundingClientRect();
      _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.onScroll({
        id: this.id,
        mapBounds: {
          x: mapRect.x,
          y: mapRect.y,
          width: mapRect.width,
          height: mapRect.height
        }
      });
    }
  }
  /*
  private findContainerElement(): HTMLElement | null {
    if (!this.element) {
      return null;
    }
       let parentElement = this.element.parentElement;
    while (parentElement !== null) {
      if (window.getComputedStyle(parentElement).overflowY !== 'hidden') {
        return parentElement;
      }
         parentElement = parentElement.parentElement;
    }
       return null;
  }
  */

  /**
   * Set the event listener on the map for 'onCameraIdle' events.
   *
   * @param callback
   * @returns
   */


  setOnCameraIdleListener(callback) {
    var _this16 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this16.onCameraIdleListener) {
        _this16.onCameraIdleListener.remove();
      }

      if (callback) {
        _this16.onCameraIdleListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onCameraIdle', _this16.generateCallback(callback));
      } else {
        _this16.onCameraIdleListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onBoundsChanged' events.
   *
   * @param callback
   * @returns
   */


  setOnBoundsChangedListener(callback) {
    var _this17 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this17.onBoundsChangedListener) {
        _this17.onBoundsChangedListener.remove();
      }

      if (callback) {
        _this17.onBoundsChangedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onBoundsChanged', _this17.generateCallback(callback));
      } else {
        _this17.onBoundsChangedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onCameraMoveStarted' events.
   *
   * @param callback
   * @returns
   */


  setOnCameraMoveStartedListener(callback) {
    var _this18 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this18.onCameraMoveStartedListener) {
        _this18.onCameraMoveStartedListener.remove();
      }

      if (callback) {
        _this18.onCameraMoveStartedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onCameraMoveStarted', _this18.generateCallback(callback));
      } else {
        _this18.onCameraMoveStartedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterClick' events.
   *
   * @param callback
   * @returns
   */


  setOnClusterClickListener(callback) {
    var _this19 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this19.onClusterClickListener) {
        _this19.onClusterClickListener.remove();
      }

      if (callback) {
        _this19.onClusterClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onClusterClick', _this19.generateCallback(callback));
      } else {
        _this19.onClusterClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */


  setOnClusterInfoWindowClickListener(callback) {
    var _this20 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this20.onClusterInfoWindowClickListener) {
        _this20.onClusterInfoWindowClickListener.remove();
      }

      if (callback) {
        _this20.onClusterInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onClusterInfoWindowClick', _this20.generateCallback(callback));
      } else {
        _this20.onClusterInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */


  setOnInfoWindowClickListener(callback) {
    var _this21 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this21.onInfoWindowClickListener) {
        _this21.onInfoWindowClickListener.remove();
      }

      if (callback) {
        _this21.onInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onInfoWindowClick', _this21.generateCallback(callback));
      } else {
        _this21.onInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMapClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMapClickListener(callback) {
    var _this22 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this22.onMapClickListener) {
        _this22.onMapClickListener.remove();
      }

      if (callback) {
        _this22.onMapClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMapClick', _this22.generateCallback(callback));
      } else {
        _this22.onMapClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerClickListener(callback) {
    var _this23 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this23.onMarkerClickListener) {
        _this23.onMarkerClickListener.remove();
      }

      if (callback) {
        _this23.onMarkerClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMarkerClick', _this23.generateCallback(callback));
      } else {
        _this23.onMarkerClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationButtonClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMyLocationButtonClickListener(callback) {
    var _this24 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this24.onMyLocationButtonClickListener) {
        _this24.onMyLocationButtonClickListener.remove();
      }

      if (callback) {
        _this24.onMyLocationButtonClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMyLocationButtonClick', _this24.generateCallback(callback));
      } else {
        _this24.onMyLocationButtonClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMyLocationClickListener(callback) {
    var _this25 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this25.onMyLocationClickListener) {
        _this25.onMyLocationClickListener.remove();
      }

      if (callback) {
        _this25.onMyLocationClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMyLocationClick', _this25.generateCallback(callback));
      } else {
        _this25.onMyLocationClickListener = undefined;
      }
    })();
  }
  /**
   * Remove all event listeners on the map.
   *
   * @param callback
   * @returns
   */


  removeAllMapListeners() {
    var _this26 = this;

    return (0,_workspaces_FlyTaxi_Rider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this26.onBoundsChangedListener) {
        _this26.onBoundsChangedListener.remove();

        _this26.onBoundsChangedListener = undefined;
      }

      if (_this26.onCameraIdleListener) {
        _this26.onCameraIdleListener.remove();

        _this26.onCameraIdleListener = undefined;
      }

      if (_this26.onCameraMoveStartedListener) {
        _this26.onCameraMoveStartedListener.remove();

        _this26.onCameraMoveStartedListener = undefined;
      }

      if (_this26.onClusterClickListener) {
        _this26.onClusterClickListener.remove();

        _this26.onClusterClickListener = undefined;
      }

      if (_this26.onClusterInfoWindowClickListener) {
        _this26.onClusterInfoWindowClickListener.remove();

        _this26.onClusterInfoWindowClickListener = undefined;
      }

      if (_this26.onInfoWindowClickListener) {
        _this26.onInfoWindowClickListener.remove();

        _this26.onInfoWindowClickListener = undefined;
      }

      if (_this26.onMapClickListener) {
        _this26.onMapClickListener.remove();

        _this26.onMapClickListener = undefined;
      }

      if (_this26.onMarkerClickListener) {
        _this26.onMarkerClickListener.remove();

        _this26.onMarkerClickListener = undefined;
      }

      if (_this26.onMyLocationButtonClickListener) {
        _this26.onMyLocationButtonClickListener.remove();

        _this26.onMyLocationButtonClickListener = undefined;
      }

      if (_this26.onMyLocationClickListener) {
        _this26.onMyLocationClickListener.remove();

        _this26.onMyLocationClickListener = undefined;
      }
    })();
  }

  generateCallback(callback) {
    const mapId = this.id;
    return data => {
      if (data.mapId == mapId) {
        callback(data);
      }
    };
  }

}

/***/ }),

/***/ 3491:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 7269);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
    period = 0;
  }

  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber,
      counter: 0,
      period
    }));
    return subscriber;
  });
}

function dispatch(state) {
  const {
    subscriber,
    counter,
    period
  } = state;
  subscriber.next(counter);
  this.schedule({
    subscriber,
    counter: counter + 1,
    period
  }, period);
}

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "capacitor-google-maps {\n  display: inline-block;\n  width: 100%;\n  height: 100vh;\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-top {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.centerPin {\n  animation-name: slide-top;\n  animation-duration: 0.8s;\n}\n\n.bottomItems {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n\nion-skeleton-text {\n  --background: rgba(0, 98, 255, 0.625);\n}\n\nion-header ion-fab {\n  margin-top: 20px;\n}\n\nion-header ion-row {\n  padding-top: 0vh;\n  background: transparent;\n  display: block;\n}\n\nion-header ion-row ion-list {\n  border-radius: 0px 0px 20px 20px;\n  padding-bottom: 0vh;\n}\n\nion-header ion-row ion-list ion-item {\n  width: 100%;\n  --inner-padding-bottom: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n}\n\nion-content {\n  --background: transparent;\n  margin-top: 20px;\n}\n\nion-footer ion-row {\n  padding-top: 5vh;\n  background: transparent;\n  display: block;\n}\n\nion-footer ion-row ion-fab-button {\n  margin-right: 2.5vh;\n}\n\nion-footer ion-row ion-list {\n  border-radius: 20px 20px 0 0;\n}\n\nion-footer ion-row ion-list ion-list-header ion-label {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\n\nion-footer ion-fab {\n  margin-top: -40px;\n}\n\nion-footer ion-list .payment {\n  font-size: 1.1em;\n  --background: transparent !important;\n}\n\nion-footer ion-list .payment ion-item {\n  --inner-padding-bottom: 1px;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n  --background: transparent !important;\n}\n\n.centerElem {\n  justify-content: center;\n  align-items: center;\n}\n\n.price {\n  margin-left: auto;\n  flex: 0.5;\n}\n\n.shadow-top {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.top_bar {\n  box-shadow: 0px 1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.card {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.main-button {\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light-shade);\n}\n\n.preview {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\n.map {\n  width: 100%;\n  height: 1024px;\n  padding-bottom: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUlBO0VBQ0U7SUFDRSwyQkFBQTtFQURGO0VBR0E7SUFDRSx5QkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDQyxtRUFBQTtBQUZEOztBQU9BO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQUpGOztBQU9BO0VBQ0UscUNBQUE7QUFKRjs7QUFVRTtFQUNFLGdCQUFBO0FBUEo7O0FBU0U7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQVBKOztBQVFJO0VBQ0ksZ0NBQUE7RUFDQSxtQkFBQTtBQU5SOztBQU9RO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBTFY7O0FBWUE7RUFBYyx5QkFBQTtFQUEyQixnQkFBQTtBQVB6Qzs7QUFXRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBUko7O0FBU0k7RUFDSSxtQkFBQTtBQVBSOztBQVNJO0VBQ0ksNEJBQUE7QUFQUjs7QUFVWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFSaEI7O0FBYUU7RUFDRSxpQkFBQTtBQVhKOztBQWNLO0VBQ0MsZ0JBQUE7RUFFQyxvQ0FBQTtBQWJQOztBQWNPO0VBQ0MsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtBQVpSOztBQXVCQTtFQUVFLHVCQUFBO0VBQ0EsbUJBQUE7QUFyQkY7O0FBd0JBO0VBRUUsaUJBQUE7RUFDQSxTQUFBO0FBdEJGOztBQXlCQztFQUVHLHVEQUFBO0FBdkJKOztBQTBCRTtFQUNFLHNEQUFBO0FBdkJKOztBQTBCRTtFQUNFLHVEQUFBO0FBdkJKOztBQTBCQTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7QUF2QkY7O0FBMkJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUF4QkY7O0FBNEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQTFCRjs7QUE2QkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBMUJGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jYXBhY2l0b3ItZ29vZ2xlLW1hcHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5cbkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5cbi5zbGlkZS10b3Age1xuXHRhbmltYXRpb246IHNsaWRlLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbn1cblxuXG5cbi5jZW50ZXJQaW57XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcbn1cblxuLmJvdHRvbUl0ZW1ze1xuICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG59XG5cbmlvbi1za2VsZXRvbi10ZXh0IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDk4LCAyNTUsIDAuNjI1KTtcbn1cblxuXG5pb24taGVhZGVye1xuICAgXG4gIGlvbi1mYWJ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBpb24tcm93IHtcbiAgICBwYWRkaW5nLXRvcDogMHZoO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwdmg7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiAgXG59XG5cbmlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgbWFyZ2luLXRvcDogMjBweDt9XG5cblxuaW9uLWZvb3RlcntcbiAgaW9uLXJvdyB7XG4gICAgcGFkZGluZy10b3A6IDV2aDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMi41dmg7XG4gICAgfVxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDZ2aDtcbiAgICAgICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4gIGlvbi1mYWJ7XG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gIH1cbiAgIGlvbi1saXN0e1xuICAgICAucGF5bWVudHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAvLyAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICBpb24taXRlbXtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy10b3A6IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgXG4gICAgICAgfVxuICAgICAgIFxuICAgICAgXG4gICAgICAgXG4gICAgIH1cblxuICB9XG59XG5cbi5jZW50ZXJFbGVtXG57XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJpY2VcbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmbGV4OiAwLjU7XG4gfVxuIFxuIC5zaGFkb3ctdG9wXG4gIHtcbiAgICBib3gtc2hhZG93OiAwcHggLTEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xuICB9XG5cbiAgLnRvcF9iYXJ7XG4gICAgYm94LXNoYWRvdzogMHB4IDEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xuICB9XG5cbiAgLmNhcmR7XG4gICAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcbiAgfVxuXG4ubWFpbi1idXR0b257XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7IFxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5wcmV2aWV3IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLmZhbGxiYWNrIHtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNiZmJmYmY7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDI0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlXG59XG5cbiJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n\n\n\n<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n \n  <!--destination bar-->\n  <ion-toolbar *ngIf=\"confirmStage\">\n    <ion-buttons slot=\"start\">\n      <ion-button shape=\"round\" (click)=\"goBackTOAutocomplete()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" color=\"tertiary\"></ion-icon> \n      </ion-button>\n    </ion-buttons>\n    <ion-title> Your Destination </ion-title>\n  </ion-toolbar>\n\n  \n  <ion-row class='top_bar' *ngIf=\"confirmStage\">\n    <ion-list lines=\"none\">\n    <ion-item-group  class=\"ion-margin-horizontal ion-margin-bottom\" >\n      <ion-button shape=\"round\" class=\"main-button\" size=\"large\" type=\"submit\" (click)=\"showAutocompleteModal()\" expand=\"block\">\n        <ion-icon slot=\"start\" color='primary' name=\"create\"></ion-icon>\n        <ion-label>{{destinationAddress}}</ion-label>\n      </ion-button>\n    </ion-item-group>\n    </ion-list>\n  </ion-row>\n\n  <!--menu button-->\n  <ion-fab *ngIf=\"bookingStage\" vertical=\"top\" horizontal=\"start\">\n    <ion-fab-button color=\"light\">\n      <ion-menu-button color=\"primary\"></ion-menu-button>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!--sos button-->\n  <ion-fab  *ngIf=\"!confirmStage\" vertical=\"top\" horizontal=\"end\" (click)=\"GotoSupport()\">\n    <ion-fab-button color=\"light\">\n      <ion-icon color=\"primary\" name=\"chatbubble-ellipses\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n   <!--back button if map Pin-->\n   <ion-fab  *ngIf=\"mapPinStage\" vertical=\"top\" (click)=\"showAutocompleteModal()\" horizontal=\"start\">\n    <ion-fab-button color=\"light\">\n      <ion-icon name=\"arrow-back\" color=\"primary\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n  <!--back button if map Pin-->\n  <ion-fab color=\"danger\" *ngIf=\"searchingStage\" vertical=\"top\" (click)=\"CancelRide()\" horizontal=\"start\">\n    <ion-fab-button color=\"light\">\n      <ion-icon name=\"trash-sharp\" color=\"primary\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!--Search Bar-->\n\n\n \n\n </ion-header>\n\n\n<!--Capacitor Google Map-->\n\n<ion-content [fullscreen]=\"true\">\n  \n  <capacitor-google-maps #map>\n   \n  </capacitor-google-maps>\n  \n</ion-content>\n\n\n\n<!--JAVAScript Google mAp-->\n  <!-- <div #mapElement class=\"map\"></div> -->\n\n\n<ion-fab class=\"centerPin\" *ngIf=\"mapPinStage\" vertical=\"center\" horizontal=\"center\">\n    <ion-avatar>\n      <ion-img src=\"../../assets/icon/pin.png\"></ion-img>\n    </ion-avatar>\n</ion-fab>\n\n  <ion-footer [translucent]=\"true\" class=\"ion-no-border\">\n\n    <!--location Button-->\n    <ion-fab *ngIf=\"bookingStage && showResetLocationButton\" vertical=\"top\" horizontal=\"end\" >\n      <ion-fab-button color=\"light\" (click)=\"resetLocation()\">\n        <ion-icon name=\"locate\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n\n    <ion-row>\n\n\n      <!--where to bar and button-->\n      <ion-list class=\"bottomItems shadow-top\" *ngIf=\"bookingStage\" lines=\"full\">\n  \n        <ion-item-group class=\"ion-margin-horizontal ion-margin-bottom \">\n          <ion-button shape=\"round\" class=\"main-button\" size=\"large\" type=\"submit\" (click)=\"showAutocompleteModal()\" expand=\"block\">\n            <ion-icon slot=\"start\" name=\"search\" color=\"primary\"></ion-icon>\n            <ion-label>Where To?</ion-label>\n          </ion-button>\n\n          <ion-item *ngFor=\"let place of places\"  class=\"bottomItems ion-margin\"  (click)=\"RequestRide(place)\">\n            <ion-icon name=\"pin\" color='primary' slot=\"start\"></ion-icon>\n            <ion-label>\n              <h1>{{ place.place.place}}</h1>\n              <p>{{place.place.city}}</p>\n            </ion-label>\n         </ion-item>\n        \n        </ion-item-group>\n\n      </ion-list>\n\n      <!--Map Pin Choose Bar-->\n      <ion-list class='bottomItems shadow-top' [hidden]=\"!mapPinStage\" lines=\"full\">\n\n        <ion-item-group class=\"ion-margin-horizontal ion-margin-bottom\">\n          <ion-button shape=\"round\" size=\"large\" type=\"submit\" (click)=\"getDistanceandDirections()\" expand=\"block\">\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n            <ion-label>{{destinationAddress}}</ion-label>\n          </ion-button>\n        </ion-item-group>\n\n      </ion-list>\n\n      <!--No driver Found Bar-->\n      \n      <ion-list class='bottomItems shadow-top' *ngIf=\"noDriverStage\" lines=\"none\">\n        <ion-list-header>\n          <ion-item style=\"margin:0 auto;\">\n              <img src=\"../../assets/imgs/No connection-pana.svg\">\n          </ion-item>\n            \n         </ion-list-header>\n       <ion-item-group class=\"ion-margin-horizontal ion-margin-bottom\">\n        \n               <ion-button shape=\"round\"  class='main-button' size=\"large\" type=\"submit\" color=\"primary\" (click)=\"ReturnHome()\" expand=\"block\">\n                 <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n                 <ion-label> No Drivers Here </ion-label>\n               </ion-button>\n            \n       </ion-item-group>\n\n     </ion-list>\n\n\n\n      <!--Car type, payment, confirmation and Selection Bar-->\n      <ion-list  class='bottomItems shadow-top' *ngIf=\"confirmStage\" lines=\"none\">\n\n        <ion-list-header  color=\"light\" *ngIf=\"price\" class=\"payment\">\n\n                <ion-item>\n                  <ion-avatar slot=\"start\">\n                    <ion-img src=\"../../assets/icon/hatchback.png\"></ion-img>\n                  </ion-avatar>\n                  <ion-label>\n                    <h1>{{carname}} <ion-icon slot=\"icon-only\" color='primary' name=\"information-circle\"></ion-icon></h1>\n                    <p>{{driver_duration_apart}} mins <ion-icon slot=\"icon-only\" color='primary' name=\"person\"></ion-icon> {{driver_number_of_seats}} seats</p>\n                  </ion-label>\n                </ion-item>\n                \n\n                <ion-item class=\"price\">\n                  <ion-label>\n                    <h1>${{price}}</h1>\n                    <p><del>${{price*2}}</del></p>\n                  </ion-label>\n                </ion-item>\n\n        </ion-list-header>\n\n\n        <ion-list-header color=\"light\" *ngIf=\"!price\" class=\"payment\">\n\n          <ion-item class=\"price\"> \n            <ion-avatar slot=\"start\">\n              <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <h1><ion-skeleton-text [animated]=\"true\" style=\"width: 130px\"></ion-skeleton-text></h1>\n              <p><ion-skeleton-text [animated]=\"true\" style=\"width: 130px\"></ion-skeleton-text><ion-skeleton-text [animated]=\"true\" style=\"width: 100px\"></ion-skeleton-text></p>\n            </ion-label>\n          </ion-item>\n          \n\n          <ion-item class=\"price\">\n            <ion-label>\n              <h1><ion-skeleton-text [animated]=\"true\" style=\"width: 80px\"></ion-skeleton-text></h1>\n              <p><del><ion-skeleton-text [animated]=\"true\" style=\"width: 80px\"></ion-skeleton-text></del></p>\n            </ion-label>\n          </ion-item>\n\n     </ion-list-header>\n     \n        <!--payment type select-->\n      <div class=\"card\">\n        <ion-item>\n          <ion-icon *ngIf=\"cash\" color=\"primary\" slot=\"start\" name=\"cash-sharp\"></ion-icon>\n          <ion-icon *ngIf=\"!cash\" color=\"primary\" slot=\"start\" name=\"card-sharp\"></ion-icon>\n          <ion-label position=\"floating\">Select Payment</ion-label>\n          \n          <ion-select [value]=\"selectedCard\" (ionChange)=\"chooseCard($event)\">\n            <ion-select-option *ngFor=\"let card of cards\" [value]=\"card.name\">{{card.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n\n        <!--Base Select Button-->\n        <ion-item-group class=\"ion-margin-horizontal ion-margin-bottom\">\n          <ion-button shape=\"round\" color=\"primary\" size=\"large\" type=\"submit\" (click)=\"StartRide()\" expand=\"block\">\n            <ion-icon *ngIf='price' slot=\"start\" name=\"checkmark-sharp\"></ion-icon>\n            <ion-progress-bar color=\"light\" *ngIf='!price' type=\"indeterminate\"></ion-progress-bar>\n            <ion-label *ngIf='price'>Book Ride</ion-label>\n          </ion-button>\n        </ion-item-group>\n\n      </div>\n      </ion-list>\n\n\n<!-- Connecting to driver bar-->\n      <ion-list class='bottomItems shadow-top' *ngIf=\"searchingStage\" lines=\"none\">\n         <ion-list-header>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <ion-img [src]=\"currentDriver.Driver_imgUrl\"></ion-img>\n            </ion-avatar>\n            <ion-label>\n\n              <h1>{{currentDriver.Driver_name}}</h1>\n              <p>Arrives In {{duration}}</p>\n\n            </ion-label>\n          </ion-item>\n            \n         </ion-list-header>\n        <ion-item-group class=\"ion-margin-horizontal ion-margin-bottom\">\n         \n                <ion-button shape=\"round\"  class='main-button' size=\"large\" type=\"submit\" expand=\"block\">\n                  <!-- <ion-icon slot=\"start\" name=\"close-sharp\" color=\"danger\"></ion-icon> -->\n                  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n                </ion-button>\n             \n        </ion-item-group>\n       \n      </ion-list>\n\n\n\n       <!--Driver found now tracking to user bar-->\n       <ion-list class='bottomItems shadow-top' *ngIf=\"trackingStage\" lines=\"none\">\n\n        <ion-list-header class=\"ion-margin-bottom\" >\n            <ion-label>\n              <h1 class=\"ion-text-center\">Driver Arrives in {{duration}}</h1>\n            </ion-label>\n        </ion-list-header>\n\n     \n\n\n\n        <div class=\"card\">\n\n          <ion-item>\n\n            <ion-item>\n              <ion-label>\n                <p>{{driverInfo.Driver_car}}.{{driverInfo.Driver_cartype}}</p>\n                <h1>{{driverInfo.Driver_plate}}</h1>\n              </ion-label>\n            </ion-item>\n                \n                  <ion-item class=\"price\">\n                    <ion-avatar slot=\"start\">\n                      <ion-img [src]=\"driverInfo.Driver_imgUrl\"></ion-img>\n                    </ion-avatar>\n                    <ion-label>\n                      <p><ion-icon slot=\"icon-only\" color=\"warning\" name=\"star\"></ion-icon> {{driverInfo.Driver_rating}} </p>\n                    </ion-label>\n                  </ion-item>\n                  \n          </ion-item>\n\n\n          <ion-item>\n            <ion-item>\n              \n              <ion-label>\n               <h1>Your Driver is {{driverInfo.Driver_name}}</h1> \n               <p>1,832 rides</p>\n              </ion-label>\n\n            </ion-item>\n          </ion-item>\n\n\n          <!-- <ion-button shape=\"round\"  class='main-button' size=\"large\" type=\"submit\" (click)=\"CloseSearchingStage()\" expand=\"full\">\n            <ion-icon slot=\"end\" color='primary' name=\"arrow-forward\"></ion-icon>\n            <ion-label> Pussy Money Weed </ion-label>\n          </ion-button> -->\n\n        <ion-item>\n\n          <ion-item *ngIf=\"cash\">\n            <ion-label>\n             <h1><ion-icon color='primary'  slot=\"icon-only\" name=\"cash\"></ion-icon> Cash</h1> \n            </ion-label>\n          </ion-item>\n\n          <ion-item *ngIf=\"!cash\">\n            <ion-label>\n              <h1> <ion-icon color='primary' slot=\"icon-only\" name=\"card\"></ion-icon> Card</h1>\n            </ion-label>\n          </ion-item>\n          \n\n          <ion-item class=\"price\">\n            <ion-label >\n              <h1>${{price}}</h1>\n            </ion-label>\n          </ion-item>\n              \n               \n        </ion-item>\n\n\n        <ion-accordion-group>\n        <ion-accordion value=\"first\">\n          <ion-item slot=\"header\">\n            <ion-label><h1>More</h1></ion-label>\n          </ion-item>\n          <div slot=\"content\">\n            \n            <ion-button shape=\"round\"  class='main-button' size=\"large\" expand=\"block\" (click)=\"CallDriver()\">\n              <ion-icon color='primary' slot=\"start\" name=\"person\"></ion-icon>\n              <ion-label>contact</ion-label>\n            </ion-button>\n           \n<!--              \n                <ion-button shape=\"round\"  class='main-button' size=\"large\" expand=\"block\">\n                  <ion-icon color='primary' slot=\"start\" name=\"share\"></ion-icon>\n                  <ion-label>Share ride info</ion-label>\n                </ion-button> -->\n                \n              \n                    <ion-button shape=\"round\"  class='main-button' size=\"large\" expand=\"block\"  (click)=\"ClearRide()\"> \n                      <ion-icon color='primary' slot=\"start\" name=\"close\"></ion-icon>\n                      <ion-label>Cancel ride</ion-label>\n                    </ion-button>\n                  \n                  \n          </div>\n        </ion-accordion>\n        </ion-accordion-group>\n\n     </div>\n\n\n    \n      </ion-list>\n\n\n\n    \n   <!--Rider Picked Up now tracking to destination bar-->\n      <ion-list class='bottomItems shadow-top' *ngIf=\"drivingToDestinationStage\" lines=\"none\">\n\n        <ion-list-header class=\" ion-margin-bottom\" >\n            <ion-label>\n              <h1 class=\"ion-text-center\">Arrival in {{duration}}</h1>\n            </ion-label>\n        </ion-list-header>\n\n        <div class=\"card\">\n\n          <ion-item>\n            <ion-item>\n              <ion-label>\n                <p>{{driverInfo.Driver_car}}.{{driverInfo.Driver_cartype}}</p>\n                <h1>{{driverInfo.Driver_plate}}</h1>\n              </ion-label>\n            </ion-item>\n                \n                  <ion-item class=\"price\">\n                    <ion-avatar slot=\"start\">\n                      <ion-img [src]=\"driverInfo.Driver_imgUrl\"></ion-img>\n                    </ion-avatar>\n                    <ion-label>\n                      <p><ion-icon slot=\"icon-only\" color=\"secondary\" name=\"star\"></ion-icon> 5 </p>\n                    </ion-label>\n                  </ion-item>\n                  \n          </ion-item>\n\n\n          <ion-item>\n            <ion-item>\n            \n              <ion-label>\n               <h1>Your Driver is {{driverInfo.Driver_name}}</h1> \n               <p>1,832 rides</p>\n              </ion-label>\n            </ion-item>\n  \n          </ion-item>\n\n\n        <ion-item>\n\n          <ion-item *ngIf=\"cash\">\n          \n            <ion-label>\n             <h1><ion-icon color='primary'  slot=\"icon-only\" name=\"cash\"></ion-icon> Cash</h1> \n            </ion-label>\n          </ion-item>\n\n          <ion-item *ngIf=\"!cash\">\n           \n            <ion-label>\n              <h1> <ion-icon color='primary' slot=\"icon-only\" name=\"card\"></ion-icon> Card</h1>\n            </ion-label>\n          </ion-item>\n          \n\n          <ion-item class=\"price\">\n            <ion-label>\n              <h1>${{price}}</h1>\n            </ion-label>\n          </ion-item>\n              \n               \n        </ion-item>\n\n     </div>\n\n\n    \n      </ion-list>\n      \n\n\n    </ion-row>\n  </ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map