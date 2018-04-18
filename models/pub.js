var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Pub = db.model('Pub', {
    name : String,
    adress: String,
    phone: String,
    email : String,
    web : String,
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