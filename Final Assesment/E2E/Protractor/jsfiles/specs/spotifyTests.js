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
 * Test 1: Invalid login with facebook account
 * Test 2: Valid login with facebook accout
 * Test 3: valid profile editing
 * Test 4: Invalid profile editing
 * Test 5: Valid changing notification settings
 * Test 6: Invalid password change
 *
 */
describe('Testing Spotify', function () {
    /**
    * getting executed before each test case
    */
    beforeAll(function () {
        protractor_1.browser.get(URL.login);
    });
    /**
     *this it function for invalid logging in with facebook - no password provided
     *@param expectation — failed login trial and stay in the same URL
     *@param assertion — URL is the same
     */
    it('Continue with facebook - Invalid login', function () {
        return __awaiter(this, void 0, void 0, function* () {
            user.facebookBtn.click();
            let x = protractor_1.browser.getCurrentUrl();
            user.fbemail.sendKeys(user.username);
            user.fbLogIn.click();
            expect(yield protractor_1.browser.getCurrentUrl()).toContain((yield x).toString());
        });
    });
    /**
    *this it function for valid logging in with facebook
    *@param expectation — log in to account and be on status  page URL
    *@param assertion — valid login and status page URL
    */
    it('Continue with facebook - valid login', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.get(URL.login);
            user.facebookBtn.click();
            user.fbemail.sendKeys(user.fbEmail);
            user.fbpassword.sendKeys(user.fbPassword);
            user.fbLogIn.click();
            protractor_1.browser.sleep(1000);
            expect(yield protractor_1.browser.getCurrentUrl()).toContain(URL.status);
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
            protractor_1.browser.get(URL.login);
            user.LogIn.click();
            user.email.sendKeys(user.accountEmail);
            user.password.sendKeys(user.accountPassword);
            user.LogInBtn.click();
            protractor_1.browser.sleep(1500);
            expect(yield protractor_1.browser.getCurrentUrl()).toContain(URL.status);
            protractor_1.browser.get(URL.overview);
            protractor_1.browser.sleep(1000);
            user.editProfileBtn.click();
            user.editEmail.clear();
            user.editEmail.sendKeys(user.changedEmail);
            user.confirmPassword.sendKeys(user.accountPassword);
            user.saveProfileBtn.click();
            expect(yield user.profileSaved.isPresent()).toBe(true);
            protractor_1.browser.get(URL.overview);
            expect(yield user.profileEmail.getText()).toContain(user.changedEmail);
            protractor_1.browser.sleep(1000);
            protractor_1.browser.get(URL.profile);
            protractor_1.browser.sleep(1000);
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
            protractor_1.browser.get(URL.overview);
            protractor_1.browser.sleep(1000);
            user.editProfileBtn.click();
            user.editEmail.clear();
            user.editEmail.sendKeys(user.changedEmail);
            user.saveProfileBtn.click();
            expect(yield user.profileSaved.isPresent()).toBe(false);
            protractor_1.browser.sleep(1000);
            protractor_1.browser.get(URL.overview);
            expect(yield user.profileEmail.getText()).not.toContain(user.changedEmail);
        });
    });
    /**
    *this it function for valid notification settings
    *@param expectation — setting check box is unchecked after click
    *@param assertion — check box is not selected
    */
    it('Notification settings - Valid', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.get(URL.notificationettings);
            user.newMusicEmail_notific.click();
            user.newMusicPush_notific.click();
            user.saveNotificationSettingsBtn.click();
            protractor_1.browser.sleep(1000);
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
    *this it function for invalid password change
    *@param expectation — password is not changed
    *@param assertion — label for updated password is not present
    */
    it('Change Password - Invalid', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.get(URL.changePassword);
            user.currentPassword.sendKeys(user.accountPassword);
            user.setNewPasswordBtn.click();
            expect(yield user.updated.isPresent()).toBe(false);
        });
    });
    // it('Change Password - Valid', async function(){
    //     var length = 8,
    //     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    //     retVal = "";
    //     for (var i = 0, n = charset.length; i < length; ++i) {
    //     retVal += charset.charAt(Math.floor(Math.random() * n));
    //     }
    //     let x = retVal 
    //     console.log(x)
    //     browser.get(URL.changePassword)
    //     user.currentPassword.sendKeys(user.accountPassword)
    //     // user.newPassword.sendKeys(x)
    //     // user.repeatNewPassword.sendKeys(x)
    //     user.setNewPasswordBtn.click();
    //     //expect(await user.updated.isPresent()).toBe(true)
    // })
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvdGlmeVRlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3Mvc3BvdGlmeVRlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9DO0FBRXBDLDhEQUFtRDtBQUVuRCx3Q0FBb0M7QUFFcEMsTUFBYSxVQUFVO0NBQUc7QUFBMUIsZ0NBQTBCO0FBRTFCLElBQUksSUFBSSxHQUFHLElBQUkseUJBQU8sRUFBRSxDQUFDO0FBQ3pCLElBQUksR0FBRyxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFFckI7Ozs7Ozs7Ozs7R0FVRztBQUVILFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtJQUV6Qjs7TUFFRTtJQUVILFNBQVMsQ0FBQztRQUVSLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV6QixDQUFDLENBQUMsQ0FBQztJQUdIOzs7O09BSUc7SUFDSCxFQUFFLENBQUMsd0NBQXdDLEVBQUU7O1lBRXZDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLEdBQUcsb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQixNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRTFFLENBQUM7S0FBQSxDQUFDLENBQUE7SUFHSDs7OztNQUlFO0lBQ0gsRUFBRSxDQUFDLHNDQUFzQyxFQUFFOztZQUVyQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsSUFBSSxD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