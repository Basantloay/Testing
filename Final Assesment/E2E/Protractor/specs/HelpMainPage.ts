/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { browser, element, by, protractor, Browser } from 'protractor'
import { Playlist } from '../pages/Playlist'



describe('HelpMainPage',function(){
    protractor_1.browser.get('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');

    it('tests help button',function(){
        

        protractor_1.element(by.id('nav-link-help')).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');
       
    });
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
    it('tests search bar case 1',function(){
        protractor_1.by.xpath("//h1[.='How can we help you?']")
        protractor_1.element(protractor_1.by.id('search')).sendkeys('artist');
        if (protractor_1.element(protractor_1.by.xpath('protractor_1')).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=artist');
            protractor_1.by.xpath("//h2[.='Articles']")
            if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
                expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200')
        
        if (protractor_1.browser.actions().sendKeys(protractor.Key.ENTER).perform())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=artist');
            protractor_1.by.xpath("//h2[.='Articles']")
            if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
                expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200')
       
    });

    it('tests search bar case 2',function(){
        protractor_1.by.xpath("//h1[.='How can we help you?']")
        protractor_1.element(protractor_1.by.id('search')).sendkeys('playlist');
        if (protractor_1.element(protractor_1.by.xpath('protractor_1')).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=playlist');
            protractor_1.by.xpath("//h2[.='Articles']")
            if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
                expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200')
        
        if (protractor_1.browser.actions().sendKeys(protractor.Key.ENTER).perform())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=playlist');
            protractor_1.by.xpath("//h2[.='Articles']")
            if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
                expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200')
       
    });
    

    it('tests search bar case 3',function(){
        protractor_1.by.xpath("//h1[.='How can we help you?']")
        protractor_1.element(protractor_1.by.id('search')).sendkeys('album');
        if (protractor_1.element(protractor_1.by.xpath('protractor_1')).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=album');
            protractor_1.by.xpath("//h2[.='Articles']")
            if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
                expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200')
        
        if (protractor_1.browser.actions().sendKeys(protractor.Key.ENTER).perform())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=album');
            protractor_1.by.xpath("//h2[.='Articles']")
            if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
                expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200')
       
    });

    it('tests search bar case 4 (input empty space)',function(){
        protractor_1.by.xpath("//h1[.='How can we help you?']")
        protractor_1.element(protractor_1.by.id('search')).sendkeys(' ');
        if (protractor_1.element(protractor_1.by.xpath('protractor_1')).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=%20');
            protractor_1.by.xpath("//h3[.='No results found']")
            if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
                expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200')

        
        if (protractor_1.browser.actions().sendKeys(protractor.Key.ENTER).perform())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=%20');
            protractor_1.by.xpath("//h3[.='No results found']")
            if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
                expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200')
       
    });

    it('tests search bar case 5 (input dot)',function(){
        protractor_1.by.xpath("//h1[.='How can we help you?']")
        protractor_1.element(protractor_1.by.id('search')).sendkeys('.');
        if (protractor_1.element(protractor_1.by.xpath('protractor_1')).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=.');
            protractor_1.by.xpath("//h3[.='No results found']")
            if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
                expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200')
        
        if (protractor_1.browser.actions().sendKeys(protractor.Key.ENTER).perform())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=.');
            protractor_1.by.xpath("//h3[.='No results found']")
            if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
                expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200')
       
    });
    
    it('Cant log in button)',function(){
        protractor_1.element(protractor_1.by.css("div.top-solutions div:nth-of-type(1) > .hidden-xs "))
        protractor_1.element(protractor_1.by.css("a[data-ga-event-action='309']")).click()
        
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/cannot-log-in-to-spotify/?ref=in_top')

    
       
    });


    it('Reset your password button)',function(){
        protractor_1.element(protractor_1.by.css("div.top-solutions div:nth-of-type(2) > .hidden-xs "))
        protractor_1.element(protractor_1.by.css(" a[data-ga-event-action='295']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/change-password/?ref=in_top')
       
    });

    it('Finding accounts button)',function(){
        protractor_1.element(protractor_1.by.css("div.top-solutions div:nth-of-type(3) > .hidden-xs "))
        protractor_1.element(protractor_1.by.css("a[data-ga-event-action='307']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/do-i-have-an-additional-account/?ref=in_top')
       
    });

     it('Manage Payement Details button)',function(){
        protractor_1.element(protractor_1.by.css("div.top-solutions div:nth-of-type(4) > .hidden-xs "))
        protractor_1.element(protractor_1.by.css("a[data-ga-event-action='408']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/manage-payments/?ref=in_top')
    });


    it('Subscription Options button)',function(){
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(1) > .front-navigation__header "))
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/account_payment_help/subscription_options']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/')
    });


    it('Premium Family  button)',function(){
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(1) > .front-navigation__header "))
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/account_payment_help/premium_for_family']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/premium_for_family/')
    });


    it('Privacy and Security  button)',function(){
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(1) > .front-navigation__header "))
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/account_payment_help/privacy']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/')
    });


    it('Video Tutorials  button)',function(){
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(2) > .front-navigation__header"))
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/using_spotify/video_tutorials']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/using_spotify/video_tutorials/tutorial-videos/')
    });


    it('Getting Started  button)',function(){
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(2) > .front-navigation__header"))
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/using_spotify/getting_started']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/using_spotify/getting_started/')
    });


    it('Playlist  button)',function(){
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(2) > .front-navigation__header"))
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/using_spotify/playlists']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/using_spotify/playlists/')
    });

    it('Features button)',function(){
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(2) > .front-navigation__header"))
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/using_spotify/features']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/using_spotify/features/')
    });

    it('Playlist  button)',function(){
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(2) > .front-navigation__header"))
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/using_spotify/system_settings']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/using_spotify/system_settings/')
    });

    it('About button)',function(){
        
        protractor_1.element(protractor_1.by.css("a[data-ga-event-action='about']")).click()
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://www.spotify.com/eg-en/about-us/contact/?_ga=2.185347690.2105580048.1591620644-974573419.1582503200')
    });
    
    

    

   


    
    
    
    });
