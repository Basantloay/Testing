import { by, browser, element } from 'protractor'

export class pageForgotPassword{

    //http://3.137.69.49/account.mayestro/forget-password
   emailOrUsername = element(by.id("mat-input-0"));
   errorEmail = element(by.id("mat-error-0"));
   errorEmail2 = element(by.id("mat-error-1"));
   errorDoesNotExist = element(by.xpath("/html/body/app-root/div/app-account-mayestro/div/div[2]/div[2]/app-forget-password/div/div/mat-form-field/div/div[1]/div/div"))

   sendBtn = element(by.xpath("//button[@class='my-4 custom-btn btn btn-green text-white w-25']"));

   spotifySupport = element(by.xpath("//a[.='Spotify Support']"));

   resetUsingMockServer = element(by.xpath("//a[.='reset password Mock-server test only']"));
   //http://3.137.69.49/account.mayestro/forget-password

   newPassword = element(by.xpath("//input[@class='mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-invalid']"));
   errorNewPassword = element(by.xpath('//*[@id="mat-error-1"]/span'));
   errorPasswordTooShort = element(by.id("mat-error-1"));


   //div[@class='ng-tns-c4-4 ng-trigger ng-trigger-transitionMessages ng-star-inserted']//span[@class='ng-star-inserted']
   confirmNewPassword = element(by.xpath('//*[@id="mat-input-2"]'));
   errorConfirmNewPassword = element(by.xpath("//mat-error[@id='mat-error-1']/span"));
   errorConfirmPasswordTooShort = element(by.xpath('//*[@id="mat-error-2"]/span'));
   errorDoesNotMatch = element(by.xpath("/html/body/app-root/div/app-account-mayestro/div/div[2]/div[2]/app-reset-password/div/mat-form-field[2]/div/div[1]/div/div"));

   resetSendBtn =  element(by.xpath("//button[@class='my-4 custom-btn btn btn-green text-white w-25']"));
    //http://3.137.69.49/account.mayestro/reset-password/81588711196

}

