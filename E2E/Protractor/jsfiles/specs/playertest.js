"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
const protractor_1 = require("protractor");
const player_1 = require("../pages/player");
const seeAll_1 = require("../pages/seeAll");
// eslint-disable-next-line no-undef
describe('Player Test ', function () {
    /** this scenario based on home starts with audiotrack[0]  */
    // eslint-disable-next-line new-cap
    const player1 = new player_1.player();
    // eslint-disable-next-line new-cap
    const seeAll1 = new seeAll_1.seeAll();
    beforeEach(function () {
        protractor_1.browser.get(player1.playerURL);
        protractor_1.browser.sleep(1000);
    });
    it('Verify Shuffle feature in Player ', function () {
        player1.clickShuffle();
        player1.checkShuffleClicked('Check Shuffle button ');
        protractor_1.browser.sleep(500);
        player1.checkShuffle();
        protractor_1.browser.sleep(100);
    });
    it('Verify Repeat feature in Player ', function () {
        player1.clickRepeat();
        player1.checkRepeatClicked('Check Repeat button ');
        protractor_1.browser.sleep(500);
        player1.checkRepeat();
        protractor_1.browser.sleep(100);
    });
    it('Verify Back feature in Player ', function () {
        player1.checkBack();
        protractor_1.browser.sleep(100);
    });
    it('Verify next feature in Player ', function () {
        player1.checkNext();
        protractor_1.browser.sleep(100);
    });
    it('Verify play and pause feature in Player ', function () {
        player1.checkPlay();
        protractor_1.browser.sleep(100);
        player1.checkPause();
        protractor_1.browser.sleep(100);
    });
    it('Verify volume on and off feature in Player ', function () {
        player1.checkVolumeOn();
        protractor_1.browser.sleep(100);
        player1.checkVolumeOff();
        protractor_1.browser.sleep(1000);
    });
    it('Verify all seeAll buttons ', function () {
        seeAll1.checkWork();
        seeAll1.checkChill();
        protractor_1.browser.actions().mouseMove(seeAll1.mostPopular).perform();
        seeAll1.checkHappy();
        protractor_1.browser.actions().mouseMove(seeAll1.albums).perform();
        seeAll1.checkMostPopular();
        // window.scrollTo(0, 1000)
        seeAll1.checkAlbums();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVydGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL3BsYXllcnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFDN0IsMkNBQXNFO0FBQ3RFLDRDQUF3QztBQUN4Qyw0Q0FBd0M7QUFDeEMsb0NBQW9DO0FBQ3BDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFDdkIsNkRBQTZEO0lBRTdELG1DQUFtQztJQUNuQyxNQUFNLE9BQU8sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFBO0lBQzVCLG1DQUFtQztJQUNuQyxNQUFNLE9BQU8sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFBO0lBRTVCLFVBQVUsQ0FBQztRQUNULG9CQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUM5QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNyQixDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRTtRQUN0QyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDdEIsT0FBTyxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLENBQUE7UUFDcEQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEIsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ3RCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGtDQUFrQyxFQUFFO1FBQ3JDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNyQixPQUFPLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUNsRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQixPQUFPLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDckIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDcEIsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsZ0NBQWdDLEVBQUU7UUFDbkMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ25CLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGdDQUFnQyxFQUFFO1FBQ25DLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNuQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNwQixDQUFDLENBQUMsQ0FBQTtJQUNELEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUM5QyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDbkIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEIsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3BCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDZDQUE2QyxFQUFFO1FBQ2hELE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUN2QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQixPQUFPLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDeEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckIsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsNEJBQTRCLEVBQUU7UUFDL0IsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ25CLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNwQixvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDMUQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3BCLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNyRCxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUMxQiwyQkFBMkI7UUFDM0IsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBRXZCLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==