var requireOption = require('../common').requireOption;

/**
 * Save pub to db. Redirect to /details/:id
 */
module.exports = function (objectRepository) {

    var pubModel = requireOption(objectRepository, 'pubModel');

    return function (req, res, next) {
        var newPub;
        var currentUser = res.tpl.user;
        if (res.tpl.pub == null) {
            newPub = new pubModel();
            newPub.name = req.body.name;
            newPub.adress = req.body.adress;
            newPub.phone = req.body.phone;
            newPub.email = req.body.email;
            newPub.web = req.body.web;
            newPub._user = req.session.userid;
            newPub.save();
            currentUser.pubs.push(newPub);
            currentUser.save();
        }

        else {
            newPub = res.tpl.pub;
            newPub.name = req.body.name;
            newPub.adress = req.body.adress;
            newPub.phone = req.body.phone;
            newPub.email = req.body.email;
            newPub.web = req.body.web;
            newPub.save();
        }
        return res.redirect('/profil');
    };
};