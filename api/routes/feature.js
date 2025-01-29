var express = require('express');
var router = express.Router();
const colors = require('../data');

/* GET feature page. */
router.get('/:color', function(req, res, next) {
  res.render('feature', { color: req.params.color, colors });
});

module.exports = router;
