
var protractor_1 = require("protractor");
/**
* This Describe PremiumForFamilyPage
* @param description  description of test name
* @param specDefinitions — Function for Jasmine to invoke that will define
*/


describe('SubscriptionHelpPage',function(){

    /**
   *this before each function excutes getting browser and not waiting for angular to respond before every function 
   */

    beforeEach(function () {
        
        onPrepare: async () => {
        
            await protractor_1.browser.waitForAngularEnabled(false);
        }

        protractor_1.browser.ignoreSynchronization = true
        
        protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/subscription_options/');
            
      })

    onPrepare: async () => {
    
        await protractor_1.browser.waitForAngularEnabled(false);
    }

    protractor_1.browser.ignoreSynchronization = true
      
    protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/subscription_options/');


    /**
   *this it function Test page scroll down
   */

   
    it('Test Help Page Scroll Down',() => {
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


    it('Test Help Page Scroll Up',() => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });
    });



    /**
   *this it function search button
   */


    it('Search button',function(){
    
        protractor_1.element(protractor_1.by.css("div.wrap > .container > div > .search-icon-container > .svg-search-icon")).click()
        
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/')
        protractor_1.element(protractor_1.by.css("div.text-center > h1"))
        protractor_1.element(protractor_1.by.xpath("//input[@id='search']"))
        protractor_1.browser.sleep(100);
    });
      
    /**
   *coming functions test subscription buttons
   */

    
    it('What subscriptions do you offer? button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"))
        protractor_1.element(protractor_1.by.xpath("//a[.='What subscriptions do you offer?']")).click()
        protractor_1.browser.sleep(100);
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/subscription-levels/')
        protractor_1.browser.sleep(100);
    
       
    });



    it('Premium button',() => {
        

        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"))
        protractor_1.browser.sleep(100);
        protractor_1.element(protractor_1.by.xpath("//a[.='Premium']")).click()

        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/spotify-premium/')
        protractor_1.browser.sleep(100);
    });
   


    it('Premium Family button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"))
        protractor_1.browser.sleep(100);
        
        protractor_1.element(protractor_1.by.xpath(" //a[@href='/eg-en/account_payment_help/subscription_options/premium-family/']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/premium-family/')
        protractor_1.browser.sleep(100);
    });

    it('Premium offers and discounts button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Premium offers and discounts']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/spotify-new-subscriber-offers/')
        protractor_1.browser.sleep(100);
    });

    it('Subscription status button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Subscription status']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/how-do-i-check-my-subscription-status/')
        protractor_1.browser.sleep(100);
    });


    it('Cancel button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"))
        protractor_1.element(protractor_1.by.xpath("//a[.='Cancel']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/how-to-cancel-your-subscription/')
        protractor_1.element(protractor_1.by.xpath("//h1[@class='js-article-header']"))
        protractor_1.browser.sleep(100);
    });

    protractor_1.browser.sleep(1000);
    


});