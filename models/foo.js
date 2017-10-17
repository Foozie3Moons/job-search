var mongoose = require('mongoose');

var fooSchema = new mongoose.Schema({
  bar: {type: String, required: true},
  meta: {
    isFoo: Boolean
  }
});

var Foo = mongoose.model('Foo', fooSchema);

module.exports = Foo;
