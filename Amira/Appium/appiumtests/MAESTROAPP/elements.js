export class users{

    //com.example.spotifyclone
    wlcmTitle = element(by.text("Million of songs."));
    SignupBtn = element(by.id("com.example.spotifyclone:id/bSignup"));
    ContinueFacebookBtn = element(by.id("com.example.spotifyclone:id/bFacebook"));
    LoginBtn = element(by.id("com.example.spotifyclone:id/bLogin1"));
    forgotPasswordBtn = element(by.id("com.example.spotifyclone:id/bforgot"))

    loginTitle = element(by.text("Email or username"));
    loginEmailInput = element(by.id("com.example.spotifyclone:id/etUsername"));
    loginEmailInput = element(by.id("com.example.spotifyclone:id/etPassword"));
    newEmailInput = element(by.id("com.example.spotifyclone:id/etNewEmail"));
    homeBtn = element(by.id("com.example.spotifyclone:id/home_item"));

    forgotPasswordTitle = element(by.text("Forgot your Password?"));

    signupTitle = element(by.text("What's your email?"));
    nextBtn = element(by.id("com.example.spotifyclone:id/bNext"));

    passwordTitle = element(by.text("Create a password"));
    newPassword = element(by.id("com.example.spotifyclone:id/etNewPass"));
    nextBtn2 = element(by.id("com.example.spotifyclone:id/bNext2"))
    
    birthdayTitle = element(by.id("What's your date of birth?"));
    yearOfBirth = element(by.id("4c5a47dc-a011-4ad9-8009-d81ef06d62f7"));
    nextBtn3 = element(by.id("com.example.spotifyclone:id/bNext3"));

    genderTitle = element(by.text("What's you gender?"));
    female = element(by.id("ccom.example.spotifyclone:id/bFemale"));
    male = element(by.id("com.example.spotifyclone:id/bFemale"));

    nameTitle = element(by.text("What's you name?"));
    nameInput = element(by.id("com.example.spotifyclone:id/etName"));
    createBtn = element(by.id("com.example.spotifyclone:id/bCreate"));

}