"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var pageLogin = /** @class */ (function () {
    function pageLogin() {
        //http://3.137.69.49/account.mayestro/forget-password
        this.emailOrUsername = protractor_1.element(protractor_1.by.xpath("//input[@name='email']"));
        this.sendBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='my-4 custom-btn btn btn-green text-white w-25']"));
        this.spotifySupport = protractor_1.element(protractor_1.by.xpath("//a[.='Spotify Support']"));
        this.resetUsingMockServer = protractor_1.element(protractor_1.by.xpath("//a[.='reset password Mock-server test only']"));
        //http://3.137.69.49/account.mayestro/forget-password
        this.newPassword = protractor_1.element(protractor_1.by.xpath("//input[@name='email']"));
        this.confirmNewPassword = protractor_1.element(protractor_1.by.xpath("//input[@class='mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-invalid ng-touched']"));
        this.resetSendBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='my-4 custom-btn btn btn-green text-white w-25']"));
        //http://3.137.69.49/account.mayestro/reset-password/81588711196
    }
    return pageLogin;
}());
exports.pageLogin = pageLogin;
//# sourceMappingURL=pageForgotPassword.js.map