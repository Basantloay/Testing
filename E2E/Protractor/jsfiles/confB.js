"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// To run this, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
// eslint-disable-next-line no-unused-vars
const protractor_1 = require("protractor");
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./specs/playertest.js'],
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    onPrepare: () => {
        // eslint-disable-next-line no-undef
        jasmine.getEnv().addReporter((new jasmine_spec_reporter_1.SpecReporter({ spec: { displayStacktrace: true } })));
        var AllureReporter = require('jasmine-allure-reporter');
        // eslint-disable-next-line no-undef
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        protractor_1.browser.manage().window().setSize(1366, 768);
        protractor_1.browser.manage().timeouts().implicitlyWait(10000);
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.ignoreSynchronization = true;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZkIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb25mQi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG9FQUFvRTtBQUNwRSxpQ0FBaUM7QUFDakMsMENBQTBDO0FBQzFDLDJDQUE0QztBQUM1QyxpRUFBb0Q7QUFFdkMsUUFBQSxNQUFNLEdBQVc7SUFDNUIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFDRCxLQUFLLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztJQUVoQyxtREFBbUQ7SUFFbkQsMEVBQTBFO0lBQzFFLHNDQUFzQztJQUN0QyxTQUFTLEVBQUUsSUFBSTtJQUVmLFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFDZCxvQ0FBb0M7UUFDcEMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksb0NBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkYsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDdkQsb0NBQW9DO1FBQ3BDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxjQUFjLENBQUM7WUFDOUMsVUFBVSxFQUFFLGdCQUFnQjtTQUM3QixDQUFDLENBQUMsQ0FBQTtRQUNILG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM1QyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNqRCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO0lBQ3RDLENBQUM7Q0FFRixDQUFBIn0=