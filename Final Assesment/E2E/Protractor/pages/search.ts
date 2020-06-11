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
  createPlaylistHomeBtn = element(by.className('fcdf941c8ffa7d0878af0a4f04aa05bb-scss'))
  LikedSongBtn = element(by.className('ce8ac4aabb35a48dc93a67cf4fedd99c-scss'))
  Logo = element(by.tagName('h1')) // 'Create your first playlist'
  Logo2 = element(by.xpath("//h1[@class='_587844af67ca3c14dbf7deb3d5e64f69-scss d437f883c49a54bba1849d160344bcec-scss dc1cc34e88857bd0de4d7a4dc3c528a5-scss']")) // create new playlist
  createPlaylistLibrary = element(by.className('_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss _4a19a959428c34075eef50bd44ab468f-scss'))
  playlistNameTextBox = element(by.className('inputBox-input'))
  cancelBtn = element(by.css('._56a12d0978529b654affa11ca9390bd7-scss'))
  createBtn = element(by.css('._8fec0262e00c11513faad732021ed012-scss'))
  userIcon = element(by.className('_4f6cff0f3480e8d8cc3614e38afad63d-scss'))// 'Testing Demo'
  demo1AfterCreatingPlaylist = element(by.className('_77ccab85bb794646035d39a339c41781-scss'))
  demo1 = element(by.className('_9ec767915488d36334c49b036bebcaea-scss'))
  moreOptions1 = element(by.className('a319647e0b4638c35cbe1cc56bbe8710-scss'))
  // moreOptions1 = element(by.className('react-contextmenu-wrapper'))
  deleteOption = element(by.xpath("//nav[@class='react-contextmenu react-contextmenu--visible']/div[.='Delete']"))
  deleteLogo = element(by.className('_587844af67ca3c14dbf7deb3d5e64f69-scss d437f883c49a54bba1849d160344bcec-scss dc1cc34e88857bd0de4d7a4dc3c528a5-scss'))
  deleteBtn = element(by.className('_2221af4e93029bedeab751d04fab4b8b-scss _8fec0262e00c11513faad732021ed012-scss'))
  demo2 = element(by.className('_9ec767915488d36334c49b036bebcaea-scss'))
  // options2=
  demo3 = element(by.className('_9ec767915488d36334c49b036bebcaea-scss'))
  // options3
  backBtn= element(by.className('_66febc2caff37c822a831232b6e73171-scss _7d846137186e6bfd0724a32565d216cb-scss'))
  firstAlbum = element(by.className('f79dd23c27c3352da3ac3ba62d78f8ea-scss'))// black lives matter album
  firstSong = element(by.className('tracklist-name ellipsis-one-line'))
  homeBtn = element(by.className('ellipsis-one-line f92d0df6ae4da826d7d532fbf608d469-scss'))
  addToPlaylist = element(by.xpath("//nav[@class='react-contextmenu react-contextmenu--visible']/div[.='Add to Playlist']"))
  addPlaylistIcon = element(by.className('mo-coverArt-hover'))// Demo1
  chooseDemo1fromSideBar = element(by.className('RootlistItemPlaylist__text-wrapper'))
  songOptions = element(by.className('spoticon-ellipsis-16'))
  removeSong = element(by.xpath("//div[.='Remove from this Playlist']"))
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

  clickLogin () {
    this.loginBtn.click()
  }

  clickLog () {
    this.logBtn.click()
  }

  clickRemember () {
    this.rememberMeBtn.click()
  }

  clickYourLibrary () {
    this.yourLibraryBtn.click()
  }

  clickCreateYourPlaylistHome () {
    this.createPlaylistHomeBtn.click()
  }

  clickCreateYourPlaylistLibrary () {
    this.createPlaylistLibrary.click()
  }

  clickLikedSongs () {
    this.LikedSongBtn.click()
  }
}
