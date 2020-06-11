import { by, element } from 'protractor'

/**
 * Represents POM of spotify 
 * this class is to keep needed elements in spotify pages
 */

export class newPage{

    username = 'Testing'
    accountEmail =  'teste2e@gmail.com'
    accountPassword = 'spotify0'
    fbEmail = 'e2etesting00@gmail.com'
    fbPassword = '123456e2e'
    changedEmail = 'e2etest@gmail.com'

    facebookBtn = element(by.xpath("//a[.='Continue with Facebook']"))
    fbemail = element(by.xpath("//input[@id='email']"))
    fbpassword = element(by.xpath("//input[@id='pass']"))
    fbLogIn = element(by.xpath("//button[@id='loginbutton']"))
    
    LogOut = element(by.xpath('//*[@id="app"]/body/div/div[2]/div/div/div[5]/div/button'))
    LogInBtn = element(by.xpath("//button[@id='login-button']"))
    LogIn = element(by.xpath("//a[@id='login-btn-link']"))
    email = element(by.xpath("//input[@id='login-username']"))
    password = element(by.xpath("//input[@id='login-password']"))
    
    editProfileBtn = element(by.xpath("//a[.='Edit profile']"))
    saveProfileBtn = element(by.xpath("//button[@id='profile_save_profile']"))
    editEmail = element(by.xpath("//input[@id='profile_email']"))
    confirmPassword = element(by.xpath("//input[@id='profile_confirmPassword']"))
    profileEmail = element(by.xpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/article[1]/section/table/tbody/tr[2]/td[2]/p'))
    profileSaved = element(by.xpath("//p[.='Profile saved']"))

    newMusicEmail_notific = element(by.xpath('//table[2]//tr[2]/td[2]//label[1]'))
    newMusicPush_notific = element(by.xpath('//table[2]//tr[2]/td[3]//label[1]'))
    saveNotificationSettingsBtn = element(by.xpath("//button[@id='notifications_save']"))
    NotificationsSaved = element(by.xpath("//li[.='Notifications saved']"))
    
    currentPassword = element(by.xpath("//input[@id='change_password_validatePassword']"))
    newPassword = element(by.xpath("//input[@id='change_password_new_password']"))
    repeatNewPassword = element(by.xpath("//input[@id='change_password_check_password']"))
    setNewPasswordBtn = element(by.xpath("//button[@id='change_password_submit']"))
    updated = element(by.xpath("//div[@class='alert alert-success']"))
    
}