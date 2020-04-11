import { browser, element, by } from 'protractor'

export class seeAll {
    homeURL : string ='http://localhost:4200/mayestro/home'
    seeAllArr = element.all(by.className('seeall'))
    leftBtn = element(by.className('fa fa-chevron-left backicon1'))
    rightBtn = element(by.className('fa fa-chevron-right'))
    work=element(by.xpath("//mini-card-viewer[2]//a[.='SEE ALL']"))
    chill=element(by.xpath("//mini-card-viewer[1]//a[.='SEE ALL']"))
    happy=element(by.xpath("//mini-card-viewer[3]//a[.='SEE ALL']"))
    mostPopular=element(by.xpath("//mini-card-viewer[4]//a[.='SEE ALL']"))
    albums=element(by.xpath("//mini-card-viewer[5]//a[.='SEE ALL']"))
    artists=element(by.xpath("//mini-card-viewer[6]//a[.='SEE ALL']"))
    footer=element(by.xpath("//a[@href='/mayestro/artist/3xl0OvcSlc9Mwe5ToaFtD3']/div[@class='card-body p-0 pt-2']"))
    seeCount () {
      return this.seeAllArr.count()
    }

    checkWork () {
      this.work.click()
      browser.sleep(100)
      this.leftBtn.click()
      browser.sleep(100)
    }

    checkChill () {
      this.chill.click()
      browser.sleep(1000)
      expect<any>(element(by.xpath("//div[@class='catName']")).isPresent()).toBe(true)
      this.leftBtn.click()
      browser.sleep(1000)
    }

    checkHappy () {
      this.happy.click()
      browser.sleep(1000)
      expect<any>(element(by.xpath("//div[@class='catName']")).isPresent()).toBe(true)
      this.leftBtn.click()
      browser.sleep(1000)
    }

    checkMostPopular () {
      this.mostPopular.click()
      browser.sleep(1000)
      expect<any>(element(by.xpath("//div[@class='catName']")).isPresent()).toBe(true)
      this.leftBtn.click()
      browser.sleep(1000)
    }

    checkAlbums () {
      this.albums.click()
      browser.sleep(1000)
      expect<any>(element(by.xpath("//div[@class='catName']")).isPresent()).toBe(true)
      this.leftBtn.click()
      browser.sleep(1000)
    }

    checkartists () {
      this.artists.click()
      browser.sleep(1000)
      expect<any>(element(by.xpath("//div[@class='catName']")).isPresent()).toBe(true)
      this.leftBtn.click()
      browser.sleep(1000)
    }

}
