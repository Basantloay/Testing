"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var pageSignup = /** @class */ (function () {
    function pageSignup() {
        //http://3.137.69.49/account.mayestro/signup
        this.emailInput = protractor_1.element(protractor_1.by.id("mat-input-0"));
        this.errorEmailInput = protractor_1.element(protractor_1.by.id("mat-error-4"));
        this.errorExistingEmail = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-error mt-4 mat-form-field mat-form-field-subscript-wrapper ng-star-inserted']"));
        this.confirmEmail = protractor_1.element(protractor_1.by.id("mat-input-1"));
        this.errorConfirmEmailInput = protractor_1.element(protractor_1.by.id("mat-error-0"));
        this.errorDoesNotMatch = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-error mat-form-field mat-form-field-subscript-wrapper ng-star-inserted']"));
        this.passwordInput = protractor_1.element(protractor_1.by.id("mat-input-2"));
        this.errorPasswordInput = protractor_1.element(protractor_1.by.id("mat-error-5"));
        this.nicknameInput = protractor_1.element(protractor_1.by.id("mat-input-3"));
        this.errorNicknameInput = protractor_1.element(protractor_1.by.id("mat-error-6"));
        this.birthDay = protractor_1.element(protractor_1.by.id("mat-input-4"));
        this.errorBirthDay = protractor_1.element(protractor_1.by.id("mat-error-1"));
        this.errorInvalidDateOfBirth = protractor_1.element(protractor_1.by.id("mat-error-7"));
        this.birthMonth = protractor_1.element(protractor_1.by.id("mat-select-0"));
        this.Jan = protractor_1.element(protractor_1.by.id("mat-option-0"));
        this.Feb = protractor_1.element(protractor_1.by.id("mat-option-1"));
        this.March = protractor_1.element(protractor_1.by.id("mat-option-2"));
        this.April = protractor_1.element(protractor_1.by.id("mat-option-3"));
        this.May = protractor_1.element(protractor_1.by.id("mat-option-4"));
        this.June = protractor_1.element(protractor_1.by.id("mat-option-5"));
        this.July = protractor_1.element(protractor_1.by.id("mat-option-6"));
        this.Aug = protractor_1.element(protractor_1.by.id("mat-option-7"));
        this.Sep = protractor_1.element(protractor_1.by.id("mat-option-8"));
        this.Oct = protractor_1.element(protractor_1.by.id("mat-option-9"));
        this.Nov = protractor_1.element(protractor_1.by.id("mat-option-10"));
        this.Dec = protractor_1.element(protractor_1.by.id("mat-option-11"));
        this.birthYear = protractor_1.element(protractor_1.by.id("mat-input-5"));
        this.errorBirthYear = protractor_1.element(protractor_1.by.id("mat-error-3"));
        //Sorry, but you don't meet Spotify's age requirements.
        this.genderMale = protractor_1.element(protractor_1.by.id("mat-radio-2"));
        this.genderFemale = protractor_1.element(protractor_1.by.id("mat-radio-3"));
        this.shareRegistration = protractor_1.element(protractor_1.by.id("mat-checkbox-1"));
        this.termsAndConditions = protractor_1.element(protractor_1.by.xpath("//a[.='Terms and Conditions of Use']"));
        this.privacyPolicy = protractor_1.element(protractor_1.by.xpath("//a[.='Privacy Policy']"));
        this.Login = protractor_1.element(protractor_1.by.xpath("//a[.='Log in']"));
        this.signupBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='col-12 mb-2 signup-btn btn custom-btn  text-white']"));
    }
    return pageSignup;
}());
exports.pageSignup = pageSignup;
//# sourceMappingURL=pageSignup.js.map