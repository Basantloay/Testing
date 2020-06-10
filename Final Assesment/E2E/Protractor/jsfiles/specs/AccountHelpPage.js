"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('AccountHelpPage', function () {
    protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/account_help/');
    it('Test AccountHelpPage Scroll Down', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
    });
    it('Test AccountHelpPage Scroll Up', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
    });
    it('Search AccountHelpPage button', function () {
        protractor_1.element(protractor_1.by.css("div.wrap > .container > div > .search-icon-container > .svg-search-icon")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/');
        protractor_1.element(protractor_1.by.css("div.text-center > h1"));
        protractor_1.element(protractor_1.by.xpath("//input[@id='search']"));
    });
    it('Cant log in button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath("//a[.='Can't log in']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/cannot-log-in-to-spotify/');
    });
    it('Spotify and Facebook button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Spotify and Facebook']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/using-spotify-with-facebook/');
    });
    it('Reset your password button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Reset your password']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/change-password/');
    });
    it('Country settings button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Country settings']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/how-can-i-change-my-country-setting/');
    });
    it('Username and display name button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Username and display name']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/change-my-username/');
    });
    it('Profile picture button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Profile picture']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/profile-picture/');
    });
    it('Manage your personal details button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Manage your personal details']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/edit-your-profile/');
    });
    it('How to log out button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='How to log out']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/how-to-log-out/');
    });
    it('Sign in with Apple button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Sign in with Apple']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/sign-in-with-apple/');
    });
    it('Finding accounts button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[@href='Finding accounts']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/do-i-have-an-additional-account/');
    });
    it('Manage notifications button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Manage notifications']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/how-to-get-notifications/');
    });
    it('Cant activate Premium trial button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Can't activate Premium trial]")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/cannot-activate-trial/');
    });
    it(' Spotify and Samsung button ', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath("//a[.='Spotify and Samsung']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('hhttps://support.spotify.com/eg-en/account_payment_help/account_help/samsung-and-spotify/');
    });
    it('Why isnt my Premium working? button', function () {
        protractor_1.element(protractor_1.by.xpath(" Account Help']"));
        protractor_1.element(protractor_1.by.xpath("//a[.='Why isn't my Premium working?']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/i-pay-for-premium-why-am-i-on-free/');
    });
    it('Why has my account been disabled? button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Why has my account been disabled?']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/why-has-my-account-been-disabled/');
    });
    it('My accounts been taken over button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='My account's been taken over']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/someone-has-gained-access-to-my-account/');
    });
    it('Can I use Spotify at my business or school? button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Can I use Spotify at my business or school?']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/use-spotify-in-my-bar-restaurant-store-school-etc/');
    });
    it('Close your account button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Close your account']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/close-account/');
    });
    it('Contact us button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Account Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Contact us status']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/how-can-i-contact-spotify/');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudEhlbHBQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvQWNjb3VudEhlbHBQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXpDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBQztJQUN2QixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO0lBR2pHLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBQyxHQUFHLEVBQUU7UUFDdkMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUMsR0FBRyxFQUFFO1FBQ3JDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLCtCQUErQixFQUFDO1FBRS9CLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMseUVBQXlFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRTVILE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHNFQUFzRSxDQUFDLENBQUE7UUFDekgsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENB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