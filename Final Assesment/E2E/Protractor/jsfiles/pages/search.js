"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_2 = require("protractor");
class Search {
    constructor() {
        this.searchBtn = protractor_2.element(protractor_2.by.xpath("//a[.='Search']"));
        this.searchBar = protractor_2.element(protractor_2.by.className('_2f8ed265fb69fb70c0c9afef329ae0b6-scss'));
        this.searchSong = protractor_2.element(protractor_2.by.className('f79dd23c27c3352da3ac3ba62d78f8ea-scss'));
        this.seeAllSearches = protractor_2.element(protractor_2.by.className('b8f3b021cf9de8a4fe5a02dd67893f97-scss'));
        this.searchArtist = protractor_2.element(protractor_2.by.className('f79dd23c27c3352da3ac3ba62d78f8ea-scss'));
        this.lastSearch = protractor_2.element(protractor_2.by.xpath("//div[@class='c247a773eeb0d66dcd9c92d83e50c263-scss _244a0ac55904a7c958f4f21be2f7a673-scss']//div[@class='_7ff08f109bdeea13e543460567a16f29-scss']/a[.='Ali Gatie']"));
        this.secondSearch = protractor_2.element(protractor_2.by.xpath("//a[@href='/track/5DqdesEfbRyOlSS3Tf6c29']"));
        this.recentSearch = protractor_2.element(protractor_2.by.className('_5991c352036dcc651a7bec853fd570a8-scss'));
        this.pauseBtn = protractor_2.element(protractor_2.by.xpath("//footer[@class='now-playing-bar-container']//button[@class='control-button spoticon-pause-16 control-button--circled']"));
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
        this.addPlaylistIcon = protractor_2.element(protractor_2.by.className('mo-coverArt-hover')); // Demo1
        this.chooseDemo1fromSideBar = protractor_2.element(protractor_2.by.className('RootlistItemPlaylist__text-wrapper'));
        this.songOptions = protractor_2.element(protractor_2.by.className('spoticon-ellipsis-16'));
        this.removeSong = protractor_2.element(protractor_2.by.xpath("//div[.='Remove from this Playlist']"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvc2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWlEO0FBRWpELE1BQWEsTUFBTTtJQUFuQjtRQUNFLGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO1FBQ2hELGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFBO1FBQzNFLGVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO1FBQzNFLG1CQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQTtRQUMvRSxpQkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUE7UUFDN0UsZUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxS0FBcUssQ0FBQyxDQUFDLENBQUE7UUFDck0saUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFBO1FBQzlFLGlCQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQTtRQUM5RSxhQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlIQUF5SCxDQUFDLENBQUMsQ0FBQTtRQUN2SixtQkFBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUE7UUFDOUQsMEJBQXFCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHVDQUF1QyxDQUFDLENB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