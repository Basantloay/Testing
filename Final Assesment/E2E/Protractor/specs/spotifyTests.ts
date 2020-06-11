import { browser } from 'protractor'

import { newPage } from '../pages/spotifyElements';

import { URLs } from '../pages/URLs'

export class DocumentMe {}

let user = new newPage();
let URL = new URLs();

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
   *this it function for invalid password change
   *@param expectation — password is not changed
   *@param assertion — label for updated password is not present
   */
    it('Change Password - Invalid', async function(){

        browser.get(URL.changePassword)
        user.currentPassword.sendKeys(user.accountPassword)
        user.setNewPasswordBtn.click();
        expect(await user.updated.isPresent()).toBe(false)
    
    })
    
    
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

})