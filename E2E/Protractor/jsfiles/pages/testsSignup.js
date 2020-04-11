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
let newSignup = new pageSignup_1.pageSignup();
describe('Testing signup', function () {
    beforeAll(function () {
        protractor_1.browser.get('http://localhost:4200/account.mayestro/signup');
        let browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            log4jsconf_1.log4jsconf.log().info("Browser title: " + txt);
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
            let Arr = [newSignup.confirmEmail, newSignup.passwordInput, newSignup.nicknameInput, newSignup.birthDay, newSignup.birthMonth, newSignup.birthYear];
            newSignup.emailInput.sendKeys(protractor_1.protractor.Key.TAB).then(function () {
                for (let i in Arr) {
                    let currentElement = protractor_1.browser.driver.switchTo().activeElement();
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
            expect(yield newSignup.errorPasswordInput.getText()).toContain("Your password is too short.");
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
            newSignup.nicknameInput.sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            protractor_1.browser.sleep(2000);
            expect(yield newSignup.nicknameInput.getAttribute('value')).toEqual('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        });
    });
    it("invalid birthDay", function () {
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
    it("invalid birthYear < 1900", function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.birthYear.sendKeys(1899);
            newSignup.birthDay.click();
            expect(yield newSignup.errorBirthYear.getText()).toContain('Please enter a valid year');
        });
    });
    it("invalid birthYear >= 2000", function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.birthYear.sendKeys(2000);
            newSignup.birthDay.click();
            expect(yield newSignup.errorBirthYear.getText()).toContain("Sorry, but you don't meet Spotify's age requirements.");
        });
    });
    it("male gender selected", function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.genderMale.click();
            expect(yield newSignup.genderMale.isSelected()).toBe(true);
        });
    });
    it("female gender selected", function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newSignup.genderFemale.click();
            expect(yield newSignup.genderFemale.isSelected()).toBe(true);
        });
    });
    it("share registration selected", function () {
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
        let browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            log4jsconf_1.log4jsconf.log().info("Main browser title: " + txt);
        });
        newSignup.termsAndConditions.click();
        newSignup.privacyPolicy.click();
        let windowHandles = protractor_1.browser.getAllWindowHandles();
        let parentHandle, childHandle, child2Handle;
        windowHandles.then(function (handles) {
            parentHandle = handles[0];
            childHandle = handles[1];
            child2Handle = handles[2];
            protractor_1.browser.switchTo().window(childHandle).then(function () {
                protractor_1.browser.getTitle().then(function (txt) {
                    log4jsconf_1.log4jsconf.log().info("Main browser title: " + txt);
                    protractor_1.browser.close();
                });
            });
            protractor_1.browser.switchTo().window(child2Handle).then(function () {
                protractor_1.browser.getTitle().then(function (txt) {
                    log4jsconf_1.log4jsconf.log().info("Main browser title: " + txt);
                    protractor_1.browser.close();
                });
            });
            protractor_1.browser.switchTo().window(parentHandle).then(function () {
                console.log('Returning to main window...');
                protractor_1.browser.getTitle().then(function (txt) {
                    log4jsconf_1.log4jsconf.log().info("Main browser title: " + txt);
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNTaWdudXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy90ZXN0c1NpZ251cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE2RDtBQUM3RCxvREFBaUQ7QUFFakQsOENBQTBDO0FBRTFDLElBQUksU0FBUyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBRWpDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUV6QixTQUFTLENBQUM7UUFDTixvQkFBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1FBQzdELElBQUksWUFBWSxHQUFHLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFTLEdBQUc7WUFDNUIsdUJBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTs7WUFDM0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbkIsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1RCxDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGlCQUFpQixFQUFFOztZQUNwQixvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRWxCLElBQUksR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVwSixTQUFTLENBQUMsVUFB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