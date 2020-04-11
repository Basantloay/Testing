"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class pageLogin {
    constructor() {
        // http://3.137.69.49/account.mayestro/signup
        this.emailInput = protractor_1.element(protractor_1.by.xpath("//input[@name='email']"));
        this.passwordInput = protractor_1.element(protractor_1.by.xpath("//input[@name='password']"));
        this.loginBtn = protractor_1.element(protractor_1.by.xpath("//button[@type='submit']"));
        this.redErrormsg = protractor_1.element(protractor_1.by.xpath("//p[@class='col-12 mb-0 text-white']"));
        this.errorEmail = protractor_1.element(protractor_1.by.xpath("//span[@class='ng-star-inserted']"));
        this.errorPassword = protractor_1.element(protractor_1.by.xpath("//span[@class='ng-star-inserted']"));
        this.termsAndConditions = protractor_1.element(protractor_1.by.xpath("//a[.='Terms & Conditions']"));
        this.privacyPolicy = protractor_1.element(protractor_1.by.xpath("//a[.='Privacy Policy.']"));
        this.rememberMe = protractor_1.element(protractor_1.by.xpath("//mat-checkbox[@id='mat-checkbox-1']/label/div"));
        this.forgotPassword = protractor_1.element(protractor_1.by.xpath("//a[.='Forgot your password?']"));
        this.signUp = protractor_1.element(protractor_1.by.xpath("//a[contains(.,'sign up for mayestro')]"));
    }
}
exports.pageLogin = pageLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvZ2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvcGFnZUxvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWlEO0FBRWpELE1BQWEsU0FBUztJQUF0QjtRQUNJLDZDQUE2QztRQUM3QyxlQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUN6RCxrQkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFDL0QsYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFFekQsZ0JBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLGVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLGtCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUV2RSx1QkFBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLGtCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUU5RCxlQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztRQUNqRixtQkFBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDckUsV0FBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztDQUFBO0FBaEJELDhCQWdCQyJ9