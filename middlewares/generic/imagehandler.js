var formidable = require('formidable');
var fs = require('fs');
var userModel = require('../../models/user');
module.exports = function (objectRepository) {
    return function (req, res, next) {
        if (typeof req.session.pudid == undefined) { }
        else {
            var fstream;
            var path;
            req.pipe(req.busboy);
            req.busboy.on('file', function (fieldname, file, filename) {
                console.log("Uploading: " + filename);
                path = __dirname +"/files/" + req.session.userid+ filename;
                fstream = fs.createWriteStream(path);
                file.pipe(fstream);
                fstream.on('close', function () {
                    res.redirect('/');
                });
            });
            userModel.findOne({
                _id: req.session.userid 
            }, function (err, result) {
                result.profilImgPath = path;
                result.save(function (err) {});
            });
        }

    };
};