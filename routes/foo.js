var express = require('express');
var mongoose = require('mongoose');
var Foo = require('../models/foo')
var router = express.Router();

/* GET foo. */
router.get('/', function(req, res, next) {
  res.send(`Hitting the '/foo' route`)
});

module.exports = router;
