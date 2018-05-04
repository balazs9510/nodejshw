var authMW = require('../middlewares/generic/auth');
var renderMW = require('../middlewares/generic/render');
var checkUserIdentityMW = require('../middlewares/generic/checkUserIdentity');


var loadUserRatingsMW = require('../middlewares/rating/loadUserRatings');
var loadPubRatingsMW = require('../middlewares/rating/loadPubRatings');
var deleteRatingMW = require('../middlewares/rating/deleteRating');
var saveRatingMW = require('../middlewares/rating/saveRating');
var userModel = require('../models/user');
var ratingModel = require('../models/rating');
var pubModel = require('../models/pub');
module.exports = function (app) {
    var objectRepository = {
        userModel: userModel,
        ratingModel: ratingModel,
        pubModel : pubModel
    };
    /**
    * Delete a rating with id.
    */
    app.post('/rating/del/:id',
        authMW(objectRepository),
        checkUserIdentityMW(objectRepository),
        deleteRatingMW(objectRepository)
    );
    /**
     * Create a new rating.
     */
    app.post('/rating/add/pub/:id',
        authMW(objectRepository),
        saveRatingMW(objectRepository)
    );
}