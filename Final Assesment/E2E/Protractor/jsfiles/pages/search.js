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
        this.Logo = protractor_2.element(protractor_2.by.tagName('h1')); // 'Create your first playlist'
        this.Logo2 = protractor_2.element(protractor_2.by.xpath("//h1[@class='_587844af67ca3c14dbf7deb3d5e64f69-scss d437f883c49a54bba1849d160344bcec-scss dc1cc34e88857bd0de4d7a4dc3c528a5-scss']")); // create new playlist
        this.cancelBtn = protractor_2.element(protractor_2.by.css('._56a12d0978529b654affa11ca9390bd7-scss'));
        this.createBtn = protractor_2.element(protractor_2.by.css('._8fec0262e00c11513faad732021ed012-scss'));
        this.userIcon = protractor_2.element(protractor_2.by.className('_4f6cff0f3480e8d8cc3614e38afad63d-scss')); // 'Testing Demo'
        this.backBtn = protractor_2.element(protractor_2.by.className('_66febc2caff37c822a831232b6e73171-scss _7d846137186e6bfd0724a32565d216cb-scss'));
        this.firstAlbum = protractor_2.element(protractor_2.by.className('f79dd23c27c3352da3ac3ba62d78f8ea-scss')); // black lives matter album
        this.firstSong = protractor_2.element(protractor_2.by.className('tracklist-name ellipsis-one-line'));
        this.homeBtn = protractor_2.element(protractor_2.by.className('ellipsis-one-line f92d0df6ae4da826d7d532fbf608d469-scss'));
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
}
exports.Search = Search;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvc2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWlEO0FBRWpELE1BQWEsTUFBTTtJQUFuQjtRQUNFLGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO1FBQ2hELGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFBO1FBQzNFLGVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO1FBQzNFLG1CQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQTtRQUMvRSxpQkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUE7UUFDN0UsZUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxS0FBcUssQ0FBQyxDQUFDLENBQUE7UUFDck0saUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFBO1FBQzlFLGlCQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQTtRQUM5RSxhQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlIQUF5SCxDQUFDLENBQUMsQ0FBQTtRQUN2SixtQkFBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUE7UUFDOUQsU0FBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUMsK0JBQStCO1FBQ2hFLFVBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUlBQW1JLENBQUMsQ0FBQyxDQUFBLENBQUMsc0JBQXNCO1FBQ3JMLGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFBO1FBQ3RFLGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFBO1FBQ3RFLGFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFBLENBQUEsaUJBQWlCO1FBQzNGLFlBQU8sR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsK0VBQStFLENBQUMsQ0FBQyxDQUFBO1FBQy9HLGVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBLENBQUEsMkJBQTJCO1FBQ3RHLGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFBO1FBQ3JFLFlBQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMseURBQXlELENBQUMsQ0FBQyxDQUFBO0lBaUI1RixDQUFDO0lBZkMsY0FBYztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDeEIsQ0FBQztDQUNGO0FBcENELHdCQW9DQyJ9