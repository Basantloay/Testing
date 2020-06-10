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
const protractor_1 = require("protractor");
const Playlist_1 = require("../pages/Playlist");
// import { log4jsconf } from '../log4jsconf'
// eslint-disable-next-line no-undef
describe('PlayList Testscript ', function () {
    const playlist1 = new Playlist_1.Playlist();
    beforeEach(function () {
        global.isAngularSite(false);
    });
    it('login test  ', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.get('https://open.spotify.com/');
            protractor_1.browser.sleep(50);
            playlist1.clickLogin();
            protractor_1.browser.sleep(50);
            playlist1.UsernameTextBox.sendKeys(playlist1.User1Mail);
            playlist1.PasswordTextBox.sendKeys(playlist1.User1Password);
            // playlist1.clickRemember()
            playlist1.clickLog();
            protractor_1.browser.sleep(20);
            playlist1.clickonUserIcon();
            protractor_1.browser.sleep(20);
            expect(yield playlist1.userIcon.getAttribute('title')).toContain('Testing Demo');
        });
    });
    /* it('Create First Playlist from Your Library ', async function () {
      playlist1.clickYourLibrary()
      browser.sleep(100)
      expect<any>(await playlist1.Logo.getText()).toContain('Create your first playlist')
      playlist1.clickCreateYourPlaylistLibrary()
      playlist1.playlistNameTextBox.sendKeys('first playlist')
      playlist1.clickCreate()
      browser.sleep(200)
      playlist1.backBtn.click()
      playlist1.demo1.click()
      browser.sleep(500)
      expect<any>(await playlist1.Logo.getText()).toContain('first playlist')
      playlist1.backBtn.click()
      playlist1.backBtn.click()
    })
  */
    it('Delete playlist from your Library ', function () {
        return __awaiter(this, void 0, void 0, function* () {
            for (let index = 0; index < 2; index++) {
                playlist1.clickYourLibrary();
                protractor_1.browser.sleep(100);
                playlist1.demo1.click();
                protractor_1.browser.sleep(500);
                playlist1.moreOptions1.click();
                protractor_1.browser.sleep(700);
                playlist1.deleteOption.click();
                expect(yield playlist1.deleteLogo.getText()).toContain('Do you really want to delete this playlist?');
                playlist1.deleteBtn.click();
                playlist1.backBtn.click();
                protractor_1.browser.sleep(100);
            }
        });
    });
    // shouldn't create 2 playlist of same name
    it('Create Demo1 Playlist from Create playlist in Home ', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let flag = false;
            for (let index = 0; index < 2; index++) {
                playlist1.createPlaylistHomeBtn.click();
                protractor_1.browser.sleep(100);
                expect(yield playlist1.Logo2.getText()).toContain('Create new playlist');
                playlist1.playlistNameTextBox.sendKeys('Demo1');
                playlist1.clickCreate();
                protractor_1.browser.sleep(200);
                expect(yield playlist1.Logo.getText()).toContain('Demo1');
                playlist1.backBtn.click();
                index === 1 ? flag = true : flag = false;
            }
            if (flag) {
                console.log('NOT allowed to have 2 playlists of same name');
                playlist1.clickYourLibrary();
                protractor_1.browser.sleep(100);
                playlist1.demo1.click();
                protractor_1.browser.sleep(500);
                playlist1.moreOptions1.click();
                protractor_1.browser.sleep(500);
                playlist1.deleteOption.click();
                expect(yield playlist1.deleteLogo.getText()).toContain('Do you really want to delete this playlist?');
                playlist1.deleteBtn.click();
                playlist1.backBtn.click();
                protractor_1.browser.sleep(100);
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RNYW5hZ2VyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL1BsYXlsaXN0TWFuYWdlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCLDJDQUFzRTtBQUN0RSxnREFBNEM7QUFDNUMsNkNBQTZDO0FBQzdDLG9DQUFvQztBQUNwQyxRQUFRLENBQUMsc0JBQXNCLEVBQUU7SUFDL0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7SUFFaEMsVUFBVSxDQUFDO1FBQ1IsTUFBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0QyxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxjQUFjLEVBQUU7O1lBQ2pCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7WUFDeEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFBO1lBQ3RCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pCLFNBQVMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN2RCxTQUFTLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDM0QsNEJBQTRCO1lBQzVCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUNwQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNqQixTQUFTLENBQUMsZUFBZSxFQUFFLENBQUE7WUFDM0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsTUFBTSxDQUFNLE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMs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