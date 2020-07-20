"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// To run this, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
// eslint-disable-next-line no-unused-vars
const protractor_2 = require("protractor");
// import { SpecReporter } from 'jasmine-spec-reporter'
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./specs/aPlaylistManagerTest.js', './specs/bsearchTest.js', './specs/cLikeandFollowTest.js', './specs/dPlaylistManagerTest2.js'],
    // specs2: [],
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    onPrepare: () => {
        global.isAngularSite = function (temp) {
            protractor_2.browser.ignoreSynchronization = !temp;
        };
        // jasmine.getEnv().addReporter((new SpecReporter({ spec: { displayStacktrace: true } })))
        var AllureReporter = require('jasmine-allure-reporter');
        // eslint-disable-next-line no-undef
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        // browser.manage().window().setSize(1366, 768)
        protractor_2.browser.manage().timeouts().implicitlyWait(10000);
        protractor_2.browser.waitForAngularEnabled(false);
        // browser.ignoreSynchronization = true
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvRUFBb0U7QUFDcEUsaUNBQWlDO0FBQ2pDLDBDQUEwQztBQUMxQywyQ0FBNEM7QUFDNUMsdURBQXVEO0FBRTFDLFFBQUEsTUFBTSxHQUFXO0lBQzVCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsS0FBSyxFQUFFLENBQUMsaUNBQWlDLEVBQUUsd0JBQXdCLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLENBQUM7SUFDekksY0FBYztJQUVkLG1EQUFtRDtJQUVuRCwwRUFBMEU7SUFDMUUsc0NBQXNDO0lBQ3RDLFNBQVMsRUFBRSxJQUFJO0lBRWYsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUNiLE1BQWMsQ0FBQyxhQUFhLEdBQUcsVUFBVSxJQUFZO1lBQ3BELG9CQUFPLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxJQUFJLENBQUE7UUFDdkMsQ0FBQyxDQUFBO1FBQ0QsMEZBQTBGO1FBQzFGLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1FBQ3ZELG9DQUFvQztRQUNwQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksY0FBYyxDQUFDO1lBQzlDLFVBQVUsRUFBRSxnQkFBZ0I7U0FDN0IsQ0FBQyxDQUFDLENBQUE7UUFDSCwrQ0FBK0M7UUFDL0Msb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakQsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwQyx1Q0FBdUM7SUFDekMsQ0FBQztDQUVGLENBQUEifQ==