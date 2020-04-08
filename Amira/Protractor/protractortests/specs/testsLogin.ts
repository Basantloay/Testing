import { browser, protractor, element } from 'protractor'
import { pageLogin } from '../pages/pageLogin';

import { log4jsconf } from "../log4jsconf"

let newlogin = new pageLogin();

describe('Testing login', function () {

  beforeAll(function(){
      browser.get('http://3.137.69.49/account.mayestro/login');
      let browserTitle = browser.getTitle();
      browserTitle.then(function(txt){
        log4jsconf.log().info("Browser title: " + txt);
      })
  });

  it('cursor on email by default FAIL', async function(){
    browser.sleep(2000)
    let currentElement = browser.driver.switchTo().activeElement();
        expect(currentElement.getId()).toEqual(newlogin.emailInput.getId());
  })

  it('login disabled until..', async function(){
    browser.refresh();
    expect(await newlogin.loginBtn.isEnabled()).toBe(false);
    newlogin.emailInput.sendKeys('a');
    newlogin.passwordInput.sendKeys('11111111');
    expect(await newlogin.loginBtn.isEnabled()).toBe(true);
  })

  it('valid login', async function(){
    browser.refresh();
    newlogin.emailInput.sendKeys('ahmed@gmail.com');
    newlogin.passwordInput.sendKeys('12345678');
    newlogin.loginBtn.click();
    browser.sleep(4000);
    expect(await browser.getCurrentUrl()).toContain('http://3.137.69.49/open.mayestro/overview')
    browser.navigate().back();
    
  })

   
 it('forbidden characters FAIL', async function(){
    newlogin.emailInput.clear();
    newlogin.emailInput.sendKeys("`");
    expect(await newlogin.errorEmail.getText()).toContain('Forbidden character(s) ` in username.');
    
  })

  it('should have error message for incorrect username', async function () {
    browser.refresh();
    newlogin.emailInput.sendKeys('heloo');
    newlogin.passwordInput.sendKeys('12345678');
    newlogin.loginBtn.click();
    expect(await newlogin.redErrormsg.getText()).toContain('Incorrect username or password.')
    
  })


  it('should have error message for incorrect password', async function () {
    browser.refresh();
    newlogin.emailInput.sendKeys('ahmed@gmail.com');
    newlogin.passwordInput.sendKeys('1234567899');
    newlogin.loginBtn.click();
    expect(await newlogin.redErrormsg.getText()).toContain('Incorrect username or password.')

    })

    it('Testing can not copy password', async function(){
      browser.refresh();
  
      newlogin.passwordInput.sendKeys('123456789').then(function(){
      //newlogin.passwordInput.sendKeys(protractor.Key.CONTROL, 'a');
      newlogin.passwordInput.sendKeys(protractor.Key.CONTROL, 'c');
      newlogin.emailInput.sendKeys(protractor.Key.CONTROL, 'v');

      })
      expect( newlogin.emailInput.getText()).not.toContain(newlogin.passwordInput.getText());

    })

    it('Testing tab key', async function(){
      browser.refresh();
  
      newlogin.emailInput.sendKeys(protractor.Key.TAB).then(function(){
        let currentElement = browser.driver.switchTo().activeElement();
        expect(currentElement.getId()).toEqual(newlogin.passwordInput.getId());
      })
    })
      
    
    it('no email', async function() {
      browser.refresh();
      newlogin.emailInput.click();
      newlogin.passwordInput.click();
      expect(await newlogin.errorEmail.getText()).toContain('Please enter your email.');
      browser.sleep(1500)
    });

    it('no password', async function(){
      browser.refresh();
      newlogin.passwordInput.click();
      newlogin.emailInput.click();
      expect(await newlogin.errorPassword.getText()).toContain('Enter a password to continue.');
      browser.sleep(1500)
    });

    it('go to sign up', async function(){
      browser.refresh();
      newlogin.signUp.click();
      browser.sleep(2000)
      expect(await browser.getCurrentUrl()).toContain('http://3.137.69.49/account.mayestro/signup')
      browser.navigate().back();
    })

    it('go to forget password', async function(){
      newlogin.forgotPassword.click();
      browser.sleep(2000)
      expect(await browser.getCurrentUrl()).toContain('http://3.137.69.49/account.mayestro/forget-password')
      browser.navigate().back();
    })

    it('terms & conditions and privacy policy', function(){
 
      browser.ignoreSynchronization = true;

      let browserTitle = browser.getTitle();
      browserTitle.then(function(txt){
        log4jsconf.log().info("Main browser title: " + txt);
      })

      newlogin.termsAndConditions.click();
      newlogin.privacyPolicy.click();

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