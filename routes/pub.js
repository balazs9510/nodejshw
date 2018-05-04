var authMW = require('../middlewares/generic/auth');
var renderMW = require('../middlewares/generic/render');
var checkPubMW = require('../middlewares/pub/checkPub');
var savePubMW = require('../middlewares/pub/savePub');
var loadPubMW = require('../middlewares/pub/loadPub');
var deletePubMW = require('../middlewares/pub/deletePub');
var loadAllPubMW = require('../middlewares/pub/loadAllPub');

var userModel = require('../models/user');
var pubModel = require('../models/pub');
module.exports = function (app) {
    var objectRepository = {
        userModel: userModel,
        pubModel : pubModel
    };
    /**
     * Render new pub view.
     */
    app.get('/pub/add',
        authMW(objectRepository),
        renderMW(objectRepository, 'pub_create')
    );
    /**
     * Create a new pub.
     */
    app.post('/pub/add',
        authMW(objectRepository),
        checkPubMW(objectRepository),
        savePubMW(objectRepository)
    );
    /**
     * Return a pub detail view.
     */
    app.get('/pub/detail/:id',
        authMW(objectRepository),
        loadPubMW(objectRepository),
        renderMW(objectRepository, 'pub_detail')
    );
    /**
     * Delete a pub with id.
     */
    app.get('/pub/del/:id',
        authMW(objectRepository),
        loadPubMW(objectRepository),
        deletePubMW(objectRepository)
    );
    /**
     * Render pub modify view.
     */
    app.get('/pub/mod/:id',
        authMW(objectRepository),
        loadPubMW(objectRepository),
        renderMW(objectRepository, 'pub_edit')
    );
    /** 
     * Modify a pub with id.
     *  */
    app.post('/pub/mod/:id',
        authMW(objectRepository),
        loadPubMW(objectRepository),
        checkPubMW(objectRepository),
        savePubMW(objectRepository),
    );
    /**
     * Get all pub.
     */
    app.use('/pub',
        authMW(objectRepository),
        loadAllPubMW(objectRepository),
        renderMW(objectRepository, 'pub_search')
    );
}