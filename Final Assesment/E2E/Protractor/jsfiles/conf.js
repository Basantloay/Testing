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
    specs: ['./specs/PlaylistManagerTest.js', './specs/searchTest.js'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvRUFBb0U7QUFDcEUsaUNBQWlDO0FBQ2pDLDBDQUEwQztBQUMxQywyQ0FBNEM7QUFDNUMsdURBQXVEO0FBRTFDLFFBQUEsTUFBTSxHQUFXO0lBQzVCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsS0FBSyxFQUFFLENBQUMsZ0NBQWdDLEVBQUMsdUJBQXVCLENBQUM7SUFFakUsbURBQW1EO0lBRW5ELDBFQUEwRTtJQUMxRSxzQ0FBc0M7SUFDdEMsU0FBUyxFQUFFLElBQUk7SUFFZixTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ2IsTUFBYyxDQUFDLGFBQWEsR0FBRyxVQUFVLElBQVk7WUFDcEQsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLElBQUksQ0FBQTtRQUN2QyxDQUFDLENBQUE7UUFDRCwwRkFBMEY7UUFDMUYsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDdkQsb0NBQW9DO1FBQ3BDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxjQUFjLENBQUM7WUFDOUMsVUFBVSxFQUFFLGdCQUFnQjtTQUM3QixDQUFDLENBQUMsQ0FBQTtRQUNILCtDQUErQztRQUMvQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNqRCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BDLHVDQUF1QztJQUN6QyxDQUFDO0NBRUYsQ0FBQSJ9