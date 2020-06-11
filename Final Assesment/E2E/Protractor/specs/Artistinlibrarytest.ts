
//import { Playlist } from '../pages/Playlist';
var protractor_1 = require("protractor");

//import { browser, element, by, protractor, Browser } from 'protractor'
/**
* This Describe function for adding and deleting artist
* @param description  description of test name
* @param specDefinitions — Function for Jasmine to invoke that will define
*/
// eslint-disable-next-line no-undef


describe('AddinganddeletingartistPage',function(){
    /**
   *this before each function excutes getting browser and not waiting for angular to respond before every function 
   */

    beforeEach(function () {
        
        onPrepare: async () => {
        
            await protractor_1.browser.waitForAngularEnabled(false);
        }

        protractor_1.browser.ignoreSynchronization = true
        
        
        //protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/subscription_options/');
            
      })

    onPrepare: async () => {
    
        await protractor_1.browser.waitForAngularEnabled(false);
    }

     
    /**
   *this it function Test page scroll down
   */
    it('Test Artist Page Scroll Down',() => {
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


    it('Test Artist Page Scroll Up',() => {
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
        protractor_1.element(protractor_1.by.xpath("//a[.='Web Player']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe("https://open.spotify.com/")
       



        
      
       
    });
    /**
   *this it function Test open library then artist test
   */
    it('open library then artist test  ',  function () {

        protractor_1.browser.get('https://open.spotify.com/') 
        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.className('icon collection-icon')).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe("https://open.spotify.com/collection/playlists")
        protractor_1.element(protractor_1.by.className('_137ec408b14ac4ea5aec6ded3d95f328-scss be059487cfa7b71ee0f482c8e5be2b7e-scss')).click()
       
        protractor_1.browser.sleep(2000)

       
    });
    /**
   *this it function Test adding artist
   */


    it('add artist ',  function () {


        protractor_1.browser.get('https://open.spotify.com/collection/artists') 
        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.className('_8e9a0858c7c9d25c9b7193cd3acb12cf-scss _23106bd31c32e67dcd7330abd8664ec2-scss'))
        protractor_1.element(protractor_1.by.className('_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss _4a19a959428c34075eef50bd44ab468f-scss')).click()
        //expect(protractor_1.browser.getCurrentUrl()).toBe("https://open.spotify.com/search/Amr%20Diab")
        protractor_1.element(protractor_1.by.className('_2f8ed265fb69fb70c0c9afef329ae0b6-scss')).sendKeys('Amr Diab')
        expect(protractor_1.browser.getCurrentUrl()).toBe("https://open.spotify.com/search/Amr%20Diab")
        //protractor_1.element(protractor_1.by.className('_8490cd5262e3aefef6d3f963bcd886d2-scss')).click()
        protractor_1.browser.sleep(200)

       
    });

      /**
   *this it function Test following
   */

    it('follow artist ',  function () {


        protractor_1.browser.get('https://open.spotify.com/artist/5abSRg0xN1NV3gLbuvX24M') 
        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.className('b49b68b14a1771a4cb36313f2b350e84-scss')).click()
        protractor_1.browser.sleep(200)

       
    });


 /**
   *this it function verify artist  added
   */


    it('verify artist is added ',  function () {


        protractor_1.browser.get('https://open.spotify.com/collection/artists') 
        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.className('classf79dd23c27c3352da3ac3ba62d78f8ea-scss'))
        protractor_1.browser.sleep(200)

       
    });

    /**
   *this it function Test odelete artist
   */

    it('Delete artist',  function () {


        protractor_1.browser.get('https://open.spotify.com/collection/artists') 
        protractor_1.browser.sleep(2000)   
        protractor_1.browser.get('https://open.spotify.com/artist/5abSRg0xN1NV3gLbuvX24M') 
        protractor_1.element(protractor_1.by.className('b49b68b14a1771a4cb36313f2b350e84-scss _2b37b3630aee3cbfc97689b5af341d60-scss')).click()
        protractor_1.browser.sleep(200)

       
    });
    /**
   *this it function Test open library then artist test
   */


    it('Verify Artist is deleted',  function () {


        protractor_1.browser.get('https://open.spotify.com/collection/artists') 
        protractor_1.browser.sleep(2000)   
        protractor_1.element(protractor_1.by.className('b49b68b14a1771a4cb36313f2b350e84-scss _2b37b3630aee3cbfc97689b5af341d60-scss'))
        protractor_1.element(protractor_1.by.className('_8e9a0858c7c9d25c9b7193cd3acb12cf-scss _23106bd31c32e67dcd7330abd8664ec2-scss'))


       
    });

    


});