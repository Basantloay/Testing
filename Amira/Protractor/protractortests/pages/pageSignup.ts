import { by, browser, element } from 'protractor'

export class  pageSignup{

    //http://3.137.69.49/account.mayestro/signup

   emailInput = element(by.id("mat-input-0"))
   errorEmailInput = element(by.id("mat-error-4"));
   errorExistingEmail = element(by.xpath("//div[@class='mat-error mt-4 mat-form-field mat-form-field-subscript-wrapper ng-star-inserted']"));

   confirmEmail = element(by.id("mat-input-1"))
   errorConfirmEmailInput = element(by.id("mat-error-0"));
   errorDoesNotMatch = element(by.xpath("//div[@class='mat-error mat-form-field mat-form-field-subscript-wrapper ng-star-inserted']"));
   
   passwordInput = element(by.id("mat-input-2"));
   errorPasswordInput = element(by.id("mat-error-5"));

   nicknameInput = element(by.id("mat-input-3"));
   errorNicknameInput = element(by.id("mat-error-6"));

   birthDay = element(by.id("mat-input-4"));
   errorBirthDay = element(by.id("mat-error-1"));
   errorInvalidDateOfBirth = element(by.id("mat-error-7"));


    birthMonth = element(by.id("mat-select-0"));
    Jan = element(by.id("mat-option-0"));
    Feb = element(by.id("mat-option-1"));
    March = element(by.id("mat-option-2"));
	April = element(by.id("mat-option-3"));
	May = element(by.id("mat-option-4"));
	June = element(by.id("mat-option-5"));
	July = element(by.id("mat-option-6"));
	Aug = element(by.id("mat-option-7"));
	Sep = element(by.id("mat-option-8"));
	Oct = element(by.id("mat-option-9"));
	Nov = element(by.id("mat-option-10"));
	Dec = element(by.id("mat-option-11"));

   birthYear = element(by.id("mat-input-5"));
   errorBirthYear = element(by.id("mat-error-3"));
   //Sorry, but you don't meet Spotify's age requirements.
  
   genderMale =element(by.id("mat-radio-2"));
   genderFemale = element(by.id("mat-radio-3"));
   
   shareRegistration = element(by.id("mat-checkbox-1"));
   termsAndConditions = element(by.xpath("//a[.='Terms and Conditions of Use']"));
   privacyPolicy = element(by.xpath("//a[.='Privacy Policy']"));
   
   Login = element(by.xpath("//a[.='Log in']"));
   signupBtn = element(by.xpath("//button[@class='col-12 mb-2 signup-btn btn custom-btn  text-white']"));
    
}