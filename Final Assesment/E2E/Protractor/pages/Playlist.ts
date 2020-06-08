import { browser, element, by } from 'protractor'

export class Playlist {
  User1Mail : string = 'testinge2e20@gmail.com'
  User1Password : string = 'E2E123456'
  User2Mail : string = 'testinge2e220@gmail.com'
  User2Password : string = 'E2E123456'
  loginBtn = element(by.className('_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss'))
  UsernameTextBox = element(by.id('login-username'))
  PasswordTextBox = element(by.id('login-password'))
  rememberMeBtn = element(by.className('control-indicator'))
  logBtn = element(by.className('btn btn-block btn-green ng-binding'))
  yourLibraryBtn = element(by.className('icon collection-icon'))
  createPlaylistHomeBtn = element(by.className('fcdf941c8ffa7d0878af0a4f04aa05bb-scss'))
  LikedSongBtn = element(by.className('ce8ac4aabb35a48dc93a67cf4fedd99c-scss'))
  Logo = element(by.tagName('h1')) // 'Create your first playlist'
  createPlaylistLibrary = element(by.className('_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss _4a19a959428c34075eef50bd44ab468f-scss'))
  playlistNameTextBox = element(by.className('inputBox-input'))
  cancelBtn = element(by.css('._56a12d0978529b654affa11ca9390bd7-scss'))
  createBtn = element(by.css('._8fec0262e00c11513faad732021ed012-scss'))
  userIcon = element(by.className('_4f6cff0f3480e8d8cc3614e38afad63d-scss'))// 'Testing Demo'
  demo1 = element(by.className('_9ec767915488d36334c49b036bebcaea-scss'))
  moreOptions1 = element(by.className('a319647e0b4638c35cbe1cc56bbe8710-scss'))
  deleteOption = element(by.xpath("//nav[@class='react-contextmenu react-contextmenu--visible']/div[.='Delete']"))
  deleteLogo = element(by.className('_587844af67ca3c14dbf7deb3d5e64f69-scss d437f883c49a54bba1849d160344bcec-scss dc1cc34e88857bd0de4d7a4dc3c528a5-scss'))
  deleteBtn = element(by.className('_2221af4e93029bedeab751d04fab4b8b-scss _8fec0262e00c11513faad732021ed012-scss'))
  demo2 = element(by.className('_9ec767915488d36334c49b036bebcaea-scss'))
  // options2=
  demo3 = element(by.className('_9ec767915488d36334c49b036bebcaea-scss'))
  // options3
  backBtn= element(by.className('_66febc2caff37c822a831232b6e73171-scss _7d846137186e6bfd0724a32565d216cb-scss'))
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
