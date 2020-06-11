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
let newSignup = new pageSignup_1.pageSignup();
describe('Testing signup', function () {
    beforeAll(function () {
        protractor_1.browser.get('http://localhost:4200/account.mayestro/signup');
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
        newSignup.termsAndConditions.click();
        newSignup.privacyPolicy.click();
        let windowHandles = protractor_1.browser.getAllWindowHandles();
        let parentHandle, childHandle, child2Handle;
        windowHandles.then(function (handles) {
            parentHandle = handles[0];
            childHandle = handles[1];
            child2Handle = handles[2];
            protractor_1.browser.switchTo().window(childHandle).then(function () {
                protractor_1.browser.close();
            });
            protractor_1.browser.switchTo().window(child2Handle).then(function () {
                protractor_1.browser.close();
            });
            protractor_1.browser.switchTo().window(parentHandle).then(function () {
                console.log('Returning to main window...');
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNTaWdudXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy90ZXN0c1NpZ251cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE2RDtBQUM3RCxvREFBaUQ7QUFHakQsSUFBSSxTQUFTLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFFakMsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBRXpCLFNBQVMsQ0FBQztRQUNOLG9CQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7SUFFakUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0JBQXdCLEVBQUU7O1lBQzNCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25CLE1BQU0sQ0FBQyxNQUFNLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUQsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTs7WUFDcEIsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVsQixJQUFJLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFcEosU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNyRCxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtvQkFFbkIsSUFBSSxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQy9ELE1BQU0s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