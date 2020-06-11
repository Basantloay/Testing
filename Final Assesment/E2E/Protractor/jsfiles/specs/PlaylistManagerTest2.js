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
const Playlist_1 = require("../pages/Playlist");
const search_1 = require("../pages/search");
// eslint-disable-next-line no-undef
describe('Adding and Deleting Songs from Playlist . \n', function () {
    const playlist2 = new Playlist_1.Playlist();
    const search2 = new search_1.Search();
    beforeEach(function () {
        global.isAngularSite(false);
    });
    it('Adding song and album to Playlist Demo1.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            // browser.get('https://open.spotify.com/')
            playlist2.homeBtn.click();
            protractor_2.browser.sleep(500);
            search2.clicksearchBtn();
            protractor_2.browser.sleep(50);
            search2.searchBar.sendKeys("it's you");
            protractor_2.browser.sleep(1500);
            search2.searchSong.click();
            protractor_2.browser.sleep(50);
            playlist2.albumOptions.click();
            protractor_2.browser.sleep(150);
            playlist2.albumAdd.click();
            protractor_2.browser.sleep(150);
            playlist2.addPlaylistIcon.click();
            protractor_2.browser.sleep(150);
            playlist2.homeBtn.click();
            playlist2.chooseDemo1fromSideBar.click();
            protractor_2.browser.sleep(50);
            expect(yield playlist2.firstTrack.getText()).toContain("It's You");
            protractor_2.browser.sleep(50);
        });
    });
    /* it('Deleting song from Playlist Demo1.', async function () {
       playlist2.chooseDemo1fromSideBar.click()
       browser.sleep(100)
       search2.clicksearchBtn()
       browser.sleep(50)
       search2.searchBar.sendKeys("it's you")
       browser.sleep(1500)
       search2.searchSong.click()
       browser.sleep(50)
       playlist2.albumOptions.click()
       browser.sleep(150)
       playlist2.albumAdd.click()
       browser.sleep(150)
       playlist2.addPlaylistIcon.click()
       browser.sleep(150)
       playlist2.homeBtn.click()
       playlist2.chooseDemo1fromSideBar.click()
       browser.sleep(50)
       expect<any>(await playlist2.firstTrack.getText()).toContain("It's You")
       browser.sleep(50)
     })*/
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RNYW5hZ2VyVGVzdDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9QbGF5bGlzdE1hbmFnZXJUZXN0Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0IsMkNBQXNFO0FBQ3RFLGdEQUE0QztBQUM1Qyw0Q0FBd0M7QUFFeEMsb0NBQW9DO0FBQ3BDLFFBQVEsQ0FBQyw4Q0FBOEMsRUFBRTtJQUN2RCxNQUFNLFNBQVMsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtJQUNoQyxNQUFNLE9BQU8sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFBO0lBRTVCLFVBQVUsQ0FBQztRQUNSLE1BQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEMsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsMENBQTBDLEVBQUU7O1lBQzdDLDJDQUEyQztZQUMzQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3pCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUN4QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNqQixPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN0QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNuQixPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQzFCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pCLFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDOUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUMxQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixTQUFTLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2pDLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDekIsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3hDLG9CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pCLE1BQU0sQ0FBTSxNQUFNLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdkUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDbkIsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW9CSztBQUNOLENBQUMsQ0FBQyxDQUFBIn0=