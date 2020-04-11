import { browser, protractor, by, element } from 'protractor'
import { pageSignup } from '../pages/pageSignup';

import { log4jsconf } from "../log4jsconf"

let newSignup = new pageSignup();

describe('Testing signup', function () {

  beforeAll(function(){
      browser.get('http://localhost:4200/account.mayestro/signup');
      let browserTitle = browser.getTitle();
      browserTitle.then(function(txt){
        log4jsconf.log().info("Browser title: " + txt);
      })
  });

  it('signup button disabled', async function(){
    browser.sleep(2000)
    expect(await newSignup.signupBtn.isEnabled()).toBe(false);

  })

  it('Testing tab key', async function(){
    browser.refresh();

    let Arr = [newSignup.confirmEmail, newSignup.passwordInput, newSignup.nicknameInput, newSignup.birthDay, newSignup.birthMonth, newSignup.birthYear];

    newSignup.emailInput.sendKeys(protractor.Key.TAB).then(function(){
      for (let i in Arr) {
      
      let currentElement = browser.driver.switchTo().activeElement();
      expect(currentElement.getId()).toEqual(Arr[i].getId());
      Arr[i].sendKeys(protractor.Key.TAB);
    }})
  })
  it('invalid email format', async function(){
    browser.refresh();
    newSignup.emailInput.sendKeys('ahmed@gmail');
    newSignup.confirmEmail.click();
    expect(await newSignup.errorEmailInput.getText()).toContain('The email address you supplied is invalid.');

  })

  it('email already exists', async function() {
    browser.refresh();
    newSignup.emailInput.sendKeys('ahmed@gmail.com');
    newSignup.confirmEmail.click();
    expect(await newSignup.errorExistingEmail.getText()).toContain("We're sorry, that email is taken.");
    browser.sleep(1500)

  });

  it('no email', async function() {
    browser.refresh();
    newSignup.emailInput.click();
    newSignup.confirmEmail.click();
    expect(await newSignup.errorEmailInput.getText()).toContain('Please enter your email.');
    browser.sleep(1500)
  });

  it('invalid email confirmation format', async function(){
    browser.refresh();
    newSignup.confirmEmail.sendKeys('ahmedd@gmail');
    newSignup.passwordInput.click();
    expect(await newSignup.errorConfirmEmailInput.getText()).toContain('The email address you supplied is invalid.');
  })

  it('no email confirmation', async function() {
    browser.refresh();
    newSignup.confirmEmail.click();
    newSignup.passwordInput.click();
    expect(await newSignup.errorConfirmEmailInput.getText()).toContain('Please enter your email.');
    browser.sleep(1500)
  });

  it('email and email confirmation do not match', async function(){
    browser.refresh();
    newSignup.emailInput.sendKeys('ahmedd@gmail.com');
    newSignup.confirmEmail.sendKeys('ahmeddd@gmail.com');
    newSignup.passwordInput.click();
    expect(await newSignup.errorDoesNotMatch.getText()).toContain("Email address doesn't match.");
  })

  it('password too short', async function(){
    browser.refresh();
    newSignup.passwordInput.sendKeys('123');
    newSignup.nicknameInput.click();
    expect(await newSignup.errorPasswordInput.getText()).toContain("Your password is too short.");
  })

  it('no password', async function(){
    browser.refresh();
    newSignup.passwordInput.click();
    newSignup.nicknameInput.click();
    expect(await newSignup.errorPasswordInput.getText()).toContain('Enter a password to continue.');
    
  })

  it('nickname limit', async function(){
    browser.refresh();
    newSignup.nicknameInput.sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    browser.sleep(2000)
    expect(await newSignup.nicknameInput.getAttribute('value')).toEqual('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    
  })

  it("invalid birthDay", async function(){
    browser.refresh();
    newSignup.birthDay.sendKeys(35);
    newSignup.birthYear.click();
    expect(await newSignup.errorInvalidDateOfBirth.getText()).toContain('Please enter a valid day of the month.');

  })

//   it("invalid birthMonth", async function(){
//     browser.refresh();

//   })

    it("invalid birthYear < 1900", async function(){
        browser.refresh();
        newSignup.birthYear.sendKeys(1899);
        newSignup.birthDay.click();
        expect(await newSignup.errorBirthYear.getText()).toContain('Please enter a valid year');
    })


    it("invalid birthYear >= 2000", async function(){
        browser.refresh();
        newSignup.birthYear.sendKeys(2000);
        newSignup.birthDay.click();
        expect(await newSignup.errorBirthYear.getText()).toContain("Sorry, but you don't meet Spotify's age requirements.");
    })


    it("male gender selected", async function(){
        browser.refresh();
        newSignup.genderMale.click();
        expect(await newSignup.genderMale.isSelected()).toBe(true);
      })

    it("female gender selected", async function(){
        browser.refresh();
        newSignup.genderFemale.click();
        expect(await newSignup.genderFemale.isSelected()).toBe(true);
    })

    it("share registration selected", async function(){
        browser.refresh();
        newSignup.shareRegistration.click();
        expect(await newSignup.shareRegistration.isSelected()).toBe(true);
    })

    it('valid signup',async function(){
        browser.refresh();
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
        newSignup.signupBtn.isEnabled().then(async function(){
            newSignup.signupBtn.click();
            browser.sleep(3000)
            expect(await browser.getCurrentUrl()).toContain('http://localhost:4200/open.mayestro/overview')
            browser.navigate().back();
    
         })
    })

    it('go to login', async function(){
        browser.refresh();
        newSignup.Login.click();
        browser.sleep(2000)
        expect(await browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/login')
        browser.navigate().back();
      })

    it('terms & conditions and privacy policy', function(){
 
        browser.ignoreSynchronization = true;
  
        let browserTitle = browser.getTitle();
        browserTitle.then(function(txt){
          log4jsconf.log().info("Main browser title: " + txt);
        })
  
        newSignup.termsAndConditions.click();
        newSignup.privacyPolicy.click();
  
        let windowHandles = browser.getAllWindowHandles();
        let parentHandle, childHandle, child2Handle;
  
        windowHandles.then(function(handles){
            parentHandle = handles[0];
            childHandle = handles[1];
            child2Handle = handles[2];
  
            browser.switchTo().window(childHandle).then(function(){
                browser.getTitle().then(function(txt){
                  log4jsconf.log().info("Main browser title: " + txt);
                    browser.close();
                })
            })
  
            browser.switchTo().window(child2Handle).then(function(){
                browser.getTitle().then(function(txt){
                  log4jsconf.log().info("Main browser title: " + txt);
                    browser.close();
                })
            })
            
            browser.switchTo().window(parentHandle).then(function(){
                console.log('Returning to main window...');
                browser.getTitle().then(function(txt){
                  log4jsconf.log().info("Main browser title: " + txt);
                })
            })
        })
    })

})