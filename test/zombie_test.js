const Browser = require ('zombie');

Browser.localhost("test", 3000);

describe('User can see home page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  it('should see welcome page', function() {
    browser.assert.text('p','Welcome to Makers BnB')
  });

});
