var requireOption = require('../common').requireOption;

/**
 * Save pub to db. Redirect to /details/:id
 */
module.exports = function (objectRepository) {

    //var pubModel = requireOption(objectRepository, 'pubModel');

    return function (req, res, next) {

        return next();
    };
};