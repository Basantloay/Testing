"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var loginPage = function () {
    var email_input = protractor_1.element(protractor_1.by.xpath("//input[@name='email']"));
    var password_input = protractor_1.element(protractor_1.by.xpath("//input[@name='password']"));
    var login_button = protractor_1.element(protractor_1.by.xpath("//button[@type='submit']"));
    this.get = function (url) {
        protractor_1.browser.get(url);
    };
    this.enterEmail = function (email) {
        email_input.sendKeys(email);
    };
    this.enterPassword = function (password) {
        password_input.sendKeys(password);
    };
    this.clickLogin = function () {
        login_button.click();
    };
};
module.exports = loginPage();
//# sourceMappingURL=loginPage.js.map