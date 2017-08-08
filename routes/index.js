var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Makers BnB' });
});

router.post('/', function(req, res) {
  res.redirect('/listings/submitted');
});

router.get('/listings/submitted', function(req, res, next) {
  res.render('listings/submitted');
})

module.exports = router;
