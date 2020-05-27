"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const protractor_1 = require("protractor");
// eslint-disable-next-line no-undef
describe('Player Test ', function () {
    beforeEach(function () {
        global.isAngularSite(false);
    });
    it('Playlist ', function () {
        protractor_1.browser.get('https://open.spotify.com/');
        protractor_1.browser.sleep(3000);
        const login1 = protractor_1.element(protractor_1.by.className('_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss'));
        login1.click();
        protractor_1.browser.sleep(2000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCLDJDQUFzRTtBQUV0RSxvQ0FBb0M7QUFDcEMsUUFBUSxDQUFDLGNBQWMsRUFBRTtJQUN2QixVQUFVLENBQUM7UUFDUixNQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JDLENBQUMsQ0FBQyxDQUFBO0lBRUgsRUFBRSxDQUFDLFdBQVcsRUFBRTtRQUNkLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7UUFDeEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEIsTUFBTSxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLCtFQUErRSxDQUFDLENBQUMsQ0FBQTtRQUN0SCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDZCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNyQixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=