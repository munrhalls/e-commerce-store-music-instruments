"use strict";
(self["webpackChunke_commerce_store_musical_instruments"] = self["webpackChunke_commerce_store_musical_instruments"] || []).push([["main"],{

/***/ 6752:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 1687);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6476);
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/store.component */ 7039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6742);





const routes = [{
  path: 'authenticate',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core_authenticate_authenticate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./core/authenticate/authenticate.module */ 834)).then(m => m.AuthenticateModule)
}, {
  path: 'store',
  component: _store_store_component__WEBPACK_IMPORTED_MODULE_0__.StoreComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
      preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
    }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 8231:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6742);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4993);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 1687);
/* harmony import */ var _core_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/mobile-menu/mobile-menu.component */ 8027);
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/header/header.component */ 5410);
/* harmony import */ var _core_mobile_search_mobile_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/mobile-search/mobile-search.component */ 9109);







function AppComponent_app_mobile_menu_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-mobile-menu");
  }
}
function AppComponent_app_mobile_search_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-mobile-search");
  }
}
class AppComponent {
  constructor(http) {
    this.http = http;
    this.title = 'Sang Logium';
    this.hello = '';
    this.isMobile = false;
  }
  getHello() {
    return this.http.get('http://server:8443/hello');
  }
  ngOnInit() {
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
    this.getHello().subscribe(data => {
      this.hello = data.message;
      console.log(this.hello);
    });
  }
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 1050;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 16,
    vars: 3,
    consts: [[4, "ngIf"], [2, "margin", "3rem"], [2, "color", "blue", "font-weight", "bold"], [2, "color", "teal", "font-weight", "bold"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-header")(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "HELLO WORLD!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Seeing this means that the development pipeline works and that the web app is served over the HTTPS (secure connection).");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AppComponent_app_mobile_menu_5_Template, 1, 0, "app-mobile-menu", 0)(6, AppComponent_app_mobile_search_6_Template, 1, 0, "app-mobile-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "HELLO WORLD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Hey. If you see me, the CI/CD pipeline works for frontend.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "And if you see me, then the CI/CD pipeline works after a tiny minor add --configuration=production to ng build in CI/CD.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "router-outlet");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Greeting from the server: ", ctx.hello || "...", "");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _core_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_0__.MobileMenuComponent, _core_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _core_mobile_search_mobile_search_component__WEBPACK_IMPORTED_MODULE_2__.MobileSearchComponent],
    styles: ["[_nghost-%COMP%] {\n  min-height: 100vh;\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9400:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 537);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 6752);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4993);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5544);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 8791);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 8231);
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/header/header.component */ 5410);
/* harmony import */ var _core_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mobile-menu/mobile-menu.component */ 8027);
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/store.component */ 7039);
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/footer/footer.component */ 6898);
/* harmony import */ var _store_store_menu_store_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/store-menu/store-menu.component */ 9857);
/* harmony import */ var _store_store_display_store_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/store-display/store-display.component */ 1398);
/* harmony import */ var _core_mobile_search_mobile_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/mobile-search/mobile-search.component */ 9109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 6742);














class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_core_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_3__.MobileMenuComponent, _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _core_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _store_store_component__WEBPACK_IMPORTED_MODULE_4__.StoreComponent, _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _store_store_menu_store_menu_component__WEBPACK_IMPORTED_MODULE_6__.StoreMenuComponent, _store_store_display_store_display_component__WEBPACK_IMPORTED_MODULE_7__.StoreDisplayComponent, _core_mobile_search_mobile_search_component__WEBPACK_IMPORTED_MODULE_8__.MobileSearchComponent],
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeModule]
  });
})();

/***/ }),

/***/ 6898:
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6742);

class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 2,
    vars: 0,
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["footer[_ngcontent-%COMP%] {\n  background-color: blanchedalmond;\n  border: 3px solid black;\n  min-height: 10rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbiAgbWluLWhlaWdodDogMTByZW07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5410:
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6476);
/* harmony import */ var _menu_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu-service.service */ 2596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6742);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 5520);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 1687);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5544);

// import { Subject } from 'rxjs'
// import { takeUntil } from 'rxjs/operators'








function HeaderComponent_fa_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faBars);
  }
}
function HeaderComponent_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 7);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faTimes);
  }
}
function HeaderComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faSearch);
  }
}
function HeaderComponent_fa_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 22);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.faTimes);
  }
}
function HeaderComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.openAuthenticateURL());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r4.faUser);
  }
}
function HeaderComponent_fa_icon_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fa-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_fa_icon_16_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.closeAuthenticateURL());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r5.faTimes);
  }
}
function HeaderComponent_fa_icon_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 25);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r6.faBars);
  }
}
function HeaderComponent_fa_icon_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 25);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r7.faTimes);
  }
}
function HeaderComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r8.faSearch);
  }
}
function HeaderComponent_fa_icon_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 25);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r9.faTimes);
  }
}
function HeaderComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_33_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.openAuthenticateURL());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r10.faUser);
  }
}
function HeaderComponent_fa_icon_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_fa_icon_34_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.closeAuthenticateURL());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r11.faTimes);
  }
}
const _c0 = a0 => ({
  "disable-scroll": a0
});
class HeaderComponent {
  constructor(router, route, menuService, renderer) {
    this.router = router;
    this.route = route;
    this.menuService = menuService;
    this.renderer = renderer;
    this.openElementName = '';
    this.isAuthenticationOpen = false;
    this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSearch;
    this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUser;
    this.faShieldAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faShieldAlt;
    this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faShoppingCart;
    this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faBars;
    this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faTimes;
  }
  toggleMobileMenu() {
    this.menuService.toggleMobileMenu();
  }
  toggleMobileSearch() {
    this.menuService.toggleMobileSearch();
  }
  openAuthenticateURL() {
    this.menuService.openAuthenticateURL();
  }
  closeAuthenticateURL() {
    this.menuService.closeAuthenticateURL();
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        const url = event.urlAfterRedirects;
        if (url.includes('authenticate')) {
          this.menuService.setOpenElementNameManually('');
          this.isAuthenticationOpen = true;
        } else {
          this.isAuthenticationOpen = false;
        }
      }
    });
    this.menuService.openElementName.subscribe(openElementName => {
      this.openElementName = openElementName;
      if (this.openElementName?.length > 0) {
        this.isAuthenticationOpen = false;
        this.renderer.addClass(document.body, 'no-scroll');
      } else {
        this.renderer.removeClass(document.body, 'no-scroll');
      }
    });
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_menu_service_service__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 43,
    vars: 20,
    consts: [[3, "ngClass"], [1, "shop"], [1, "tablet-menu-button", 3, "click"], [3, "icon", 4, "ngIf"], ["src", "./../assets/LOGO.png", "alt", "Lux Logium", 1, "logo"], [1, "search"], ["type", "text", "placeholder", "Search in 7941 products..."], [3, "icon"], [1, "buttons"], [1, "btn-search", 3, "click"], ["class", "btn-container", 4, "ngIf"], ["class", "icon-close fa-3x", 3, "icon", 4, "ngIf"], ["class", "btn-container", 3, "click", 4, "ngIf"], ["class", "icon-close fa-3x", 3, "icon", "click", 4, "ngIf"], [1, "btn-reserve"], [1, "fa-xl", 3, "icon"], [1, "btn-cart"], [1, "mobile-footer-nav"], [1, "mobile-menu-button", 3, "click"], ["class", "fa-3x", 3, "icon", 4, "ngIf"], ["class", "fa-3x", 3, "icon", "click", 4, "ngIf"], [1, "btn-container"], [1, "icon-close", "fa-3x", 3, "icon"], [1, "btn-container", 3, "click"], [1, "icon-close", "fa-3x", 3, "icon", "click"], [1, "fa-3x", 3, "icon"], [1, "fa-3x", 3, "icon", "click"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() {
          return ctx.toggleMobileMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderComponent_fa_icon_4_Template, 1, 1, "fa-icon", 3)(5, HeaderComponent_fa_icon_5_Template, 1, 1, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6)(9, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_11_listener() {
          return ctx.toggleMobileSearch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HeaderComponent_div_12_Template, 4, 1, "div", 10)(13, HeaderComponent_fa_icon_13_Template, 1, 1, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HeaderComponent_div_15_Template, 4, 1, "div", 12)(16, HeaderComponent_fa_icon_16_Template, 1, 1, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Reserve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17)(26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_26_listener() {
          return ctx.toggleMobileMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HeaderComponent_fa_icon_27_Template, 1, 1, "fa-icon", 19)(28, HeaderComponent_fa_icon_28_Template, 1, 1, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_29_listener() {
          return ctx.toggleMobileSearch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, HeaderComponent_div_30_Template, 4, 1, "div", 10)(31, HeaderComponent_fa_icon_31_Template, 1, 1, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, HeaderComponent_div_33_Template, 4, 1, "div", 12)(34, HeaderComponent_fa_icon_34_Template, 1, 1, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Reserve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, ctx.openElementName.length > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.openElementName !== "mobile-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.openElementName === "mobile-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.openElementName !== "mobile-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.openElementName === "mobile-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuthenticationOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticationOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faShieldAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faShoppingCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.openElementName !== "mobile-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.openElementName === "mobile-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.openElementName !== "mobile-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.openElementName === "mobile-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuthenticationOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticationOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faShieldAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faShoppingCart);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent],
    styles: ["\n\n\n\n\nnav[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  height: var(--nav-mobile-height);\n  background-color: #16171b;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.mobile-footer-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  align-items: center;\n  height: var(--mobile-footer-nav);\n  width: 100%;\n  background-color: #16171b;\n}\n.disable-scroll[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  color: #a50101;\n  border: none;\n  cursor: pointer;\n}\nfa-icon[_ngcontent-%COMP%] {\n  color: #f5cd8b;\n}\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  white-space: nowrap;\n}\n\n\n\n.shop[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n\n\n.mobile-menu-button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: -0.25rem;\n}\n.tablet-menu-button[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n.logo[_ngcontent-%COMP%] {\n  justify-self: center;\n  height: 5.75rem;\n  margin-top: 0.25rem;\n}\n\n\n\n\n.search[_ngcontent-%COMP%] {\n  position: relative;\n  display: none;\n  max-width: 36rem;\n  width: 100%;\n  color: #a50101;\n}\n.search[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  padding-right: 30px; \n\n  border: none;\n  border-bottom: 1px solid #a50101;\n  color: #f5cd8b;\n}\n.search[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #f5cd8b;\n  font-size: 1.5rem;\n}\n\n\n\n.buttons[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mobile-footer-nav[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.btn-cart[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  margin-left: -0.275rem;\n}\n\n\n\n\n\n\n\n\n\n\n@media only screen and (min-width: 21em) {\n  button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n  }\n}\n\n\n\n@media only screen and (min-width: 48em) {\n  nav[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    height: 6.5rem;\n  }\n  .shop[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-start;\n    margin-left: 2rem;\n  }\n  .shop[_ngcontent-%COMP%]   .tablet-menu-button[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0.1rem 1rem 0 0;\n    font-size: 3.5em;\n  }\n\n  .buttons[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n  }\n  .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-right: 2rem;\n  }\n\n  .buttons[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%] {\n    padding-right: 0.75rem;\n  }\n\n  .mobile-menu-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-footer-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n\n\n@media only screen and (min-width: 64em) {\n  nav[_ngcontent-%COMP%] {\n    grid-template-columns: 2fr 2fr 3fr;\n  }\n  .logo[_ngcontent-%COMP%] {\n    margin-left: 2rem;\n  }\n  .shop[_ngcontent-%COMP%]   .tablet-menu-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .search[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .btn-search[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .buttons[_ngcontent-%COMP%] {\n    margin-right: 2rem;\n  }\n}\n\n\n\n@media only screen and (min-width: 88em) {\n  nav[_ngcontent-%COMP%] {\n    grid-template-columns: 3fr 4fr 3fr;\n  }\n  .shop[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .shop[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-right: 15%;\n  }\n  .buttons[_ngcontent-%COMP%] {\n    margin-right: 0;\n    justify-content: center;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQW1GOztBQUVuRixXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGdDQUFnQztFQUNoQyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQSxzQkFBc0I7QUFDdEI7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsU0FBUztBQUNUO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQixFQUFFLDRCQUE0QjtFQUNqRCxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7O0NBSUM7O0FBRUQsZ0JBQWdCO0FBQ2hCO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNT0JJTEUtRklSU1Q6IENTUyBGT1IgUEhPTkUgLT4gTUlOLVdJRFRIIE1FRElBIFFVRVJJRVMgVE9XQVJEUyBMQVJHRVIgU0NSRUVOUyAgKi9cclxuXHJcbi8qIE5BVkJBUiAqL1xyXG5uYXYge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtbW9iaWxlLWhlaWdodCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTcxYjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbi5tb2JpbGUtZm9vdGVyLW5hdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogdmFyKC0tbW9iaWxlLWZvb3Rlci1uYXYpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE3MWI7XHJcbn1cclxuLmRpc2FibGUtc2Nyb2xsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4vKiBBTEw6IElDT04gQlVUVE9OUyAqL1xyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2E1MDEwMTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmZhLWljb24ge1xyXG4gIGNvbG9yOiAjZjVjZDhiO1xyXG59XHJcbmJ1dHRvbiBzcGFuIHtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLyogU0hPUCBNRU5VICYgTE9HTyovXHJcbi5zaG9wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBNRU5VIEJVVFRPTiAqL1xyXG4ubW9iaWxlLW1lbnUtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IC0wLjI1cmVtO1xyXG59XHJcbi50YWJsZXQtbWVudS1idXR0b24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIExPR08gKi9cclxuLmxvZ28ge1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGhlaWdodDogNS43NXJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG59XHJcblxyXG4vKiBTRUFSQ0ggSU5QVVQgKi9cclxuXHJcbi5zZWFyY2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG1heC13aWR0aDogMzZyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICNhNTAxMDE7XHJcbn1cclxuLnNlYXJjaCBpbnB1dFt0eXBlPSd0ZXh0J10ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDsgLyogTWFrZSBzcGFjZSBmb3IgdGhlIGljb24gKi9cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhNTAxMDE7XHJcbiAgY29sb3I6ICNmNWNkOGI7XHJcbn1cclxuLnNlYXJjaCBmYS1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDAuMXJlbTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgY29sb3I6ICNmNWNkOGI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi8qIFVTRVIgQlVUVE9OUyAgKi9cclxuLmJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2JpbGUtZm9vdGVyLW5hdiAuYnRuLWNvbnRhaW5lcixcclxuLmJ1dHRvbnMgLmJ0bi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJ0bi1jYXJ0IGZhLWljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMC4yNzVyZW07XHJcbn1cclxuXHJcbi8qIE1FRElBIFFVRVJZIENPTU1PTiBHT1RDSEEnUzpcclxuLSBVUERBVEUgR1JJRC1URU1QTEFURS1DT0xVTU5TIE9OIGRpc3BsYXk6bm9uZS9ibG9ja1xyXG4tIFJPT1QgRk9OVCA9IDEycHhcclxuLSBCVVQgQ0FMQ1VMQVRJT04gU1RJTEwgPSBVU0lORyA8bnVtPi8xNlxyXG4qL1xyXG5cclxuLyogMzUwKyBQSE9ORVMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMWVtKSB7XHJcbiAgYnV0dG9uIHNwYW4ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIDc2OCsgVEFCTEVUUyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4ZW0pIHtcclxuICBuYXYge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcclxuICAgIGhlaWdodDogNi41cmVtO1xyXG4gIH1cclxuICAuc2hvcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgfVxyXG4gIC5zaG9wIC50YWJsZXQtbWVudS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAuMXJlbSAxcmVtIDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMy41ZW07XHJcbiAgfVxyXG5cclxuICAuYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgLmJ1dHRvbnMgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICB9XHJcblxyXG4gIC5idXR0b25zIC5pY29uLWNsb3NlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLW1lbnUtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5tb2JpbGUtZm9vdGVyLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLyogMTA1MCsgU01BTEwgTk9URVBBRFMqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pIHtcclxuICBuYXYge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDNmcjtcclxuICB9XHJcbiAgLmxvZ28ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgfVxyXG4gIC5zaG9wIC50YWJsZXQtbWVudS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnNlYXJjaCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmJ0bi1zZWFyY2gge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gIH1cclxufVxyXG5cclxuLyogMTQwMCsgTEFQVE9QUy9QQydTICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODhlbSkge1xyXG4gIG5hdiB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA0ZnIgM2ZyO1xyXG4gIH1cclxuICAuc2hvcCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLnNob3AgLmxvZ28ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgfVxyXG4gIC5idXR0b25zIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2596:
/*!**********************************************!*\
  !*** ./src/app/core/menu-service.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuService: () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6780);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6742);





class MenuService {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    this.openElementName = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this.urlStack = [];
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)).subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        if (!this.urlStack.includes(event.urlAfterRedirects)) {
          this.urlStack.push(event.urlAfterRedirects);
        }
      }
    });
  }
  setOpenElementNameManually(name) {
    this.openElementName.next(name);
  }
  toggleMobileMenu() {
    this.openElementName.next(this.openElementName.value === 'mobile-menu' ? '' : 'mobile-menu');
    this.closeAuthenticateURL();
  }
  toggleMobileSearch() {
    this.openElementName.next(this.openElementName.value === 'mobile-search' ? '' : 'mobile-search');
    this.closeAuthenticateURL();
  }
  openAuthenticateURL() {
    this.router.navigate(['/authenticate']).catch(err => {
      console.error('Navigation Error:', err);
    });
  }
  closeAuthenticateURL() {
    if (this.urlStack.length > 1) {
      this.urlStack.pop(); // Remove current URL
      const lastUrl = this.urlStack.pop() ?? '/'; // Get last URL
      this.router.navigate([lastUrl]).catch(err => {
        console.error('Navigation Error:', err);
      });
    } else {
      this.router.navigate(['/']).catch(err => {
        console.error('Navigation Error:', err);
      }); // Default route
    }
  }
  static #_ = this.ɵfac = function MenuService_Factory(t) {
    return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: MenuService,
    factory: MenuService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8027:
/*!***********************************************************!*\
  !*** ./src/app/core/mobile-menu/mobile-menu.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileMenuComponent: () => (/* binding */ MobileMenuComponent)
/* harmony export */ });
/* harmony import */ var _menu_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../menu-service.service */ 2596);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 9200);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9351);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1775);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 5520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6742);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6476);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5544);









class MobileMenuComponent {
  constructor(menuService) {
    this.menuService = menuService;
    this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.isOpen = false;
    this.menuState = 'closed';
    this.faAngleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faAngleRight;
  }
  ngOnInit() {
    this.menuService.openElementName.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.unsubscribe$)).subscribe(openElementName => {
      this.isOpen = openElementName === 'mobile-menu';
      this.menuState = this.isOpen && this.menuState === 'closed' ? 'open' : 'closed';
    });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  static #_ = this.ɵfac = function MobileMenuComponent_Factory(t) {
    return new (t || MobileMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_menu_service_service__WEBPACK_IMPORTED_MODULE_0__.MenuService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MobileMenuComponent,
    selectors: [["app-mobile-menu"]],
    decls: 37,
    vars: 8,
    consts: [[1, "mobile-menu"], ["routerLink", "/store"], [3, "icon"]],
    template: function MobileMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "ul")(2, "li")(3, "a", 1)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li")(8, "a", 1)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Women");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li")(13, "a", 1)(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Luxury Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li")(18, "a", 1)(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Custom Made");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li")(23, "a", 1)(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Luxury Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li")(28, "a", 1)(29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Luxury Watch Care");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "li")(33, "a", 1)(34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Watch Collections");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@slideInOut", ctx.menuState);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faAngleRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faAngleRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faAngleRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faAngleRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faAngleRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faAngleRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faAngleRight);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent],
    styles: [".mobile-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  left: -21em;\n  top: var(--nav-mobile-height);\n  bottom: var(--mobile-footer-nav);\n  display: grid;\n  grid-template-columns: 0 5fr 0;\n\n  padding: 1rem 0;\n  width: 21em;\n\n  border-top: 1px solid #f5cd8b;\n  border-bottom: 1px solid #f5cd8b;\n  overflow-y: scroll;\n\n  background: #16171b;\n}\n.mobile-menu[_ngcontent-%COMP%]::before, .mobile-menu[_ngcontent-%COMP%]::after {\n  content: \"\";\n}\n\nul[_ngcontent-%COMP%] {\n  grid-column: 2;\n  padding: 0 1rem 1rem 2rem;\n  list-style: none;\n}\na[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  align-items: center;\n  height: 100%;\n  text-decoration: none;\n  color: #a50101;\n  font-family: \"Montserrat\", \"Lato\", \"Roboto\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  text-transform: uppercase;\n}\nspan[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 0.5rem;\n  padding: 1rem 0 1rem 0;\n  line-height: 1.5;\n}\n\nli[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\nfa-icon[_ngcontent-%COMP%] {\n  height: 100%;\n  justify-self: center;\n  align-self: center;\n  color: #f5cd8b;\n  padding: 1rem;\n  border-radius: 3px;\n  line-height: 1.5;\n}\n\n\n@media screen and (min-width: 48em) {\n  .mobile-menu[_ngcontent-%COMP%] {\n    top: var(--nav-notepad-height);\n    bottom: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9tb2JpbGUtbWVudS9tb2JpbGUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYiw4QkFBOEI7O0VBRTlCLGVBQWU7RUFDZixXQUFXOztFQUVYLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsa0JBQWtCOztFQUVsQixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QseUVBQXlFO0VBQ3pFLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0EsaUJBQWlCO0FBQ2pCO0VBQ0U7SUFDRSw4QkFBOEI7SUFDOUIsU0FBUztFQUNYO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubW9iaWxlLW1lbnUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAtMjFlbTtcclxuICB0b3A6IHZhcigtLW5hdi1tb2JpbGUtaGVpZ2h0KTtcclxuICBib3R0b206IHZhcigtLW1vYmlsZS1mb290ZXItbmF2KTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCA1ZnIgMDtcclxuXHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIHdpZHRoOiAyMWVtO1xyXG5cclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y1Y2Q4YjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1Y2Q4YjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gIGJhY2tncm91bmQ6ICMxNjE3MWI7XHJcbn1cclxuLm1vYmlsZS1tZW51OjpiZWZvcmUsXHJcbi5tb2JpbGUtbWVudTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbnVsIHtcclxuICBncmlkLWNvbHVtbjogMjtcclxuICBwYWRkaW5nOiAwIDFyZW0gMXJlbSAycmVtO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuYSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjYTUwMTAxO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJMYXRvXCIsIFwiUm9ib3RvXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbnNwYW4ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbmxpOmxhc3QtY2hpbGQgYSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5mYS1pY29uIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZjVjZDhiO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuLyogVEFCTEVUUyA3NjgrICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4ZW0pIHtcclxuICAubW9iaWxlLW1lbnUge1xyXG4gICAgdG9wOiB2YXIoLS1uYXYtbm90ZXBhZC1oZWlnaHQpO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        transform: 'translateX(100%)'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('closed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        transform: 'translateX(0%)'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('open => closed', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('400ms ease-in-out')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('closed => open', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('300ms ease-in-out')])])]
    }
  });
}

/***/ }),

/***/ 9109:
/*!***************************************************************!*\
  !*** ./src/app/core/mobile-search/mobile-search.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileSearchComponent: () => (/* binding */ MobileSearchComponent)
/* harmony export */ });
/* harmony import */ var _menu_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu-service.service */ 2596);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 5520);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 9200);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9351);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6742);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5544);








class MobileSearchComponent {
  constructor(menuService) {
    this.menuService = menuService;
    this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.isOpen = false;
    this.searchFormState = 'out';
    this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSearch;
  }
  ngOnInit() {
    this.menuService.openElementName.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.unsubscribe$)).subscribe(openElementName => {
      this.isOpen = openElementName === 'mobile-search';
      this.searchFormState = this.isOpen && this.searchFormState === 'closed' ? 'open' : 'closed';
    });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  static #_ = this.ɵfac = function MobileSearchComponent_Factory(t) {
    return new (t || MobileSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_menu_service_service__WEBPACK_IMPORTED_MODULE_0__.MenuService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MobileSearchComponent,
    selectors: [["app-mobile-search"]],
    decls: 7,
    vars: 2,
    consts: [[1, "mobile-search"], [1, "container"], [1, "search"], ["type", "text", "rows", "1", "placeholder", "Search in 7941 products..."], [3, "icon"]],
    template: function MobileSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 3)(4, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "SEARCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@slideInOut", ctx.searchFormState);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faSearch);
      }
    },
    dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent],
    styles: [".mobile-search[_ngcontent-%COMP%] {\n  position: fixed;\n  left: -100%;\n  top: var(--nav-mobile-height);\n  bottom: var(--mobile-footer-nav);\n\n  padding: 2rem 0;\n  width: 100%;\n  background: #16171b;\n  overflow-y: scroll;\n  border-top: 1px solid #f5cd8b;\n  border-bottom: 1px solid #f5cd8b;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n}\n.container[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  font-family: inherit;\n  min-width: 0;\n  border-radius: 50px;\n  padding: 1rem;\n  background-color: #fff;\n  font-size: 1.5rem;\n  box-sizing: border-box;\n}\n.container[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n  display: block;\n  margin-left: 2rem;\n  font-size: 2rem;\n  color: #f5cd8b;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-radius: 50px;\n  border: 1px solid #f5cd8b;\n  padding: 1rem 1.5rem;\n  letter-spacing: 1px;\n  font-size: 1rem;\n  color: #a50101;\n  cursor: pointer;\n}\n\n\n\n@media screen and (min-width: 48em) {\n  .mobile-search[_ngcontent-%COMP%] {\n    top: var(--nav-notepad-height);\n    bottom: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9tb2JpbGUtc2VhcmNoL21vYmlsZS1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGdDQUFnQzs7RUFFaEMsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7QUFDQTs7RUFFRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRTtJQUNFLDhCQUE4QjtJQUM5QixTQUFTO0VBQ1g7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5tb2JpbGUtc2VhcmNoIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogLTEwMCU7XHJcbiAgdG9wOiB2YXIoLS1uYXYtbW9iaWxlLWhlaWdodCk7XHJcbiAgYm90dG9tOiB2YXIoLS1tb2JpbGUtZm9vdGVyLW5hdik7XHJcblxyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMTYxNzFiO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y1Y2Q4YjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1Y2Q4YjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jb250YWluZXIgLnNlYXJjaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuLmNvbnRhaW5lciAuc2VhcmNoIHRleHRhcmVhLFxyXG5pbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmNvbnRhaW5lciAuc2VhcmNoIGZhLWljb24ge1xyXG4gIG1hcmdpbi10b3A6IDAuMXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY29sb3I6ICNmNWNkOGI7XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1Y2Q4YjtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogI2E1MDEwMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFRBQkxFVFMgNzY4KyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OGVtKSB7XHJcbiAgLm1vYmlsZS1zZWFyY2gge1xyXG4gICAgdG9wOiB2YXIoLS1uYXYtbm90ZXBhZC1oZWlnaHQpO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('slideInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        transform: 'translateX(100%)'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('closed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        transform: 'translateX(0%)'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('open => closed', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('250ms ease-in-out')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('closed => open', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('200ms ease-in-out')])])]
    }
  });
}

/***/ }),

/***/ 1398:
/*!****************************************************************!*\
  !*** ./src/app/store/store-display/store-display.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreDisplayComponent: () => (/* binding */ StoreDisplayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6742);

class StoreDisplayComponent {
  static #_ = this.ɵfac = function StoreDisplayComponent_Factory(t) {
    return new (t || StoreDisplayComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StoreDisplayComponent,
    selectors: [["app-store-display"]],
    decls: 7,
    vars: 0,
    consts: [[1, "store-display"], [1, "store-display-panel"], [1, "store-display-products"]],
    template: function StoreDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "I AM STORE!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "STORE PANEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "STORE PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".store-display-products[_ngcontent-%COMP%] {\n  min-height: 40rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RvcmUvc3RvcmUtZGlzcGxheS9zdG9yZS1kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvcmUtZGlzcGxheS1wcm9kdWN0cyB7XHJcbiAgbWluLWhlaWdodDogNDByZW07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9857:
/*!**********************************************************!*\
  !*** ./src/app/store/store-menu/store-menu.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreMenuComponent: () => (/* binding */ StoreMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6742);

class StoreMenuComponent {
  static #_ = this.ɵfac = function StoreMenuComponent_Factory(t) {
    return new (t || StoreMenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StoreMenuComponent,
    selectors: [["app-store-menu"]],
    decls: 2,
    vars: 0,
    consts: [[1, "store-menu"]],
    template: function StoreMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "STORE MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: [".store-menu[_ngcontent-%COMP%] {\n  background-color: darkgray;\n  border: 3px solid black;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RvcmUvc3RvcmUtbWVudS9zdG9yZS1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiLnN0b3JlLW1lbnUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7039:
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreComponent: () => (/* binding */ StoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6742);

class StoreComponent {
  static #_ = this.ɵfac = function StoreComponent_Factory(t) {
    return new (t || StoreComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StoreComponent,
    selectors: [["app-store"]],
    decls: 5,
    vars: 0,
    consts: [[1, "grid-container"]],
    template: function StoreComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "HEY, I AM STORE!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "I AM STORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".grid-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 2fr 5fr; \n\n  padding: 0 2rem 0 0;\n}\n\n.grid-item[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 10px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RvcmUvc3RvcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCLEVBQUUsNkNBQTZDO0VBQzdFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNWZyOyAvKiAxc3QgY29sdW1uIGlzIDRyZW0sIDJuZCBjb2x1bW4gc3RyZXRjaGVzICovXHJcbiAgcGFkZGluZzogMCAycmVtIDAgMDtcclxufVxyXG5cclxuLmdyaWQtaXRlbSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6367:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  googleClientId: '562530975953-et2n9p5119teuu9fo859k70cekhse768.apps.googleusercontent.com'
};

/***/ }),

/***/ 2068:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 537);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 9400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6742);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 6367);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => {
  console.error(err);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(2068)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map