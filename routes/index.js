var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Listing.create({ name: 'Buckingham Palace', text: 'it is a silly place', img: 'image.jpg'});
  console.log('listing created');
  res.render('index', { title: 'Makers BnB' });
});

module.exports = router;
