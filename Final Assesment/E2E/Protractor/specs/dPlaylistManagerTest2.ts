/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { browser, element, by, protractor, Browser } from 'protractor'
import { Playlist } from '../pages/Playlist'
import { Search } from '../pages/search'

// eslint-disable-next-line no-undef
describe('Adding and Deleting Songs from Playlist . \n', function () {
  const playlist2 = new Playlist()
  const search2 = new Search()

  beforeEach(function () {
    (global as any).isAngularSite(false)
  })

  it('Adding song and album to Playlist Demo1.', async function () {
    // browser.get('https://open.spotify.com/')
    playlist2.homeBtn.click()
    browser.sleep(500)
    search2.clicksearchBtn()
    browser.sleep(50)
    search2.searchBar.sendKeys("it's you")
    browser.sleep(1500)
    search2.searchSong.click()
    browser.sleep(50)
    playlist2.albumOptions.click()
    browser.sleep(150)
    playlist2.albumAdd.click()
    browser.sleep(150)
    playlist2.addPlaylistIcon.click()
    browser.sleep(1500)
    playlist2.homeBtn.click()
    playlist2.chooseDemo1fromSideBar.click()
    browser.sleep(50)
    expect<any>(await playlist2.firstTrack.getText()).toContain("It's You")
    browser.sleep(50)
  })

  it('Deleting song from Playlist Demo1.', async function () {
    playlist2.chooseDemo1fromSideBar.click()
    browser.sleep(100)
    playlist2.trackOptions.click()
    browser.sleep(100)
    playlist2.removeSong.click()
    playlist2.chooseDemo1fromSideBar.click()
    browser.sleep(100)
    expect<any>(await playlist2.songAfterRemoved.getText()).not.toContain("It's You")
    browser.sleep(100)
  })
  it('Delete playlist from your Library ', async function () {
    for (let index = 0; index < 1; index++) { // can be repeated to delete many playlists
      playlist2.clickYourLibrary()
      browser.sleep(100)
      playlist2.demo1.click()
      browser.sleep(500)
      playlist2.moreOptions1.click()
      browser.sleep(700)
      playlist2.deleteOption.click()
      expect<any>(await playlist2.deleteLogo.getText()).toContain('Do you really want to delete this playlist?')
      playlist2.deleteBtn.click()
      playlist2.backBtn.click()
      browser.sleep(100)
      playlist2.homeBtn.click()
    }
  })
})
