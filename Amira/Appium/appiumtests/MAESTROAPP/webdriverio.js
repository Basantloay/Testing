var webdriverio = require('webdriverio');
var expect = require('chai').expect;
var config = require('./helpers/desiredCapabilities').options;
var client = webdriverio.remote(config);

import { users } from './elements';

let user = new users();

describe('CALCU Testing', function () {

    beforeAll(function () {
        this.timeout(50000);
        return client.init();
    });

    

        it("test-close-startup-screen", function(){
            this.timeout(1000);
        });
        
        
          it('login disabled until..', async function(){
            expect(await user.loginBtn.isEnabled()).toBe(false);
            user.emailInput.sendKeys('a');
            user.passwordInput.sendKeys('11111111');
            expect(await user.loginBtn.isEnabled()).toBe(true);
            user.loginBtn.click();

          })
        
          it('valid login', async function(){
            user.emailInput.sendKeys('ahmed@gmail.com');
            user.passwordInput.sendKeys('12345678');
            user.loginBtn.click();
            expect(await user.homeBtn.isDisplayed()).toBe(true);
            user.homeBtn.click();

            
          })
        
           
        //  it('forbidden characters FAIL', async function(){
        //     user.emailInput.clear();
        //     user.emailInput.sendKeys("`");
        //     expect(await user.errorEmail.getText()).toContain('Forbidden character(s) ` in username.');
            
        //   })
        
        it('should have error message for incorrect username', async function () {
            user.emailInput.sendKeys('heloo');
            user.passwordInput.sendKeys('12345678');
            expect(await user.loginBtn.isEnabled()).toBe(true);
            user.loginBtn.click();
            expect(await user.loginTitle.getText()).toContain('Email or username');
            
        })

        it('should have error message for incorrect username', async function () {
            user.emailInput.sendKeys('heloo@gmail.com');
            user.forgotPasswordBtn.click();
            expect(await user.forgotPasswordTitle.getText()).toContain('Forgot your password?');
        
        })
        
        
        it('should have error message for incorrect password', async function () {
            user.emailInput.sendKeys('ahmed@gmail.com');
            user.passwordInput.sendKeys('1234567899');
            expect(await user.loginBtn.isEnabled()).toBe(true);
            user.loginBtn.click();
            expect(await user.loginTitle.getText()).toContain('Email or username');
        
            })
        
            it('Testing can not copy password', async function(){
          
              user.passwordInput.sendKeys('123456789').then(function(){
              //user.passwordInput.sendKeys(protractor.Key.CONTROL, 'a');
              user.passwordInput.sendKeys(protractor.Key.CONTROL, 'c');
              user.emailInput.sendKeys(protractor.Key.CONTROL, 'v');
        
              })
              expect( user.emailInput.getText()).not.toContain(user.passwordInput.getText());
        
            })
              
        
            it('go to sign up', async function(){
              user.signUpBtn.click();
              expect(await user.signupTitle.getText()).toContain("What's your email?");
            })
        
            it('go to forget password', async function(){
                user.loginBtn.click();
                user.forgotPasswordBtn.click();
                expect(await user.forgotPasswordTitle.getText()).toContain("What's your email?");
            })
        
            it('signup button disabled', async function(){
                user.signUpBtn.click();
                expect(await user.signupBtn.isEnabled()).toBe(false);
            })

            it('signup button enabled', async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail.com");
                expect(await user.nextBtn.isEnabled()).toBe(true);
                user.nextBtn.click();
            })

            it('invalid email format', async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail");
                expect(await user.signupBtn.isEnabled()).toBe(false);
            })

            it('next2btn disabled', async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail.com");
                user.nextBtn.click();
                expect(await user.nextBtn2.isEnabled()).toBe(false);
            })

            it('next2 button enabled', async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail.com");
                user.nextBtn.click();
                user.newPassword.sendKeys('123456789');
                expect(await user.nextBtn2.isEnabled()).toBe(true);

            })

            it('next2 button enabled and go to next step', async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail.com");
                user.nextBtn.click();
                user.newPassword.sendKeys('123456789');
                expect(await user.nextBtn2.isEnabled()).toBe(true);
                user.nextBtn2.click();
                expect(await user.birthDayTitle.getText()).toContain("What's your date of birth?");

            })

            it('password too short', async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail");
                user.nextBtn.click();
                user.newPassword.sendKeys('123');    
                expect(await user.nextBtn2.isEnabled()).toBe(false);

            })

            it("invalid birthDay", async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail.com");
                user.nextBtn.click();
                user.newPassword.sendKeys('123456789');
                user.nextBtn2.click();
                user.birthDay.sendKeys(35);
                expect(await user.birthDayTitle.getText()).toContain("What's your date of birth?");

              })

            it("invalid birthMonth", async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail.com");
                user.nextBtn.click();
                user.newPassword.sendKeys('123456789');
                user.nextBtn2.click();
                user.birthMonth.sendKeys(17);
                expect(await user.birthDayTitle.getText()).toContain("What's your date of birth?");

            })

            it("invalid birthyear <1900", async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail.com");
                user.nextBtn.click();
                user.newPassword.sendKeys('123456789');
                user.nextBtn2.click();
                user.yearOfBirth.sendKeys(235);
                expect(await user.birthDayTitle.getText()).toContain("What's your date of birth?");

              })

              it("invalid birthDay > 2020", async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail.com");
                user.nextBtn.click();
                user.newPassword.sendKeys('123456789');
                user.nextBtn2.click();
                user.yearOfBirth.sendKeys(2020);
                expect(await user.birthDayTitle.getText()).toContain("What's your date of birth?");

              })

              it("valid till gender", async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail.com");
                user.nextBtn.click();
                user.newPassword.sendKeys('123456789');
                user.nextBtn2.click();
                user.birthDay.sendKeys(12);
                user.birthMonth.sendKeys(1);
                user.yearOfBirth.sendKeys(1998);
                expect(await user.genderTitle.getText()).toContain("What's you gender?");

              })

              it(" gender selected", async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail.com");
                user.nextBtn.click();
                user.newPassword.sendKeys('123456789');
                user.nextBtn2.click();
                user.birthDay.sendKeys(12);
                user.birthMonth.sendKeys(1);
                user.yearOfBirth.sendKeys(1998);
                user.male.click();
                expect(await user.nameTitle.getText()).toContain("What's you name?");
              })

              it("create button disabled", async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail.com");
                user.nextBtn.click();
                user.newPassword.sendKeys('123456789');
                user.nextBtn2.click();
                user.birthDay.sendKeys(12);
                user.birthMonth.sendKeys(1);
                user.yearOfBirth.sendKeys(1998);
                user.male.click();
                expect(await user.createBtn.isEnabled()).toBe(false);

              })

              it("create button enabled", async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail.com");
                user.nextBtn.click();
                user.newPassword.sendKeys('123456789');
                user.nextBtn2.click();
                user.birthDay.sendKeys(12);
                user.birthMonth.sendKeys(1);
                user.yearOfBirth.sendKeys(1998);
                user.male.click();
                user.nameInput.sendKeys("ahmed");
                expect(await user.createBtn.isEnabled()).toBe(true);

              })

              it("create button enabled and signed up done", async function(){
                user.signUpBtn.click();
                user.emailInput.sendKeys("ahmed@gmail.com");
                user.nextBtn.click();
                user.newPassword.sendKeys('123456789');
                user.nextBtn2.click();
                user.birthDay.sendKeys(12);
                user.birthMonth.sendKeys(1);
                user.yearOfBirth.sendKeys(1998);
                user.male.click();
                user.nameInput.sendKeys("ahmed");
                user.createBtn.click();
                expect(await user.createBtn.isDisplayed()).toBe(true);

              })

    
    after(function() {
        return client.end();
    });
})
