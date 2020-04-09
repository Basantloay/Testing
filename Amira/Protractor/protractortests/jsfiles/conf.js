"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// To run this, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
// eslint-disable-next-line no-unused-vars
var protractor_1 = require("protractor");
//import { SpecReporter } from 'jasmine-spec-reporter'
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./specs/testsLogin.js'],
    //specs: ['./specs/testsSignup.js'],
    //specs: ['./specs/testsForgotPassword.js'],
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    onPrepare: function () {
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
//# sourceMappingURL=conf.js.map