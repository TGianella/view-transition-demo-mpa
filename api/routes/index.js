var express = require('express');
var router = express.Router();
const colors = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { colors });
});

module.exports = router;
