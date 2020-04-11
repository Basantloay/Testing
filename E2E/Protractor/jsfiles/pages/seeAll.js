"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class seeAll {
    constructor() {
        this.homeURL = 'http://localhost:4200/mayestro/home';
        this.seeAllArr = protractor_1.element.all(protractor_1.by.className('seeall'));
        this.leftBtn = protractor_1.element(protractor_1.by.className('fa fa-chevron-left backicon1'));
        this.rightBtn = protractor_1.element(protractor_1.by.className('fa fa-chevron-right'));
        this.work = protractor_1.element(protractor_1.by.xpath("//mini-card-viewer[2]//a[.='SEE ALL']"));
        this.chill = protractor_1.element(protractor_1.by.xpath("//mini-card-viewer[1]//a[.='SEE ALL']"));
        this.happy = protractor_1.element(protractor_1.by.xpath("//mini-card-viewer[3]//a[.='SEE ALL']"));
        this.mostPopular = protractor_1.element(protractor_1.by.xpath("//mini-card-viewer[4]//a[.='SEE ALL']"));
        this.albums = protractor_1.element(protractor_1.by.xpath("//mini-card-viewer[5]//a[.='SEE ALL']"));
        this.artists = protractor_1.element(protractor_1.by.xpath("//mini-card-viewer[6]//a[.='SEE ALL']"));
        this.footer = protractor_1.element(protractor_1.by.xpath("//a[@href='/mayestro/artist/3xl0OvcSlc9Mwe5ToaFtD3']/div[@class='card-body p-0 pt-2']"));
    }
    seeCount() {
        return this.seeAllArr.count();
    }
    checkWork() {
        this.work.click();
        protractor_1.browser.sleep(100);
        this.leftBtn.click();
        protractor_1.browser.sleep(100);
    }
    checkChill() {
        this.chill.click();
        protractor_1.browser.sleep(1000);
        expect(protractor_1.element(protractor_1.by.xpath("//div[@class='catName']")).isPresent()).toBe(true);
        this.leftBtn.click();
        protractor_1.browser.sleep(1000);
    }
    checkHappy() {
        this.happy.click();
        protractor_1.browser.sleep(1000);
        expect(protractor_1.element(protractor_1.by.xpath("//div[@class='catName']")).isPresent()).toBe(true);
        this.leftBtn.click();
        protractor_1.browser.sleep(1000);
    }
    checkMostPopular() {
        this.mostPopular.click();
        protractor_1.browser.sleep(1000);
        expect(protractor_1.element(protractor_1.by.xpath("//div[@class='catName']")).isPresent()).toBe(true);
        this.leftBtn.click();
        protractor_1.browser.sleep(1000);
    }
    checkAlbums() {
        this.albums.click();
        protractor_1.browser.sleep(1000);
        expect(protractor_1.element(protractor_1.by.xpath("//div[@class='catName']")).isPresent()).toBe(true);
        this.leftBtn.click();
        protractor_1.browser.sleep(1000);
    }
    checkartists() {
        this.artists.click();
        protractor_1.browser.sleep(1000);
        expect(protractor_1.element(protractor_1.by.xpath("//div[@class='catName']")).isPresent()).toBe(true);
        this.leftBtn.click();
        protractor_1.browser.sleep(1000);
    }
}
exports.seeAll = seeAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlQWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvc2VlQWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWlEO0FBRWpELE1BQWEsTUFBTTtJQUFuQjtRQUNJLFlBQU8sR0FBVyxxQ0FBcUMsQ0FBQTtRQUN2RCxjQUFTLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQy9DLFlBQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFBO1FBQy9ELGFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFBO1FBQ3ZELFNBQUksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO1FBQy9ELFVBQUssR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLFVBQUssR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLGdCQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQTtRQUN0RSxXQUFNLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQTtRQUNqRSxZQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQTtRQUNsRSxXQUFNLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVGQUF1RixDQUFDLENBQUMsQ0FBQTtJQW9EckgsQ0FBQztJQW5ERyxRQUFRO1FBQ04sT0FB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