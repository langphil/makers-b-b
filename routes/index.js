var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var body = req.body;
  name = req.session.user.username;
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
  var body = req.body;
  models.User.create({name: body.name, username: body.username, email: body.email, password: body.password}).then(function() {
    res.redirect('/');
  });
});

router.get('/sessions/new', function(req, res, next) {
  res.render('sessions/new');
});

router.post('/sessions', function(req, res) {
  var body = req.body;
  models.User.findOne({ where: { username: body.username } }).then(user => {
    if(user) {
      req.session.user = user;
      console.log(req.session.name);
      res.redirect('/');
    } else {
      res.redirect('/sessions/new');
    }
  });
});




module.exports = router;
