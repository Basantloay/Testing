import { by, browser, element } from 'protractor'

// let loginPage = require('../pages/loginPage');

describe('incorrect password', function () {
  // beforeEach(function(){
  //     browser.get('http://3.137.69.49/account.mayestro/login');
  // });
  it('should have error message', async function () {
    browser.get('http://3.137.69.49/account.mayestro/login')
    browser.sleep(3000)
    element(by.xpath("//input[@name='email']")).sendKeys('heloo')
    element(by.xpath("//input[@name='password']")).sendKeys('123456789')
    element(by.xpath("//button[@type='submit']")).click()
    expect(await element(by.xpath("//p[@class='col-12 mb-0 text-white']")).getText()).toContain('Incorrect username or password.')

    // loginPage.get('http://3.137.69.49/account.mayestro/login');
    // loginPage.enterEmail('heloo');
    // loginPage.enterPassword('12345678');
    // loginPage.clickLogin();
    // expect(await element(by.xpath("//p[@class='col-12 mb-0 text-white']")).getText()).toContain('Incorrect username or password.');
  })
})



// import { browser, element, by } from "protractor";

// describe("Calculator test", function(){

//     it("invoke calc app",function(){
//         browser.get("https://juliemr.github.io/protractor-demo/");
//         browser.sleep(3000);
//     })

// });