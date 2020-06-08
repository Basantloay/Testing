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
describe('Player Test ', function () {
    const playlist1 = new Playlist_1.Playlist();
    beforeEach(function () {
        global.isAngularSite(false);
    });
    it('login test ==> ', function () {
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
    it('Create Playlist from Your Library ==> ', function () {
        return __awaiter(this, void 0, void 0, function* () {
            playlist1.clickYourLibrary();
            protractor_1.browser.sleep(100);
            expect(yield playlist1.Logo.getText()).toContain('Create your first playlist');
            playlist1.clickCreateYourPlaylistLibrary();
            playlist1.playlistNameTextBox.sendKeys('first playlist');
            protractor_1.browser.sleep(10000);
            playlist1.clickCreate();
            protractor_1.browser.sleep(2000);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RNYW5hZ2VyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL1BsYXlsaXN0TWFuYWdlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCLDJDQUFzRTtBQUN0RSxnREFBNEM7QUFFNUMsb0NBQW9DO0FBQ3BDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFDdkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7SUFFaEMsVUFBVSxDQUFDO1FBQ1IsTUFBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0QyxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTs7WUFDcEIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtZQUN4QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNqQixTQUFTLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDdEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsU0FBUyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3ZELFNBQVMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUMzRCw0QkFBNEI7WUFDNUIsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQ3BCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pCLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtZQUMzQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNqQixNQUFNLENBQU0sTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUN2RixDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHdDQUF3QyxFQUFFOztZQUMzQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtZQUM1QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixNQUFNLENBQU0sTUFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLENBQUE7WUFDbkYsU0FBUyxDQUFDLDhCQUE4QixFQUFFLENBQUE7WUFDMUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1lBQ3hELG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3BCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUN2QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQixDQUFDO0tBQUEsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==