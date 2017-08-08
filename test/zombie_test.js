const Browser = require ('zombie');

Browser.localhost("test", 3000);

describe('User can see home page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('submittable a form', function() {

    before(function(done) {
      browser
          .fill("property-title", "Studio Flat in London")
          .fill("property-description", "A spacious studio flat with easy access to tube station")
          .pressButton('add', done);
    });

      it('should confirm a submission', function() {
        browser.assert.text('p', "Your listing has been submitted")
      });
    });
  });
