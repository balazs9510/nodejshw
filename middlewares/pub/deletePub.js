var requireOption = require('../common').requireOption;

/**
 * Delete a pub from db with :id
 */
module.exports = function (objectRepository) {

    var pubModel = requireOption(objectRepository, 'pubModel');

    return function (req, res, next) {
        var pub = res.tpl.pub;
        pub.remove({ _id: pub._id }, function (err) {
            if (err)
                console.log('Kocsma törlés hiba: ' + err);
            return res.redirect('/profil');
        })

    };
};