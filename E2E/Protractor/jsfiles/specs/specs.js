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
const protractor_1 = require("protractor");
// let loginPage = require('../pages/loginPage');
describe('incorrect password', function () {
    // beforeEach(function(){
    //     browser.get('http://3.137.69.49/account.mayestro/login');
    // });
    it('should have error message', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.get('http://3.137.69.49/account.mayestro/login');
            protractor_1.browser.sleep(3000);
            protractor_1.element(protractor_1.by.xpath("//input[@name='email']")).sendKeys('heloo');
            protractor_1.element(protractor_1.by.xpath("//input[@name='password']")).sendKeys('123456789');
            protractor_1.element(protractor_1.by.xpath("//button[@type='submit']")).click();
            expect(yield protractor_1.element(protractor_1.by.xpath("//p[@class='col-12 mb-0 text-white']")).getText()).toContain('Incorrect username or password.');
            // loginPage.get('http://3.137.69.49/account.mayestro/login');
            // loginPage.enterEmail('heloo');
            // loginPage.enterPassword('12345678');
            // loginPage.clickLogin();
            // expect(await element(by.xpath("//p[@class='col-12 mb-0 text-white']")).getText()).toContain('Incorrect username or password.');
        });
    });
});
// import { browser, element, by } from "protractor";
// describe("Calculator test", function(){
//     it("invoke calc app",function(){
//         browser.get("https://juliemr.github.io/protractor-demo/");
//         browser.sleep(3000);
//     })
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9zcGVjcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFpRDtBQUVqRCxpREFBaUQ7QUFFakQsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBQzdCLHlCQUF5QjtJQUN6QixnRUFBZ0U7SUFDaEUsTUFBTTtJQUNOLEVBQUUsQ0FBQywyQkFBMkIsRUFBRTs7WUFDOUIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQTtZQUN4RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNuQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUM3RCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNwRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3JELE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtZQUU5SCw4REFBOEQ7WUFDOUQsaUNBQWlDO1lBQ2pDLHVDQUF1QztZQUN2QywwQkFBMEI7WUFDMUIsa0lBQWtJO1FBQ3BJLENBQUM7S0FBQSxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQTtBQUlGLHFEQUFxRDtBQUVyRCwwQ0FBMEM7QUFFMUMsdUNBQXVDO0FBQ3ZDLHFFQUFxRTtBQUNyRSwrQkFBK0I7QUFDL0IsU0FBUztBQUVULE1BQU0ifQ==