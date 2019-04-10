var express = require('express');
var router = express.Router();
var welcomeMsg = require('../welcome')

var result = {"status":"true","msg":welcomeMsg};

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.send(result);
});

/* GET home page. */
router.get('/formatted', function(req, res, next) {
  res.send({"status":"true","msg":"success"});
});



module.exports = router;
