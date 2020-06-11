/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { browser, element, by, protractor, Browser } from 'protractor'
import { Search } from '../pages/search'

// eslint-disable-next-line no-undef
describe('searching for songs and artist . \n', function () {
  const search1 = new Search()

  beforeEach(function () {
    (global as any).isAngularSite(false)
  })

  it('Search for Song and open it', async function () {
    browser.get('https://open.spotify.com/')
    browser.sleep(500)
    search1.clicksearchBtn()
    browser.sleep(50)
    search1.searchBar.sendKeys("it's you")
    browser.sleep(500)
    search1.searchSong.click()
    browser.sleep(50)
    expect<any>(await search1.Logo.getText()).toContain('YOU')
    browser.sleep(1000)
  })

  it('Search for Artist', async function () {
    search1.homeBtn.click()
    browser.sleep(500)
    search1.clicksearchBtn()
    browser.sleep(50)
    search1.searchBar.sendKeys('ali gatie')
    browser.sleep(500)
    search1.searchSong.click()
    browser.sleep(50)
    expect<any>(await search1.Logo.getText()).toContain('Ali Gatie')
    browser.sleep(1000)
  })
 
})
