var requireOption = require('../common').requireOption;

/**
 * Load a pub from db.
 */
module.exports = function (objectRepository) {

    //var pubModel = requireOption(objectRepository, 'pubModel');

    return function (req, res, next) {
        var pub = objectRepository.pubs[req.params.id -1 ];
        console.log(pub);
        res.tpl.pub = pub; 
        return next();
    };
};