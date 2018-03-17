var requireOption = require('../common').requireOption;

/**
 * Load a user's ratings from db.
 */
module.exports = function (objectRepository) {

    //var ratingModel = requireOption(objectRepository, 'ratingModel');

    return function (req, res, next) {

        return next();
    };
};