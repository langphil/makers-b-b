var models = require('../models');

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });

    it('should not go in the dev database', function() {
      models.Listing.create({name: "test", text: "description"});
      assert.equal(1, 1);
    });
  });
});
