/* eslint-disable no-undef */
import { browser, element, by, protractor, Browser } from 'protractor'
import { player } from '../pages/player'
import { seeAll } from '../pages/seeAll'
// eslint-disable-next-line no-undef
describe('Player Test ', function () {
  /** this scenario based on home starts with audiotrack[0]  */

  // eslint-disable-next-line new-cap
  const player1 = new player()
  // eslint-disable-next-line new-cap
  const seeAll1 = new seeAll()

  beforeEach(function () {
    browser.get(player1.playerURL)
    browser.sleep(1000)
  })
  
  it('Verify Shuffle feature in Player ', function () {
    player1.clickShuffle()
    player1.checkShuffleClicked('Check Shuffle button ')
    browser.sleep(500)
    player1.checkShuffle()
    browser.sleep(100)
  })

  it('Verify Repeat feature in Player ', function () {
    player1.clickRepeat()
    player1.checkRepeatClicked('Check Repeat button ')
    browser.sleep(500)
    player1.checkRepeat()
    browser.sleep(100)
  })

  it('Verify Back feature in Player ', function () {
    player1.checkBack()
    browser.sleep(100)
  })

  it('Verify next feature in Player ', function () {
    player1.checkNext()
    browser.sleep(100)
  })
   it('Verify play and pause feature in Player ', function () {
    player1.checkPlay()
    browser.sleep(100)
    player1.checkPause()
    browser.sleep(100)
  })

  it('Verify volume on and off feature in Player ', function () {
    player1.checkVolumeOn()
    browser.sleep(100)
    player1.checkVolumeOff()
    browser.sleep(1000)
  }) 

  it('Verify all seeAll buttons ', function () {
    seeAll1.checkWork()
    seeAll1.checkChill()
    browser.actions().mouseMove(seeAll1.mostPopular).perform()
    seeAll1.checkHappy()
    browser.actions().mouseMove(seeAll1.albums).perform()
    seeAll1.checkMostPopular()
    // window.scrollTo(0, 1000)
    seeAll1.checkAlbums()
    
  })
})

