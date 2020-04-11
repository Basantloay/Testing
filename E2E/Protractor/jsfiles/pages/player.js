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
class player {
    constructor() {
        this.playerURL = 'http://localhost:4200/mayestro/home';
        this.shuffleBtn = protractor_1.element(protractor_1.by.className('fa fa-random'));
        this.backBtn = protractor_1.element(protractor_1.by.className('fa fa-step-backward'));
        this.pauseBtn = protractor_1.element(protractor_1.by.className('fa fa-pause-circle'));
        this.playBtn = protractor_1.element(protractor_1.by.className('fa fa-play-circle'));
        this.nextBtn = protractor_1.element(protractor_1.by.className('fa fa-step-forward'));
        this.repeatBtn = protractor_1.element(protractor_1.by.className('fa fa-repeat'));
        this.volumeOnBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='volumeoff']"));
        this.volumeOffBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='volume']"));
        this.audioArr = protractor_1.element.all(protractor_1.by.tagName('audio'));
        this.count1 = this.audioArr.count();
    }
    lastIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.count1.then(function (i) {
                return i - 1;
            });
        });
    }
    clickShuffle() {
        this.shuffleBtn.click();
    }
    checkShuffleClicked(txt) {
        const isShuffled = protractor_1.element(protractor_1.by.className('shuffle')).getCssValue('color');
        // eslint-disable-next-line no-undef
        expect(isShuffled).toContain('rgba(25, 206, 88, 1)');
    }
    checkShuffle() {
        // eslint-disable-next-line no-undef
        expect(this.count1).toBeGreaterThan(1); /// should have more than 1 track to shuffle
        protractor_1.browser.sleep(100);
        const shuffled = function () {
            protractor_1.browser.executeScript(function () {
                return document.getElementsByTagName('audio')[0].audioTracks;
            });
        };
        // eslint-disable-next-line no-undef
        expect(shuffled()).toBeDefined();
        const nextAudio = this.audioArr.get(1);
        this.clickBack();
        protractor_1.browser.sleep(5000);
        const currentAudio = this.audioArr.get(1);
        // eslint-disable-next-line no-undef
        expect(nextAudio.getText()).toEqual(currentAudio.getText());
    }
    clickBack() {
        this.backBtn.click();
    }
    checkBack() {
        return __awaiter(this, void 0, void 0, function* () {
            const back1 = function () {
                protractor_1.browser.executeScript(function () {
                    return document.getElementsByTagName('audio')[0];
                });
            };
            // eslint-disable-next-line no-undef
            expect(back1()).toBeDefined();
            // eslint-disable-next-line no-undef
            expect(this.count1).toBeGreaterThan(1); /// no audio tracks
            protractor_1.browser.sleep(100);
            if ((yield this.count1) > 2) {
                const backAudio = this.audioArr.get(this.lastIndex());
                this.clickBack();
                protractor_1.browser.sleep(5000);
                const currentAudio = this.audioArr.get(0);
                // eslint-disable-next-line no-undef
                expect(backAudio.getText()).not.toEqual(currentAudio.getText());
            }
        });
    }
    clickPause() {
        this.pauseBtn.click();
    }
    checkPause() {
        return __awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-undef
            expect(this.count1).toBeGreaterThan(1); ///  no audio tracks
            this.clickPause();
            protractor_1.browser.sleep(5000);
            if ((yield this.count1) > 1) {
                const isPause = function () {
                    return protractor_1.browser.executeScript(function () {
                        return document.getElementsByTagName('audio')[0].paused;
                    });
                };
                // eslint-disable-next-line no-undef
                expect(isPause()).toBe(true);
            }
        });
    }
    clickPlay() {
        this.playBtn.click();
    }
    checkPlay() {
        return __awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-undef
            expect(this.count1).toBeGreaterThan(1); ///  no audio tracks
            this.clickPlay();
            protractor_1.browser.sleep(5000);
            if ((yield this.count1) > 1) {
                const isPlay = function () {
                    return protractor_1.browser.executeScript(function () {
                        return document.getElementsByTagName('audio')[0].played;
                    });
                };
                // eslint-disable-next-line no-undef
                expect(isPlay()).toBe(true);
            }
        });
    }
    clickNext() {
        this.nextBtn.click();
    }
    checkNext() {
        return __awaiter(this, void 0, void 0, function* () {
            const next1 = function () {
                protractor_1.browser.executeScript(function () {
                    return document.getElementsByTagName('audio')[0];
                });
            };
            // eslint-disable-next-line no-undef
            expect(next1()).toBeDefined();
            // eslint-disable-next-line no-undef
            expect(this.count1).toBeGreaterThan(1); /// no audio tracks
            protractor_1.browser.sleep(100);
            if ((yield this.count1) > 2) {
                const nextAudio1 = this.audioArr.get(1);
                this.clickNext();
                protractor_1.browser.sleep(5000);
                const currentAudio = this.audioArr.get(0);
                // eslint-disable-next-line no-undef
                expect(nextAudio1.getText()).toEqual(currentAudio.getText());
            }
        });
    }
    clickRepeat() {
        this.repeatBtn.click();
    }
    checkRepeatClicked(txt) {
        const isRepeat = protractor_1.element(protractor_1.by.className('repeat')).getCssValue('color');
        // eslint-disable-next-line no-undef
        expect(isRepeat).toContain('rgba(25, 206, 88, 1)');
    }
    checkRepeat() {
        // eslint-disable-next-line no-undef
        expect(this.count1).toBeGreaterThan(1); ///  no audio tracks
        const repeated = function () {
            protractor_1.browser.executeScript(function () {
                return document.getElementsByTagName('audio').item(0).loop;
            });
        };
        // eslint-disable-next-line no-undef
        expect(repeated()).toBeDefined();
    }
    clickVolumeOn() {
        this.volumeOnBtn.click();
    }
    checkVolumeOn() {
        return __awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-undef
            expect(this.count1).toBeGreaterThan(1); ///  no audio tracks
            // this.clickVolumeOn()
            if ((yield this.count1) > 1) {
                this.clickPlay();
                protractor_1.browser.sleep(5000);
                const volumed = function () {
                    return protractor_1.browser.executeScript(function () {
                        return document.getElementsByTagName('audio')[0].volume.valueOf() > 0;
                    });
                };
                // eslint-disable-next-line no-undef
                expect(volumed()).not.toBeNull();
            }
        });
    }
    clickVolumeOff() {
        this.volumeOffBtn.click();
    }
    checkVolumeOff() {
        return __awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-undef
            expect(this.count1).toBeGreaterThan(1); ///  no audio tracks
            this.clickVolumeOff();
            if ((yield this.count1) > 1) {
                protractor_1.browser.sleep(5000);
                const volumeless = function () {
                    return protractor_1.browser.executeScript(function () {
                        return document.getElementsByTagName('audio')[0].volume.valueOf() === 0;
                    });
                };
                // eslint-disable-next-line no-undef
                expect(volumeless()).not.toBeNull();
            }
        });
    }
}
exports.player = player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWlEO0FBRWpELE1BQWEsTUFBTTtJQUFuQjtRQUNFLGNBQVMsR0FBVyxxQ0FBcUMsQ0FBQTtRQUN6RCxlQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7UUFDbEQsWUFBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7UUFDdEQsYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7UUFDdEQsWUFBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7UUFDcEQsWUFBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7UUFDckQsY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO1FBQ2pELGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQTtRQUMvRCxpQkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUE7UUFDN0QsYUFBUSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUMzQyxXQUFNLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQThMOUIsQ0FBQztJQTVMTyxTQUFTOztZQUNiLE9BQU8sSUFBSSxDQUFD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