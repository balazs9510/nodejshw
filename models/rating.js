var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Rating = db.model('Rating', {
   text: String,
   value: Number,
   _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  _pub: {
      type: Schema.Types.ObjectId,
      ref: 'pub'
  }
});

module.exports = Rating;