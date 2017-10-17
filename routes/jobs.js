var express = require('express');
var mongoose = require('mongoose');
var Job = require('../models/job')
var router = express.Router();

/* GET foo. */
router.get('/', function(req, res, next) {
  res.send(`Hitting the '/jobs' route`)
});

module.exports = router;
