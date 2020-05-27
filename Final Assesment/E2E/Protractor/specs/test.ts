/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { browser, element, by, protractor, Browser } from 'protractor'

// eslint-disable-next-line no-undef
describe('Player Test ', function () {
  beforeEach(function () {
    (global as any).isAngularSite(false)
   })

  it('Playlist ', function () {
    browser.get('https://open.spotify.com/')
    browser.sleep(3000)
     const login1 = element(by.className('_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss'))
    login1.click() 
    browser.sleep(2000)
  })
})
