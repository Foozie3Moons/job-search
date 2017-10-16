var express = require('express');
var mongoose = require('mongoose');
var Job = require('../models/job')
var router = express.Router();

/* GET job listing. */
router.get('/', function(req, res, next) {
  // Job.create({
  //   title: 'Junior Dev',
  //   companyName: 'Google',
  //   location: 'Kirkland',
  //   meta: {
  //     contactPerson: 'Steve',
  //     contactEmail: 'steve@steve.steve'
  //   }
  // }, function(err, job) {
  //   if (err) console.log(err);
  // });
  Job.find({}, function(err, jobs) {
    if (err) console.log(err);
    res.send(jobs);
  });
});

module.exports = router;
