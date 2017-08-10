var Browser = require ('zombie');
var models = require('../models');
var chai = require('chai');
var expect = chai.expect;

Browser.localhost("test", 3000);

describe('Listings appear on home page', function(){
  var browser = new Browser();

  describe('List of properties', function() {
    before(function() {
      return models.Listing.create({name: "Studio Flat in London", text: "It's swanky"});
    });

    it('should should show listing titles', function(done) {
      browser.visit('/').then(function() {
        expect(browser.html(".listing-name")).to.include("Studio Flat in London");
        expect(browser.html(".listing-name")).to.not.include("Crap Flat");
      });
      done();
    });

    it('should show listing descriptions', function(done) {
      browser.visit('/').then(function() {
        expect(browser.html(".listing-text")).to.include("It's swanky");
      });
      done();
    });
  });
});
