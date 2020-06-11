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
const search_1 = require("../pages/search");
// eslint-disable-next-line no-undef
describe('searching for songs and artist . \n', function () {
    const search1 = new search_1.Search();
    beforeEach(function () {
        global.isAngularSite(false);
    });
    it('Search for Song and open it', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.get('https://open.spotify.com/');
            protractor_1.browser.sleep(500);
            search1.clicksearchBtn();
            protractor_1.browser.sleep(50);
            search1.searchBar.sendKeys("it's you");
            protractor_1.browser.sleep(500);
            search1.searchSong.click();
            protractor_1.browser.sleep(50);
            expect(yield search1.Logo.getText()).toContain('YOU');
            protractor_1.browser.sleep(1000);
        });
    });
    it('Search for Artist', function () {
        return __awaiter(this, void 0, void 0, function* () {
            search1.homeBtn.click();
            protractor_1.browser.sleep(500);
            search1.clicksearchBtn();
            protractor_1.browser.sleep(50);
            search1.searchBar.sendKeys('ali gatie');
            protractor_1.browser.sleep(500);
            search1.searchSong.click();
            protractor_1.browser.sleep(50);
            expect(yield search1.Logo.getText()).toContain('Ali Gatie');
            protractor_1.browser.sleep(1000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL3NlYXJjaFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCLDJDQUFzRTtBQUN0RSw0Q0FBd0M7QUFFeEMsb0NBQW9DO0FBQ3BDLFFBQVEsQ0FBQyxxQ0FBcUMsRUFBRTtJQUM5QyxNQUFNLE9BQU8sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFBO0lBRTVCLFVBQVUsQ0FBQztRQUNSLE1BQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEMsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsNkJBQTZCLEVBQUU7O1lBQ2hDLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7WUFDeEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQ3hCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pCLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3RDLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDMUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsTUFBTSxDQUFNLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUMxRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQixDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG1CQUFtQixFQUFFOztZQUN0QixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3ZCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUN4QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNqQixPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN2QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQzFCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pCLE1BQU0sQ0FBTSxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDaEUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckIsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E0REs7QUFDTixDQUFDLENBQUMsQ0FBQSJ9