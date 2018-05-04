var requireOption = require('../common').requireOption;

/**
 * Save a rating to db.
 */
module.exports = function (objectRepository) {

    var ratingModel = requireOption(objectRepository, 'ratingModel');
    var pubModel =  requireOption(objectRepository, 'pubModel');
    var userModel =  requireOption(objectRepository, 'userModel');
    return function (req, res, next) {
        var pubId = req.params.id;
        pubModel.findOne({
            _id : pubId
        }, function(err, result){
            var newRating = new ratingModel();
            newRating.text = req.body.rating_text;
            newRating.value = req.body.rating_value;
            newRating._pub = result;
            result._ratings.push(newRating);
            var currentUser = res.tpl.user;
            currentUser._ratings.push(newRating);
            newRating.save();
            currentUser.save();
            result.save();
            res.redirect('/pub/detail/'+ pubId);
        })
    };
};