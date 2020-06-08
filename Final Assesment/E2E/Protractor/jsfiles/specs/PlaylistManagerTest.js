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
    it('Create First Playlist from Your Library ', function () {
        return __awaiter(this, void 0, void 0, function* () {
            playlist1.clickYourLibrary();
            protractor_1.browser.sleep(100);
            expect(yield playlist1.Logo.getText()).toContain('Create your first playlist');
            playlist1.clickCreateYourPlaylistLibrary();
            playlist1.playlistNameTextBox.sendKeys('first playlist');
            playlist1.clickCreate();
            protractor_1.browser.sleep(200);
            playlist1.backBtn.click();
            playlist1.demo1.click();
            protractor_1.browser.sleep(500);
            expect(yield playlist1.Logo.getText()).toContain('first playlist');
        });
    });
    it('Delete playlist from your Library ', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //playlist1.demo1.click()
            //browser.sleep(500)
            playlist1.moreOptions1.click();
            protractor_1.browser.sleep(500);
            playlist1.deleteOption.click();
            expect(yield playlist1.deleteLogo.getText()).toContain('Do you really want to delete this playlist?');
            playlist1.deleteBtn.click();
            protractor_1.browser.sleep(1000);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RNYW5hZ2VyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL1BsYXlsaXN0TWFuYWdlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCLDJDQUFzRTtBQUN0RSxnREFBNEM7QUFFNUMsb0NBQW9DO0FBQ3BDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFDdkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7SUFFaEMsVUFBVSxDQUFDO1FBQ1IsTUFBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0QyxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxjQUFjLEVBQUU7O1lBQ2pCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7WUFDeEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFBO1lBQ3RCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pCLFNBQVMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN2RCxTQUFTLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDM0QsNEJBQTRCO1lBQzVCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUNwQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNqQixTQUFTLENBQUMsZUFBZSxFQUFFLENBQUE7WUFDM0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsTUFBTSxDQUFNLE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDdkYsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTs7WUFDN0MsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDNUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsTUFBTSxDQUFNLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1lBQ25GLFNBQVMsQ0FBQyw4QkFBOEIsRUFBRSxDQUFBO1lBQzFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtZQUN4RCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUE7WUFDdkIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUN6QixTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3ZCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLE1BQU0sQ0FBTSxNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUN6RSxDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG9DQUFvQyxFQUFFOztZQUN2Qyx5QkFBeUI7WUFDekIsb0JBQW9CO1lBQ3BCLFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDOUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUM5QixNQUFNLENBQU0sTUFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLDZDQUE2QyxDQUFDLENBQUE7WUFDMUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUMzQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQixDQUFDO0tBQUEsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==