"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
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
        this.facebookBtn = protractor_1.element(protractor_1.by.xpath("//a[.='Continue with Facebook']"));
        this.fbemail = protractor_1.element(protractor_1.by.xpath("//input[@id='email']"));
        this.fbpassword = protractor_1.element(protractor_1.by.xpath("//input[@id='pass']"));
        this.fbLogIn = protractor_1.element(protractor_1.by.xpath("//button[@id='loginbutton']"));
        this.LogOut = protractor_1.element(protractor_1.by.xpath('//*[@id="app"]/body/div/div[2]/div/div/div[5]/div/button'));
        this.LogInBtn = protractor_1.element(protractor_1.by.xpath("//button[@id='login-button']"));
        this.LogIn = protractor_1.element(protractor_1.by.xpath("//a[@id='login-btn-link']"));
        this.email = protractor_1.element(protractor_1.by.xpath("//input[@id='login-username']"));
        this.password = protractor_1.element(protractor_1.by.xpath("//input[@id='login-password']"));
        this.editProfileBtn = protractor_1.element(protractor_1.by.xpath("//a[.='Edit profile']"));
        this.saveProfileBtn = protractor_1.element(protractor_1.by.xpath("//button[@id='profile_save_profile']"));
        this.editEmail = protractor_1.element(protractor_1.by.xpath("//input[@id='profile_email']"));
        this.confirmPassword = protractor_1.element(protractor_1.by.xpath("//input[@id='profile_confirmPassword']"));
        this.profileEmail = protractor_1.element(protractor_1.by.xpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/article[1]/section/table/tbody/tr[2]/td[2]/p'));
        this.profileSaved = protractor_1.element(protractor_1.by.xpath("//p[.='Profile saved']"));
        this.newMusicEmail_notific = protractor_1.element(protractor_1.by.xpath('//table[2]//tr[2]/td[2]//label[1]'));
        this.newMusicPush_notific = protractor_1.element(protractor_1.by.xpath('//table[2]//tr[2]/td[3]//label[1]'));
        this.saveNotificationSettingsBtn = protractor_1.element(protractor_1.by.xpath("//button[@id='notifications_save']"));
        this.NotificationsSaved = protractor_1.element(protractor_1.by.xpath("//li[.='Notifications saved']"));
        this.currentPassword = protractor_1.element(protractor_1.by.xpath("//input[@id='change_password_validatePassword']"));
        this.newPassword = protractor_1.element(protractor_1.by.xpath("//input[@id='change_password_new_password']"));
        this.repeatNewPassword = protractor_1.element(protractor_1.by.xpath("//input[@id='change_password_check_password']"));
        this.setNewPasswordBtn = protractor_1.element(protractor_1.by.xpath("//button[@id='change_password_submit']"));
        this.updated = protractor_1.element(protractor_1.by.xpath("//div[@class='alert alert-success']"));
    }
}
exports.newPage = newPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvdGlmeUVsZW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvc3BvdGlmeUVsZW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdDO0FBRXhDOzs7R0FHRztBQUVILE1BQWEsT0FBTztJQUFwQjtRQUVJLGFBQVEsR0FBRyxTQUFTLENBQUE7UUFDcEIsaUJBQVksR0FBSSxtQkFBbUIsQ0FBQTtRQUNuQyxvQkFBZSxHQUFHLFVBQVUsQ0FBQTtRQUM1QixZQUFPLEdBQUcsd0JBQXdCLENBQUE7UUFDbEMsZUFBVSxHQUFHLFdBQVcsQ0FBQTtRQUN4QixpQkFBWSxHQUFHLG1CQUFtQixDQUFBO1FBRWxDLGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQTtRQUNsRSxZQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQTtRQUNuRCxlQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtRQUNyRCxZQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQTtRQUUxRCxXQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUMsQ0FBQTtRQUN0RixhQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQTtRQUM1RCxVQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQTtRQUN0RCxVQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQTtRQUMxRCxhQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQTtRQUU3RCxtQkFBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUE7UUFDM0QsbUJBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFBO1FBQzFFLGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFBO1FBQzdELG9CQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQTtRQUM3RSxpQkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpR0FBaUcsQ0FBQyxDQUFDLENBQUE7UUFDbkksaUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFBO1FBRTFELDBCQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUE7UUFDOUUseUJBQW9CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQTtRQUM3RSxnQ0FBMkIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFBO1FBQ3JGLHVCQUFrQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUE7UUFFdkUsb0JBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQyxDQUFBO1FBQ3RGLGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUMsQ0FBQTtRQUM5RSxzQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFBO1FBQ3RGLHNCQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUE7UUFDL0UsWUFBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUE7SUFFdEUsQ0FBQztDQUFBO0FBdENELDBCQXNDQyJ9