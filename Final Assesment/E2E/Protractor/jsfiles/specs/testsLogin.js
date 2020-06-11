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
const protractor_2 = require("protractor");
const pageLogin_1 = require("../pages/pageLogin");
let newlogin = new pageLogin_1.pageLogin();
describe('Testing login', function () {
    beforeAll(function () {
        protractor_2.browser.get('http://localhost:4200/account.mayestro/login');
    });
    it('responsiveness', function () {
        for (var i = 0; i <= 4; i++) {
            switch (i) {
                case 0:
                    protractor_2.browser.manage().window().setSize(320, 480);
                    protractor_2.browser.sleep(1500);
                    break;
                case 1:
                    protractor_2.browser.manage().window().setSize(600, 800);
                    protractor_2.browser.sleep(1500);
                    break;
                case 2:
                    protractor_2.browser.manage().window().setSize(768, 1024);
                    protractor_2.browser.sleep(1500);
                    break;
                case 3:
                    protractor_2.browser.manage().window().setSize(1080, 1920);
                    protractor_2.browser.sleep(1500);
                    break;
                case 4:
                    protractor_2.browser.manage().window().setSize(1200, 1800);
                    return;
            }
        }
    });
    it('cursor on email by default FAIL', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.sleep(2000);
            let currentElement = protractor_2.browser.driver.switchTo().activeElement();
            expect(currentElement.getId()).toEqual(newlogin.emailInput.getId());
        });
    });
    it('login disabled until..', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.refresh();
            expect(yield newlogin.loginBtn.isEnabled()).toBe(false);
            newlogin.emailInput.sendKeys('a');
            newlogin.passwordInput.sendKeys('11111111');
            expect(yield newlogin.loginBtn.isEnabled()).toBe(true);
        });
    });
    it('valid login', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.refresh();
            newlogin.emailInput.sendKeys('ahmed@gmail.com');
            newlogin.passwordInput.sendKeys('12345678');
            newlogin.loginBtn.click();
            protractor_2.browser.sleep(4000);
            expect(yield protractor_2.browser.getCurrentUrl()).toContain('http://localhost:4200/open.mayestro/overview');
            protractor_2.browser.navigate().back();
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
            protractor_2.browser.refresh();
            newlogin.emailInput.sendKeys('heloo');
            newlogin.passwordInput.sendKeys('12345678');
            newlogin.loginBtn.click();
            expect(yield newlogin.redErrormsg.getText()).toContain('Incorrect username or password.');
        });
    });
    it('should have error message for incorrect password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.refresh();
            newlogin.emailInput.sendKeys('ahmed@gmail.com');
            newlogin.passwordInput.sendKeys('1234567899');
            newlogin.loginBtn.click();
            expect(yield newlogin.redErrormsg.getText()).toContain('Incorrect username or password.');
        });
    });
    it('Testing can not copy password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.refresh();
            newlogin.passwordInput.sendKeys('123456789').then(function () {
                //newlogin.passwordInput.sendKeys(protractor.Key.CONTROL, 'a');
                newlogin.passwordInput.sendKeys(protractor_2.protractor.Key.CONTROL, 'c');
                newlogin.emailInput.sendKeys(protractor_2.protractor.Key.CONTROL, 'v');
            });
            expect(newlogin.emailInput.getText()).not.toContain(newlogin.passwordInput.getText());
        });
    });
    it('Testing tab key', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.refresh();
            newlogin.emailInput.sendKeys(protractor_2.protractor.Key.TAB).then(function () {
                let currentElement = protractor_2.browser.driver.switchTo().activeElement();
                expect(currentElement.getId()).toEqual(newlogin.passwordInput.getId());
            });
        });
    });
    it('no email', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.refresh();
            newlogin.emailInput.click();
            newlogin.passwordInput.click();
            expect(yield newlogin.errorEmail.getText()).toContain('Please enter your email.');
            protractor_2.browser.sleep(1500);
        });
    });
    it('no password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.refresh();
            newlogin.passwordInput.click();
            newlogin.emailInput.click();
            expect(yield newlogin.errorPassword.getText()).toContain('Enter a password to continue.');
            protractor_2.browser.sleep(1500);
        });
    });
    it('go to sign up', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.refresh();
            newlogin.signUp.click();
            protractor_2.browser.sleep(2000);
            expect(yield protractor_2.browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/signup');
            protractor_2.browser.navigate().back();
        });
    });
    it('go to forget password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            newlogin.forgotPassword.click();
            protractor_2.browser.sleep(2000);
            expect(yield protractor_2.browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/forget-password');
            protractor_2.browser.navigate().back();
        });
    });
    it('terms & conditions and privacy policy', function () {
        protractor_2.browser.ignoreSynchronization = true;
        newlogin.termsAndConditions.click();
        newlogin.privacyPolicy.click();
        let windowHandles = protractor_2.browser.getAllWindowHandles();
        let parentHandle, childHandle, child2Handle;
        windowHandles.then(function (handles) {
            parentHandle = handles[0];
            childHandle = handles[1];
            child2Handle = handles[2];
            protractor_2.browser.switchTo().window(childHandle).then(function () {
                protractor_2.browser.close();
            });
            protractor_2.browser.switchTo().window(child2Handle).then(function () {
                protractor_2.browser.close();
            });
            protractor_2.browser.switchTo().window(parentHandle).then(function () {
                console.log('Returning to main window...');
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNMb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL3Rlc3RzTG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUQ7QUFDekQsa0RBQStDO0FBRy9DLElBQUksUUFBUSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBRS9CLFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFFeEIsU0FBUyxDQUFDO1FBQ04sb0JBQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUVoRSxDQUFDLENBQUMsQ0FBQztJQUlILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUVuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLFFBQVEsQ0FBQyxFQUFFO2dCQUNULEtBQUssQ0FBQztvQkFDSixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzVDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUNqQixNQUFNO2dCQUNWLEtBQUssQ0FBQztvQkFDSixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzVDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUNqQixNQUFNO2dCQUNWLEtBQUssQ0FBQztvQkFDSixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzdDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUNqQixNQUFNO2dCQUNWLEtBQUssQ0FBQztvQkFDSixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzlDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUNqQixNQUFNO2dCQUNWLEtBQUssQ0FBQztvQkFDSixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNDLE9BQU87YUFDWjtTQUNGO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUNBQWlDLEVBQUU7O1lBQ2xDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25CLElBQUksY0FBYyxHQUFHLG9CQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzNELE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLENBQUM7S0FBQSxDQUFDLENBQUE7SUFFSixFQUFFLENBQUMsd0JBQXdCLEVBQUU7O1lBQzNCLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsTUFBTSxDQUFDLE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4RCxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsYUFBYSxFQUFFOztZQUNoQixvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDaEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLDhDQUE4QyxDQUFDLENBQUE7WUFDL0Ysb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU1QixDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBR0gsRUFBRSxDQUFDLDJCQUEyQixFQUFFOztZQUM3QixRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVCLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxNQUFNLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUVqRyxDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGtEQUFrRCxFQUFFOztZQUNyRCxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO1FBRTNGLENBQUM7S0FBQSxDQUFDLENBQUE7SUFHRixFQUFFLENBQUMsa0RBQWtELEVBQUU7O1lBQ3JELG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNoRCxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtRQUV6RixDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUosRUFBRSxDQUFDLCtCQUErQixFQUFFOztZQUNsQyxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRWxCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbEQsK0RBQStEO2dCQUMvRCxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzdELFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUUxRCxDQUFDLENBQUMsQ0FBQTtZQUNGLE1BQU0sQ0FBRSxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFekYsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTs7WUFDcEIsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVsQixRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BELElBQUksY0FBYyxHQUFHLG9CQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMvRCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN6RSxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQSxDQUFDLENBQUE7SUFHRixFQUFFLENBQUMsVUFBVSxFQUFFOztZQUNiLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1QixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxNQUFNLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUNsRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQixDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGFBQWEsRUFBRTs7WUFDaEIsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQy9CLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUIsTUFBTSxDQUFDLE1BQU0sUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzFGLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JCLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFOztZQUNsQixvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbkIsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFBO1lBQ2hHLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRTs7WUFDMUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNuQixNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLHdEQUF3RCxDQUFDLENBQUE7WUFDekcsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHVDQUF1QyxFQUFFO1FBRTFDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBRXJDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRS9CLElBQUksYUFBYSxHQUFHLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNsRCxJQUFJLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO1FBRTVDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBUyxPQUFPO1lBQy9CLFlBQVksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTFCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUMsb0JBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVsQixDQUFDLENBQUMsQ0FBQTtZQUVGLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDckMsb0JBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQTtZQUVGLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBRzdDLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=