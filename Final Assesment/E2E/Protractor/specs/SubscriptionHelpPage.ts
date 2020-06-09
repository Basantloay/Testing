import { browser, element, by, protractor, Browser } from 'protractor'
import { Playlist } from '../pages/Playlist'
var protractor_1 = require("protractor");

describe('SubscriptionHelpPage',function(){
    protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/subscription_options/');

   
    it('Test Help Page Scroll Down',() => {
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function(){
            console.log('++++++SCROLLED Down+++++');
        });
    });


    it('Test Help Page Scroll Up',() => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });
    });


    it('Search button',function(){
    
        protractor_1.element(protractor_1.by.css("div.wrap > .container > div > .search-icon-container > .svg-search-icon")).click()
        
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/')
        protractor_1.element(protractor_1.by.css("div.text-center > h1"))
        protractor_1.element(protractor_1.by.xpath("//input[@id='search']"))
    


    
       
    });
    

    
    it('What subscriptions do you offer? button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"))
        protractor_1.element(protractor_1.by.xpath("//a[.='What subscriptions do you offer?']")).click()
        
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/subscription-levels/')

    
       
    });



    it('Premium button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Premium']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/spotify-premium/')
       
    });
   


    it('Premium Family button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"))
        protractor_1.element(protractor_1.by.xpath(" //a[@href='/eg-en/account_payment_help/subscription_options/premium-family/']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/premium-family/')
       
    });

    it('Premium offers and discounts button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Premium offers and discounts']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/spotify-new-subscriber-offers/')
       
    });

    it('Subscription status button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Subscription status']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/how-do-i-check-my-subscription-status/')
       
    });


    it('Cancel button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='a[href='/eg-en/account_payment_help/subscription_options/how-to-cancel-your-subscription/']]")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/how-to-cancel-your-subscription/')
        protractor_1.element(protractor_1.by.xpath("//h1[@class='js-article-header']"))
    });


});
