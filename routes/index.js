var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  models.User.findAll().then(function(user) {
    name = user[0].name;
  });
  models.Listing.findAll().then(function(listings) {
    res.render('index', {
      title: 'Makers BnB',
      listings: listings
    });
  });
});

router.post('/', function(req, res) {
  var name = req.body.title;
  var description = req.body.description;
  models.Listing.create({name: name, text: description});
  res.redirect('/listings/submitted');
});


// Listing
router.get('/listings/submitted', function(req, res, next) {
  res.render('listings/submitted');
});

// User Routes
router.get('/users/new', function(req, res) {
  res.render('users/new');
});

router.get('/users', function(req, res) {
  res.redirect('/');
});

router.post('/users', function(req, res) {
  var name = req.body.name;
  models.User.create({name: name}).then(function() {
    res.redirect('/');
  });
});

module.exports = router;
