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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RNYW5hZ2VyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL1BsYXlsaXN0TWFuYWdlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCLDJDQUFzRTtBQUN0RSxnREFBNEM7QUFDNUMsNkNBQTZDO0FBQzdDLG9DQUFvQztBQUNwQyxRQUFRLENBQUMsMkNBQTJDLEVBQUU7SUFDcEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7SUFFaEMsVUFBVSxDQUFDO1FBQ1IsTUFBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0QyxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxjQUFjLEVBQUU7O1lBQ2pCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7WUFDeEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFBO1lBQ3RCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pCLFNBQVMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN2RCxTQUFTLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDM0QsNEJBQTRCO1lBQzVCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUNwQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNqQixTQUFTLENBQUMsZUFBZSxFQUFFLENBQUE7WUFDM0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsTUFBTSxDQUFNLE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMs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