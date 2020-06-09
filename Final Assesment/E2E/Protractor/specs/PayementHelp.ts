import { browser, element, by, protractor, Browser } from 'protractor'
import { Playlist } from '../pages/Playlist

var protractor_1 = require("protractor");

describe('PayementHelptPage',function(){
    protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/payment_help//');
   
    it('Test PayementHelp Page Scroll Down',() => {
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function(){
            console.log('++++++SCROLLED Down+++++');
        });
    });


    it('Test PayementHelp Page Scroll Up',() => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });
    });


    it('Search PayementHelp button',function(){
    
        protractor_1.element(protractor_1.by.css("div.wrap > .container > div > .search-icon-container > .svg-search-icon")).click()
        
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/')
        protractor_1.element(protractor_1.by.css("div.text-center > h1"))
        protractor_1.element(protractor_1.by.xpath("//input[@id='search']"))
    


    
       
    });
    

    
    it(' Manage payment details button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"))
        protractor_1.element(protractor_1.by.xpath("//a[.='Manage payment details']")).click()
        
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/manage-payments/')

    
       
    });


    it('Payment methods button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='//a[.='Payment methods']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/payment-methods/')
       
    });
   


    it('Gift cards button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Gift cards']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/spotify-gift-cards/')
       
    });

    it('Protect your account button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Protect your account']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/protect-your-spotify-account/')
       
    });

    it('Unexpected charges button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Unexpected charges']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/unexpected-charges/')
       
    });


    it('Payment troubleshooting button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Payment troubleshooting']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/problems-paying-for-spotify-by-card/')
        
    });

    it('View your receipts button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='View your receipts']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/how-can-i-get-a-receipt-for-spotify/')
        
    });

    it('Why have I been charged for a free trial? button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Why have I been charged for a free trial?']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/small-charges/')
        
    });
    
    it('Does the price for Premium include tax? button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Does the price for Premium include tax?']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/sales-tax/')
        
    });
    
    it('Why have I been charged for a free trial? button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Why have I been charged for a free trial?']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/small-charges/')
        
    });
    

    
    it('Can I get a refund?? button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Can I get a refund?']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe(https://support.spotify.com/eg-en/account_payment_help/payment_help/refund-policy/')
        
    });
    
    it('Cancel button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Cancel']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/how-to-cancel-your-subscription/')
        
    });
    
     it('Contact Us button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Contact us']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/how-can-i-contact-spotify/')
        
    });


});
