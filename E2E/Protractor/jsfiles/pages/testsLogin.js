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
const pageLogin_1 = require("../pages/pageLogin");
const log4jsconf_1 = require("../log4jsconf");
let newlogin = new pageLogin_1.pageLogin();
/**This is the specs for login the page  */
describe('Testing login', function () {
    /**
     * getting executed before each test case
     */
    beforeAll(function () {
        protractor_1.browser.get('http://3.137.69.49/account.mayestro/login');
        let browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            log4jsconf_1.log4jsconf.log().info("Browser title: " + txt);
        });
    });
    /**
     * tests the responsiveness of the window
     */
    it('responsiveness', function () {
        for (var i = 0; i <= 4; i++) {
            switch (i) {
                case 0:
                    protractor_1.browser.manage().window().setSize(320, 480);
                    protractor_1.browser.sleep(1500);
                    break;
                case 1:
                    protractor_1.browser.manage().window().setSize(600, 800);
                    protractor_1.browser.sleep(1500);
                    break;
                case 2:
                    protractor_1.browser.manage().window().setSize(768, 1024);
                    protractor_1.browser.sleep(1500);
                    break;
                case 3:
                    protractor_1.browser.manage().window().setSize(1080, 1920);
                    protractor_1.browser.sleep(1500);
                    break;
                case 4:
                    protractor_1.browser.manage().window().setSize(1200, 1800);
                    return;
            }
        }
    });
    it('cursor on email by default FAIL', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(2000);
            let currentElement = protractor_1.browser.driver.switchTo().activeElement();
            expect(currentElement.getId()).toEqual(newlogin.emailInput.getId());
        });
    });
    it('login disabled until..', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            expect(yield newlogin.loginBtn.isEnabled()).toBe(false);
            newlogin.emailInput.sendKeys('a');
            newlogin.passwordInput.sendKeys('11111111');
            expect(yield newlogin.loginBtn.isEnabled()).toBe(true);
        });
    });
    it('valid login', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newlogin.emailInput.sendKeys('ahmed@gmail.com');
            newlogin.passwordInput.sendKeys('12345678');
            newlogin.loginBtn.click();
            protractor_1.browser.sleep(4000);
            expect(yield protractor_1.browser.getCurrentUrl()).toContain('http://3.137.69.49/open.mayestro/overview');
            protractor_1.browser.navigate().back();
        });
    });
    it('forbidden characters FAIL', function () {
        return __awaiter(this, void 0, void 0, function* () {
            newlogin.emailInput.clear();
            newlogin.emailInput.sendKeys("`");
            expect(yield newlogin.errorEmail.getText()).toContain('Forbidden character(s) ` in username.');
        });
    });
    it('should have error message for incorrect username', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newlogin.emailInput.sendKeys('heloo');
            newlogin.passwordInput.sendKeys('12345678');
            newlogin.loginBtn.click();
            expect(yield newlogin.redErrormsg.getText()).toContain('Incorrect username or password.');
        });
    });
    it('should have error message for incorrect password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newlogin.emailInput.sendKeys('ahmed@gmail.com');
            newlogin.passwordInput.sendKeys('1234567899');
            newlogin.loginBtn.click();
            expect(yield newlogin.redErrormsg.getText()).toContain('Incorrect username or password.');
        });
    });
    it('Testing can not copy password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newlogin.passwordInput.sendKeys('123456789').then(function () {
                //newlogin.passwordInput.sendKeys(protractor.Key.CONTROL, 'a');
                newlogin.passwordInput.sendKeys(protractor_1.protractor.Key.CONTROL, 'c');
                newlogin.emailInput.sendKeys(protractor_1.protractor.Key.CONTROL, 'v');
            });
            expect(newlogin.emailInput.getText()).not.toContain(newlogin.passwordInput.getText());
        });
    });
    it('Testing tab key', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newlogin.emailInput.sendKeys(protractor_1.protractor.Key.TAB).then(function () {
                let currentElement = protractor_1.browser.driver.switchTo().activeElement();
                expect(currentElement.getId()).toEqual(newlogin.passwordInput.getId());
            });
        });
    });
    it('no email', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newlogin.emailInput.click();
            newlogin.passwordInput.click();
            expect(yield newlogin.errorEmail.getText()).toContain('Please enter your email.');
            protractor_1.browser.sleep(1500);
        });
    });
    it('no password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newlogin.passwordInput.click();
            newlogin.emailInput.click();
            expect(yield newlogin.errorPassword.getText()).toContain('Enter a password to continue.');
            protractor_1.browser.sleep(1500);
        });
    });
    it('go to sign up', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.refresh();
            newlogin.signUp.click();
            protractor_1.browser.sleep(2000);
            expect(yield protractor_1.browser.getCurrentUrl()).toContain('http://3.137.69.49/account.mayestro/signup');
            protractor_1.browser.navigate().back();
        });
    });
    it('go to forget password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            newlogin.forgotPassword.click();
            protractor_1.browser.sleep(2000);
            expect(yield protractor_1.browser.getCurrentUrl()).toContain('http://3.137.69.49/account.mayestro/forget-password');
            protractor_1.browser.navigate().back();
        });
    });
    it('terms & conditions and privacy policy', function () {
        protractor_1.browser.ignoreSynchronization = true;
        let browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            log4jsconf_1.log4jsconf.log().info("Main browser title: " + txt);
        });
        newlogin.termsAndConditions.click();
        newlogin.privacyPolicy.click();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNMb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL3Rlc3RzTG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUQ7QUFDekQsa0RBQStDO0FBRS9DLDhDQUEwQztBQUUxQyxJQUFJLFFBQVEsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUUvQiwyQ0FBMkM7QUFDM0MsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUV4Qjs7T0FFRztJQUNILFNBQVMsQ0FBQztRQUNOLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDekQsSUFBSSxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVMsR0FBRztZQUM1Qix1QkFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFDO0lBR0g7O09BRUc7SUFDSCxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7UUFFbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixRQUFRLENBQUMsRUFBRTtnQkFDVCxLQUFLLENBQUM7b0JBQ0osb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUM1QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDakIsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0osb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUM1QyxvQkFB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