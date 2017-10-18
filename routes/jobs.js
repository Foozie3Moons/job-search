var express = require('express');
var mongoose = require('mongoose');
var Job = require('../models/job')
var router = express.Router();

/* GET foo. */
router.get('/', function(req, res, next) {
  Job.find({}, function(err, jobs) {
    if (err) return console.log(err);
    res.send(jobs)
  })
});

router.post('/', function(req, res, next) {
  Job.create({
    title: req.body.title,
    company: req.body.company,
    location: req.body.location,
    website: req.body.website,
    date: new Date(),
    meta: {
      comments: req.body.comments
    }
  }, function(err, jobs) {
    if (err) return console.log(err);
    res.send('success');
  })

})

module.exports = router;
