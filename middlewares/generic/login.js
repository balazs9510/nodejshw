/**
 * Login
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        req.session.userid = "kiscica";
        return next();
    };

};