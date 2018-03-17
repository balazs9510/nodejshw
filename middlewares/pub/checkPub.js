var requireOption = require('../common').requireOption;

/**
 * Check if req.tpl.pub exist
 * -if not init
 * Check if data is valid.
 */
module.exports = function (objectRepository) {

    //var pubModel = requireOption(objectRepository, 'pubModel');

    return function (req, res, next) {

        return next();
    };
};