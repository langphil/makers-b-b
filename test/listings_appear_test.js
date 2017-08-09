const Browser = require ('zombie');
var models = require('../models');
var chai = require('chai');
var should = chai.should();

Browser.localhost("test", 3000);

describe('User can see home page', function(){

  const browser = new Browser();

  before(function(done) {
    models.Listing.create({name: "Studio Flat in London", text: "description"}, done);
    models.Listing.create({name: "The Fish Market", text: "description"}, done);
    browser.visit('/', done);
  });

  it('should appear on the main page', function(done) {
    chai.expect(browser.html("body")).to.include("Studio Flat in London")
    chai.expect(browser.html("body")).to.include("The Fish Market")
    chai.expect(browser.html("body")).to.not.include("Crap Flat")
    done();
  });

  after(function() {
    models.sequelize.truncate();
  });
});
