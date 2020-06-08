/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { browser, element, by, protractor, Browser } from 'protractor'
import { Playlist } from '../pages/Playlist'

// eslint-disable-next-line no-undef
describe('Player Test ', function () {
  const playlist1 = new Playlist()

  beforeEach(function () {
    (global as any).isAngularSite(false)
  })

  it('login test ==> ', async function () {
    browser.get('https://open.spotify.com/')
    browser.sleep(50)
    playlist1.clickLogin()
    browser.sleep(50)
    playlist1.UsernameTextBox.sendKeys(playlist1.User1Mail)
    playlist1.PasswordTextBox.sendKeys(playlist1.User1Password)
    // playlist1.clickRemember()
    playlist1.clickLog()
    browser.sleep(20)
    playlist1.clickonUserIcon()
    browser.sleep(20)
    expect<any>(await playlist1.userIcon.getAttribute('title')).toContain('Testing Demo')
  })

  it('Create Playlist from Your Library ==> ', async function () {
    playlist1.clickYourLibrary()
    browser.sleep(100)
    expect<any>(await playlist1.Logo.getText()).toContain('Create your first playlist')
    playlist1.clickCreateYourPlaylistLibrary()
    playlist1.playlistNameTextBox.sendKeys('first playlist')
    playlist1.clickCreate()
    browser.sleep(200)
  })
})
