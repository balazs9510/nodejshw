var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Pub = db.model('Pub', {
    name: String,
    adress: String,
    phone: String,
    email: String,
    web: String,
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _ratings: [{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }],
    coverimg: {
        data: Buffer,
        contentType: String
    },
    images: [{
        data: Buffer,
        contentType: String
    }]

});

module.exports = Pub;