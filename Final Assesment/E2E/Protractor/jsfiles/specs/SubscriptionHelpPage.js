var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var protractor_1 = require("protractor");
//import { browser, element, by, protractor, Browser } from 'protractor'
describe('SubscriptionHelpPage', function () {
    beforeEach(function () {
        onPrepare: () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.waitForAngularEnabled(false);
        });
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/subscription_options/');
    });
    onPrepare: () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
    });
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/subscription_options/');
    it('Test Help Page Scroll Down', () => {
        onPrepare: () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.waitForAngularEnabled(false);
        });
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
    });
    it('Test Help Page Scroll Up', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
    });
    it('Search button', function () {
        protractor_1.element(protractor_1.by.css("div.wrap > .container > div > .search-icon-container > .svg-search-icon")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/');
        protractor_1.element(protractor_1.by.css("div.text-center > h1"));
        protractor_1.element(protractor_1.by.xpath("//input[@id='search']"));
        protractor_1.browser.sleep(100);
    });
    it('What subscriptions do you offer? button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"));
        protractor_1.element(protractor_1.by.xpath("//a[.='What subscriptions do you offer?']")).click();
        protractor_1.browser.sleep(100);
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/subscription-levels/');
        protractor_1.browser.sleep(100);
    });
    it('Premium button', () => {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"));
        protractor_1.browser.sleep(100);
        protractor_1.element(protractor_1.by.xpath("//a[.='Premium']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/spotify-premium/');
        protractor_1.browser.sleep(100);
    });
    it('Premium Family button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"));
        protractor_1.browser.sleep(100);
        protractor_1.element(protractor_1.by.xpath(" //a[@href='/eg-en/account_payment_help/subscription_options/premium-family/']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/premium-family/');
        protractor_1.browser.sleep(100);
    });
    it('Premium offers and discounts button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Premium offers and discounts']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/spotify-new-subscriber-offers/');
        protractor_1.browser.sleep(100);
    });
    it('Subscription status button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Subscription status']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/how-do-i-check-my-subscription-status/');
        protractor_1.browser.sleep(100);
    });
    it('Cancel button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Subscription Options']"));
        protractor_1.element(protractor_1.by.xpath("//a[.='Cancel']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/how-to-cancel-your-subscription/');
        protractor_1.element(protractor_1.by.xpath("//h1[@class='js-article-header']"));
        protractor_1.browser.sleep(100);
    });
    protractor_1.browser.sleep(1000);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uSGVscFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9TdWJzY3JpcHRpb25IZWxwUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsd0VBQXdFO0FBR3hFLFFBQVEsQ0FBQyxzQkFBc0IsRUFBQztJQUU1QixVQUFVLENBQUM7UUFFUCxTQUFTLEVBQUUsR0FBUyxFQUFFO1lBRWxCLE1BQU0sWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUEsQ0FBQTtRQUVELFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO1FBRWpELFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7SUFFM0csQ0FBQyxDQUFDLENBQUE7SUFFSixTQUFTLEVBQUUsR0FBUyxFQUFFO1FBRWxCLE1BQU0sWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUEsQ0FBQTtJQUVELFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO0lBRWpELFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7SUFHekcsRUFBRSxDQUFDLDRCQUE0QixFQUFDLEdBQUcsRUFBRTtRQUNqQyxTQUFTLEVBQUUsR0FBUyxFQUFFO1lBRWxCLE1BQU0sWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUEsQ0FBQTtRQUVELFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFH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