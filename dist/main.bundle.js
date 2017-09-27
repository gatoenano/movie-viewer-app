webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_rating__ = __webpack_require__("../../../../ngx-rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_rating__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_reducers__ = __webpack_require__("../../../../../src/app/common/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_effects__ = __webpack_require__("../../../../../src/app/common/effects/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_services__ = __webpack_require__("../../../../../src/app/common/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core



// routes

// ngrx



// modules

// reducers

// effects

// services

// modules

// components


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components__["d" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components__["e" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components__["c" /* ItemsListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components__["b" /* ItemDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["i" /* StoreModule */].forRoot({ rootReducer: __WEBPACK_IMPORTED_MODULE_8__common_reducers__["a" /* reducer */] }),
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({ maxAge: 25 }),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_9__common_effects__["b" /* SearchEffects */], __WEBPACK_IMPORTED_MODULE_9__common_effects__["a" /* ItemEffects */]]),
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_rating__["RatingModule"],
            __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* APP_ROUTING */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__common_services__["b" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_10__common_services__["a" /* ItemService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: 'en-Us' }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTING; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
// core

// components

var APP_ROUTES = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var APP_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/common/actions/item.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GetItemSuccess; });
/* unused harmony export GetItemFail */
// set action types
var ActionTypes = {
    ITEM: '[Item] Get item',
    ITEM_SUCCESS: '[Item] Get item Success',
    ITEM_FAIL: '[Item] Get item Fail'
};
var GetItem = (function () {
    function GetItem(payload) {
        this.payload = payload;
        this.type = ActionTypes.ITEM;
        console.log('ACTION GetItem payload: ', payload);
    }
    return GetItem;
}());

var GetItemSuccess = (function () {
    function GetItemSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.ITEM_SUCCESS;
        console.log('ACTION GetItemSuccess payload: ', payload);
    }
    return GetItemSuccess;
}());

var GetItemFail = (function () {
    function GetItemFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.ITEM_FAIL;
        console.log('ACTION GetItemFail payload: ', payload);
    }
    return GetItemFail;
}());

//# sourceMappingURL=item.actions.js.map

/***/ }),

/***/ "../../../../../src/app/common/actions/search.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SearchSuccess; });
/* unused harmony export SearchFail */
/* unused harmony export ClearSearch */
// set action types
var ActionTypes = {
    SEARCH: '[Search] Searching',
    SEARCH_SUCCESS: '[Search] Search Success',
    SEARCH_FAIL: '[Search] Search Fail',
    SEARCH_CLEAR: '[Search] Search Clear'
};
var Search = (function () {
    function Search(payload) {
        this.payload = payload;
        this.type = ActionTypes.SEARCH;
        console.log('ACTION Search payload: ', payload);
    }
    return Search;
}());

var SearchSuccess = (function () {
    function SearchSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.SEARCH_SUCCESS;
        console.log('ACTION SearchSuccess payload: ', payload);
    }
    return SearchSuccess;
}());

var SearchFail = (function () {
    function SearchFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.SEARCH_FAIL;
        console.log('ACTION SearchFail payload: ', payload);
    }
    return SearchFail;
}());

var ClearSearch = (function () {
    function ClearSearch(payload) {
        this.payload = payload;
        this.type = ActionTypes.SEARCH_CLEAR;
        console.log('ACTION SearchClear payload: ', payload);
    }
    return ClearSearch;
}());

//# sourceMappingURL=search.actions.js.map

/***/ }),

/***/ "../../../../../src/app/common/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ENDPOINT_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENDPOINT_IMAGE_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FILTER_POPULARITY; });
var ENDPOINT_URI = 'https://api.themoviedb.org/3/';
var ENDPOINT_IMAGE_URI = 'http://image.tmdb.org/t/p/w300//';
var API_KEY = '&api_key=4ff9d08260ed338797caa272d7df35dd';
var FILTER_POPULARITY = '&sort_by=popularity.desc';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/common/effects/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_effects__ = __webpack_require__("../../../../../src/app/common/effects/search.effects.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__search_effects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_effects__ = __webpack_require__("../../../../../src/app/common/effects/item.effects.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__item_effects__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/common/effects/item.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_item_actions__ = __webpack_require__("../../../../../src/app/common/actions/item.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_item_service__ = __webpack_require__("../../../../../src/app/common/services/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core


// rxjs





// actions

// services

var ItemEffects = (function () {
    function ItemEffects(itemService, actions$) {
        var _this = this;
        this.itemService = itemService;
        this.actions$ = actions$;
        this.item$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_item_actions__["a" /* ActionTypes */].ITEM)
            .distinctUntilChanged()
            .switchMap(function (id) { return _this.itemService.item(id); })
            .map(function (result) {
            console.log('EFFECT ItemEffects result: ', result);
            return new __WEBPACK_IMPORTED_MODULE_7__actions_item_actions__["c" /* GetItemSuccess */](result);
        })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_7__actions_item_actions__["a" /* ActionTypes */].ITEM_FAIL, payload: err }); });
    }
    return ItemEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ItemEffects.prototype, "item$", void 0);
ItemEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__services_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_item_service__["a" /* ItemService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _b || Object])
], ItemEffects);

var _a, _b;
//# sourceMappingURL=item.effects.js.map

/***/ }),

/***/ "../../../../../src/app/common/effects/search.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_search_actions__ = __webpack_require__("../../../../../src/app/common/actions/search.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_search_service__ = __webpack_require__("../../../../../src/app/common/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core


// rxjs





// actions

// services

var SearchEffects = (function () {
    function SearchEffects(searchService, actions$) {
        var _this = this;
        this.searchService = searchService;
        this.actions$ = actions$;
        this.search$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_search_actions__["a" /* ActionTypes */].SEARCH)
            .switchMap(function (text) { return _this.searchService.search(text); })
            .map(function (result) {
            console.log('EFFECT SearchEffects result: ', result);
            return new __WEBPACK_IMPORTED_MODULE_7__actions_search_actions__["c" /* SearchSuccess */](result);
        })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_7__actions_search_actions__["a" /* ActionTypes */].SEARCH_FAIL, payload: err }); });
    }
    return SearchEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], SearchEffects.prototype, "search$", void 0);
SearchEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _b || Object])
], SearchEffects);

var _a, _b;
//# sourceMappingURL=search.effects.js.map

/***/ }),

/***/ "../../../../../src/app/common/models/movies.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=movies.model.js.map

/***/ }),

/***/ "../../../../../src/app/common/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* unused harmony export getState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_core_compose__ = __webpack_require__("../../../../@ngrx/core/compose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__ = __webpack_require__("../../../../ngrx-store-freeze/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_reducer__ = __webpack_require__("../../../../../src/app/common/reducers/search.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_reducer__ = __webpack_require__("../../../../../src/app/common/reducers/item.reducer.ts");
// ngrx



// reducers


var reducers = {
    search: __WEBPACK_IMPORTED_MODULE_3__search_reducer__["b" /* reducer */],
    item: __WEBPACK_IMPORTED_MODULE_4__item_reducer__["b" /* reducer */]
};
// const globalReducer: ActionReducer<any> = combineReducers(reducers);
var globalReducer = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["k" /* combineReducers */])(reducers);
function reducer(state, action) {
    console.log('GLOBAL REDUCER state: ', state);
    console.log('GLOBAL REDUCER action: ', action);
    return globalReducer(state, action);
}
// search - selectors
var getState = function (state) { return state.search; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/common/reducers/item.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getItemState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_item_actions__ = __webpack_require__("../../../../../src/app/common/actions/item.actions.ts");
// actions

var initialState = {
    movie: null,
    error: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_item_actions__["a" /* ActionTypes */].ITEM_SUCCESS:
            console.log('REDUCER ITEM_SUCCESS: ', action.payload);
            return Object.assign({}, state, {
                movie: action.payload
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_item_actions__["a" /* ActionTypes */].ITEM_FAIL:
            console.log('REDUCER ITEM_FAIL: ', action.payload);
            return Object.assign({}, state, {
                error: action.payload
            });
        default: {
            return state;
        }
    }
}
// item - selectors
var getItemState = function (state) { return state; };
//# sourceMappingURL=item.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/common/reducers/search.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSearchState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_search_actions__ = __webpack_require__("../../../../../src/app/common/actions/search.actions.ts");
// actions

var initialState = {
    text: null,
    movies: null,
    error: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_search_actions__["a" /* ActionTypes */].SEARCH_SUCCESS:
            console.log('REDUCER SEARCH_SUCCESS: ', action.payload);
            return Object.assign({}, state, {
                movies: action.payload.results
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_search_actions__["a" /* ActionTypes */].SEARCH_FAIL:
            console.log('REDUCER SEARCH_FAIL: ', action.payload);
            return Object.assign({}, state, {
                text: null,
                error: action.payload
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_search_actions__["a" /* ActionTypes */].SEARCH_CLEAR:
            console.log('REDUCER SEARCH_CLEAR: ', action.payload);
            return Object.assign({}, state, {
                text: null
            });
        default: {
            return state;
        }
    }
}
// search - selectors
var getSearchState = function (state) { return state; };
//# sourceMappingURL=search.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/common/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_service__ = __webpack_require__("../../../../../src/app/common/services/search.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__search_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_service__ = __webpack_require__("../../../../../src/app/common/services/item.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__item_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/common/services/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core


// constants

var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
        this.path = 'movie/';
    }
    Object.defineProperty(ItemService.prototype, "url", {
        get: function () {
            return "" + __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* ENDPOINT_URI */] + this.path;
        },
        enumerable: true,
        configurable: true
    });
    ItemService.prototype.all = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); });
    };
    ItemService.prototype.item = function (item) {
        console.log('SERVICE ItemService item: ', item);
        return this.http.get("" + this.url + item.payload + "?" + __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* API_KEY */])
            .map(function (res) { return res.json(); })
            .catch(function (error) { throw (error); });
    };
    return ItemService;
}());
ItemService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ItemService);

var _a;
//# sourceMappingURL=item.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core


// constants

var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.path = 'search/movie?';
    }
    Object.defineProperty(SearchService.prototype, "url", {
        get: function () {
            return "" + __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* ENDPOINT_URI */] + this.path;
        },
        enumerable: true,
        configurable: true
    });
    SearchService.prototype.all = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); });
    };
    SearchService.prototype.search = function (searchCriteria) {
        console.log('SERVICE SearchService searchCriteria: ', searchCriteria);
        return this.http.get(this.url + "query=" + searchCriteria.payload.text + __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* FILTER_POPULARITY */] + __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* API_KEY */])
            .map(function (res) { return res.json(); })
            .catch(function (error) { throw (error); });
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row home-content pb-5\">\n  <div class=\"col-md-4 pb-3\">\n    <app-items-list\n      [list]=\"list$ | async\"\n      (selected)=\"showItemDetails($event)\">\n    </app-items-list>\n  </div>\n  <div class=\"col-md-8 pb-4\">\n    <app-item-details\n     [item]=\"item$ | async\">\n    </app-item-details>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_actions_item_actions__ = __webpack_require__("../../../../../src/app/common/actions/item.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_reducers_search_reducer__ = __webpack_require__("../../../../../src/app/common/reducers/search.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_reducers_item_reducer__ = __webpack_require__("../../../../../src/app/common/reducers/item.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core

// ngrx

// actions

// reducers


var HomeComponent = (function () {
    function HomeComponent(searchStore, itemStore) {
        this.searchStore = searchStore;
        this.itemStore = itemStore;
        // subscribe to data
        this.list$ = searchStore.select(__WEBPACK_IMPORTED_MODULE_3__common_reducers_search_reducer__["a" /* getSearchState */]);
        this.item$ = itemStore.select(__WEBPACK_IMPORTED_MODULE_4__common_reducers_item_reducer__["a" /* getItemState */]);
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('HomeComponent loaded');
    };
    // selected item id
    HomeComponent.prototype.showItemDetails = function (itemId) {
        console.log('HomeComponent showItemDetails itemId: ', itemId);
        if (itemId) {
            this.itemStore.dispatch(new __WEBPACK_IMPORTED_MODULE_2__common_actions_item_actions__["b" /* GetItem */](itemId));
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__items_list_items_list_component__ = __webpack_require__("../../../../../src/app/components/items-list/items-list.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__items_list_items_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details_component__ = __webpack_require__("../../../../../src/app/components/item-details/item-details.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__item_details_item_details_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__search_search_component__["a"]; });
// components





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/item-details/item-details.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"item.rootReducer.item.movie\">\n  <div class=\"row animated fast fadeIn\">\n    <div class=\"col-4\">\n      <img src=\"{{imageUri}}{{item.rootReducer.item.movie?.poster_path}}\" alt=\"\" class=\"img-thumbnail mb-4\">\n      <div>\n        <ng-container *ngIf=\"item.rootReducer.item.movie.production_countries.length\">\n          <ul class=\"pl-0 mb-3\">\n            <strong>Production countries</strong>\n            <li *ngFor=\"let item of item.rootReducer.item.movie.production_countries\"><small>{{ item.name }}</small></li>\n          </ul>\n        </ng-container>\n        <ng-container *ngIf=\"item.rootReducer.item.movie.budget\">\n          <strong>Budget</strong>\n          <p class=\"mb-3\">{{item.rootReducer.item.movie.budget | currency }}</p>\n        </ng-container>\n        <ng-container *ngIf=\"item.rootReducer.item.movie.homepage\">\n          <strong>Url</strong>\n          <a href=\"{{item.rootReducer.item.movie.homepage}}\">{{item.rootReducer.item.movie.homepage}}</a>\n        </ng-container>\n      </div>\n    </div>\n    <div class=\"col-8\">\n      <h2>{{item.rootReducer.item.movie?.title}}</h2>\n      <small>{{item.rootReducer.item.movie?.tagline}}</small>\n      <hr>\n      <p>{{item.rootReducer.item.movie?.overview}}</p>\n      <div class=\"text-right\">\n        <ngb-rating\n          [rate]=\"item.rootReducer.item.movie?.vote_average\"\n          [readonly]=\"true\">\n          <ng-template let-fill=\"fill\">\n            <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\n          </ng-template>\n        </ngb-rating>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/components/item-details/item-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/item-details/item-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_models_movies_model__ = __webpack_require__("../../../../../src/app/common/models/movies.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_models_movies_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_models_movies_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core

// models

// constants

var ItemDetailsComponent = (function () {
    function ItemDetailsComponent() {
    }
    Object.defineProperty(ItemDetailsComponent.prototype, "imageUri", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__common_constants__["b" /* ENDPOINT_IMAGE_URI */];
        },
        enumerable: true,
        configurable: true
    });
    ItemDetailsComponent.prototype.ngOnInit = function () {
        console.log('ItemDetailsComponent loaded');
    };
    return ItemDetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_models_movies_model__["IMovie"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_models_movies_model__["IMovie"]) === "function" && _a || Object)
], ItemDetailsComponent.prototype, "item", void 0);
ItemDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-item-details',
        template: __webpack_require__("../../../../../src/app/components/item-details/item-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/item-details/item-details.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ItemDetailsComponent);

var _a;
//# sourceMappingURL=item-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/items-list/items-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"list\">\n  <ul class=\"list-group\">\n    <li *ngFor=\"let item of list.rootReducer.search.movies, let i = index\"\n      (click)=\"selected.emit(item.id); active(i)\"\n      [ngClass]=\"{'active': selectedIndex == i}\"\n      class=\"list-group-item list-group-item-action animated fast fadeIn\">{{ item.title }}</li>\n  </ul>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/components/items-list/items-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-items-list li.active {\n  -ms-touch-action: none;\n      touch-action: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/items-list/items-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_models_movies_model__ = __webpack_require__("../../../../../src/app/common/models/movies.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_models_movies_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_models_movies_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core

// models

var ItemsListComponent = (function () {
    function ItemsListComponent() {
        // event of the selected movie
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ItemsListComponent.prototype.ngOnInit = function () {
        console.log('ItemsListComponent loaded');
    };
    // set element to active state
    ItemsListComponent.prototype.active = function (index) {
        this.selectedIndex = index;
    };
    return ItemsListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_models_movies_model__["IMovies"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_models_movies_model__["IMovies"]) === "function" && _a || Object)
], ItemsListComponent.prototype, "list", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ItemsListComponent.prototype, "selected", void 0);
ItemsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-items-list',
        template: __webpack_require__("../../../../../src/app/components/items-list/items-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/items-list/items-list.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ItemsListComponent);

var _a;
//# sourceMappingURL=items-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light mb-2 mb-md-4\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">\r\n      <img src=\"/assets/images/app-brand-icon.png\" width=\"50\" height=\"50\" class=\"mr-1\" alt=\"\">\r\n      <h4 class=\"d-inline-block\"><span>Movie</span><small class=\"text-info\">Viewer</small></h4>\r\n    </a>\r\n    <app-search></app-search>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        console.log('NavbarComponent loaded');
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<input id=\"typeahead-http\" type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_actions_search_actions__ = __webpack_require__("../../../../../src/app/common/actions/search.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core

// ngrx

// rxjs

// actions

var SearchComponent = (function () {
    function SearchComponent(el, store) {
        this.el = el;
        this.store = store;
    }
    SearchComponent.prototype.ngOnInit = function () {
        console.log('SearchComponent loaded');
        // initialize the listener for the typed text
        this.search();
    };
    // Gets the searched text in the search box
    SearchComponent.prototype.search = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].fromEvent(this.el.nativeElement, 'keyup')
            .map(function (e) { return e.target.value; })
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(function (text) {
            console.log('SearchComponent searched text: ', text);
            if (text) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__common_actions_search_actions__["b" /* Search */]({ text: text }));
            }
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map