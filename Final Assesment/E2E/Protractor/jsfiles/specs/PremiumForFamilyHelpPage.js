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
/**
* This Describe PremiumForFamilyPage
* @param description  description of test name
* @param specDefinitions — Function for Jasmine to invoke that will define
*/
describe('PremiumForFamilyPage', function () {
    /**
   *this before each function excutes getting browser and not waiting for angular to respond before every function
   */
    beforeEach(function () {
        onPrepare: () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.waitForAngularEnabled(false);
        });
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/premium_for_family/');
    });
    onPrepare: () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
    });
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.get('https://support.spotify.com/eg-en/account_payment_help/premium_for_family/');
    /**
   *this it function Test page scroll down
   */
    it('Test  PremiumForFamily Page Scroll Down', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
    });
    /**
   *this it function Test page scroll up
   */
    it('Test PremiumForFamily Page Scroll Up', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
    });
    /**
   *Coming functions itest premium for family help buttons
   */
    it('Search PremiumForFamily button', function () {
        protractor_1.element(protractor_1.by.css("div.wrap > .container > div > .search-icon-container > .svg-search-icon")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/premium_for_family/');
        protractor_1.element(protractor_1.by.css("div.text-center > h1"));
        protractor_1.element(protractor_1.by.xpath("//input[@id='search']"));
    });
    it(' Losing access to Premium Family button ', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Premium Family']"));
        protractor_1.element(protractor_1.by.xpath("//a[.='Losing access to Premium Family']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/premium_for_family/premium-family-verification/');
    });
    it('Premium Family button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Premium Family']"));
        protractor_1.element(protractor_1.by.xpath(" //a[@href='/eg-en/account_payment_help/premium_for_family/premium-family/']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/premium_for_family/premium-family/');
    });
    it('Family Mix button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[.='Premium Family']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='Family Mix']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/premium_for_family/family-mix/');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlbWl1bUZvckZhbWlseUhlbHBQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvUHJlbWl1bUZvckZhbWlseUhlbHBQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV6Qzs7OztFQUlFO0FBRUYsUUFBUSxDQUFDLHNCQUFzQixFQUFDO0lBRTVCOztLQUVDO0lBR0QsVUFBVSxDQUFDO1FBRVAsU0FBUyxFQUFFLEdBQVMsRUFBRTtZQUVsQixNQUFNLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFBLENBQUE7UUFFRCxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQTtRQUVqRCxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO0lBRXpHLENBQUMsQ0FBQyxDQUFBO0lBRUosU0FBUyxFQUFFLEdBQVMsRUFBRTtRQUVsQixNQUFNLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFBLENBQUE7SUFFRCxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQTtJQUNqRCxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO0lBR3ZHOztLQUVDO0lBSUQsRUFBRSxDQUFDLHlDQUF5QyxFQUFDLEdBQUcsRUFBRTtRQUM5QyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUdIOztLQUVD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