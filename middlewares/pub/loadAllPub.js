var requireOption = require('../common').requireOption;

/**
 *Load all pub from db.
 */
module.exports = function (objectRepository) {

    var pubModel = requireOption(objectRepository, 'pubModel');

    return function (req, res, next) {
        var name = "", adress = "";
        if (req.body.name)
            name = req.body.name;
        if (req.body.adress)
            adress = req.body.adress;
        var regexpname = new RegExp("^"+ name);
        var regexpadress = new RegExp("^"+ adress);
        pubModel.find({name : { $regex:regexpname }, adress : { $regex:regexpadress }}, function (err, result) {
            res.tpl.pubs = result;
            return next();
        });

    };
};