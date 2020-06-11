/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { browser, element, by, protractor, Browser } from 'protractor'
import { Playlist } from '../pages/Playlist'

// eslint-disable-next-line no-undef
describe('Adding and Deleting Songs from Playlist . \n', function () {
  const playlist2 = new Playlist()

  beforeEach(function () {
    (global as any).isAngularSite(false)
  })

  it('Adding song and album to Playlist Demo1.', async function () {
    browser.get('https://open.spotify.com/')
    browser.sleep(500)
    playlist2.firstAlbum.click()
    browser.sleep(50)
    playlist2.moreOptions1.click()
    browser.sleep(100)
    // playlist2.firstSong.click()
    /*browser.sleep(50)
    playlist2.songOptions.click()// it'syou
     browser.sleep(200)*/
    playlist2.addToPlaylist.click()
    browser.sleep(50)
    playlist2.addPlaylistIcon.click()
  })

 /* it('Create First Playlist from Your Library ', async function () {
    playlist1.clickYourLibrary()
    browser.sleep(100)
    expect<any>(await playlist1.Logo.getText()).toContain('Create your first playlist')
    playlist1.clickCreateYourPlaylistLibrary()
    playlist1.playlistNameTextBox.sendKeys('first playlist')
    playlist1.clickCreate()
    browser.sleep(200)
    playlist1.backBtn.click()
    playlist1.demo1.click()
    browser.sleep(500)
    expect<any>(await playlist1.Logo.getText()).toContain('first playlist')
    playlist1.backBtn.click()
    playlist1.backBtn.click()
  })
/*
  it('Delete playlist from your Library ', async function () {
    for (let index = 0; index < 1; index++) { // can be repeated to delete many playlists
      playlist1.clickYourLibrary()
      browser.sleep(100)
      playlist1.demo1.click()
      browser.sleep(500)
      playlist1.moreOptions1.click()
      browser.sleep(700)
      playlist1.deleteOption.click()
      expect<any>(await playlist1.deleteLogo.getText()).toContain('Do you really want to delete this playlist?')
      playlist1.deleteBtn.click()
      playlist1.backBtn.click()
      browser.sleep(100)
    }
  })
  // shouldn't create 2 playlist of same name
  it('Create Demo1 Playlist from Create playlist in Home ', async function () {
    let flag : boolean = false
    for (let index = 0; index < 2; index++) {
      playlist1.createPlaylistHomeBtn.click()
      browser.sleep(100)
      expect<any>(await playlist1.Logo2.getText()).toContain('Create new playlist')
      playlist1.playlistNameTextBox.sendKeys('Demo1')
      playlist1.clickCreate()
      browser.sleep(200)
      expect<any>(await playlist1.Logo.getText()).toContain('Demo1')
      playlist1.backBtn.click()
      index === 1 ? flag = true : flag = false
    }
    if (flag) {
      // console.log('NOT allowed to have 2 playlists of same name')
      playlist1.clickYourLibrary()
      browser.sleep(100)
      playlist1.demo1.click()
      browser.sleep(500)
      playlist1.moreOptions1.click()
      browser.sleep(700)
      playlist1.deleteOption.click()
      expect<any>(await playlist1.deleteLogo.getText()).toContain('Do you really want to delete this playlist?')
      playlist1.deleteBtn.click()
      browser.sleep(100)
      playlist1.backBtn.click()
      browser.sleep(100)
    }
  })*/
})
