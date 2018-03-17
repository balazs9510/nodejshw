var authMW = require('../middlewares/generic/auth');
var renderMW = require('../middlewares/generic/render');
var checkUserIdentityMW = require('../middlewares/generic/checkUserIdentity');


var loadUserRatingsMW = require('../middlewares/rating/loadUserRatings');
var loadPubRatingsMW = require('../middlewares/rating/loadPubRatings');
var deleteRatingMW = require('../middlewares/rating/deleteRating');
var saveRatingMW = require('../middlewares/rating/saveRating');


module.exports = function (app) {
    var objectRepository = {};
    /**
     * Render a user's all ratings.
     */
    app.get('/rating/user/:id',
        authMW(objectRepository),
        checkUserIdentityMW(objectRepository),
        loadUserRatingsMW(objectRepository),
        renderMW(objectRepository, 'ruall')
    );
    /**
     * Render a pub's with id,  all ratings.
     */
    app.get('/rating/pub/:id',
        authMW(objectRepository),
        loadPubRatingsMW(objectRepository),
        renderMW(objectRepository, 'rpall')
    );
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