var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
  title: {type: String, required: true},
  company: {type: String, required: true},
  location: String,
  date: Date,
  website: String,
  meta: {
    comments: Array
  }
});

var Job = mongoose.model('Job', jobSchema);

module.exports = Job;
