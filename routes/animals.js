var express = require('express');
var router = express.Router();

/* GET animals listing. */
router.get('/', function(req, res, next) {
  res.send({name: 'tiger'});
});

module.exports = router;
