import { browser, element, by } from 'protractor'

export class Search {
  searchBtn = element(by.xpath("//a[.='Search']"))
  searchBar = element(by.className('_2f8ed265fb69fb70c0c9afef329ae0b6-scss'))
  searchSong = element(by.className('f79dd23c27c3352da3ac3ba62d78f8ea-scss'))
  seeAllSearches = element(by.className('b8f3b021cf9de8a4fe5a02dd67893f97-scss'))
  searchArtist = element(by.className('f79dd23c27c3352da3ac3ba62d78f8ea-scss'))
  lastSearch = element(by.xpath("//div[@class='c247a773eeb0d66dcd9c92d83e50c263-scss _244a0ac55904a7c958f4f21be2f7a673-scss']//div[@class='_7ff08f109bdeea13e543460567a16f29-scss']/a[.='Ali Gatie']"))
  secondSearch = element(by.xpath("//a[@href='/track/5DqdesEfbRyOlSS3Tf6c29']"))
  recentSearch = element(by.className('_5991c352036dcc651a7bec853fd570a8-scss'))
  pauseBtn = element(by.xpath("//footer[@class='now-playing-bar-container']//button[@class='control-button spoticon-pause-16 control-button--circled']"))
  yourLibraryBtn = element(by.className('icon collection-icon'))
  Logo = element(by.tagName('h1')) // 'Create your first playlist'
  Logo2 = element(by.xpath("//h1[@class='_587844af67ca3c14dbf7deb3d5e64f69-scss d437f883c49a54bba1849d160344bcec-scss dc1cc34e88857bd0de4d7a4dc3c528a5-scss']")) // create new playlist
  cancelBtn = element(by.css('._56a12d0978529b654affa11ca9390bd7-scss'))
  createBtn = element(by.css('._8fec0262e00c11513faad732021ed012-scss'))
  userIcon = element(by.className('_4f6cff0f3480e8d8cc3614e38afad63d-scss'))// 'Testing Demo'
  backBtn= element(by.className('_66febc2caff37c822a831232b6e73171-scss _7d846137186e6bfd0724a32565d216cb-scss'))
  firstAlbum = element(by.className('f79dd23c27c3352da3ac3ba62d78f8ea-scss'))// black lives matter album
  firstSong = element(by.className('tracklist-name ellipsis-one-line'))
  homeBtn = element(by.className('ellipsis-one-line f92d0df6ae4da826d7d532fbf608d469-scss'))

  clicksearchBtn () {
    this.searchBtn.click()
  }

  clickonUserIcon () {
    this.userIcon.click()
  }

  clickCancel () {
    this.cancelBtn.click()
  }

  clickCreate () {
    this.createBtn.click()
  }
}
