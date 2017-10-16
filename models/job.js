var mongoose = require('mongoose');
var jobSchema = new mongoose.Schema({
  title: {type: String, required: true},
  companyName: String,
  location: String,
  hours: Number,
  meta: {
    contactPerson: String,
    contactEmail: String
  }
});

var Job = mongoose.model('Job', jobSchema);

module.exports = Job;
