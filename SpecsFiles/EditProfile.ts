
//import { Playlist } from '../pages/Playlist';
var protractor_1 = require("protractor");

//import { browser, element, by, protractor, Browser } from 'protractor'
/**
* This Describe function for a Editprofile
* @param description  description of test name
* @param specDefinitions — Function for Jasmine to invoke that will define
*/
// eslint-disable-next-line no-undef


describe('EditprofilePage',function(){
    /**
   *this before each function excutes getting browser and not waiting for angular to respond before every function 
   */

    beforeEach(function () {
        
        onPrepare: async () => {
        
            await protractor_1.browser.waitForAngularEnabled(false);
        }

        protractor_1.browser.ignoreSynchronization = true
        
        
        protractor_1.browser.get('https://www.spotify.com/eg-en/account/profile/');
            
      })

    onPrepare: async () => {
    
        await protractor_1.browser.waitForAngularEnabled(false);
    }

     
    /**
   *this it function Test page scroll down
   */
    it('Test Editprofile Page Scroll Down',() => {
        onPrepare: async () => {
    
            await protractor_1.browser.waitForAngularEnabled(false);
        }
    
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function(){
            console.log('++++++SCROLLED Down+++++');
        });
    });

    /**
   *this it function Test page scroll up
   */


    it('Test Editprofile Page Scroll Up',() => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });
    });


    /**
   *this it function Test login from user side
   */
    
    
    it('login from user test  ',  function () {
        protractor_1.browser.get('https://open.spotify.com/')
        protractor_1.browser.sleep(50)
        protractor_1.browser.get('https://accounts.spotify.com/en/login')
        var UsernameTextBox = protractor_1.element(protractor_1.by.id('login-username')).sendKeys('testinge2e20@gmail.com')
        protractor_1.browser.sleep(50)
        var PasswordTextBox = protractor_1.element(protractor_1.by.id('login-password')).sendKeys('123456E2e')
        protractor_1.browser.sleep(50)
        protractor_1.element(protractor_1.by.xpath("//button[@id='login-button']")).click()
        protractor_1.browser.sleep(2000)
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://accounts.spotify.com/en/status')
        protractor_1.element(protractor_1.by.xpath("//a[.='Account Overview']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe("https://open.spotify.com/")
       



        
      
       
    });
    /**
   *this it Editprofile buttons test
   */
    it('change email test  ',  function () {

        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.className('_137ec408b14ac4ea5aec6ded3d95f328-scssn')).click()
        protractor_1.element(protractor_1.by.className('_137ec408b14ac4ea5aec6ded3d95f328-scss be059487cfa7b71ee0f482c8e5be2b7e-scss')).click()
       
        protractor_1.browser.sleep(2000)

       
    });


    it('verify email o test  ',  function () {

        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.className('i_137ec408b14ac4ea5aec6ded3d95f328-scss')).click()
        protractor_1.element(protractor_1.by.className('_137ec408b14ac4ea5aec6ded3d95f328-scss be059487cfa7b71ee0f482c8e5be2b7e-scss')).click()
       
        protractor_1.browser.sleep(2000)

       
    });
    
    


    it('Email button test',  function () {


        protractor_1.browser.get('https://open.spotify.com/collection/Editprofiles') 
        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.className('_8e9a0858c7c9d25c9b7193cd3acb12cf-scss _23106bd31c32e67dcd7330abd8664ec2-scss'))
        protractor_1.element(protractor_1.by.className('_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss _4a19a959428c34075eef50bd44ab468f-scss')).click()
        protractor_1.browser.sleep(200)

       
    });

      /**
   *this it function Test following
   */

    it('Confirm Password Editprofile ',  function () {


        protractor_1.browser.get('https://open.spotify.com/Editprofile/5abSRg0xN1NV3gLbuvX24M') 
        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.xpath("//div[.='Confirm password']")).click()
        protractor_1.browser.sleep(200)

       
    });



    it('country button standard ',  function () {


        protractor_1.browser.get('https://open.spotify.com/Editprofiles') 
        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.xpath("//a[.='changing your country.']"))
        protractor_1.browser.sleep(200)

       
    });


    it('gender standard ',  function () {


        protractor_1.browser.get('https://open.spotify.com/Editprofiles') 
        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.xpath("//select[@id='profile_gender']"))
        
        
        protractor_1.browser.sleep(200)

       
    });


    it('date of birth standard ',  function () {


        protractor_1.browser.get('https://open.spotify.com/Editprofiles') 
        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.xpath("//select[@id='profile_birthdate_month']"))
        protractor_1.element(protractor_1.by.xpath("//select[@id='profile_birthdate_day']"))
        protractor_1.element(protractor_1.by.xpath("//select[@id='profile_birthdate_year']"))

        protractor_1.browser.sleep(200)

       
    });


    it('add mob number',  function () {


        protractor_1.browser.get('https://open.spotify.com/Editprofiles') 
        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.xpath("//input[@id='profile_mobile_number']"))
        

        protractor_1.browser.sleep(200)

       
    });


    it('Share my registration data with Spotifys content providers for marketing purpose button',  function () {


        protractor_1.browser.get('https://open.spotify.com/Editprofiles') 
        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.xpath("//label[containsShare my registration data with Spotify's content providers for marketing purpos")).click()
        protractor_1.browser.sleep(200)

       
    });


    it('Save Profile button',  function () {


        protractor_1.browser.get('https://open.spotify.com/Editprofiles') 
        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.xpath("//button[@id='profile_save_profile']")).click()
        protractor_1.browser.sleep(200)

       
    });


    it('Save Profile button',  function () {


        protractor_1.browser.get('Cancel') 
        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.xpath("//a[@id='profile_cancel']")).click()
        protractor_1.browser.sleep(200)

       
    });
    //a[@id='profile_cancel']




    

   

    


});