var Browser = require ('zombie');
var models = require('../models');
var chai = require('chai');
var expect = chai.expect;

Browser.localhost("test", 3000);

describe('User can see home page', function() {

  var browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('submitting a form', function() {
    before(function(done) {
      browser
          .fill("title", "10 Downing Street")
          .fill("description", "A spacious studio flat with easy access to tube station")
          .pressButton('add', done);
      });

      it('should confirm a submission', function() {
        browser.assert.url({ pathname: '/listings/submitted' });
        expect(browser.html('p')).to.include("Your listing has been submitted");
      });

      it('should add data to the database', function() {
        expect(models.Listing.findOne({name: "10 Downing Street"})).to.exist;
      });

      after(function() {
        models.sequelize.truncate();
      });
    });
  });
