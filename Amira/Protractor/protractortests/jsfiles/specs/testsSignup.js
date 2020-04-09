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
                    }
                });
                return [2 /*return*/];
            });
        });
    });
    it('invalid email format', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.emailInput.sendKeys('ahmed@gmail');
                        newSignup.confirmEmail.click();
                        _a = expect;
                        return [4 /*yield*/, newSignup.errorEmailInput.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('The email address you supplied is invalid.');
                        return [2 /*return*/];
                }
            });
        });
    });
    it('email already exists', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.emailInput.sendKeys('ahmed@gmail.com');
                        newSignup.confirmEmail.click();
                        _a = expect;
                        return [4 /*yield*/, newSignup.errorExistingEmail.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain("We're sorry, that email is taken.");
                        protractor_1.browser.sleep(1500);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('no email', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.emailInput.click();
                        newSignup.confirmEmail.click();
                        _a = expect;
                        return [4 /*yield*/, newSignup.errorEmailInput.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('Please enter your email.');
                        protractor_1.browser.sleep(1500);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('invalid email confirmation format', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.confirmEmail.sendKeys('ahmedd@gmail');
                        newSignup.passwordInput.click();
                        _a = expect;
                        return [4 /*yield*/, newSignup.errorConfirmEmailInput.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('The email address you supplied is invalid.');
                        return [2 /*return*/];
                }
            });
        });
    });
    it('no email confirmation', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.confirmEmail.click();
                        newSignup.passwordInput.click();
                        _a = expect;
                        return [4 /*yield*/, newSignup.errorConfirmEmailInput.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('Please enter your email.');
                        protractor_1.browser.sleep(1500);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('email and email confirmation do not match', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.emailInput.sendKeys('ahmedd@gmail.com');
                        newSignup.confirmEmail.sendKeys('ahmeddd@gmail.com');
                        newSignup.passwordInput.click();
                        _a = expect;
                        return [4 /*yield*/, newSignup.errorDoesNotMatch.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain("Email address doesn't match.");
                        return [2 /*return*/];
                }
            });
        });
    });
    it('password too short', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.passwordInput.sendKeys('123');
                        newSignup.nicknameInput.click();
                        _a = expect;
                        return [4 /*yield*/, newSignup.errorPasswordInput.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain("Your password is too short.");
                        return [2 /*return*/];
                }
            });
        });
    });
    it('no password', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.passwordInput.click();
                        newSignup.nicknameInput.click();
                        _a = expect;
                        return [4 /*yield*/, newSignup.errorPasswordInput.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('Enter a password to continue.');
                        return [2 /*return*/];
                }
            });
        });
    });
    it('nickname limit', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.nicknameInput.sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                        protractor_1.browser.sleep(2000);
                        _a = expect;
                        return [4 /*yield*/, newSignup.nicknameInput.getAttribute('value')];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toEqual('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
                        return [2 /*return*/];
                }
            });
        });
    });
    it("invalid birthDay", function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.birthDay.sendKeys(35);
                        newSignup.birthYear.click();
                        _a = expect;
                        return [4 /*yield*/, newSignup.errorInvalidDateOfBirth.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('Please enter a valid day of the month.');
                        return [2 /*return*/];
                }
            });
        });
    });
    //   it("invalid birthMonth", async function(){
    //     browser.refresh();
    //   })
    it("invalid birthYear < 1900", function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.birthYear.sendKeys(1899);
                        newSignup.birthDay.click();
                        _a = expect;
                        return [4 /*yield*/, newSignup.errorBirthYear.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('Please enter a valid year');
                        return [2 /*return*/];
                }
            });
        });
    });
    it("invalid birthYear >= 2000", function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.birthYear.sendKeys(2000);
                        newSignup.birthDay.click();
                        _a = expect;
                        return [4 /*yield*/, newSignup.errorBirthYear.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain("Sorry, but you don't meet Spotify's age requirements.");
                        return [2 /*return*/];
                }
            });
        });
    });
    it("male gender selected", function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.genderMale.click();
                        _a = expect;
                        return [4 /*yield*/, newSignup.genderMale.isSelected()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toBe(true);
                        return [2 /*return*/];
                }
            });
        });
    });
    it("female gender selected", function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.genderFemale.click();
                        _a = expect;
                        return [4 /*yield*/, newSignup.genderFemale.isSelected()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toBe(true);
                        return [2 /*return*/];
                }
            });
        });
    });
    it("share registration selected", function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.shareRegistration.click();
                        _a = expect;
                        return [4 /*yield*/, newSignup.shareRegistration.isSelected()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toBe(true);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('valid signup', function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    newSignup.signupBtn.click();
                                    protractor_1.browser.sleep(3000);
                                    _a = expect;
                                    return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                                case 1:
                                    _a.apply(void 0, [_b.sent()]).toContain('http://localhost:4200/open.mayestro/overview');
                                    protractor_1.browser.navigate().back();
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    });
    it('go to login', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newSignup.Login.click();
                        protractor_1.browser.sleep(2000);
                        _a = expect;
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('http://localhost:4200/account.mayestro/login');
                        protractor_1.browser.navigate().back();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('terms & conditions and privacy policy', function () {
        protractor_1.browser.ignoreSynchronization = true;
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            log4jsconf_1.log4jsconf.log().info("Main browser title: " + txt);
        });
        newSignup.termsAndConditions.click();
        newSignup.privacyPolicy.click();
        var windowHandles = protractor_1.browser.getAllWindowHandles();
        var parentHandle, childHandle, child2Handle;
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
//# sourceMappingURL=testsSignup.js.map