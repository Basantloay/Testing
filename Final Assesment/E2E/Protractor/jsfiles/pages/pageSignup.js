"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_2 = require("protractor");
class pageSignup {
    constructor() {
        //http://3.137.69.49/account.mayestro/signup
        this.emailInput = protractor_2.element(protractor_2.by.id("mat-input-0"));
        this.errorEmailInput = protractor_2.element(protractor_2.by.id("mat-error-4"));
        this.errorExistingEmail = protractor_2.element(protractor_2.by.xpath("//div[@class='mat-error mt-4 mat-form-field mat-form-field-subscript-wrapper ng-star-inserted']"));
        this.confirmEmail = protractor_2.element(protractor_2.by.id("mat-input-1"));
        this.errorConfirmEmailInput = protractor_2.element(protractor_2.by.id("mat-error-0"));
        this.errorDoesNotMatch = protractor_2.element(protractor_2.by.xpath("//div[@class='mat-error mat-form-field mat-form-field-subscript-wrapper ng-star-inserted']"));
        this.passwordInput = protractor_2.element(protractor_2.by.id("mat-input-2"));
        this.errorPasswordInput = protractor_2.element(protractor_2.by.id("mat-error-5"));
        this.nicknameInput = protractor_2.element(protractor_2.by.id("mat-input-3"));
        this.errorNicknameInput = protractor_2.element(protractor_2.by.id("mat-error-6"));
        this.birthDay = protractor_2.element(protractor_2.by.id("mat-input-4"));
        this.errorBirthDay = protractor_2.element(protractor_2.by.id("mat-error-1"));
        this.errorInvalidDateOfBirth = protractor_2.element(protractor_2.by.id("mat-error-7"));
        this.birthMonth = protractor_2.element(protractor_2.by.id("mat-select-0"));
        this.Jan = protractor_2.element(protractor_2.by.id("mat-option-0"));
        this.Feb = protractor_2.element(protractor_2.by.id("mat-option-1"));
        this.March = protractor_2.element(protractor_2.by.id("mat-option-2"));
        this.April = protractor_2.element(protractor_2.by.id("mat-option-3"));
        this.May = protractor_2.element(protractor_2.by.id("mat-option-4"));
        this.June = protractor_2.element(protractor_2.by.id("mat-option-5"));
        this.July = protractor_2.element(protractor_2.by.id("mat-option-6"));
        this.Aug = protractor_2.element(protractor_2.by.id("mat-option-7"));
        this.Sep = protractor_2.element(protractor_2.by.id("mat-option-8"));
        this.Oct = protractor_2.element(protractor_2.by.id("mat-option-9"));
        this.Nov = protractor_2.element(protractor_2.by.id("mat-option-10"));
        this.Dec = protractor_2.element(protractor_2.by.id("mat-option-11"));
        this.birthYear = protractor_2.element(protractor_2.by.id("mat-input-5"));
        this.errorBirthYear = protractor_2.element(protractor_2.by.id("mat-error-3"));
        //Sorry, but you don't meet Spotify's age requirements.
        this.genderMale = protractor_2.element(protractor_2.by.id("mat-radio-2"));
        this.genderFemale = protractor_2.element(protractor_2.by.id("mat-radio-3"));
        this.shareRegistration = protractor_2.element(protractor_2.by.id("mat-checkbox-1"));
        this.termsAndConditions = protractor_2.element(protractor_2.by.xpath("//a[.='Terms and Conditions of Use']"));
        this.privacyPolicy = protractor_2.element(protractor_2.by.xpath("//a[.='Privacy Policy']"));
        this.Login = protractor_2.element(protractor_2.by.xpath("//a[.='Log in']"));
        this.signupBtn = protractor_2.element(protractor_2.by.xpath("//button[@class='col-12 mb-2 signup-btn btn custom-btn  text-white']"));
    }
}
exports.pageSignup = pageSignup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZVNpZ251cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL3BhZ2VTaWdudXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBaUQ7QUFFakQsTUFBYyxVQUFVO0lBQXhCO1FBRUksNENBQTRDO1FBRTdDLGVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtRQUMxQyxvQkFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2hELHVCQUFrQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpR0FBaUcsQ0FBQyxDQUFDLENBQUM7UUFFMUksaUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtRQUM1QywyQkFBc0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN2RCxzQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNEZBQTRGLENBQUMsQ0FBQyxDQUFDO1FBRXBJLGtCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDOUMsdUJBQWtCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFFbkQsa0JBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5Qyx1QkFBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUVuRCxhQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDekMsa0JBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5Qyw0QkFBdUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUd2RCxlQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsUUFBRyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLFFBQUcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNyQyxVQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsVUFBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLFFBQUcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNyQyxTQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsU0FBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLFFBQUcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNyQyxRQUFHLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDckMsUUFBRyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLFFBQUcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUN0QyxRQUFHLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFFcEMsY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzFDLG1CQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDL0MsdURBQXVEO1FBRXZELGVBQVUsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUMxQyxpQkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBRTdDLHNCQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDckQsdUJBQWtCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxrQkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFFN0QsVUFBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDN0MsY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDLENBQUM7SUFFekcsQ0FBQztDQUFBO0FBbkRELGdDQW1EQyJ9