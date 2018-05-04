var Schema = require('mongoose').Schema;
var db = require('../config/db');

var User = db.model('User', {
    username: String,
    email: String,
    password: String,
    phone: String,
    role : String,
    profilImgPath: String,
    pubs : [{
        type: Schema.Types.ObjectId,
        ref: 'Pub'
    }],
    _ratings :  [{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }]
});

module.exports = User;