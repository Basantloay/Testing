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

  it('login test  ', async function () {
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

  it('Create First Playlist from Your Library ', async function () {
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
  })

  it('Delete playlist from your Library ', async function () {
    // playlist1.demo1.click()
    // browser.sleep(500)
    playlist1.moreOptions1.click()
    browser.sleep(500)
    playlist1.deleteOption.click()
    expect<any>(await playlist1.deleteLogo.getText()).toContain('Do you really want to delete this playlist?')
    playlist1.deleteBtn.click()
    browser.sleep(1000)
  })
})
