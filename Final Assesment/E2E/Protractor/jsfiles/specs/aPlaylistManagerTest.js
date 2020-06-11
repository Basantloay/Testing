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
// import { log4jsconf } from '../log4jsconf'
// eslint-disable-next-line no-undef
describe('PlayLists creating and Deleting tests. \n', function () {
    const playlist1 = new Playlist_1.Playlist();
    beforeEach(function () {
        global.isAngularSite(false);
    });
    it('login test  ', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_2.browser.get('https://open.spotify.com/');
            protractor_2.browser.sleep(50);
            playlist1.clickLogin();
            protractor_2.browser.sleep(50);
            playlist1.UsernameTextBox.sendKeys(playlist1.User1Mail);
            playlist1.PasswordTextBox.sendKeys(playlist1.User1Password);
            // playlist1.clickRemember()
            playlist1.clickLog();
            protractor_2.browser.sleep(20);
            playlist1.clickonUserIcon();
            protractor_2.browser.sleep(20);
            expect(yield playlist1.userIcon.getAttribute('title')).toContain('Testing Demo');
        });
    });
    it('Create First Playlist from Your Library ', function () {
        return __awaiter(this, void 0, void 0, function* () {
            playlist1.clickYourLibrary();
            protractor_2.browser.sleep(100);
            expect(yield playlist1.Logo.getText()).toContain('Create your first playlist');
            playlist1.clickCreateYourPlaylistLibrary();
            playlist1.playlistNameTextBox.sendKeys('first playlist');
            playlist1.clickCreate();
            protractor_2.browser.sleep(200);
            playlist1.backBtn.click();
            playlist1.demo1.click();
            protractor_2.browser.sleep(500);
            expect(yield playlist1.Logo.getText()).toContain('first playlist');
            playlist1.backBtn.click();
            playlist1.backBtn.click();
        });
    });
    it('Delete playlist from your Library ', function () {
        return __awaiter(this, void 0, void 0, function* () {
            for (let index = 0; index < 1; index++) { // can be repeated to delete many playlists
                playlist1.clickYourLibrary();
                protractor_2.browser.sleep(100);
                playlist1.demo1.click();
                protractor_2.browser.sleep(500);
                playlist1.moreOptions1.click();
                protractor_2.browser.sleep(700);
                playlist1.deleteOption.click();
                expect(yield playlist1.deleteLogo.getText()).toContain('Do you really want to delete this playlist?');
                playlist1.deleteBtn.click();
                playlist1.backBtn.click();
                protractor_2.browser.sleep(100);
                playlist1.homeBtn.click();
            }
        });
    });
    // shouldn't create 2 playlist of same name
    it('Create Demo1 Playlist from Create playlist in Home ', function () {
        return __awaiter(this, void 0, void 0, function* () {
            // browser.refresh()
            let flag = false;
            for (let index = 0; index < 2; index++) {
                playlist1.createPlaylistHomeBtn.click();
                protractor_2.browser.sleep(100);
                expect(yield playlist1.Logo2.getText()).toContain('Create new playlist');
                playlist1.playlistNameTextBox.sendKeys('Demo1');
                playlist1.clickCreate();
                protractor_2.browser.sleep(1200);
                expect(yield playlist1.Logo.getText()).toContain('Demo1');
                playlist1.backBtn.click();
                index === 1 ? flag = true : flag = false;
            }
            if (flag) {
                // console.log('NOT allowed to have 2 playlists of same name')
                playlist1.clickYourLibrary();
                protractor_2.browser.sleep(100);
                playlist1.demo1.click();
                protractor_2.browser.sleep(500);
                playlist1.moreOptions1.click();
                protractor_2.browser.sleep(700);
                playlist1.deleteOption.click();
                expect(yield playlist1.deleteLogo.getText()).toContain('Do you really want to delete this playlist?');
                playlist1.deleteBtn.click();
                protractor_2.browser.sleep(100);
                playlist1.backBtn.click();
                protractor_2.browser.sleep(100);
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYVBsYXlsaXN0TWFuYWdlclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9hUGxheWxpc3RNYW5hZ2VyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0IsMkNBQXNFO0FBQ3RFLGdEQUE0QztBQUM1Qyw2Q0FBNkM7QUFDN0Msb0NBQW9DO0FBQ3BDLFFBQVEsQ0FBQywyQ0FBMkMsRUFBRTtJQUNwRCxNQUFNLFNBQVMsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtJQUVoQyxVQUFVLENBQUM7UUFDUixNQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3RDLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGNBQWMsRUFBRTs7WUFDakIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtZQUN4QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNqQixTQUFTLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDdEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsU0FBUyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3ZELFNBQVMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUMzRCw0QkFBNEI7WUFDNUIsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQ3BCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pCLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtZQUMzQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNqQixNQUFNLENBQU0sTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FB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