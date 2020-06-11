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
const pageForgotPassword_1 = require("../pages/pageForgotPassword");
const pageLogin_1 = require("../pages/pageLogin");
const newForgotPassword = new pageForgotPassword_1.pageForgotPassword();
const newlogin = new pageLogin_1.pageLogin();
describe('Testing forgot password', function () {
    beforeAll(function () {
        protractor_2.browser.get('http://localhost:4200/account.mayestro/forget-password');
    });
    it('send btn disabled untinl', function () {
        return __awaiter(this, void 0, void 0, function* () {
            expect(yield newForgotPassword.sendBtn.isEnabled()).toBe(false);
            newForgotPassword.emailOrUsername.sendKeys('a');
            expect(yield newForgotPassword.sendBtn.isEnabled()).toBe(true);
        });
    });
    it('no username', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.refresh();
            newForgotPassword.emailOrUsername.click();
            newForgotPassword.emailOrUsername.sendKeys(protractor_2.protractor.Key.TAB).then(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    protractor_2.browser.sleep(1500);
                    expect(yield newForgotPassword.errorEmail.getText()).toContain('Please enter your email.');
                });
            });
        });
    });
    it('invalid email', function () {
        return __awaiter(this, void 0, void 0, function* () {
            newForgotPassword.emailOrUsername.sendKeys('ahmedd');
            newForgotPassword.sendBtn.click().then(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    expect(yield newForgotPassword.errorDoesNotExist.getText()).toContain('The email address you entered is not linked to a Spotify account. You can either try another email address, or log in through Facebook - if your account is connected. match.');
                });
            });
        });
    });
    it('invalid email error disappears and have another error', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.refresh();
            newForgotPassword.emailOrUsername.sendKeys('ahmedd');
            newForgotPassword.sendBtn.click().then(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    expect(yield newForgotPassword.errorDoesNotExist.getText()).toContain('The email address you entered is not linked to a Spotify account. You can either try another email address, or log in through Facebook - if your account is connected. match.');
                });
            });
            newForgotPassword.emailOrUsername.sendKeys(protractor_2.protractor.Key.CONTROL, 'a');
            newForgotPassword.emailOrUsername.sendKeys(protractor_2.protractor.Key.DELETE);
            newForgotPassword.emailOrUsername.sendKeys(protractor_2.protractor.Key.TAB).then(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    expect(yield newForgotPassword.errorEmail2.getText()).toContain('Please enter your email.');
                    expect(yield newForgotPassword.errorDoesNotExist.isDisplayed()).toBe(false);
                });
            });
        });
    });
    it('open spotify support', function () {
        protractor_2.browser.refresh();
        protractor_2.browser.ignoreSynchronization = true;
        newForgotPassword.spotifySupport.click();
        const windowHandles = protractor_2.browser.getAllWindowHandles();
        let parentHandle, childHandle;
        windowHandles.then(function (handles) {
            parentHandle = handles[0];
            childHandle = handles[1];
            protractor_2.browser.switchTo().window(childHandle).then(function () {
                protractor_2.browser.close();
            });
            protractor_2.browser.switchTo().window(parentHandle);
        });
    });
    it('valid till reset', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.refresh();
            newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com');
            newForgotPassword.sendBtn.click().then(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    newForgotPassword.resetUsingMockServer.click().then(function () {
                        return __awaiter(this, void 0, void 0, function* () {
                            protractor_2.browser.sleep(2000);
                            expect(yield protractor_2.browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/reset-password/');
                            expect(yield newForgotPassword.resetSendBtn.isEnabled()).toBe(false);
                        });
                    });
                });
            });
        });
    });
    it('no new password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.navigate().to('http://localhost:4200/account.mayestro/forget-password');
            newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com');
            newForgotPassword.sendBtn.click().then(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    newForgotPassword.resetUsingMockServer.click().then(function () {
                        return __awaiter(this, void 0, void 0, function* () {
                            protractor_2.browser.sleep(2000);
                            expect(yield protractor_2.browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/reset-password/');
                        });
                    });
                });
            });
            newForgotPassword.newPassword.click();
            newForgotPassword.confirmNewPassword.click();
            expect(yield newForgotPassword.errorNewPassword.getText()).toContain('Enter a password to continue.');
        });
    });
    it('password too short', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.navigate().to('http://localhost:4200/account.mayestro/forget-password');
            newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com');
            newForgotPassword.sendBtn.click().then(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    newForgotPassword.resetUsingMockServer.click().then(function () {
                        return __awaiter(this, void 0, void 0, function* () {
                            protractor_2.browser.sleep(2000);
                            expect(yield protractor_2.browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/reset-password/');
                        });
                    });
                });
            });
            newForgotPassword.newPassword.sendKeys('123');
            newForgotPassword.newPassword.sendKeys(protractor_2.protractor.Key.TAB);
            expect(yield newForgotPassword.errorPasswordTooShort.getText()).toContain('Your password is too short.');
        });
    });
    it('confirm paassword too short', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.navigate().to('http://localhost:4200/account.mayestro/forget-password');
            newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com');
            newForgotPassword.sendBtn.click().then(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    newForgotPassword.resetUsingMockServer.click().then(function () {
                        return __awaiter(this, void 0, void 0, function* () {
                            protractor_2.browser.sleep(2000);
                            expect(yield protractor_2.browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/reset-password/');
                        });
                    });
                });
            });
            newForgotPassword.confirmNewPassword.sendKeys('123');
            newForgotPassword.newPassword.click();
            expect(yield newForgotPassword.errorConfirmPasswordTooShort.getText()).toContain('Your password is too short.');
        });
    });
    it('no confirm new password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.navigate().to('http://localhost:4200/account.mayestro/forget-password');
            newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com');
            newForgotPassword.sendBtn.click().then(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    newForgotPassword.resetUsingMockServer.click().then(function () {
                        return __awaiter(this, void 0, void 0, function* () {
                            protractor_2.browser.sleep(2000);
                            expect(yield protractor_2.browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/reset-password/');
                        });
                    });
                });
            });
            newForgotPassword.confirmNewPassword.click();
            newForgotPassword.newPassword.click();
            expect(yield newForgotPassword.errorConfirmNewPassword.getText()).toContain('Enter a password to continue.');
        });
    });
    it('password does not match.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.navigate().to('http://localhost:4200/account.mayestro/forget-password');
            newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com');
            newForgotPassword.sendBtn.click().then(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    newForgotPassword.resetUsingMockServer.click().then(function () {
                        return __awaiter(this, void 0, void 0, function* () {
                            protractor_2.browser.sleep(2000);
                            expect(yield protractor_2.browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/reset-password/');
                        });
                    });
                });
            });
            newForgotPassword.newPassword.sendKeys('12345678');
            newForgotPassword.confirmNewPassword.sendKeys('123456789');
            newForgotPassword.confirmNewPassword.sendKeys(protractor_2.protractor.Key.TAB);
            expect(yield newForgotPassword.errorDoesNotMatch.getText()).toContain("password doesn't match.");
        });
    });
    it('valid password change', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.navigate().to('http://localhost:4200/account.mayestro/login');
            newlogin.forgotPassword.click();
            protractor_2.browser.sleep(2000);
            protractor_2.browser.refresh();
            newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com');
            newForgotPassword.sendBtn.click().then(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    newForgotPassword.resetUsingMockServer.click().then(function () {
                        return __awaiter(this, void 0, void 0, function* () {
                            protractor_2.browser.sleep(2000);
                            expect(yield protractor_2.browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/reset-password/');
                        });
                    });
                });
            });
            const newPassword = 123456789;
            newForgotPassword.newPassword.sendKeys(newPassword);
            newForgotPassword.confirmNewPassword.sendKeys(newPassword);
            expect(yield newForgotPassword.resetSendBtn.isEnabled()).toBe(true);
            newForgotPassword.resetSendBtn.click();
            // check token
            // or in my case check if i can login
            protractor_2.browser.navigate().back();
            protractor_2.browser.navigate().back();
            newlogin.emailInput.sendKeys('ahmed@gmail.com');
            newlogin.passwordInput.sendKeys(newPassword);
            newlogin.loginBtn.click();
            protractor_2.browser.sleep(4000);
            expect(yield protractor_2.browser.getCurrentUrl()).toContain('http://localhost:4200/open.mayestro/overview');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNGb3Jnb3RQYXNzd29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL3Rlc3RzRm9yZ290UGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUQ7QUFDekQsb0VBQWdFO0FBQ2hFLGtEQUE4QztBQUU5QyxNQUFNLGlCQUFpQixHQUFHLElBQUksdUNBQWtCLEVBQUUsQ0FBQTtBQUNsRCxNQUFNLFFBQVEsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQTtBQUVoQyxRQUFRLENBQUMseUJBQXlCLEVBQUU7SUFDbEMsU0FBUyxDQUFDO1FBQ1Isb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0RBQXdELENBQUMsQ0FBQTtJQUN2RSxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQywwQkFBMEIsRUFBRTs7WUFDN0IsTUFBTSxDQUFDLE1BQU0saUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQy9ELGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDL0MsTUFBTSxDQUFDLE1BQU0saUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2hFLENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsYUFBYSxFQUFFOztZQUNoQixvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2pCLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUN6QyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzs7b0JBQ2xFLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUNuQixNQUFNLENBQUMsTUFBTSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtnQkFDNUYsQ0FBQzthQUFBLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsZUFBZSxFQUFFOztZQUNsQixpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3BELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7O29CQUNyQyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQywrS0FBK0ssQ0FBQyxDQUFBO2dCQUN4UCxDQUFDO2FBQUEsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx1REFBdUQsRUFBRTs7WUFDMUQsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNqQixpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3BELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7O29CQUNyQyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQywrS0FBK0ssQ0FBQyxDQUFBO2dCQUN4UCxDQUFDO2FBQUEsQ0FBQyxDQUFBO1lBQ0YsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDdkUsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNqRSxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzs7b0JBQ2xFLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO29CQUMzRixNQUFNLENBQUMsTUFBTSxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDN0UsQ0FBQzthQUFBLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsc0JBQXNCLEVBQUU7UUFDekIsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNqQixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQTtRQUVwQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUE7UUFFeEMsTUFBTSxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO1FBQ25ELElBQUksWUFBWSxFQUFFLFdBQVcsQ0FBQTtRQUU3QixhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztZQUNsQyxZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3pCLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFFeEIsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxQyxvQkFBTyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2pCLENBQUMsQ0FBQyxDQUFBO1lBRUYsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDekMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTs7WUFDckIsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNqQixpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUE7WUFDN0QsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQzs7b0JBQ3JDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQzs7NEJBQ2xELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzRCQUNuQixNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLHdEQUF3RCxDQUFDLENBQUE7NEJBQ3pHLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFDdEUsQ0FBQztxQkFBQSxDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUFBLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsaUJBQWlCLEVBQUU7O1lBQ3BCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLHdEQUF3RCxDQUFDLENBQUE7WUFDL0UsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1lBQzdELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7O29CQUNyQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7OzRCQUNsRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs0QkFDbkIsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyx3REFBd0QsQ0FBQyxDQUFBO3dCQUMzRyxDQUFDO3FCQUFBLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQUEsQ0FBQyxDQUFBO1lBQ0YsaUJBQWlCLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3JDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFBO1lBQzVDLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFDdkcsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRTs7WUFDdkIsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsd0RBQXdELENBQUMsQ0FBQTtZQUMvRSxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUE7WUFDN0QsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQzs7b0JBQ3JDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQzs7NEJBQ2xELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzRCQUNuQixNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLHdEQUF3RCxDQUFDLENBQUE7d0JBQzNHLENBQUM7cUJBQUEsQ0FBQyxDQUFBO2dCQUNKLENBQUM7YUFBQSxDQUFDLENBQUE7WUFDRixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzdDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDMUQsTUFBTSxDQUFDLE1BQU0saUJBQWlCLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtRQUMxRyxDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDZCQUE2QixFQUFFOztZQUNoQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyx3REFBd0QsQ0FBQyxDQUFBO1lBQy9FLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUM3RCxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDOztvQkFDckMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDOzs0QkFDbEQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7NEJBQ25CLE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsd0RBQXdELENBQUMsQ0FBQTt3QkFDM0csQ0FBQztxQkFBQSxDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUFBLENBQUMsQ0FBQTtZQUNGLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNwRCxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDckMsTUFBTSxDQUFDLE1BQU0saUJBQWlCLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtRQUNqSCxDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHlCQUF5QixFQUFFOztZQUM1QixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyx3REFBd0QsQ0FBQyxDQUFBO1lBQy9FLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUM3RCxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDOztvQkFDckMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDOzs0QkFDbEQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7NEJBQ25CLE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsd0RBQXdELENBQUMsQ0FBQTt3QkFDM0csQ0FBQztxQkFBQSxDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUFBLENBQUMsQ0FBQTtZQUNGLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFBO1lBQzVDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNyQyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO1FBQzlHLENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsMEJBQTBCLEVBQUU7O1lBQzdCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLHdEQUF3RCxDQUFDLENBQUE7WUFDL0UsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1lBQzdELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7O29CQUNyQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7OzRCQUNsRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs0QkFDbkIsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyx3REFBd0QsQ0FBQyxDQUFBO3dCQUMzRyxDQUFDO3FCQUFBLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQUEsQ0FBQyxDQUFBO1lBQ0YsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNsRCxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDMUQsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2pFLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDbEcsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRTs7WUFDMUIsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsOENBQThDLENBQUMsQ0FBQTtZQUNyRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQy9CLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25CLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDakIsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1lBQzdELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7O29CQUNyQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7OzRCQUNsRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs0QkFDbkIsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyx3REFBd0QsQ0FBQyxDQUFBO3dCQUMzRyxDQUFDO3FCQUFBLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQUEsQ0FBQyxDQUFBO1lBQ0YsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFBO1lBQzdCLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDbkQsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQzFELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNuRSxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUE7WUFFdEMsY0FBYztZQUNkLHFDQUFxQztZQUVyQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQ3pCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDekIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUMvQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUM1QyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3pCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25CLE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsOENBQThDLENBQUMsQ0FBQTtRQUNqRyxDQUFDO0tBQUEsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==