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
describe('Like Song and Follow Artist. \n', function () {
    const playlist3 = new Playlist_1.Playlist();
    const search3 = new search_1.Search();
    beforeEach(function () {
        global.isAngularSite(false);
    });
    it('Like a song', function () {
        return __awaiter(this, void 0, void 0, function* () {
            playlist3.homeBtn.click();
            protractor_2.browser.sleep(500);
            search3.clicksearchBtn();
            protractor_2.browser.sleep(50);
            search3.searchBar.sendKeys("it's you");
            protractor_2.browser.sleep(1500);
            search3.searchSong.click();
            protractor_2.browser.sleep(150);
            playlist3.likeSong.click();
            protractor_2.browser.sleep(150);
            playlist3.homeBtn.click();
            protractor_2.browser.sleep(150);
            playlist3.LikedSongBtn.click();
            protractor_2.browser.sleep(150);
            expect(yield playlist3.likedSong.getText()).toContain("It's You");
            protractor_2.browser.sleep(150);
        });
    });
    it('Follow Artist', function () {
        return __awaiter(this, void 0, void 0, function* () {
            search3.homeBtn.click();
            protractor_2.browser.sleep(500);
            search3.clicksearchBtn();
            protractor_2.browser.sleep(50);
            search3.searchBar.sendKeys('ali gatie ');
            protractor_2.browser.sleep(1500);
            search3.searchArtist.click();
            protractor_2.browser.sleep(50);
            playlist3.FollowBtn.click();
            protractor_2.browser.sleep(150);
            search3.homeBtn.click();
            playlist3.ArtistsBtn.click();
            protractor_2.browser.sleep(150);
            expect(yield playlist3.ArtistName.getText()).toContain('Ali Gatie');
            protractor_2.browser.sleep(150);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY0xpa2VhbmRGb2xsb3dUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvY0xpa2VhbmRGb2xsb3dUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQW1DO0FBQ25DLDZCQUE2QjtBQUM3QiwyQ0FBc0U7QUFDdEUsZ0RBQTRDO0FBQzVDLDRDQUF3QztBQUV4QyxvQ0FBb0M7QUFDcEMsUUFBUSxDQUFDLGlDQUFpQyxFQUFFO0lBQzFDLE1BQU0sU0FBUyxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO0lBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksZUFBTSxFQUFFLENBQUE7SUFFNUIsVUFBVSxDQUFDO1FBQ1IsTUFBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0QyxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxhQUFhLEVBQUU7O1lBQ2hCLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDekIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQ3hCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pCLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3RDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25CLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDMUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUMxQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3pCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDOUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsTUFBTSxDQUFNLE1BQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN0RSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGVBQWUsRUFBRTs7WUFDbEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUN2QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixPQUFPLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDeEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDeEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbkIsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUM1QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNqQixTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQzNCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDdkIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUM1QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixNQUFNLENBQU0sTUFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3hFLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FBQSxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9