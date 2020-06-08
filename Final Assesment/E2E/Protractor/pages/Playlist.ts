import { browser, element, by } from 'protractor'

export class Playlist {
  User1Mail : string = 'testinge2e20@gmail.com'
  User1Password : string = 'E2E123456'
  User2Mail : string = 'testinge2e220@gmail.com'
  User2Password : string = 'E2E123456'
  loginBtn = element(by.className('_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss'))
  UsernameTextBox = element(by.id('login-username'))
  PasswordTextBox = element(by.id('login-password'))
  rememberMeBtn = element(by.className('control-indicator'))
  logBtn = element(by.className('btn btn-block btn-green ng-binding'))
  yourLibraryBtn = element(by.className('icon collection-icon'))
  createPlaylistHomeBtn = element(by.className('fcdf941c8ffa7d0878af0a4f04aa05bb-scss'))
  LikedSongBtn = element(by.className('ce8ac4aabb35a48dc93a67cf4fedd99c-scss'))
  Logo = element(by.tagName('h1')) // 'Create your first playlist'
  createPlaylistLibrary = element(by.className('_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss _4a19a959428c34075eef50bd44ab468f-scss'))
  playlistNameTextBox = element(by.className('inputBox-input'))
  cancelBtn = element(by.css('._56a12d0978529b654affa11ca9390bd7-scss'))
  createBtn = element(by.css('._8fec0262e00c11513faad732021ed012-scss'))
  userIcon = element(by.className('_4f6cff0f3480e8d8cc3614e38afad63d-scss'))// 'Testing Demo'
  clickonUserIcon () {
    this.userIcon.click()
  }

  clickCancel () {
    this.cancelBtn.click()
  }

  clickCreate () {
    this.createBtn.click()
  }

  clickLogin () {
    this.loginBtn.click()
  }

  clickLog () {
    this.logBtn.click()
  }

  clickRemember () {
    this.rememberMeBtn.click()
  }

  clickYourLibrary () {
    this.yourLibraryBtn.click()
  }

  clickCreateYourPlaylistHome () {
    this.createPlaylistHomeBtn.click()
  }

  clickCreateYourPlaylistLibrary () {
    this.createPlaylistLibrary.click()
  }

  clickLikedSongs () {
    this.LikedSongBtn.click()
  }
}
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
