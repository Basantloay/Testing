import { by, browser, element } from 'protractor'
import { pageLogin } from './pages/pageLogin';

import { log4jsconf } from "./log4jsconf"

describe('Testing login', function () {

  beforeEach(function(){
      browser.get('http://3.137.69.49/account.mayestro/login');
      let browserTitle = browser.getTitle();
      browserTitle.then(function(txt){
        log4jsconf.log().info("Browser title: " + txt);
      })
  });

  it('cursor on email by default FAIL', async function(){
    browser.sleep(2000)
    let newlogin = new pageLogin();
    expect(await newlogin.emailInput.isSelected()).toBe(true);
  })

  it('valid login', async function(){
    browser.sleep(2000)
    let newlogin = new pageLogin();
    newlogin.emailInput.sendKeys('ahmed@gmail.com');
    newlogin.passwordInput.sendKeys('12345678');
    newlogin.loginBtn.click();
    browser.sleep(4000);
    expect(await browser.getCurrentUrl()).toContain('http://3.137.69.49/open.mayestro/overview')
  })

   
 it('forbidden characters FAIL', async function(){
    browser.sleep(1500)
    let newlogin = new pageLogin();
    newlogin.emailInput.clear();
    newlogin.emailInput.sendKeys("`");
    expect(await newlogin.errorEmail.getText()).toContain('Forbidden character(s) ` in username.');
    
  })

  it('should have error message for incorrect username', async function () {
    browser.sleep(2000)
    let newlogin = new pageLogin();
    newlogin.emailInput.sendKeys('heloo');
    newlogin.passwordInput.sendKeys('12345678');
    newlogin.loginBtn.click();
    expect(await newlogin.redErrormsg.getText()).toContain('Incorrect username or password.')
    
  })


  it('should have error message for incorrect password', async function () {
    browser.sleep(2000)
    let newlogin = new pageLogin();
    newlogin.emailInput.sendKeys('ahmed@gmail.com');
    newlogin.passwordInput.sendKeys('1234567899');
    newlogin.loginBtn.click();
    expect(await newlogin.redErrormsg.getText()).toContain('Incorrect username or password.')

    })

    it('no email', async function() {
      let newlogin = new pageLogin();
      newlogin.emailInput.click();
      newlogin.passwordInput.click();
      expect(await newlogin.errorEmail.getText()).toContain('Please enter your email.');
      browser.sleep(2000)
    });

    it('no password', async function(){
      let newlogin = new pageLogin();
      newlogin.passwordInput.click();
      newlogin.emailInput.click();
      expect(await newlogin.errorPassword.getText()).toContain('Enter a password to continue.');
      browser.sleep(2000)
    });

    it('terms and conditions', function(){
        
      browser.ignoreSynchronization = true;

      let browserTitle = browser.getTitle();
      browserTitle.then(function(txt){
        log4jsconf.log().info("Main browser title: " + txt);
      })
      let newlogin = new pageLogin();
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
