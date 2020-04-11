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
const newlogin = new pageLogin_1.pageLogin();
/** This is the specs for login the page  */
describe('Testing login', function () {
    /**
     * getting executed before each test case
     */
    beforeAll(function () {
        protractor_1.browser.get('http://3.137.69.49/account.mayestro/login');
        const browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            log4jsconf_1.log4jsconf.log().info('Browser title: ' + txt);
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
            const currentElement = protractor_1.browser.driver.switchTo().activeElement();
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
            newlogin.emailInput.sendKeys('`');
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
                // newlogin.passwordInput.sendKeys(protractor.Key.CONTROL, 'a');
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
                const currentElement = protractor_1.browser.driver.switchTo().activeElement();
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
        const browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            log4jsconf_1.log4jsconf.log().info('Main browser title: ' + txt);
        });
        newlogin.termsAndConditions.click();
        newlogin.privacyPolicy.click();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNMb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL3Rlc3RzTG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUQ7QUFDekQsa0RBQThDO0FBRTlDLDhDQUEwQztBQUUxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQTtBQUVoQyw0Q0FBNEM7QUFDNUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUN4Qjs7T0FFRztJQUNILFNBQVMsQ0FBQztRQUNSLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUE7UUFDeEQsTUFBTSxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUN2QyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUM3Qix1QkFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUNoRCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0lBRUY7O09BRUc7SUFDSCxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixRQUFRLENBQUMsRUFBRTtnQkFDVCxLQUFLLENBQUM7b0JBQ0osb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO29CQUMzQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDbkIsTUFBSztnQkFDUCxLQUFLLENBQUM7b0JBQ0osb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO29CQUMzQyxvQkFB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