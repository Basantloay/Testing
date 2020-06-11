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
            protractor_2.browser.sleep(2000);
            search1.searchSong.click();
            protractor_2.browser.sleep(50);
            expect(yield search1.Logo.getText()).toContain('Freedom');
            protractor_2.browser.sleep(2000);
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
            protractor_2.browser.sleep(1500);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL3NlYXJjaFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCLDJDQUFzRTtBQUN0RSw0Q0FBd0M7QUFFeEMsb0NBQW9DO0FBQ3BDLFFBQVEsQ0FBQyxxQ0FBcUMsRUFBRTtJQUM5QyxNQUFNLE9BQU8sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFBO0lBRTVCLFVBQVUsQ0FBQztRQUNSLE1BQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEMsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsbUNBQW1DLEVBQUU7O1lBQ3RDLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7WUFDeEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQ3hCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pCLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3RDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25CLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDMUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsTUFBTSxDQUFNLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUM5RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNuQixPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzFCLENBQUM7S0FBQSxDQUFDLENBQUE7SUFDRixF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