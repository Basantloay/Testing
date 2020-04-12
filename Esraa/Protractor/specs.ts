var protractor_1 = require("protractor");

/**
 * This File tests HomePgae and ViewArtist
 */

describe('Home Tests', () => {
    
/**
 * This Describe function tests HomePage
 * @returns several test cases
 */

        protractor_1.browser.get('http://localhost:4200/mayestro/home');
        it('Test Home Text', () => {

            var li = protractor_1.element(protractor_1.by.xpath("//a[contains(.,'Home')]"));
            expect(li.getText()).toContain('Home');
            
        });

        it('Test Search Text', () => {
    
            var li = protractor_1.element(protractor_1.by.xpath("//a[contains(.,'Search')]"));
            expect(li.getText()).toContain('Search');
        });
        it('Test Library Text', () => {
        
            var li = protractor_1.element(protractor_1.by.xpath("//a[contains(.,'Your Library')]"));
            expect(li.getText()).toContain('Your Library');
        });

        it('Test Playlist Text', () => {
            
            var li = protractor_1.element(protractor_1.by.xpath("//a[contains(.,'Create PlayList')]"));
            expect(li.getText()).toContain('Create PlayList');
        });

        it('Test Liked Songs Text', () => {
        
            var li = protractor_1.element(protractor_1.by.xpath("//a[contains(.,'Liked Songs')]"));
            expect(li.getText()).toContain('Liked Songs');
        });

        it ('test that when user click home button, it returns home url ',() => {
            protractor_1.browser.waitForAngularEnabled(false);
            var li = protractor_1.element(protractor_1.by.xpath("//a[contains(.,'Home')]")).click();
            protractor_1.browser.waitForAngularEnabled(true);
            expect(protractor_1.browser.getCurrentUrl()).toBe('http://localhost:4200/mayestro/home');
        });

       
        it('Test Home Scroll Down',() => {
            protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function(){
                console.log('++++++SCROLLED Down+++++');
            });
        });


        it('Test Home Scroll Up',() => {
            protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function(){
                console.log('++++++SCROLLED UP+++++');
            });
        });


        describe('View artist', () => {
     
    
            it('Test Artist-1 click', () => {
                protractor_1.browser.get('http://localhost:4200/mayestro/home');
                protractor_1.browser.waitForAngularEnabled(false);
                var Artist1 = protractor_1.element(protractor_1.by.xpath("//a[@href='/mayestro/artist/3xl0OvcSlc9Mwe5ToaFtD3']")).click();
                protractor_1.browser.waitForAngularEnabled(true);
                protractor_1.browser.get('http://localhost:4200/mayestro/artist/3xl0OvcSlc9Mwe5ToaFtD3/overview');
                let artisttitle=protractor_1.browser.element(protractor_1.by.xpath("//h1[@class='ArtistName']"))
                expect(artisttitle.getText()).toEqual("Amr Diab");
                
    
            });
            it('Test Artist-2 click', () => {
                protractor_1.browser.get('http://localhost:4200/mayestro/home'); 
                protractor_1.browser.waitForAngularEnabled(false);
                var Artist1 = protractor_1.element(protractor_1.by.xpath("//a[contains(.,'Tamer Hosni')]")).click();
                protractor_1.browser.waitForAngularEnabled(true);
                protractor_1.browser.get('http://localhost:4200/mayestro/artist/3xl0OvcSlc9Mwe5ToaFtD3/overview');
                let artisttitle=protractor_1.browser.element(protractor_1.by.xpath("//h1[@class='ArtistName']"))
                expect(artisttitle.getText()).toEqual("Tamer Hosni");
            });
            protractor_1.browser.sleep(6000);
    
          
      });


        

      
});
