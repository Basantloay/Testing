import { by, browser, element } from 'protractor'

export class pageLogin{

    //http://3.137.69.49/account.mayestro/forget-password
   emailOrUsername = element(by.xpath("//input[@name='email']"));
   sendBtn = element(by.xpath("//button[@class='my-4 custom-btn btn btn-green text-white w-25']"));

   spotifySupport = element(by.xpath("//a[.='Spotify Support']"));

   resetUsingMockServer = element(by.xpath("//a[.='reset password Mock-server test only']"));
   //http://3.137.69.49/account.mayestro/forget-password

   newPassword = element(by.xpath("//input[@name='email']"));
   confirmNewPassword = element(by.xpath("//input[@class='mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-invalid ng-touched']"));
   resetSendBtn =  element(by.xpath("//button[@class='my-4 custom-btn btn btn-green text-white w-25']"));
    //http://3.137.69.49/account.mayestro/reset-password/81588711196

}

