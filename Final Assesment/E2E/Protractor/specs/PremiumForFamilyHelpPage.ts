import { browser, element, by, protractor, Browser } from 'protractor'
import { Playlist } from '../pages/Playlist

]]var protractor_1 = require("protractor");

describe('PremiumForFamilyPage',function(){
    protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/premium_for_family/');

   
    it('Test  PremiumForFamily Page Scroll Down',() => {
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function(){
            console.log('++++++SCROLLED Down+++++');
        });
    });


    it('Test PremiumForFamily Page Scroll Up',() => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });
    });


    it('Search PremiumForFamily button',function(){
    
        protractor_1.element(protractor_1.by.css("div.wrap > .container > div > .search-icon-container > .svg-search-icon")).click()
        
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/premium_for_family/')
        protractor_1.element(protractor_1.by.css("div.text-center > h1"))
        protractor_1.element(protractor_1.by.xpath("//input[@id='search']"))
    


    
       
    });
    

    
    it(' Losing access to Premium Family button ',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Premium Family']"))
        protractor_1.element(protractor_1.by.xpath("//a[.='Losing access to Premium Family']")).click()
        
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/premium_for_family/premium-family-verification/')

    
       
    });
    
    
    


    it('Premium Family button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Premium Family']"))
        protractor_1.element(protractor_1.by.xpath(" //a[@href='/eg-en/account_payment_help/premium_for_family/premium-family/']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/premium_for_family/premium-family/')
       
    });
   


    it('Family Mix button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Premium Family']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Family Mix']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/premium_for_family/family-mix/')
       
    });

   


});
