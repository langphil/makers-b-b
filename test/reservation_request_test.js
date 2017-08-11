var Browser = require ('zombie');
var models = require('../models');
var chai = require('chai');
var expect = chai.expect;

Browser.localhost("test", 3000);

describe('Requesting a reservation', function(){
  var browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  it('shows a form when the user clicks on the reserve button', function() {
    browser.pressButton('Reserve');
    expect(browser.html("body")).to.include("Request a booking");
  });
});
