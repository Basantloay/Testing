"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Playlist {
    constructor() {
        this.User1Mail = 'testinge2e20@gmail.com';
        this.User1Password = 'E2E123456';
        this.User2Mail = 'testinge2e220@gmail.com';
        this.User2Password = 'E2E123456';
        this.loginBtn = protractor_1.element(protractor_1.by.className('_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss'));
        this.UsernameTextBox = protractor_1.element(protractor_1.by.id('login-username'));
        this.PasswordTextBox = protractor_1.element(protractor_1.by.id('login-password'));
        this.rememberMeBtn = protractor_1.element(protractor_1.by.className('control-indicator'));
        this.logBtn = protractor_1.element(protractor_1.by.className('btn btn-block btn-green ng-binding'));
        this.yourLibraryBtn = protractor_1.element(protractor_1.by.className('icon collection-icon'));
        this.createPlaylistHomeBtn = protractor_1.element(protractor_1.by.className('fcdf941c8ffa7d0878af0a4f04aa05bb-scss'));
        this.LikedSongBtn = protractor_1.element(protractor_1.by.className('ce8ac4aabb35a48dc93a67cf4fedd99c-scss'));
        this.Logo = protractor_1.element(protractor_1.by.tagName('h1')); // 'Create your first playlist'
        this.createPlaylistLibrary = protractor_1.element(protractor_1.by.className('_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss _4a19a959428c34075eef50bd44ab468f-scss'));
        this.playlistNameTextBox = protractor_1.element(protractor_1.by.className('inputBox-input'));
        this.cancelBtn = protractor_1.element(protractor_1.by.css('._56a12d0978529b654affa11ca9390bd7-scss'));
        this.createBtn = protractor_1.element(protractor_1.by.css('._8fec0262e00c11513faad732021ed012-scss'));
        this.userIcon = protractor_1.element(protractor_1.by.className('_4f6cff0f3480e8d8cc3614e38afad63d-scss')); // 'Testing Demo'
        this.demo1 = protractor_1.element(protractor_1.by.className('_9ec767915488d36334c49b036bebcaea-scss'));
        this.moreOptions1 = protractor_1.element(protractor_1.by.className('a319647e0b4638c35cbe1cc56bbe8710-scss'));
        this.deleteOption = protractor_1.element(protractor_1.by.xpath("//nav[@class='react-contextmenu react-contextmenu--visible']/div[.='Delete']"));
        this.deleteLogo = protractor_1.element(protractor_1.by.className('_587844af67ca3c14dbf7deb3d5e64f69-scss d437f883c49a54bba1849d160344bcec-scss dc1cc34e88857bd0de4d7a4dc3c528a5-scss'));
        this.deleteBtn = protractor_1.element(protractor_1.by.className('_2221af4e93029bedeab751d04fab4b8b-scss _8fec0262e00c11513faad732021ed012-scss'));
        this.demo2 = protractor_1.element(protractor_1.by.className('_9ec767915488d36334c49b036bebcaea-scss'));
        // options2=
        this.demo3 = protractor_1.element(protractor_1.by.className('_9ec767915488d36334c49b036bebcaea-scss'));
        // options3
        this.backBtn = protractor_1.element(protractor_1.by.className('_66febc2caff37c822a831232b6e73171-scss _7d846137186e6bfd0724a32565d216cb-scss'));
    }
    clickonUserIcon() {
        this.userIcon.click();
    }
    clickCancel() {
        this.cancelBtn.click();
    }
    clickCreate() {
        this.createBtn.click();
    }
    clickLogin() {
        this.loginBtn.click();
    }
    clickLog() {
        this.logBtn.click();
    }
    clickRemember() {
        this.rememberMeBtn.click();
    }
    clickYourLibrary() {
        this.yourLibraryBtn.click();
    }
    clickCreateYourPlaylistHome() {
        this.createPlaylistHomeBtn.click();
    }
    clickCreateYourPlaylistLibrary() {
        this.createPlaylistLibrary.click();
    }
    clickLikedSongs() {
        this.LikedSongBtn.click();
    }
}
exports.Playlist = Playlist;
/*

  checkShuffleClicked (txt : string) {
    const isShuffled = element(by.className('shuffle')).getCssValue('color')
    // eslint-disable-next-line no-undef
    expect<any>(isShuffled).toContain('rgba(25, 206, 88, 1)')
  }

  checkShuffle () {
    // eslint-disable-next-line no-undef
    expect<any>(this.count1).toBeGreaterThan(1) /// should have more than 1 track to shuffle
    browser.sleep(100)
    const shuffled = function () {
      browser.executeScript(function () {
        return document.getElementsByTagName('audio')[0].audioTracks
      })
    }
    // eslint-disable-next-line no-undef
    expect(shuffled()).toBeDefined()
    const nextAudio = this.audioArr.get(1)
    this.clickBack()
    browser.sleep(5000)
    const currentAudio = this.audioArr.get(1)
    // eslint-disable-next-line no-undef
    expect<any>(nextAudio.getText()).toEqual(currentAudio.getText())
  }

  clickBack () {
    this.backBtn.click()
  }

  async checkBack () {
    const back1 = function () {
      browser.executeScript(function () {
        return document.getElementsByTagName('audio')[0]
      })
    }
    // eslint-disable-next-line no-undef
    expect<any>(back1()).toBeDefined()
    // eslint-disable-next-line no-undef
    expect<any>(this.count1).toBeGreaterThan(1) /// no audio tracks
    browser.sleep(100)
    if (await this.count1 > 2) {
      const backAudio = this.audioArr.get(this.lastIndex())
      this.clickBack()
      browser.sleep(5000)
      const currentAudio = this.audioArr.get(0)
      // eslint-disable-next-line no-undef
      expect<any>(backAudio.getText()).not.toEqual(currentAudio.getText())
    }
  }

  clickPause () {
    this.pauseBtn.click()
  }

  async checkPause () {
    // eslint-disable-next-line no-undef
    expect<any>(this.count1).toBeGreaterThan(1) ///  no audio tracks
    this.clickPause()
    browser.sleep(5000)
    if (await this.count1 > 1) {
      const isPause = function () {
        return browser.executeScript(function () {
          return document.getElementsByTagName('audio')[0].paused
        })
      }
      // eslint-disable-next-line no-undef
      expect<any>(isPause()).toBe(true)
    }
  }

  clickPlay () {
    this.playBtn.click()
  }

  async checkPlay () {
    // eslint-disable-next-line no-undef
    expect<any>(this.count1).toBeGreaterThan(1) ///  no audio tracks
    this.clickPlay()
    browser.sleep(5000)
    if (await this.count1 > 1) {
      const isPlay = function () {
        return browser.executeScript(function () {
          return document.getElementsByTagName('audio')[0].played
        })
      }

      // eslint-disable-next-line no-undef
      expect<any>(isPlay()).toBe(true)
    }
  }

  clickNext () {
    this.nextBtn.click()
  }

  async checkNext () {
    const next1 = function () {
      browser.executeScript(function () {
        return document.getElementsByTagName('audio')[0]
      })
    }
    // eslint-disable-next-line no-undef
    expect<any>(next1()).toBeDefined()
    // eslint-disable-next-line no-undef
    expect<any>(this.count1).toBeGreaterThan(1) /// no audio tracks
    browser.sleep(100)
    if (await this.count1 > 2) {
      const nextAudio1 = this.audioArr.get(1)
      this.clickNext()
      browser.sleep(5000)
      const currentAudio = this.audioArr.get(0)
      // eslint-disable-next-line no-undef
      expect<any>(nextAudio1.getText()).toEqual(currentAudio.getText())
    }
  }

  clickRepeat () {
    this.repeatBtn.click()
  }

  checkRepeatClicked (txt : string) {
    const isRepeat = element(by.className('repeat')).getCssValue('color')
    // eslint-disable-next-line no-undef
    expect(isRepeat).toContain('rgba(25, 206, 88, 1)')
  }

  checkRepeat () {
    // eslint-disable-next-line no-undef
    expect<any>(this.count1).toBeGreaterThan(1) ///  no audio tracks
    const repeated = function () {
      browser.executeScript(function () {
        return document.getElementsByTagName('audio').item(0).loop
      })
    }
    // eslint-disable-next-line no-undef
    expect(repeated()).toBeDefined()
  }

  clickVolumeOn () {
    this.volumeOnBtn.click()
  }

  async checkVolumeOn () {
    // eslint-disable-next-line no-undef
    expect<any>(this.count1).toBeGreaterThan(1) ///  no audio tracks
    // this.clickVolumeOn()
    if (await this.count1 > 1) {
      this.clickPlay()
      browser.sleep(5000)
      const volumed = function () {
        return browser.executeScript(function () {
          return document.getElementsByTagName('audio')[0].volume.valueOf() > 0
        })
      }
      // eslint-disable-next-line no-undef
      expect<any>(volumed()).not.toBeNull()
    }
  }

  clickVolumeOff () {
    this.volumeOffBtn.click()
  }

  async checkVolumeOff () {
    // eslint-disable-next-line no-undef
    expect<any>(this.count1).toBeGreaterThan(1) ///  no audio tracks
    this.clickVolumeOff()
    if (await this.count1 > 1) {
      browser.sleep(5000)
      const volumeless = function () {
        return browser.executeScript(function () {
          return document.getElementsByTagName('audio')[0].volume.valueOf() === 0
        })
      }
      // eslint-disable-next-line no-undef
      expect<any>(volumeless()).not.toBeNull()
    }
  }
}
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9QbGF5bGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFpRDtBQUVqRCxNQUFhLFFBQVE7SUFBckI7UUFDRSxjQUFTLEdBQVksd0JBQXdCLENBQUE7UUFDN0Msa0JBQWEsR0FBWSxXQUFXLENBQUE7UUFDcEMsY0FBUyxHQUFZLHlCQUF5QixDQUFBO1FBQzlDLGtCQUFhLEdBQVksV0FBVyxDQUFBO1FBQ3BDLGFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsK0VBQStFLENBQUMsQ0FBQyxDQUFBO1FBQ2pILG9CQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtRQUNsRCxvQkFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7UUFDbEQsa0JBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO1FBQzFELFdBQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFBO1FBQ3BFLG1CQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQTtRQUM5RCwwQkFBcUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO1FBQ3RGLGlCQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQTtRQUM3RSxTQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQywrQkFBK0I7UUFDaEUs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