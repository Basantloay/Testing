"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_2 = require("protractor");
/**
 * Represents POM of spotify
 * this class is to keep needed elements in spotify pages
 */
class newPage {
    constructor() {
        this.username = 'Testing';
        this.accountEmail = 'teste2e@gmail.com';
        this.accountPassword = 'spotify0';
        this.fbEmail = 'e2etesting00@gmail.com';
        this.fbPassword = '123456e2e';
        this.changedEmail = 'e2etest@gmail.com';
        this.wordToPass = '';
        this.facebookBtn = protractor_2.element(protractor_2.by.xpath("//a[.='Continue with Facebook']"));
        this.fbemail = protractor_2.element(protractor_2.by.xpath("//input[@id='email']"));
        this.fbpassword = protractor_2.element(protractor_2.by.xpath("//input[@id='pass']"));
        this.fbLogIn = protractor_2.element(protractor_2.by.xpath("//button[@id='loginbutton']"));
        this.LogOut = protractor_2.element(protractor_2.by.xpath('//*[@id="app"]/body/div/div[2]/div/div/div[5]/div/button'));
        this.LogInBtn = protractor_2.element(protractor_2.by.xpath("//button[@id='login-button']"));
        this.LogIn = protractor_2.element(protractor_2.by.xpath("//a[@id='login-btn-link']"));
        this.email = protractor_2.element(protractor_2.by.xpath("//input[@id='login-username']"));
        this.password = protractor_2.element(protractor_2.by.xpath("//input[@id='login-password']"));
        this.editProfileBtn = protractor_2.element(protractor_2.by.xpath("//a[.='Edit profile']"));
        this.saveProfileBtn = protractor_2.element(protractor_2.by.xpath("//button[@id='profile_save_profile']"));
        this.editEmail = protractor_2.element(protractor_2.by.xpath("//input[@id='profile_email']"));
        this.confirmPassword = protractor_2.element(protractor_2.by.xpath("//input[@id='profile_confirmPassword']"));
        this.profileEmail = protractor_2.element(protractor_2.by.xpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/article[1]/section/table/tbody/tr[2]/td[2]/p'));
        this.profileSaved = protractor_2.element(protractor_2.by.xpath("//p[.='Profile saved']"));
        this.newMusicEmail_notific = protractor_2.element(protractor_2.by.xpath('//table[2]//tr[2]/td[2]//label[1]'));
        this.newMusicPush_notific = protractor_2.element(protractor_2.by.xpath('//table[2]//tr[2]/td[3]//label[1]'));
        this.saveNotificationSettingsBtn = protractor_2.element(protractor_2.by.xpath("//button[@id='notifications_save']"));
        this.NotificationsSaved = protractor_2.element(protractor_2.by.xpath("//li[.='Notifications saved']"));
        this.currentPassword = protractor_2.element(protractor_2.by.xpath("//input[@id='change_password_validatePassword']"));
        this.newPassword = protractor_2.element(protractor_2.by.xpath("//input[@id='change_password_new_password']"));
        this.repeatNewPassword = protractor_2.element(protractor_2.by.xpath("//input[@id='change_password_check_password']"));
        this.setNewPasswordBtn = protractor_2.element(protractor_2.by.xpath("//button[@id='change_password_submit']"));
        this.updated = protractor_2.element(protractor_2.by.xpath("//div[@class='alert alert-success']"));
        this.privacySettingsBtn = protractor_2.element(protractor_2.by.css('div:nth-of-type(13)>div:nth-of-type(6)'));
        this.recoverPlaylistsBtn = protractor_2.element(protractor_2.by.xpath('//*[@id="submenu-item-recover-playlists"]'));
        this.recieptsBtn = protractor_2.element(protractor_2.by.xpath('//*[@id="submenu-item-receipts"]'));
        this.appsBtn = protractor_2.element(protractor_2.by.xpath('//*[@id="submenu-item-apps"]'));
        this.redeemBtn = protractor_2.element(protractor_2.by.xpath('//*[@id="submenu-item-redeem"]'));
        this.signOutEverywhere = protractor_2.element(protractor_2.by.xpath("//a[.='Sign out everywhere']"));
        this.signUpEmail = protractor_2.element(protractor_2.by.xpath("//input[@id='email']"));
        this.signUpConfirmEmail = protractor_2.element(protractor_2.by.xpath("//input[@id='confirm']"));
        this.signUpCreatePassword = protractor_2.element(protractor_2.by.xpath("//input[@id='password']"));
        this.signUpDisplayName = protractor_2.element(protractor_2.by.xpath("//input[@id='displayname']"));
        this.signUpBirthDay = protractor_2.element(protractor_2.by.xpath("//input[@id='day']"));
        this.signUpBirthYear = protractor_2.element(protractor_2.by.xpath("//input[@id='year']"));
        this.signUpGender = protractor_2.element(protractor_2.by.xpath("//label[2]/span[@class='Indicator-sc-16vj7o8-0 dDbCKU']"));
        this.signUpNotRobot = protractor_2.element(protractor_2.by.xpath("//div[@class='recaptcha-checkbox-border']"));
        this.signUpBtn = protractor_2.element(protractor_2.by.xpath("//button[@class='Button-oyfj48-0 eEPJyH SignupButton___StyledButtonPrimary-cjcq5h-1 deUbNh']"));
    }
    changethepassword(s) {
        this.wordToPass = s;
    }
}
exports.newPage = newPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvdGlmeUVsZW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvc3BvdGlmeUVsZW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdDO0FBRXhDOzs7R0FHRztBQUVILE1BQWEsT0FBTztJQUFwQjtRQUVJLGFBQVEsR0FBRyxTQUFTLENBQUE7UUFDcEIsaUJBQVksR0FBSSxtQkFBbUIsQ0FBQTtRQUNuQyxvQkFBZSxHQUFHLFVBQVUsQ0FBQTtRQUM1QixZQUFPLEdBQUcsd0JBQXdCLENBQUE7UUFDbEMsZUFBVSxHQUFHLFdBQVcsQ0FBQTtRQUN4QixpQkFBWSxHQUFHLG1CQUFtQixDQUFBO1FBRWxDLGVBQVUsR0FBWSxFQUFFLENBQUE7UUFLeEIsZ0JBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFBO1FBQ2xFLFlBQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFBO1FBQ25ELGVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFBO1FBQ3JELFlBQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFBO1FBRTFELFdBQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQyxDQUFBO1FBQ3RGLGFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFBO1FBQzVELFVBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFBO1FBQ3RELFVBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStC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