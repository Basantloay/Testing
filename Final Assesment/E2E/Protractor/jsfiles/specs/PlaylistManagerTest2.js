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
// eslint-disable-next-line no-undef
describe('Adding and Deleting Songs from Playlist . \n', function () {
    const playlist2 = new Playlist_1.Playlist();
    beforeEach(function () {
        global.isAngularSite(false);
    });
    it('Adding song and album to Playlist Demo1.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.get('https://open.spotify.com/');
            protractor_1.browser.sleep(500);
            playlist2.firstAlbum.click();
            protractor_1.browser.sleep(50);
            playlist2.moreOptions1.click();
            protractor_1.browser.sleep(100);
            // playlist2.firstSong.click()
            /*browser.sleep(50)
            playlist2.songOptions.click()// it'syou
             browser.sleep(200)*/
            playlist2.addToPlaylist.click();
            protractor_1.browser.sleep(50);
            playlist2.addPlaylistIcon.click();
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
   /*
     it('Delete playlist from your Library ', async function () {
       for (let index = 0; index < 1; index++) { // can be repeated to delete many playlists
         playlist1.clickYourLibrary()
         browser.sleep(100)
         playlist1.demo1.click()
         browser.sleep(500)
         playlist1.moreOptions1.click()
         browser.sleep(700)
         playlist1.deleteOption.click()
         expect<any>(await playlist1.deleteLogo.getText()).toContain('Do you really want to delete this playlist?')
         playlist1.deleteBtn.click()
         playlist1.backBtn.click()
         browser.sleep(100)
       }
     })
     // shouldn't create 2 playlist of same name
     it('Create Demo1 Playlist from Create playlist in Home ', async function () {
       let flag : boolean = false
       for (let index = 0; index < 2; index++) {
         playlist1.createPlaylistHomeBtn.click()
         browser.sleep(100)
         expect<any>(await playlist1.Logo2.getText()).toContain('Create new playlist')
         playlist1.playlistNameTextBox.sendKeys('Demo1')
         playlist1.clickCreate()
         browser.sleep(200)
         expect<any>(await playlist1.Logo.getText()).toContain('Demo1')
         playlist1.backBtn.click()
         index === 1 ? flag = true : flag = false
       }
       if (flag) {
         // console.log('NOT allowed to have 2 playlists of same name')
         playlist1.clickYourLibrary()
         browser.sleep(100)
         playlist1.demo1.click()
         browser.sleep(500)
         playlist1.moreOptions1.click()
         browser.sleep(700)
         playlist1.deleteOption.click()
         expect<any>(await playlist1.deleteLogo.getText()).toContain('Do you really want to delete this playlist?')
         playlist1.deleteBtn.click()
         browser.sleep(100)
         playlist1.backBtn.click()
         browser.sleep(100)
       }
     })*/
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RNYW5hZ2VyVGVzdDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9QbGF5bGlzdE1hbmFnZXJUZXN0Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0IsMkNBQXNFO0FBQ3RFLGdEQUE0QztBQUU1QyxvQ0FBb0M7QUFDcEMsUUFBUSxDQUFDLDhDQUE4QyxFQUFFO0lBQ3ZELE1BQU0sU0FBUyxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO0lBRWhDLFVBQVUsQ0FBQztRQUNSLE1BQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEMsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsMENBQTBDLEVBQUU7O1lBQzdDLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7WUFDeEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUM1QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNqQixTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQzlCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLDhCQUE4QjtZQUM5Qjs7aUNBRXFCO1lBQ3JCLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDL0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsU0FBUyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNuQyxDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTRESztBQUNOLENBQUMsQ0FBQyxDQUFBIn0=