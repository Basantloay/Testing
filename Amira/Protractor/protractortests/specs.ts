import { by, browser, element } from 'protractor'
import { pageLogin } from './pages/pageLogin';

//let loginPage = require('./pages/loginPage');

describe('Testing login', function () {
  beforeEach(function(){
      browser.get('http://3.137.69.49/account.mayestro/login');
  });
  it('should have error message for incorrect username', async function () {
    browser.sleep(3000)
    let newlogin = new pageLogin();
    newlogin.emailInput.sendKeys('heloo');
    newlogin.passwordInput.sendKeys('12345678');
    newlogin.loginBtn.click();
    expect(await newlogin.redErrormsg.getText()).toContain('Incorrect username or password.')

  })
  it('should have error message for incorrect password', async function () {
    browser.sleep(3000)
    let newlogin = new pageLogin();
    newlogin.emailInput.sendKeys('ahmed@gmail.com');
    newlogin.passwordInput.sendKeys('1234567899');
    newlogin.loginBtn.click();
    expect(await newlogin.redErrormsg.getText()).toContain('Incorrect username or password.')

    })

    it('no email', async () => {
      let newlogin = new pageLogin();
      newlogin.emailInput.sendKeys('');
      newlogin.passwordInput.click();
      expect(await newlogin.errorEmail.getText()).toContain('Please enter your email.');
      browser.sleep(2000)
    });

    it('no password', async () => {
      let newlogin = new pageLogin();
      newlogin.passwordInput.sendKeys('');
      newlogin.emailInput.click();
      expect(await newlogin.errorPassword.getText()).toContain('Enter a password to continue.');
      browser.sleep(2000)
    });


})
