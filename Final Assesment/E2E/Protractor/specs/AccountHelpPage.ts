var protractor_1 = require("protractor");

describe('AccountHelpPage',function(){
    protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/account_help/');

   
    it('Test AccountHelpPage Scroll Down',() => {
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function(){
            console.log('++++++SCROLLED Down+++++');
        });
    });


    it('Test AccountHelpPage Scroll Up',() => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });
    });


    it('Search AccountHelpPage button',function(){
    
        protractor_1.element(protractor_1.by.css("div.wrap > .container > div > .search-icon-container > .svg-search-icon")).click()
        
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/')
        protractor_1.element(protractor_1.by.css("div.text-center > h1"))
        protractor_1.element(protractor_1.by.xpath("//input[@id='search']"))
    


    
       
    });
    

    
    it('Cant log in button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath("//a[.='Can't log in']")).click()
        
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/cannot-log-in-to-spotify/')

    
       
    });
    

    it('Spotify and Facebook button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Spotify and Facebook']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/using-spotify-with-facebook/')
       
    });
   


    it('Reset your password button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Reset your password']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/change-password/')
       
    });

    it('Country settings button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Country settings']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/how-can-i-change-my-country-setting/')
       
    });

    it('Username and display name button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Username and display name']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/change-my-username/')
       
    });


    it('Profile picture button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Profile picture']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/profile-picture/')
        
    });

    it('Manage your personal details button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Manage your personal details']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/edit-your-profile/')
        
    });

    it('How to log out button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='How to log out']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/how-to-log-out/')
        
    });

    it('Sign in with Apple button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Sign in with Apple']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/sign-in-with-apple/')
       
    });
   
  

    it('Finding accounts button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[@href='Finding accounts']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/do-i-have-an-additional-account/')
       
    });

   

    it('Manage notifications button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Manage notifications']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/how-to-get-notifications/')
       
    });


    it('Cant activate Premium trial button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Can't activate Premium trial]")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/cannot-activate-trial/')
        
    });

    
    it(' Spotify and Samsung button ',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath("//a[.='Spotify and Samsung']")).click()
        
        expect(protractor_1.browser.getCurrentUrl()).toBe('hhttps://support.spotify.com/eg-en/account_payment_help/account_help/samsung-and-spotify/')

    
       
    });
    
    


    it('Why isnt my Premium working? button',function(){


        protractor_1.element(protractor_1.by.xpath(" Account Help']"))
        protractor_1.element(protractor_1.by.xpath("//a[.='Why isn't my Premium working?']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/i-pay-for-premium-why-am-i-on-free/')
       
    });
   


    it('Why has my account been disabled? button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Why has my account been disabled?']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/why-has-my-account-been-disabled/')
       
    });

    it('My accounts been taken over button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='My account's been taken over']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/someone-has-gained-access-to-my-account/')
       
    });

    
    
    
    it('Can I use Spotify at my business or school? button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Can I use Spotify at my business or school?']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/use-spotify-in-my-bar-restaurant-store-school-etc/')
       
    });

    it('Close your account button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Close your account']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/close-account/')
       
    });

    it('Contact us button',function(){
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"))
        protractor_1.element(protractor_1.by.xpath(" //a[.='Contact us status']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/how-can-i-contact-spotify/')
       
    });




});