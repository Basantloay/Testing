"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('SubscriptionHelpPage', function () {
    protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/subscription_options/');
    it('Test SubscriptionHelpPage Scroll Down', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
    });
    it('Test SubscriptionHelp Page Scroll Up', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
    });
    it('Search button', function () {
        protractor_1.element(protractor_1.by.css("div.wrap > .container > div > .search-icon-container > .svg-search-icon")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/');
        protractor_1.element(protractor_1.by.css("div.text-center > h1"));
        protractor_1.element(protractor_1.by.xpath("//input[@id='search']"));
    });
    it('What subscriptions do you offer? button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"));
        protractor_1.element(protractor_1.by.xpath("//a[.='What subscriptions do you offer?']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/subscription-levels/');
    });
    it('Premium button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Premium']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/spotify-premium/');
    });
    it('Premium Family button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"));
        protractor_1.element(protractor_1.by.xpath(" //a[@href='/eg-en/account_payment_help/subscription_options/premium-family/']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/premium-family/');
    });
    it('Premium offers and discounts button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Premium offers and discounts']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/spotify-new-subscriber-offers/');
    });
    it('Subscription status button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Subscription status']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/how-do-i-check-my-subscription-status/');
    });
    it('Cancel button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='a[href='/eg-en/account_payment_help/subscription_options/how-to-cancel-your-subscription/']]")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/how-to-cancel-your-subscription/');
        protractor_1.element(protractor_1.by.xpath("//h1[@class='js-article-header']"));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uSGVscFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9TdWJzY3JpcHRpb25IZWxwUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV6QyxRQUFRLENBQUMsc0JBQXNCLEVBQUM7SUFDNUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEVBQThFLENBQUMsQ0FBQztJQUd6RyxFQUFFLENBQUMsdUNBQXVDLEVBQUMsR0FBRyxFQUFFO1FBQzVDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLHNDQUFzQyxFQUFDLEdBQUcsRUFBRTtRQUMzQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQyxlQUFlLEVBQUM7UUFFZixZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLHlFQUF5RSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUU1SCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyw4RUFBOEUsQ0FBQyxDQUFBO1FBQ2pJLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMs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