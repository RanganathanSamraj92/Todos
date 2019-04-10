var express = require('express');
var router = express.Router();
var welcomeMsg = require('../welcome')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Format API' ,hint:welcomeMsg});
});

/* GET home page. */
router.get('/formated', function(req, res, next) {
  res.send({"status":"true","msg":"success"});
});



module.exports = router;
