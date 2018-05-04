var requireOption = require('../common').requireOption;

/**
 * Load a pub from db.
 */
module.exports = function (objectRepository) {

    var pubModel = requireOption(objectRepository, 'pubModel');

    return function (req, res, next) {
        pubModel.findOne({
           _id : req.params.id
        }, function (err, result) {

            if (err) {
                console.log(err);
                res.tpl.error.push('No pub with this id');
                return next();
            }
            console.log(result);
            res.tpl.pub = result; 
            return next();
        }).populate('_ratings');
        
    };
};