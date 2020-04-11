import { browser, element, by } from 'protractor'

export class player {
  playerURL : string ='http://localhost:4200/mayestro/home'
  shuffleBtn = element(by.className('fa fa-random'))
  backBtn = element(by.className('fa fa-step-backward'))
  pauseBtn = element(by.className('fa fa-pause-circle'))
  playBtn = element(by.className('fa fa-play-circle'))
  nextBtn = element(by.className('fa fa-step-forward'))
  repeatBtn = element(by.className('fa fa-repeat'))
  volumeOnBtn = element(by.xpath("//button[@class='volumeoff']"))
  volumeOffBtn = element(by.xpath("//button[@class='volume']"))
  audioArr = element.all(by.tagName('audio'))
  count1=this.audioArr.count()

  async lastIndex () {
    return this.count1.then(function (i:number) {
      return i - 1
    })
  }

  clickShuffle () {
    this.shuffleBtn.click()
  }

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
