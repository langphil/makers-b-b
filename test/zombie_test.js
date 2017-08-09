const Browser = require ('zombie');
var models = require('../models');
var chai = require('chai');
// var chaiHttp = require('chai-http');
var should = chai.should();
// chai.use(chaiHttp);

Browser.localhost("test", 3000);

describe('User can see home page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('submittable a form', function() {

    before(function(done) {
      browser
          .fill("title", "Studio Flat in London")
          .fill("description", "A spacious studio flat with easy access to tube station")
          .pressButton('add', done);
      });

      it('should confirm a submission', function() {
        browser.assert.text('p', "Your listing has been submitted");
      });

      it('should add data to the database', function() {
        chai.expect(models.Listing.findOne({name: "Studio Flat in London"})).to.exist;
      });

      after(function() {
        models.sequelize.truncate();
      });
    });
  });
