"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const protractor_2 = require("protractor");
const search_1 = require("../pages/search");
// eslint-disable-next-line no-undef
describe('searching for songs and artist . \n', function () {
    const search1 = new search_1.Search();
    beforeEach(function () {
        global.isAngularSite(false);
    });
    it('Search for  album and play a song', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.get('https://open.spotify.com/');
            protractor_2.browser.sleep(500);
            search1.clicksearchBtn();
            protractor_2.browser.sleep(50);
            search1.searchBar.sendKeys('Freedom ');
            protractor_2.browser.sleep(1000);
            search1.searchSong.click();
            protractor_2.browser.sleep(50);
            expect(yield search1.Logo.getText()).toContain('Freedom');
            protractor_2.browser.sleep(1500);
            search1.pauseBtn.click();
        });
    });
    it('Search for Song and play it in its album', function () {
        return __awaiter(this, void 0, void 0, function* () {
            // browser.get('https://open.spotify.com/')
            search1.homeBtn.click();
            protractor_2.browser.sleep(500);
            search1.clicksearchBtn();
            protractor_2.browser.sleep(50);
            search1.searchBar.sendKeys("it's you");
            protractor_2.browser.sleep(1000);
            search1.searchSong.click();
            protractor_2.browser.sleep(50);
            expect(yield search1.Logo.getText()).toContain('YOU');
            protractor_2.browser.sleep(2000);
            search1.pauseBtn.click();
        });
    });
    it('Search for Artist', function () {
        return __awaiter(this, void 0, void 0, function* () {
            search1.homeBtn.click();
            protractor_2.browser.sleep(500);
            search1.clicksearchBtn();
            protractor_2.browser.sleep(50);
            search1.searchBar.sendKeys('ali gatie ');
            protractor_2.browser.sleep(1500);
            search1.searchArtist.click();
            protractor_2.browser.sleep(50);
            expect(yield search1.Logo.getText()).toContain('Ali Gatie');
            protractor_2.browser.sleep(1000);
        });
    });
    it('Show Recent Searches ', function () {
        return __awaiter(this, void 0, void 0, function* () {
            search1.homeBtn.click();
            protractor_2.browser.sleep(500);
            search1.clicksearchBtn();
            protractor_2.browser.sleep(50);
            // search1.seeAllSearches.click()
            expect(yield search1.recentSearch.getText()).toContain('Recent searches');
            protractor_2.browser.sleep(100);
            search1.recentSearch.click();
            expect(yield search1.lastSearch.getText()).toContain('Ali Gatie');
            protractor_2.browser.sleep(100);
            expect(yield search1.secondSearch.getText()).toContain("It's You");
            protractor_2.browser.sleep(100);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnNlYXJjaFRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9ic2VhcmNoVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0IsMkNBQXNFO0FBQ3RFLDRDQUF3QztBQUV4QyxvQ0FBb0M7QUFDcEMsUUFBUSxDQUFDLHFDQUFxQyxFQUFFO0lBQzlDLE1BQU0sT0FBTyxHQUFHLElBQUksZUFBTSxFQUFFLENBQUE7SUFFNUIsVUFBVSxDQUFDO1FBQ1IsTUFBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0QyxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRTs7WUFDdEMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtZQUN4QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixPQUFPLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDeEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbkIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUMxQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNqQixNQUFNLENBQU0sTUFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQzlELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25CLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDMUIsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUNG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