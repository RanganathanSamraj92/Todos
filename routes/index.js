var express = require('express');
var router = express.Router();
var welcomeMsg = require('../welcome')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express API' ,hint:welcomeMsg});
});

/* GET home page. */
router.get('/authenticate', function(req, res, next) {
  res.render('index', { title: 'authenticate API' ,hint:welcomeMsg});
});



module.exports = router;
