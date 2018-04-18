/**
 * Register
 */
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var UserModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        console.log(req.body);
        if ((typeof req.body === 'undefined') || (typeof req.body.user_name === 'undefined') ||
            (typeof req.body.user_mail === 'undefined') || (typeof req.body.user_pw === 'undefined')) {
                console.log("Body param üres");
            return next();
        }
        if(req.user_pw != req.user_repw){
            res.tpl.error.push('Your passwords does not match');
            return next();
        }

        //lets find the user
        UserModel.findOne({
            email: req.body.user_mail
        }, function (err, result) {

            if ((err) || (result)) {
                res.tpl.error.push('Your email address is already registered!');
                return next();
            }

            //create user
            var newUser = new UserModel();
            newUser.username = req.body.user_name;
            newUser.email = req.body.user_mail;
            newUser.password = req.body.user_pw;
            newUser.phone = req.body.user_phone;
            newUser.save(function (err) {
                req.session.userid = newUser._id;
                return res.redirect('/');
            });
        });
    };
};