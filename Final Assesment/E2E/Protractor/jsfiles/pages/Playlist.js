"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_2 = require("protractor");
class Playlist {
    constructor() {
        this.User1Mail = 'testinge2e20@gmail.com';
        this.User1Password = '123456E2e';
        this.User2Mail = 'testinge2e220@gmail.com';
        this.User2Password = 'E2E123456';
        this.loginBtn = protractor_2.element(protractor_2.by.className('_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss'));
        this.UsernameTextBox = protractor_2.element(protractor_2.by.id('login-username'));
        this.PasswordTextBox = protractor_2.element(protractor_2.by.id('login-password'));
        this.rememberMeBtn = protractor_2.element(protractor_2.by.className('control-indicator'));
        this.logBtn = protractor_2.element(protractor_2.by.className('btn btn-block btn-green ng-binding'));
        this.yourLibraryBtn = protractor_2.element(protractor_2.by.className('icon collection-icon'));
        this.createPlaylistHomeBtn = protractor_2.element(protractor_2.by.className('fcdf941c8ffa7d0878af0a4f04aa05bb-scss'));
        this.LikedSongBtn = protractor_2.element(protractor_2.by.className('ce8ac4aabb35a48dc93a67cf4fedd99c-scss'));
        this.Logo = protractor_2.element(protractor_2.by.tagName('h1')); // 'Create your first playlist'
        this.Logo2 = protractor_2.element(protractor_2.by.xpath("//h1[@class='_587844af67ca3c14dbf7deb3d5e64f69-scss d437f883c49a54bba1849d160344bcec-scss dc1cc34e88857bd0de4d7a4dc3c528a5-scss']")); // create new playlist
        this.createPlaylistLibrary = protractor_2.element(protractor_2.by.className('_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss _4a19a959428c34075eef50bd44ab468f-scss'));
        this.playlistNameTextBox = protractor_2.element(protractor_2.by.className('inputBox-input'));
        this.cancelBtn = protractor_2.element(protractor_2.by.css('._56a12d0978529b654affa11ca9390bd7-scss'));
        this.createBtn = protractor_2.element(protractor_2.by.css('._8fec0262e00c11513faad732021ed012-scss'));
        this.userIcon = protractor_2.element(protractor_2.by.className('_4f6cff0f3480e8d8cc3614e38afad63d-scss')); // 'Testing Demo'
        this.demo1AfterCreatingPlaylist = protractor_2.element(protractor_2.by.className('_77ccab85bb794646035d39a339c41781-scss'));
        this.demo1 = protractor_2.element(protractor_2.by.className('_9ec767915488d36334c49b036bebcaea-scss'));
        this.moreOptions1 = protractor_2.element(protractor_2.by.className('a319647e0b4638c35cbe1cc56bbe8710-scss'));
        // moreOptions1 = element(by.className('react-contextmenu-wrapper'))
        this.deleteOption = protractor_2.element(protractor_2.by.xpath("//nav[@class='react-contextmenu react-contextmenu--visible']/div[.='Delete']"));
        this.deleteLogo = protractor_2.element(protractor_2.by.className('_587844af67ca3c14dbf7deb3d5e64f69-scss d437f883c49a54bba1849d160344bcec-scss dc1cc34e88857bd0de4d7a4dc3c528a5-scss'));
        this.deleteBtn = protractor_2.element(protractor_2.by.className('_2221af4e93029bedeab751d04fab4b8b-scss _8fec0262e00c11513faad732021ed012-scss'));
        this.demo2 = protractor_2.element(protractor_2.by.className('_9ec767915488d36334c49b036bebcaea-scss'));
        // options2=
        this.demo3 = protractor_2.element(protractor_2.by.className('_9ec767915488d36334c49b036bebcaea-scss'));
        // options3
        this.backBtn = protractor_2.element(protractor_2.by.className('_66febc2caff37c822a831232b6e73171-scss _7d846137186e6bfd0724a32565d216cb-scss'));
        this.firstAlbum = protractor_2.element(protractor_2.by.className('f79dd23c27c3352da3ac3ba62d78f8ea-scss')); // black lives matter album
        this.firstSong = protractor_2.element(protractor_2.by.className('tracklist-name ellipsis-one-line'));
        this.homeBtn = protractor_2.element(protractor_2.by.className('ellipsis-one-line f92d0df6ae4da826d7d532fbf608d469-scss'));
        this.addToPlaylist = protractor_2.element(protractor_2.by.xpath("//nav[@class='react-contextmenu react-contextmenu--visible']/div[.='Add to Playlist']"));
        this.addPlaylistIcon = protractor_2.element(protractor_2.by.xpath("//div[@class='mo-coverArt-hover']")); // Demo1
        this.chooseDemo1fromSideBar = protractor_2.element(protractor_2.by.className('RootlistItemPlaylist__text-wrapper'));
        this.songOptions = protractor_2.element(protractor_2.by.className('spoticon-ellipsis-16'));
        this.removeSong = protractor_2.element(protractor_2.by.xpath("//div[.='Remove from this Playlist']"));
        this.albumOptions = protractor_2.element(protractor_2.by.buttonText('More'));
        this.albumAdd = protractor_2.element(protractor_2.by.xpath('//nav[2]'));
        this.firstTrack = protractor_2.element(protractor_2.by.className("It's You"));
        this.likeAlbum = protractor_2.element(protractor_2.by.className('a8cc695b476965309a30d01880d6cb01-scss'));
    }
    clickonUserIcon() {
        this.userIcon.click();
    }
    clickCancel() {
        this.cancelBtn.click();
    }
    clickCreate() {
        this.createBtn.click();
    }
    clickLogin() {
        this.loginBtn.click();
    }
    clickLog() {
        this.logBtn.click();
    }
    clickRemember() {
        this.rememberMeBtn.click();
    }
    clickYourLibrary() {
        this.yourLibraryBtn.click();
    }
    clickCreateYourPlaylistHome() {
        this.createPlaylistHomeBtn.click();
    }
    clickCreateYourPlaylistLibrary() {
        this.createPlaylistLibrary.click();
    }
    clickLikedSongs() {
        this.LikedSongBtn.click();
    }
}
exports.Playlist = Playlist;
// <button type="button" class="a319647e0b4638c35cbe1cc56bbe8710-scss" title="More"><div class="spoticon-ellipsis-32"></div></button>
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9QbGF5bGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFpRDtBQUVqRCxNQUFhLFFBQVE7SUFBckI7UUFDRSxjQUFTLEdBQVksd0JBQXdCLENBQUE7UUFDN0Msa0JBQWEsR0FBWSxXQUFXLENBQUE7UUFDcEMsY0FBUyxHQUFZLHlCQUF5QixDQUFBO1FBQzlDLGtCQUFhLEdBQVksV0FBVyxDQUFBO1FBQ3BDLGFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsK0VBQStFLENBQUMsQ0FBQyxDQUFBO1FBQ2pILG9CQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtRQUNsRCxvQkFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7UUFDbEQsa0JBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO1FBQzFELFdBQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFBO1FBQ3BFLG1CQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQTtRQUM5RCwwQkFBcUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO1FBQ3RGLGlCQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQTtRQUM3RSxTQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQywrQkFBK0I7UUFDaEUs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