"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('PrivacyandSecuritytPage', function () {
    protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/privacy/');
    it('Test PrivacyandSecurity Page Scroll Down', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
    });
    it('Test PrivacyandSecurity Page Scroll Up', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
    });
    it('Search button', function () {
        protractor_1.element(protractor_1.by.css("div.wrap > .container > div > .search-icon-container > .svg-search-icon")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/');
        protractor_1.element(protractor_1.by.css("div.text-center > h1"));
        protractor_1.element(protractor_1.by.xpath("//input[@id='search']"));
    });
    it(' Understanding my data button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"));
        protractor_1.element(protractor_1.by.xpath("//a[.='Understanding my data']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/data-rights-and-privacy-settings/');
    });
    it('Data rights and privacy settings button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Data rights and privacy settings']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/data-rights-and-privacy-settings/');
    });
    it('GDPR Article 15 Information button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='GDPR Article 15 Information']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/gdpr-article-15-information/');
    });
    it('Protect your account button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Protect your account']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/protect-your-spotify-account/');
    });
    it('Information you share with us button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Information you share with us']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/information-you-share-with-spotify/');
    });
    it('Is this Spotify email legit?', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Is this Spotify email legit?']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/suspicious-email/');
    });
    it('Report a playlist, image, or text', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Report a playlist, image, or text']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/report-a-playlist/');
    });
    it('Report music infringement', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Privacy & Security']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Report music infringement']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/report-content-infringement/');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpdmFjeWFuZFNlY3VyaXR5dEhlbHBQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvUHJpdmFjeWFuZFNlY3VyaXR5dEhlbHBQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXpDLFFBQVEsQ0FBQyx5QkFBeUIsRUFBQztJQUMvQixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO0lBRzVGLEVBQUUsQ0FBQywwQ0FBMEMsRUFBQyxHQUFHLEVBQUU7UUFDL0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsd0NBQXdDLEVBQUMsR0FBRyxFQUFFO1FBQzdDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLGVBQWUsRUFBQztRQUVmLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMseUVBQXlFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRTVILE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlFQUFpRSxDQUFDLENBQUE7UUFDcEgsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FB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