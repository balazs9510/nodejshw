var requireOption = require('../common').requireOption;

/**
 *Load all pub from db.
 */
module.exports = function (objectRepository) {

    //var pubModel = requireOption(objectRepository, 'pubModel');

    return function (req, res, next) {
        res.tpl.pubs = objectRepository.pubs;
        return next();
    };
};