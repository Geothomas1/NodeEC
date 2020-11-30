var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { value: 'You Are in About Page' });
});

module.exports = router;
