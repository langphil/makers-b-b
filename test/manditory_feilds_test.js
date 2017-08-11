var Browser = require ('zombie');
var models = require('../models');
var chai = require('chai');
var expect = chai.expect;

Browser.localhost("test", 3000);


describe('not filling out the form feilds', function(){
  var browser = new Browser();
  beforeEach(function(done) {
    browser.visit('/', done);
    console.log(browser.html("body"))
    });

    it('requires a title to submit', function() {
      browser.fill("title", "Studio Flat in London")
             .pressButton('add');
        expect(browser.html("body")).to.not.include("Your listing has been submitted");
        browser.assert.url({ pathname: '/' });
    });


    it('requires a description to submit', function() {
      browser.fill("description", "A spacious studio flat with easy access to tube station")
             .pressButton('add');
     expect(browser.html("body")).to.not.include("Your listing has been submitted");
     browser.assert.url({ pathname: '/' });
    });
});
