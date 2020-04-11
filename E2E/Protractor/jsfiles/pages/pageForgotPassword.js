"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class pageForgotPassword {
    constructor() {
        //http://3.137.69.49/account.mayestro/forget-password
        this.emailOrUsername = protractor_1.element(protractor_1.by.id("mat-input-0"));
        this.errorEmail = protractor_1.element(protractor_1.by.id("mat-error-0"));
        this.errorEmail2 = protractor_1.element(protractor_1.by.id("mat-error-1"));
        this.errorDoesNotExist = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/div/app-account-mayestro/div/div[2]/div[2]/app-forget-password/div/div/mat-form-field/div/div[1]/div/div"));
        this.sendBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='my-4 custom-btn btn btn-green text-white w-25']"));
        this.spotifySupport = protractor_1.element(protractor_1.by.xpath("//a[.='Spotify Support']"));
        this.resetUsingMockServer = protractor_1.element(protractor_1.by.xpath("//a[.='reset password Mock-server test only']"));
        //http://3.137.69.49/account.mayestro/forget-password
        this.newPassword = protractor_1.element(protractor_1.by.xpath("//input[@class='mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-invalid']"));
        this.errorNewPassword = protractor_1.element(protractor_1.by.xpath('//*[@id="mat-error-1"]/span'));
        this.errorPasswordTooShort = protractor_1.element(protractor_1.by.id("mat-error-1"));
        //div[@class='ng-tns-c4-4 ng-trigger ng-trigger-transitionMessages ng-star-inserted']//span[@class='ng-star-inserted']
        this.confirmNewPassword = protractor_1.element(protractor_1.by.xpath('//*[@id="mat-input-2"]'));
        this.errorConfirmNewPassword = protractor_1.element(protractor_1.by.xpath("//mat-error[@id='mat-error-1']/span"));
        this.errorConfirmPasswordTooShort = protractor_1.element(protractor_1.by.xpath('//*[@id="mat-error-2"]/span'));
        this.errorDoesNotMatch = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/div/app-account-mayestro/div/div[2]/div[2]/app-reset-password/div/mat-form-field[2]/div/div[1]/div/div"));
        this.resetSendBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='my-4 custom-btn btn btn-green text-white w-25']"));
        //http://3.137.69.49/account.mayestro/reset-password/81588711196
    }
}
exports.pageForgotPassword = pageForgotPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUZvcmdvdFBhc3N3b3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvcGFnZUZvcmdvdFBhc3N3b3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWlEO0FBRWpELE1BQWEsa0JBQWtCO0lBQS9CO1FBRUkscURBQXFEO1FBQ3RELG9CQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsZUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzNDLGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDNUMsc0JBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhIQUE4SCxDQUFDLENBQUMsQ0FBQTtRQUVySyxZQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUMsQ0FBQztRQUVoRyxtQkFBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFFL0QseUJBQW9CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQztRQUMxRixxREFBcUQ7UUFFckQsZ0JBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMklBQTJJLENBQUMsQ0FBQyxDQUFDO1FBQzdLLHFCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDcEUsMEJBQXFCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFHdEQsc0hBQXNIO1FBQ3RILHVCQUFrQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDakUsNEJBQXVCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztRQUNuRixpQ0FBNEIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLHNCQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0SEFBNEgsQ0FBQyxDQUFDLENBQUM7UUFFcEssaUJBQVksR0FBSSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQyxDQUFDO1FBQ3JHLGdFQUFnRTtJQUVwRSxDQUFDO0NBQUE7QUE3QkQsZ0RBNkJDIn0=