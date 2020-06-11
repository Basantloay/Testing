

var protractor_1 = require("protractor");



describe('PremiumMainPage',function(){
    protractor_1.browser.get('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');

    it('tests Premium button',function(){
        

        protractor_1.element(protractor_1.by.id('nav-link-Premium')).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');
       
    });
    it('Test Premium Page Scroll Down',() => {
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function(){
            console.log('++++++SCROLLED Down+++++');
        });
    });



    it('login from premium user account test  ',  function () {
        protractor_1.browser.get('https://open.spotify.com/')
        protractor_1.browser.sleep(50)
        protractor_1.browser.get('https://accounts.spotify.com/en/login')
        var UsernameTextBox = protractor_1.element(protractor_1.by.id('login-username')).sendKeys('testinge2e220@gmail.com')
        protractor_1.browser.sleep(50)
        var PasswordTextBox = protractor_1.element(protractor_1.by.id('login-password')).sendKeys('E2E123456')
        protractor_1.browser.sleep(50)
        protractor_1.element(protractor_1.by.xpath("//button[@id='login-button']")).click()
        protractor_1.browser.sleep(2000)
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://accounts.spotify.com/en/status')
        protractor_1.element(protractor_1.by.xpath("//a[.='Web Player']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe("https://open.spotify.com/")
       
        
      
       
    });




    it('Test Premium Page Scroll Up',() => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });
    });

    it('Verifying that previous button can be clickkedd)',function(){
        protractor_1.element(protractor_1.by.css("div.top-solutions div:nth-of-type(3) > .hidden-xs "))
        protractor_1.element(protractor_1.by.className('control-button spoticon-skip-back-16')).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_Premium/account_Premium/do-i-have-an-additional-account/?ref=in_top')
       
    });


    it('Verifying that no ads will appear after playing or pressing next after 6 songs)',function(){
        
        protractor_1.element(protractor_1.by.className('control-button spoticon-skip-forward-16')).click()
        while(true)
            for (let index = 0; index < 7; index++) {
                protractor_1.element(protractor_1.by.className('control-button spoticon-skip-forward-16')).click()
                protractor_1.browser.sleep(100)
                index[7]==true
            } 
        
    });


    it('tests search bar case ',function(){
        protractor_1.by.xpath("//h1[.='How can we Premium you?']")
        protractor_1.element(protractor_1.by.id('search')).sendkeys('artist');
        if (protractor_1.element(protractor_1.by.xpath('protractor_1')).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=artist');
            protractor_1.by.xpath("//h2[.='Articles']")
            if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
                expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200')
        
        if (protractor_1.browser.actions().sendKeys(protractor_1.Key.ENTER).perform())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=artist');
            protractor_1.by.xpath("//h2[.='Articles']")
            if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
                expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200')
       
    });


    it('payement button)',function(){
        protractor_1.element(protractor_1.by.css("div.top-solutions div:nth-of-type(1) > .hidden-xs "))
        protractor_1.element(protractor_1.by.css("a[data-ga-event-action='309']")).click()
        
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_Premium/account_Premium/cannot-log-in-to-spotify/?ref=in_top')

    
       
    });


    it('card button button)',function(){
        protractor_1.element(protractor_1.by.css("div.top-solutions div:nth-of-type(2) > .hidden-xs "))
        protractor_1.element(protractor_1.by.css(" a[data-ga-event-action='295']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_Premium/account_Premium/change-password/?ref=in_top')
       
    });

    

     it('Manage Payement Details button)',function(){
        protractor_1.element(protractor_1.by.css("div.top-solutions div:nth-of-type(4) > .hidden-xs "))
        protractor_1.element(protractor_1.by.css("a[data-ga-event-action='408']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_Premium/payment_Premium/manage-payments/?ref=in_top')
    });


    it('Subscription Options button)',function(){
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(1) > .front-navigation__header "))
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/account_payment_Premium/subscription_options']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_Premium/subscription_options/')
    });


    it('Premium Family  button)',function(){
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(1) > .front-navigation__header "))
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/account_payment_Premium/premium_for_family']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_Premium/premium_for_family/')
    });


    it('Cancel Subscription  button)',function(){
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(1) > .front-navigation__header "))
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/account_payment_Premium/privacy']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_Premium/privacy/')
    });


    it('Getting Started  button)',function(){
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(2) > .front-navigation__header"))
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/using_spotify/getting_started']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/using_spotify/getting_started/')
    });



    it('Features button in subscription page)',function(){
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(2) > .front-navigation__header"))
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/using_spotify/features']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/using_spotify/features/')
    });


   


    
    
    
    });
