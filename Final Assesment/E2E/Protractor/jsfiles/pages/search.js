"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Search {
    constructor() {
        this.searchBtn = protractor_1.element(protractor_1.by.xpath("//a[.='Search']"));
        this.searchBar = protractor_1.element(protractor_1.by.className('_2f8ed265fb69fb70c0c9afef329ae0b6-scss'));
        this.searchSong = protractor_1.element(protractor_1.by.className('f79dd23c27c3352da3ac3ba62d78f8ea-scss'));
        this.yourLibraryBtn = protractor_1.element(protractor_1.by.className('icon collection-icon'));
        this.createPlaylistHomeBtn = protractor_1.element(protractor_1.by.className('fcdf941c8ffa7d0878af0a4f04aa05bb-scss'));
        this.LikedSongBtn = protractor_1.element(protractor_1.by.className('ce8ac4aabb35a48dc93a67cf4fedd99c-scss'));
        this.Logo = protractor_1.element(protractor_1.by.tagName('h1')); // 'Create your first playlist'
        this.Logo2 = protractor_1.element(protractor_1.by.xpath("//h1[@class='_587844af67ca3c14dbf7deb3d5e64f69-scss d437f883c49a54bba1849d160344bcec-scss dc1cc34e88857bd0de4d7a4dc3c528a5-scss']")); // create new playlist
        this.createPlaylistLibrary = protractor_1.element(protractor_1.by.className('_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss _4a19a959428c34075eef50bd44ab468f-scss'));
        this.playlistNameTextBox = protractor_1.element(protractor_1.by.className('inputBox-input'));
        this.cancelBtn = protractor_1.element(protractor_1.by.css('._56a12d0978529b654affa11ca9390bd7-scss'));
        this.createBtn = protractor_1.element(protractor_1.by.css('._8fec0262e00c11513faad732021ed012-scss'));
        this.userIcon = protractor_1.element(protractor_1.by.className('_4f6cff0f3480e8d8cc3614e38afad63d-scss')); // 'Testing Demo'
        this.demo1AfterCreatingPlaylist = protractor_1.element(protractor_1.by.className('_77ccab85bb794646035d39a339c41781-scss'));
        this.demo1 = protractor_1.element(protractor_1.by.className('_9ec767915488d36334c49b036bebcaea-scss'));
        this.moreOptions1 = protractor_1.element(protractor_1.by.className('a319647e0b4638c35cbe1cc56bbe8710-scss'));
        // moreOptions1 = element(by.className('react-contextmenu-wrapper'))
        this.deleteOption = protractor_1.element(protractor_1.by.xpath("//nav[@class='react-contextmenu react-contextmenu--visible']/div[.='Delete']"));
        this.deleteLogo = protractor_1.element(protractor_1.by.className('_587844af67ca3c14dbf7deb3d5e64f69-scss d437f883c49a54bba1849d160344bcec-scss dc1cc34e88857bd0de4d7a4dc3c528a5-scss'));
        this.deleteBtn = protractor_1.element(protractor_1.by.className('_2221af4e93029bedeab751d04fab4b8b-scss _8fec0262e00c11513faad732021ed012-scss'));
        this.demo2 = protractor_1.element(protractor_1.by.className('_9ec767915488d36334c49b036bebcaea-scss'));
        // options2=
        this.demo3 = protractor_1.element(protractor_1.by.className('_9ec767915488d36334c49b036bebcaea-scss'));
        // options3
        this.backBtn = protractor_1.element(protractor_1.by.className('_66febc2caff37c822a831232b6e73171-scss _7d846137186e6bfd0724a32565d216cb-scss'));
        this.firstAlbum = protractor_1.element(protractor_1.by.className('f79dd23c27c3352da3ac3ba62d78f8ea-scss')); // black lives matter album
        this.firstSong = protractor_1.element(protractor_1.by.className('tracklist-name ellipsis-one-line'));
        this.homeBtn = protractor_1.element(protractor_1.by.className('ellipsis-one-line f92d0df6ae4da826d7d532fbf608d469-scss'));
        this.addToPlaylist = protractor_1.element(protractor_1.by.xpath("//nav[@class='react-contextmenu react-contextmenu--visible']/div[.='Add to Playlist']"));
        this.addPlaylistIcon = protractor_1.element(protractor_1.by.className('mo-coverArt-hover')); // Demo1
        this.chooseDemo1fromSideBar = protractor_1.element(protractor_1.by.className('RootlistItemPlaylist__text-wrapper'));
        this.songOptions = protractor_1.element(protractor_1.by.className('spoticon-ellipsis-16'));
        this.removeSong = protractor_1.element(protractor_1.by.xpath("//div[.='Remove from this Playlist']"));
    }
    clicksearchBtn() {
        this.searchBtn.click();
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
exports.Search = Search;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvc2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWlEO0FBRWpELE1BQWEsTUFBTTtJQUFuQjtRQUNFLGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO1FBQ2hELGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFBO1FBQzNFLGVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO1FBQzNFLG1CQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQTtRQUM5RCwwQkFBcUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO1FBQ3RGLGlCQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQTtRQUM3RSxTQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQywrQkFBK0I7UUFDaEUsVUFBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtSUFBbUksQ0FBQyxDQUFDLENBQUEsQ0FBQyxzQkFBc0I7UUFDckwsMEJBQXFCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHNIQUFzSCxDQUFDLENBQUMsQ0FBQTtRQUNySyx3QkFBbUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO1FBQzdELGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxH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