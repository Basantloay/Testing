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
let newForgotPassword = new pageForgotPassword_1.pageForgotPassword();
let newlogin = new pageLogin_1.pageLogin();
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
        let windowHandles = protractor_2.browser.getAllWindowHandles();
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
            protractor_2.browser.navigate().to("http://localhost:4200/account.mayestro/forget-password");
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
            expect(yield newForgotPassword.errorNewPassword.getText()).toContain("Enter a password to continue.");
        });
    });
    it('password too short', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.navigate().to("http://localhost:4200/account.mayestro/forget-password");
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
            expect(yield newForgotPassword.errorPasswordTooShort.getText()).toContain("Your password is too short.");
        });
    });
    it('confirm paassword too short', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.navigate().to("http://localhost:4200/account.mayestro/forget-password");
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
            expect(yield newForgotPassword.errorConfirmPasswordTooShort.getText()).toContain("Your password is too short.");
        });
    });
    it('no confirm new password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.navigate().to("http://localhost:4200/account.mayestro/forget-password");
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
            expect(yield newForgotPassword.errorConfirmNewPassword.getText()).toContain("Enter a password to continue.");
        });
    });
    it('password does not match.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.navigate().to("http://localhost:4200/account.mayestro/forget-password");
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
            protractor_2.browser.navigate().to("http://localhost:4200/account.mayestro/login");
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
            let newPassword = 123456789;
            newForgotPassword.newPassword.sendKeys(newPassword);
            newForgotPassword.confirmNewPassword.sendKeys(newPassword);
            expect(yield newForgotPassword.resetSendBtn.isEnabled()).toBe(true);
            newForgotPassword.resetSendBtn.click();
            //check token
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNGb3Jnb3RQYXNzd29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL3Rlc3RzRm9yZ290UGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUQ7QUFDekQsb0VBQWlFO0FBQ2pFLGtEQUErQztBQUcvQyxJQUFJLGlCQUFpQixHQUFHLElBQUksdUNBQWtCLEVBQUUsQ0FBQztBQUNqRCxJQUFJLFFBQVEsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUcvQixRQUFRLENBQUMseUJBQXlCLEVBQUU7SUFFbEMsU0FBUyxDQUFDO1FBQ04sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0RBQXdELENBQUMsQ0FBQztJQUN4RSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQkFBMEIsRUFBRTs7WUFDM0IsTUFBTSxDQUFDLE1BQU0saUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLE1BQU0saUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5FLENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUUsYUFBYSxFQUFDOztZQUNkLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsaUJBQWlCLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDOztvQkFDcEUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ25CLE1BQU0s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