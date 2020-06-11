/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { browser, element, by, protractor, Browser } from 'protractor'
import { Playlist } from '../pages/Playlist'
import { Search } from '../pages/search'

// eslint-disable-next-line no-undef
describe('Like Song and Follow Artist. \n', function () {
  const playlist3 = new Playlist()
  const search3 = new Search()

  beforeEach(function () {
    (global as any).isAngularSite(false)
  })

  it('Like a song', async function () {
    playlist3.homeBtn.click()
    browser.sleep(500)
    search3.clicksearchBtn()
    browser.sleep(50)
    search3.searchBar.sendKeys("it's you")
    browser.sleep(1500)
    search3.searchSong.click()
    browser.sleep(150)
    playlist3.likeSong.click()
    browser.sleep(150)
    playlist3.homeBtn.click()
    browser.sleep(150)
    playlist3.LikedSongBtn.click()
    browser.sleep(150)
    expect<any>(await playlist3.likedSong.getText()).toContain("It's You")
    browser.sleep(150)
  })

  it('Follow Artist', async function () {
    search3.homeBtn.click()
    browser.sleep(500)
    search3.clicksearchBtn()
    browser.sleep(50)
    search3.searchBar.sendKeys('ali gatie ')
    browser.sleep(1500)
    search3.searchArtist.click()
    browser.sleep(50)
    playlist3.FollowBtn.click()
    browser.sleep(150)
    search3.homeBtn.click()
    playlist3.ArtistsBtn.click()
    browser.sleep(150)
    expect<any>(await playlist3.ArtistName.getText()).toContain('Ali Gatie')
    browser.sleep(150)
  })
})
