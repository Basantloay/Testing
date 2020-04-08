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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var pageSignup_1 = require("../pages/pageSignup");
var log4jsconf_1 = require("../log4jsconf");
var newSignup = new pageSignup_1.pageSignup();
describe('Testing login', function () {
    beforeAll(function () {
        protractor_1.browser.get('http://localhost:4200/account.mayestro/signup');
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            log4jsconf_1.log4jsconf.log().info("Browser title: " + txt);
        });
    });
    it('signup button disabled', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.sleep(2000);
                        _a = expect;
                        return [4 /*yield*/, newSignup.signupBtn.isEnabled()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toBe(false);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Testing tab key', function () {
        return __awaiter(this, void 0, void 0, function () {
            var Arr;
            return __generator(this, function (_a) {
                protractor_1.browser.refresh();
                Arr = [newSignup.confirmEmail, newSignup.passwordInput, newSignup.nicknameInput, newSignup.birthDay, newSignup.birthMonth, newSignup.birthYear];
                newSignup.emailInput.sendKeys(protractor_1.protractor.Key.TAB).then(function () {
                    for (var i in Arr) {
                        var currentElement = protractor_1.browser.driver.switchTo().activeElement();
                        expect(currentElement.getId()).toEqual(Arr[i].getId());
                        Arr[i].sendKeys(protractor_1.protractor.Key.TAB);
                        protractor_1.browser.sleep(1500);
                    }
                });
                return [2 /*return*/];
            });
        });
    });
    //   it('invalid email format', async function(){
    //     browser.refresh();
    //     newSignup.emailInput.sendKeys('ahmed@gmail');
    //     newSignup.confirmEmail.click();
    //     expect(await newSignup.errorEmailInput.getText()).toContain('The email address you supplied is invalid.');
    //   })
    //   it('email already exists', async function() {
    //     browser.refresh();
    //     newSignup.emailInput.sendKeys('ahmed@gmail.com');
    //     newSignup.confirmEmail.click();
    //     expect(await newSignup.errorExistingEmail.getText()).toContain("We're sorry, that email is taken.");
    //     browser.sleep(1500)
    //   });
    //   it('no email', async function() {
    //     browser.refresh();
    //     newSignup.emailInput.click();
    //     newSignup.confirmEmail.click();
    //     expect(await newSignup.errorEmailInput.getText()).toContain('Please enter your email.');
    //     browser.sleep(1500)
    //   });
    //   it('invalid email confirmation format', async function(){
    //     browser.refresh();
    //     newSignup.confirmEmail.sendKeys('ahmedd@gmail');
    //     newSignup.passwordInput.click();
    //     expect(await newSignup.errorConfirmEmailInput.getText()).toContain('The email address you supplied is invalid.');
    //   })
    //   it('no email confirmation', async function() {
    //     browser.refresh();
    //     newSignup.confirmEmail.click();
    //     newSignup.passwordInput.click();
    //     expect(await newSignup.errorConfirmEmailInput.getText()).toContain('Please enter your email.');
    //     browser.sleep(1500)
    //   });
    //   it('email and email confirmation do not match', async function(){
    //     browser.refresh();
    //     newSignup.emailInput.sendKeys('ahmedd@gmail.com');
    //     newSignup.confirmEmail.sendKeys('ahmeddd@gmail.com');
    //     newSignup.passwordInput.click();
    //     expect(await newSignup.errorDoesNotMatch.getText()).toContain("Email address doesn't match.");
    //   })
    //   it('password too short', async function(){
    //     browser.refresh();
    //     newSignup.passwordInput.sendKeys('123');
    //     newSignup.nicknameInput.click();
    //     expect(await newSignup.errorPasswordInput.getText()).toContain("Your password is too short.");
    //   })
    //   it('no password', async function(){
    //     browser.refresh();
    //     newSignup.passwordInput.click();
    //     newSignup.nicknameInput.click();
    //     expect(await newSignup.errorPasswordInput.getText()).toContain('Enter a password to continue.');
    //   })
    //   it('nickname limit', async function(){
    //     browser.refresh();
    //     newSignup.nicknameInput.sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    //     browser.sleep(2000)
    //     expect(await newSignup.nicknameInput.getAttribute('value')).toEqual('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    //   })
    //   it("invalid birthDay", async function(){
    //     browser.refresh();
    //     newSignup.birthDay.sendKeys(35);
    //     newSignup.birthYear.click();
    //     expect(await newSignup.errorInvalidDateOfBirth.getText()).toContain('Please enter a valid day of the month.');
    //   })
    // //   it("invalid birthMonth", async function(){
    // //     browser.refresh();
    // //   })
    //     it("invalid birthYear < 1900", async function(){
    //         browser.refresh();
    //         newSignup.birthYear.sendKeys(1899);
    //         newSignup.birthDay.click();
    //         expect(await newSignup.errorBirthYear.getText()).toContain('Please enter a valid year');
    //     })
    //     it("invalid birthYear >= 2000", async function(){
    //         browser.refresh();
    //         newSignup.birthYear.sendKeys(2000);
    //         newSignup.birthDay.click();
    //         expect(await newSignup.errorBirthYear.getText()).toContain("Sorry, but you don't meet Spotify's age requirements.");
    //     })
    //     it("male gender selected", async function(){
    //         browser.refresh();
    //         newSignup.genderMale.click();
    //         expect(await newSignup.genderMale.isSelected()).toBe(true);
    //       })
    //     it("female gender selected", async function(){
    //         browser.refresh();
    //         newSignup.genderFemale.click();
    //         expect(await newSignup.genderFemale.isSelected()).toBe(true);
    //     })
    //     it("share registration selected", async function(){
    //         browser.refresh();
    //         newSignup.shareRegistration.click();
    //         expect(await newSignup.shareRegistration.isSelected()).toBe(true);
    //     })
    //     it('valid signup',async function(){
    //         browser.refresh();
    //         newSignup.emailInput.sendKeys('ahmedd@gmail.com');
    //         newSignup.confirmEmail.sendKeys('ahmedd@gmail.com');
    //         newSignup.passwordInput.sendKeys('123456789');
    //         newSignup.nicknameInput.sendKeys('Ahmed');
    //         newSignup.birthDay.sendKeys('1');
    //        newSignup.birthMonth.click();
    //         newSignup.Jan.click();
    //         newSignup.birthYear.sendKeys('1998');
    //         newSignup.genderMale.click();
    //         newSignup.shareRegistration.click();
    //         newSignup.signupBtn.isEnabled().then(async function(){
    //             newSignup.signupBtn.click();
    //             browser.sleep(3000)
    //             expect(await browser.getCurrentUrl()).toContain('http://localhost:4200/open.mayestro/overview')
    //             browser.navigate().back();
    //          })
    //     })
    //     it('go to login', async function(){
    //         browser.refresh();
    //         newSignup.Login.click();
    //         browser.sleep(2000)
    //         expect(await browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/login')
    //         browser.navigate().back();
    //       })
    //     it('terms & conditions and privacy policy', function(){
    //         browser.ignoreSynchronization = true;
    //         let browserTitle = browser.getTitle();
    //         browserTitle.then(function(txt){
    //           log4jsconf.log().info("Main browser title: " + txt);
    //         })
    //         newSignup.termsAndConditions.click();
    //         newSignup.privacyPolicy.click();
    //         let windowHandles = browser.getAllWindowHandles();
    //         let parentHandle, childHandle, child2Handle;
    //         windowHandles.then(function(handles){
    //             parentHandle = handles[0];
    //             childHandle = handles[1];
    //             child2Handle = handles[2];
    //             browser.switchTo().window(childHandle).then(function(){
    //                 browser.getTitle().then(function(txt){
    //                   log4jsconf.log().info("Main browser title: " + txt);
    //                     browser.close();
    //                 })
    //             })
    //             browser.switchTo().window(child2Handle).then(function(){
    //                 browser.getTitle().then(function(txt){
    //                   log4jsconf.log().info("Main browser title: " + txt);
    //                     browser.close();
    //                 })
    //             })
    //             browser.switchTo().window(parentHandle).then(function(){
    //                 console.log('Returning to main window...');
    //                 browser.getTitle().then(function(txt){
    //                   log4jsconf.log().info("Main browser title: " + txt);
    //                 })
    //             })
    //         })
    //     })
});
//# sourceMappingURL=testsSignup.js.map