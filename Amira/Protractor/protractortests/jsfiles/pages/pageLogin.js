"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var pageLogin = /** @class */ (function () {
    function pageLogin() {
        this.emailInput = protractor_1.element(protractor_1.by.xpath("//input[@name='email']"));
        this.passwordInput = protractor_1.element(protractor_1.by.xpath("//input[@name='password']"));
        this.loginBtn = protractor_1.element(protractor_1.by.xpath("//button[@type='submit']"));
        this.redErrormsg = protractor_1.element(protractor_1.by.xpath("//p[@class='col-12 mb-0 text-white']"));
        this.errorEmail = protractor_1.element(protractor_1.by.xpath("//span[@class='ng-star-inserted']"));
        this.errorPassword = protractor_1.element(protractor_1.by.xpath("//span[@class='ng-star-inserted']"));
        this.termsAndConditions = protractor_1.element(protractor_1.by.xpath("//a[.='Terms & Conditions']"));
        this.privacyPolicy = protractor_1.element(protractor_1.by.xpath("//a[.='Privacy Policy.']"));
    }
    return pageLogin;
}());
exports.pageLogin = pageLogin;
//# sourceMappingURL=pageLogin.js.map