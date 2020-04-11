"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const pageSignup_1 = require("../pages/pageSignup");
const log4jsconf_1 = require("../log4jsconf");
const newSignup = new pageSignup_1.pageSignup();
describe('Testing signup', function () {
    beforeAll(function () {
        protractor_1.browser.get('http://localhost:4200/account.mayestro/signup');
        const browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            log4jsconf_1.log4jsconf.log().info('Browser title: ' + txt);
        });
    });
    it('signup button disabled', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(2000);
            expect(yield newSignup.signupBtn.isEnabled()).toBe(false);
        });
    });
    it('Testing tab key', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            const Arr = [newSignup.confirmEmail, newSignup.passwordInput, newSignup.nicknameInput, newSignup.birthDay, newSignup.birthMonth, newSignup.birthYear];
            newSignup.emailInput.sendKeys(protractor_1.protractor.Key.TAB).then(function () {
                for (const i in Arr) {
                    const currentElement = protractor_1.browser.driver.switchTo().activeElement();
                    expect(currentElement.getId()).toEqual(Arr[i].getId());
                    Arr[i].sendKeys(protractor_1.protractor.Key.TAB);
                }
            });
        });
    });
    it('invalid email format', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.emailInput.sendKeys('ahmed@gmail');
            newSignup.confirmEmail.click();
            expect(yield newSignup.errorEmailInput.getText()).toContain('The email address you supplied is invalid.');
        });
    });
    it('email already exists', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.emailInput.sendKeys('ahmed@gmail.com');
            newSignup.confirmEmail.click();
            expect(yield newSignup.errorExistingEmail.getText()).toContain("We're sorry, that email is taken.");
            protractor_1.browser.sleep(1500);
        });
    });
    it('no email', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.emailInput.click();
            newSignup.confirmEmail.click();
            expect(yield newSignup.errorEmailInput.getText()).toContain('Please enter your email.');
            protractor_1.browser.sleep(1500);
        });
    });
    it('invalid email confirmation format', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.confirmEmail.sendKeys('ahmedd@gmail');
            newSignup.passwordInput.click();
            expect(yield newSignup.errorConfirmEmailInput.getText()).toContain('The email address you supplied is invalid.');
        });
    });
    it('no email confirmation', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.confirmEmail.click();
            newSignup.passwordInput.click();
            expect(yield newSignup.errorConfirmEmailInput.getText()).toContain('Please enter your email.');
            protractor_1.browser.sleep(1500);
        });
    });
    it('email and email confirmation do not match', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.emailInput.sendKeys('ahmedd@gmail.com');
            newSignup.confirmEmail.sendKeys('ahmeddd@gmail.com');
            newSignup.passwordInput.click();
            expect(yield newSignup.errorDoesNotMatch.getText()).toContain("Email address doesn't match.");
        });
    });
    it('password too short', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.passwordInput.sendKeys('123');
            newSignup.nicknameInput.click();
            expect(yield newSignup.errorPasswordInput.getText()).toContain('Your password is too short.');
        });
    });
    it('no password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.passwordInput.click();
            newSignup.nicknameInput.click();
            expect(yield newSignup.errorPasswordInput.getText()).toContain('Enter a password to continue.');
        });
    });
    it('nickname limit', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.nicknameInput.sendKeys('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
            protractor_1.browser.sleep(2000);
            expect(yield newSignup.nicknameInput.getAttribute('value')).toEqual('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        });
    });
    it('invalid birthDay', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.birthDay.sendKeys(35);
            newSignup.birthYear.click();
            expect(yield newSignup.errorInvalidDateOfBirth.getText()).toContain('Please enter a valid day of the month.');
        });
    });
    //   it("invalid birthMonth", async function(){
    //     browser.refresh();
    //   })
    it('invalid birthYear < 1900', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.birthYear.sendKeys(1899);
            newSignup.birthDay.click();
            expect(yield newSignup.errorBirthYear.getText()).toContain('Please enter a valid year');
        });
    });
    it('invalid birthYear >= 2000', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.birthYear.sendKeys(2000);
            newSignup.birthDay.click();
            expect(yield newSignup.errorBirthYear.getText()).toContain("Sorry, but you don't meet Spotify's age requirements.");
        });
    });
    it('male gender selected', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.genderMale.click();
            expect(yield newSignup.genderMale.isSelected()).toBe(true);
        });
    });
    it('female gender selected', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.genderFemale.click();
            expect(yield newSignup.genderFemale.isSelected()).toBe(true);
        });
    });
    it('share registration selected', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.shareRegistration.click();
            expect(yield newSignup.shareRegistration.isSelected()).toBe(true);
        });
    });
    it('valid signup', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.emailInput.sendKeys('ahmedd@gmail.com');
            newSignup.confirmEmail.sendKeys('ahmedd@gmail.com');
            newSignup.passwordInput.sendKeys('123456789');
            newSignup.nicknameInput.sendKeys('Ahmed');
            newSignup.birthDay.sendKeys('1');
            newSignup.birthMonth.click();
            newSignup.Jan.click();
            newSignup.birthYear.sendKeys('1998');
            newSignup.genderMale.click();
            newSignup.shareRegistration.click();
            newSignup.signupBtn.isEnabled().then(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    newSignup.signupBtn.click();
                    protractor_1.browser.sleep(3000);
                    expect(yield protractor_1.browser.getCurrentUrl()).toContain('http://localhost:4200/open.mayestro/overview');
                    protractor_1.browser.navigate().back();
                });
            });
        });
    });
    it('go to login', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.Login.click();
            protractor_1.browser.sleep(2000);
            expect(yield protractor_1.browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/login');
            protractor_1.browser.navigate().back();
        });
    });
    it('terms & conditions and privacy policy', function () {
        protractor_1.browser.ignoreSynchronization = true;
        const browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            log4jsconf_1.log4jsconf.log().info('Main browser title: ' + txt);
        });
        newSignup.termsAndConditions.click();
        newSignup.privacyPolicy.click();
        const windowHandles = protractor_1.browser.getAllWindowHandles();
        let parentHandle, childHandle, child2Handle;
        windowHandles.then(function (handles) {
            parentHandle = handles[0];
            childHandle = handles[1];
            child2Handle = handles[2];
            protractor_1.browser.switchTo().window(childHandle).then(function () {
                protractor_1.browser.getTitle().then(function (txt) {
                    log4jsconf_1.log4jsconf.log().info('Main browser title: ' + txt);
                    protractor_1.browser.close();
                });
            });
            protractor_1.browser.switchTo().window(child2Handle).then(function () {
                protractor_1.browser.getTitle().then(function (txt) {
                    log4jsconf_1.log4jsconf.log().info('Main browser title: ' + txt);
                    protractor_1.browser.close();
                });
            });
            protractor_1.browser.switchTo().window(parentHandle).then(function () {
                console.log('Returning to main window...');
                protractor_1.browser.getTitle().then(function (txt) {
                    log4jsconf_1.log4jsconf.log().info('Main browser title: ' + txt);
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNTaWdudXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy90ZXN0c1NpZ251cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE2RDtBQUM3RCxvREFBZ0Q7QUFFaEQsOENBQTBDO0FBRTFDLE1BQU0sU0FBUyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFBO0FBRWxDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN6QixTQUFTLENBQUM7UUFDUixvQkFBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFBO1FBQzVELE1BQU0sWUFBWSxHQUFHLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDdkMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDN0IsdUJBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLENBQUE7UUFDaEQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTs7WUFDM0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbkIsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzRCxDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGlCQUFpQixFQUFFOztZQUNwQixvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBRWpCLE1BQU0sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUVySixTQUFTLENBQUMsVUFB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