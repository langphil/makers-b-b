const Browser = require ('zombie');
var models = require('../models');
var chai = require('chai');
var should = chai.should();

Browser.localhost("test", 3000);

const browser = new Browser();

before(function(done) {
  browser.visit('/users/new', done);
});

describe('User', function() {

  before(function(done) {
    browser
      .fill("name", "Sally")
      .pressButton('submit', done);
  });

  it('can be created', function() {
    chai.expect(browser.html("body")).to.include("Welcome Sally!")
  });
});
