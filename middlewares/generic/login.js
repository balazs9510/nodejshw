/**
 * Login
 */
var requireOption = require('../common').requireOption;

module.exports = function (objectRepository) {
    var UserModel = requireOption(objectRepository, 'userModel');

    return function (req, res, next) {
        UserModel.findOne({
            email: req.body.email,
            password: req.body.password
        }, function (err, result) {

            if ((err) || (result == null)) {
                console.log(err + "ajaj");
                res.tpl.error.push('There is no user');
                return next();
            }
            req.session.userid = result._id;
            req.session.userrole = result.role;
            return next();
        });
    };

};