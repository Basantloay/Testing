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
const spotifyElements_1 = require("../pages/spotifyElements");
const URLs_1 = require("../pages/URLs");
class DocumentMe {
}
exports.DocumentMe = DocumentMe;
let user = new spotifyElements_1.newPage();
let URL = new URLs_1.URLs();
/**
 * Running E2E Tests on Spotify
 *
 * Test: Invalid login with facebook account
 * Test: Valid login with facebook accout
 * Test: valid profile editing
 * Test: Invalid profile editing
 * Test: Buttons navigation
 * Test: Valid changing notification settings
 * Test: Invalid password change
 * Test: Valid password change
 *
 */
describe('Testing Spotify', function () {
    /**
    * getting executed before each test case
    */
    beforeAll(function () {
        protractor_2.browser.get(URL.login);
    });
    /**
     *this it function for invalid logging in with facebook - no password provided
     *@param expectation — failed login trial and stay in the same URL
     *@param assertion — URL is the same
     */
    it('Continue with facebook - Invalid login', function () {
        return __awaiter(this, void 0, void 0, function* () {
            user.facebookBtn.click();
            let x = protractor_2.browser.getCurrentUrl();
            user.fbemail.sendKeys(user.username);
            user.fbLogIn.click();
            expect(yield protractor_2.browser.getCurrentUrl()).toContain((yield x).toString());
        });
    });
    /**
    *this it function for valid logging in with facebook
    *@param expectation — log in to account and be on status  page URL
    *@param assertion — valid login and status page URL
    */
    it('Continue with facebook - valid login', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.get(URL.login);
            user.facebookBtn.click();
            user.fbemail.sendKeys(user.fbEmail);
            user.fbpassword.sendKeys(user.fbPassword);
            user.fbLogIn.click();
            protractor_2.browser.sleep(1000);
            expect(yield protractor_2.browser.getCurrentUrl()).toContain(URL.status);
            user.LogOut.click();
        });
    });
    /**
   *this it function for editing profile info
   *@param expectation — change account email
   *@param assertion — email on overview page is changed
   *@param assertion — label of updated info is present
   */
    it('Edit profile - Valid', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.get(URL.login);
            user.LogIn.click();
            user.email.sendKeys(user.accountEmail);
            user.password.sendKeys(user.accountPassword);
            user.LogInBtn.click();
            protractor_2.browser.sleep(1500);
            expect(yield protractor_2.browser.getCurrentUrl()).toContain(URL.status);
            protractor_2.browser.get(URL.overview);
            protractor_2.browser.sleep(1000);
            user.editProfileBtn.click();
            user.editEmail.clear();
            user.editEmail.sendKeys(user.changedEmail);
            user.confirmPassword.sendKeys(user.accountPassword);
            user.saveProfileBtn.click();
            expect(yield user.profileSaved.isPresent()).toBe(true);
            protractor_2.browser.get(URL.overview);
            expect(yield user.profileEmail.getText()).toContain(user.changedEmail);
            protractor_2.browser.sleep(1000);
            protractor_2.browser.get(URL.profile);
            protractor_2.browser.sleep(1000);
            user.editEmail.clear();
            user.editEmail.sendKeys(user.accountEmail);
            user.confirmPassword.sendKeys(user.accountPassword);
            user.saveProfileBtn.click();
            expect(yield user.profileSaved.isPresent()).toBe(true);
        });
    });
    /**
   *this it function for invalid profile editing - no password provided
   *@param assertion — email on overview page is not changed
   *@param assertion — label of updated info is not present
   */
    it('Edit profile - Invalid', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.get(URL.overview);
            protractor_2.browser.sleep(1000);
            user.editProfileBtn.click();
            user.editEmail.clear();
            user.editEmail.sendKeys(user.changedEmail);
            user.saveProfileBtn.click();
            expect(yield user.profileSaved.isPresent()).toBe(false);
            protractor_2.browser.sleep(1000);
            protractor_2.browser.get(URL.overview);
            expect(yield user.profileEmail.getText()).not.toContain(user.changedEmail);
        });
    });
    /**
   *this it function for testing buttons navigation
   *@param expectation — each button nagigates to a differnt url
   *@param assertion — navigation to correct url
   */
    it('Buttons Navigation', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.get(URL.overview);
            user.privacySettingsBtn.click();
            expect(yield protractor_2.browser.getCurrentUrl()).toContain(URL.privacySettings);
            protractor_2.browser.navigate().back();
            user.recoverPlaylistsBtn.click();
            expect(yield protractor_2.browser.getCurrentUrl()).toContain(URL.recoverPlaylists);
            protractor_2.browser.navigate().back();
            user.recieptsBtn.click();
            expect(yield protractor_2.browser.getCurrentUrl()).toContain(URL.reciepts);
            protractor_2.browser.navigate().back();
            user.appsBtn.click();
            expect(yield protractor_2.browser.getCurrentUrl()).toContain(URL.apps);
            protractor_2.browser.navigate().back();
            user.redeemBtn.click();
            expect(yield protractor_2.browser.getCurrentUrl()).toContain(URL.redeem);
            protractor_2.browser.navigate().back();
        });
    });
    /**
    *this it function for valid notification settings
    *@param expectation — setting check box is unchecked after click
    *@param assertion — check box is not selected
    */
    it('Notification settings - Valid', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.get(URL.notificationettings);
            user.newMusicEmail_notific.click();
            user.newMusicPush_notific.click();
            user.saveNotificationSettingsBtn.click();
            protractor_2.browser.sleep(1000);
            expect(yield user.newMusicEmail_notific.isSelected()).toBe(false);
            expect(yield user.newMusicPush_notific.isSelected()).toBe(false);
            expect(yield user.NotificationsSaved.isPresent()).toBe(true);
            user.newMusicEmail_notific.click();
            user.newMusicPush_notific.click();
            user.saveNotificationSettingsBtn.click();
            expect(yield user.NotificationsSaved.isPresent()).toBe(true);
        });
    });
    /**
    *this it function for invalid password change sign up with new email and change the password
    *@param expectation — password is not changed
    *@param assertion — label for updated password is not present
    */
    it('Change Password - Invalid', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.get(URL.changePassword);
            user.currentPassword.sendKeys(user.accountPassword);
            user.setNewPasswordBtn.click();
            expect(yield user.updated.isPresent()).toBe(false);
            protractor_2.browser.get(URL.overview);
            protractor_2.browser.sleep(1000);
            user.signOutEverywhere.click();
        });
    });
    it('Change Password - Valid', function () {
        return __awaiter(this, void 0, void 0, function* () {
            var length = 8, charSetEmail = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", charSetPassword = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", retValPassword = "", retValNewPassword = "", retValEmail = "";
            for (var i = 0, n = charSetEmail.length; i < length; ++i) {
                retValEmail += charSetEmail.charAt(Math.floor(Math.random() * n));
            }
            for (var i = 0, n = charSetPassword.length; i < length; ++i) {
                retValPassword += charSetPassword.charAt(Math.floor(Math.random() * n));
            }
            for (var i = 0, n = charSetPassword.length; i < length; ++i) {
                retValNewPassword += charSetPassword.charAt(Math.floor(Math.random() * n));
            }
            let xEmail = retValEmail + '@gmail.com';
            let xName = retValEmail;
            let xPass = retValPassword;
            let xNewPass = retValNewPassword;
            protractor_2.browser.get(URL.signUp);
            protractor_2.browser.sleep(1000);
            user.signUpEmail.sendKeys(xEmail);
            user.signUpConfirmEmail.sendKeys(xEmail);
            user.signUpCreatePassword.sendKeys(xPass);
            user.signUpDisplayName.sendKeys(xName);
            user.signUpBirthDay.sendKeys('12');
            user.signUpBirthYear.sendKeys('1998');
            yield protractor_2.element(protractor_2.by.id("month")).element(protractor_2.by.cssContainingText('option', 'January')).click();
            yield protractor_2.element(protractor_2.by.id("month")).click();
            user.signUpGender.click();
            protractor_2.browser.sleep(5000);
            user.signUpBtn.click();
            protractor_2.browser.get(URL.overview);
            protractor_2.browser.get(URL.changePassword);
            user.currentPassword.sendKeys(xPass);
            user.newPassword.sendKeys(xNewPass);
            user.repeatNewPassword.sendKeys(xNewPass);
            user.setNewPasswordBtn.click();
            expect(yield user.updated.isPresent()).toBe(true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvdGlmeVRlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3Mvc3BvdGlmeVRlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTZEO0FBRTdELDhEQUFtRDtBQUVuRCx3Q0FBb0M7QUFFcEMsTUFBYSxVQUFVO0NBQUc7QUFBMUIsZ0NBQTBCO0FBRTFCLElBQUksSUFBSSxHQUFHLElBQUkseUJBQU8sRUFBRSxDQUFDO0FBQ3pCLElBQUksR0FBRyxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFFckI7Ozs7Ozs7Ozs7OztHQVlHO0FBRUgsUUFBUSxDQUFDLGlCQUFpQixFQUFFO0lBRXpCOztNQUVFO0lBRUgsU0FBUyxDQUFDO1FBRVIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXpCLENBQUMsQ0FBQyxDQUFDO0lBR0g7Ozs7T0FJRztJQUNILEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRTs7WUFFdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsR0FBRyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFMUUsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUdIOzs7O01BSUU7SUFDSCxFQUFFLENBQUMsc0NBQXNDLEVBQUU7O1lBRXJDLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixJQUFJ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