/**
 * ng2-adal - Use Azure AD Library - ADAL in Angular 4 & 2. For Angular 4, use latest version 1.x.x. For Angular 2 use 0.3.1 version.
 * @version v1.0.1
 * @link https://github.com/sureshchahal/angular2-adal#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var adal_module_1 = require("./adal.module");
var authHttp_service_1 = require("./../services/authHttp.service");
var AuthHttpModule = (function () {
    function AuthHttpModule() {
    }
    return AuthHttpModule;
}());
AuthHttpModule = __decorate([
    core_1.NgModule({
        imports: [adal_module_1.AdalModule],
        exports: [],
        declarations: [],
        providers: [authHttp_service_1.AuthHttp],
    }),
    __metadata("design:paramtypes", [])
], AuthHttpModule);
exports.AuthHttpModule = AuthHttpModule;

//# sourceMappingURL=authHttp.module.js.map
