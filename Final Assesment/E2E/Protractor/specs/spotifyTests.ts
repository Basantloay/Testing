import { browser, protractor, element, by } from 'protractor'

import { newPage } from '../pages/spotifyElements';

import { URLs } from '../pages/URLs'

export class DocumentMe {}

let user = new newPage();
let URL = new URLs();

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

  beforeAll(function(){
      
    browser.get(URL.login);

  });


  /**
   *this it function for invalid logging in with facebook - no password provided
   *@param expectation — failed login trial and stay in the same URL
   *@param assertion — URL is the same 
   */
  it('Continue with facebook - Invalid login', async function(){
        
        user.facebookBtn.click();
        let x = browser.getCurrentUrl();
        user.fbemail.sendKeys(user.username);
        user.fbLogIn.click();
        expect(await browser.getCurrentUrl()).toContain((await x).toString());

    })

    
   /**
   *this it function for valid logging in with facebook
   *@param expectation — log in to account and be on status  page URL
   *@param assertion — valid login and status page URL
   */
  it('Continue with facebook - valid login', async function(){
        
        browser.get(URL.login);
        user.facebookBtn.click();
        user.fbemail.sendKeys(user.fbEmail)
        user.fbpassword.sendKeys(user.fbPassword)
        user.fbLogIn.click();
        browser.sleep(1000);
        expect(await browser.getCurrentUrl()).toContain(URL.status);
        user.LogOut.click();

    })


    /**
   *this it function for editing profile info
   *@param expectation — change account email
   *@param assertion — email on overview page is changed
   *@param assertion — label of updated info is present
   */
    it('Edit profile - Valid', async function(){
        
        browser.get(URL.login);
        user.LogIn.click();
        user.email.sendKeys(user.accountEmail)
        user.password.sendKeys(user.accountPassword)
        user.LogInBtn.click();
        browser.sleep(1500);
        expect(await browser.getCurrentUrl()).toContain(URL.status);
        
        browser.get(URL.overview)
        browser.sleep(1000);
        user.editProfileBtn.click();
        user.editEmail.clear();
        user.editEmail.sendKeys(user.changedEmail)
        user.confirmPassword.sendKeys(user.accountPassword)
        user.saveProfileBtn.click();
        expect (await user.profileSaved.isPresent()).toBe(true)
        browser.get(URL.overview)
        expect(await user.profileEmail.getText()).toContain(user.changedEmail)
        browser.sleep(1000)

        browser.get(URL.profile)
        browser.sleep(1000);
        user.editEmail.clear();
        user.editEmail.sendKeys(user.accountEmail)
        user.confirmPassword.sendKeys(user.accountPassword)
        user.saveProfileBtn.click();
        expect (await user.profileSaved.isPresent()).toBe(true)

        
    })


    /**
   *this it function for invalid profile editing - no password provided
   *@param assertion — email on overview page is not changed
   *@param assertion — label of updated info is not present
   */
    it('Edit profile - Invalid', async function(){
        
        browser.get(URL.overview)
        browser.sleep(1000);
        user.editProfileBtn.click();
        user.editEmail.clear();
        user.editEmail.sendKeys(user.changedEmail)
        user.saveProfileBtn.click();
        expect (await user.profileSaved.isPresent()).toBe(false)
        browser.sleep(1000);
        browser.get(URL.overview)
        expect(await user.profileEmail.getText()).not.toContain(user.changedEmail)   

    })

    /**
   *this it function for testing buttons navigation 
   *@param expectation — each button nagigates to a differnt url
   *@param assertion — navigation to correct url
   */
  it('Buttons Navigation', async function(){

        browser.get(URL.overview) 

        user.privacySettingsBtn.click();
        expect(await browser.getCurrentUrl()).toContain(URL.privacySettings)
        browser.navigate().back()

        user.recoverPlaylistsBtn.click();
        expect(await browser.getCurrentUrl()).toContain(URL.recoverPlaylists)
        browser.navigate().back()
        
        user.recieptsBtn.click();
        expect(await browser.getCurrentUrl()).toContain(URL.reciepts)
        browser.navigate().back()
        
        user.appsBtn.click();
        expect(await browser.getCurrentUrl()).toContain(URL.apps)
        browser.navigate().back()
        
        user.redeemBtn.click();
        expect(await browser.getCurrentUrl()).toContain(URL.redeem)
        browser.navigate().back()

    })


   /**
   *this it function for valid notification settings
   *@param expectation — setting check box is unchecked after click
   *@param assertion — check box is not selected
   */
    it('Notification settings - Valid', async function(){
        
        browser.get(URL.notificationettings)
        user.newMusicEmail_notific.click();
        user.newMusicPush_notific.click();
        user.saveNotificationSettingsBtn.click();

        browser.sleep(1000);
        expect(await user.newMusicEmail_notific.isSelected()).toBe(false);
        expect(await user.newMusicPush_notific.isSelected()).toBe(false);
        expect(await user.NotificationsSaved.isPresent()).toBe(true);

        user.newMusicEmail_notific.click();
        user.newMusicPush_notific.click();
        user.saveNotificationSettingsBtn.click();
        expect(await user.NotificationsSaved.isPresent()).toBe(true)

    })


   /**
   *this it function for invalid password change sign up with new email and change the password
   *@param expectation — password is not changed
   *@param assertion — label for updated password is not present
   */
    it('Change Password - Invalid', async function(){

        browser.get(URL.changePassword)
        user.currentPassword.sendKeys(user.accountPassword)
        user.setNewPasswordBtn.click();
        expect(await user.updated.isPresent()).toBe(false)
        browser.get(URL.overview)
        browser.sleep(1000)
        user.signOutEverywhere.click();
    
    })
    
    
    it('Change Password - Valid', async function(){

        var length = 8,
        charSetEmail = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        charSetPassword = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retValPassword = "",
        retValNewPassword = "",
        retValEmail = "";
        for (var i = 0, n = charSetEmail.length; i < length; ++i) {
            retValEmail += charSetEmail.charAt(Math.floor(Math.random() * n));
        }
        for (var i = 0, n = charSetPassword.length; i < length; ++i) {
            retValPassword += charSetPassword.charAt(Math.floor(Math.random() * n));
        }
        for (var i = 0, n = charSetPassword.length; i < length; ++i) {
            retValNewPassword += charSetPassword.charAt(Math.floor(Math.random() * n));
        }
        let xEmail = retValEmail + '@gmail.com'
        let xName = retValEmail
        let xPass = retValPassword 
        let xNewPass = retValNewPassword

        browser.get(URL.signUp)
        browser.sleep(1000)
        user.signUpEmail.sendKeys(xEmail)
        user.signUpConfirmEmail.sendKeys(xEmail)
        user.signUpCreatePassword.sendKeys(xPass)
        user.signUpDisplayName.sendKeys(xName)
        user.signUpBirthDay.sendKeys('12')
        user.signUpBirthYear.sendKeys('1998')
        await element(by.id("month")).element(by.cssContainingText('option', 'January')).click();
		await element(by.id("month")).click();
        user.signUpGender.click();
        browser.sleep(5000);
        user.signUpBtn.click();
       
        browser.get(URL.overview)
        browser.get(URL.changePassword)
        user.currentPassword.sendKeys(xPass)
        user.newPassword.sendKeys(xNewPass)
        user.repeatNewPassword.sendKeys(xNewPass)
        user.setNewPasswordBtn.click();
        expect(await user.updated.isPresent()).toBe(true)
    });

})