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
            protractor_2.browser.sleep(1500);
            playlist2.homeBtn.click();
            playlist2.chooseDemo1fromSideBar.click();
            protractor_2.browser.sleep(50);
            expect(yield playlist2.firstTrack.getText()).toContain("It's You");
            protractor_2.browser.sleep(50);
        });
    });
    it('Deleting song from Playlist Demo1.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            playlist2.chooseDemo1fromSideBar.click();
            protractor_2.browser.sleep(100);
            playlist2.trackOptions.click();
            protractor_2.browser.sleep(100);
            playlist2.removeSong.click();
            playlist2.chooseDemo1fromSideBar.click();
            protractor_2.browser.sleep(100);
            expect(yield playlist2.songAfterRemoved.getText()).not.toContain("It's You");
            protractor_2.browser.sleep(100);
        });
    });
    it('Delete playlist from your Library ', function () {
        return __awaiter(this, void 0, void 0, function* () {
            for (let index = 0; index < 1; index++) { // can be repeated to delete many playlists
                playlist2.clickYourLibrary();
                protractor_2.browser.sleep(100);
                playlist2.demo1.click();
                protractor_2.browser.sleep(500);
                playlist2.moreOptions1.click();
                protractor_2.browser.sleep(700);
                playlist2.deleteOption.click();
                expect(yield playlist2.deleteLogo.getText()).toContain('Do you really want to delete this playlist?');
                playlist2.deleteBtn.click();
                playlist2.backBtn.click();
                protractor_2.browser.sleep(100);
                playlist2.homeBtn.click();
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZFBsYXlsaXN0TWFuYWdlclRlc3QyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvZFBsYXlsaXN0TWFuYWdlclRlc3QyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQW1DO0FBQ25DLDZCQUE2QjtBQUM3QiwyQ0FBc0U7QUFDdEUsZ0RBQTRDO0FBQzVDLDRDQUF3QztBQUV4QyxvQ0FBb0M7QUFDcEMsUUFBUSxDQUFDLDhDQUE4QyxFQUFFO0lBQ3ZELE1BQU0sU0FBUyxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO0lBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksZUFBTSxFQUFFLENBQUE7SUFFNUIsVUFBVSxDQUFDO1FBQ1IsTUFBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0QyxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTs7WUFDN0MsMkNBQTJDO1lBQzNDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDekIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQ3hCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pCLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3RDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25CLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDMUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUM5QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUss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