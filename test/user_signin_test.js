const Browser = require ('zombie');
var models = require('../models');
var chai = require('chai');
var should = chai.should();

Browser.localhost("test", 3000);

const browser = new Browser();

// before(function(done) {
//   browser.visit('/users/new')
//   .then(function() {
//   browser
//     .fill("name", "Sally")
//     .fill("username", "sally123")
//     .fill("email", "sally@gmail.com")
//     .fill("password", "12345")
//     .pressButton('submit');
//   });
//   done();
// });

describe('Sign In', function() {

  before(function(done) {
    browser.visit('sessions/new', done);
  });

  before(function(done) {
    browser
      .fill("username", "sally123")
      .fill("password", "12345")
      .pressButton('submit', done);
  });

  it('allows user to sign in', function(done) {
    // browser.assert.url({ pathname: '/' });
    chai.expect(browser.html("body")).to.include("Welcome sally123!");
    done();
  });
});
