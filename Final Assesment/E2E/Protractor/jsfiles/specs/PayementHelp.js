"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('PayementHelptPage', function () {
    protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/payment_help//');
    it('Test PayementHelp Page Scroll Down', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
    });
    it('Test PayementHelp Page Scroll Up', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
    });
    it('Search PayementHelp button', function () {
        protractor_1.element(protractor_1.by.css("div.wrap > .container > div > .search-icon-container > .svg-search-icon")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/');
        protractor_1.element(protractor_1.by.css("div.text-center > h1"));
        protractor_1.element(protractor_1.by.xpath("//input[@id='search']"));
    });
    it(' Manage payment details button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"));
        protractor_1.element(protractor_1.by.xpath("//a[.='Manage payment details']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/manage-payments/');
    });
    it('Payment methods button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='//a[.='Payment methods']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/payment-methods/');
    });
    it('Gift cards button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Gift cards']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/spotify-gift-cards/');
    });
    it('Protect your account button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Protect your account']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/protect-your-spotify-account/');
    });
    it('Unexpected charges button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Unexpected charges']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/unexpected-charges/');
    });
    it('Payment troubleshooting button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Payment troubleshooting']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/problems-paying-for-spotify-by-card/');
    });
    it('View your receipts button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='View your receipts']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/how-can-i-get-a-receipt-for-spotify/');
    });
    it('Why have I been charged for a free trial? button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Why have I been charged for a free trial?']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/small-charges/');
    });
    it('Does the price for Premium include tax? button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Does the price for Premium include tax?']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/sales-tax/');
    });
    it('Why have I been charged for a free trial? button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Why have I been charged for a free trial?']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/small-charges/');
    });
    it('Can I get a refund?? button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Can I get a refund?']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe(https); //support.spotify.com/eg-en/account_payment_help/payment_help/refund-policy/')
    });
    it('Cancel button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Cancel']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/how-to-cancel-your-subscription/');
    });
    it('Contact Us button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Payment Help']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Contact us']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/how-can-i-contact-spotify/');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5ZW1lbnRIZWxwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvUGF5ZW1lbnRIZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXpDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBQztJQUN6QixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO0lBRWxHLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBQyxHQUFHLEVBQUU7UUFDekMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsa0NBQWtDLEVBQUMsR0FBRyxFQUFFO1FBQ3ZDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLDRCQUE0QixFQUFDO1FBRTVCLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMseUVBQXlFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRTVILE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHNFQUFzRSxDQUFDLENBQUE7UUFDekgsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUE7UUFD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