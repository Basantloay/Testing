"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// To run this, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
// eslint-disable-next-line no-unused-vars
const protractor_1 = require("protractor");
//import { SpecReporter } from 'jasmine-spec-reporter'
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./specs/playertest.js', './specs/spec.js'],
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    onPrepare: () => {
        //jasmine.getEnv().addReporter((new SpecReporter({ spec: { displayStacktrace: true } })))
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        protractor_1.browser.manage().window().setSize(1366, 768);
        protractor_1.browser.manage().timeouts().implicitlyWait(10000);
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.ignoreSynchronization = true;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvRUFBb0U7QUFDcEUsaUNBQWlDO0FBQ2pDLDBDQUEwQztBQUMxQywyQ0FBNEM7QUFDNUMsc0RBQXNEO0FBRXpDLFFBQUEsTUFBTSxHQUFXO0lBQzVCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsS0FBSyxFQUFFLENBQUMsdUJBQXVCLEVBQUMsaUJBQWlCLENBQUM7SUFHbEQsbURBQW1EO0lBRW5ELDBFQUEwRTtJQUMxRSxzQ0FBc0M7SUFDdEMsU0FBUyxFQUFFLElBQUk7SUFFZixTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ2YseUZBQXlGO1FBQ3hGLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1FBQ3ZELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxjQUFjLENBQUM7WUFDOUMsVUFBVSxFQUFFLGdCQUFnQjtTQUM3QixDQUFDLENBQUMsQ0FBQTtRQUNILG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM1QyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNqRCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO0lBQ3RDLENBQUM7Q0FFRixDQUFBIn0=