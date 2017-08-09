const Browser = require ('zombie');
var models = require('../models');
var chai = require('chai');
var should = chai.should();

Browser.localhost("test", 3000);

describe('User can see home page', function(){

  const browser = new Browser();

  before(function(done) {
    models.Listing.create({name: "Studio Flat in London", text: "description"}, done);
    browser.visit('/', done);
  });

  it('should appear on the main page', function(done) {
    browser.assert.element('ul');
    done();
  });

  after(function() {
    models.sequelize.truncate();
  });
});
