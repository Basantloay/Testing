

var protractor_1 = require("protractor");

describe('PrivacyandSecuritytPage',function(){
    protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/privacy/');

   
    it('Test PrivacyandSecurity Page Scroll Down',() => {
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function(){
            console.log('++++++SCROLLED Down+++++');
        });
    });


    it('Test PrivacyandSecurity Page Scroll Up',() => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });
    });


    it('Search button',function(){
    
        protractor_1.element(protractor_1.by.css("div.wrap > .container > div > .search-icon-container > .svg-search-icon")).click()
        
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/')
        protractor_1.element(protractor_1.by.css("div.text-center > h1"))
        protractor_1.element(protractor_1.by.xpath("//input[@id='search']"))
    


    
       
    });
    

    
    it(' Understanding my data button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"))
        protractor_1.element(protractor_1.by.xpath("//a[.='Understanding my data']")).click()
        
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/data-rights-and-privacy-settings/')

    
       
    });



    it('Data rights and privacy settings button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Data rights and privacy settings']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/data-rights-and-privacy-settings/')
       
    });
   


    it('GDPR Article 15 Information button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='GDPR Article 15 Information']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/gdpr-article-15-information/')
       
    });

    it('Protect your account button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Protect your account']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/protect-your-spotify-account/')
       
    });

    it('Information you share with us button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Information you share with us']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/information-you-share-with-spotify/')
       
    });


    it('Is this Spotify email legit?',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Is this Spotify email legit?']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/suspicious-email/')
        
    });

    it('Report a playlist, image, or text',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Report a playlist, image, or text']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/report-a-playlist/')
        
    });

    it('Report music infringement',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Report music infringement']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/report-content-infringement/')
        
    });


});
