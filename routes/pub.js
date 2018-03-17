var authMW = require('../middlewares/generic/auth');
var renderMW = require('../middlewares/generic/render');
var checkUserIdentityMW = require('../middlewares/generic/checkUserIdentity');

var checkPubMW = require('../middlewares/pub/checkPub');
var savePubMW = require('../middlewares/pub/savePub');
var loadPubMW = require('../middlewares/pub/loadPub');
var deletePubMW = require('../middlewares/pub/deletePub');
var loadAllPubMW = require('../middlewares/pub/loadAllPub');

module.exports = function (app) {
    var objectRepository = {};
    /**
     * Render new pub view.
     */
    app.get('/pub/add',
        authMW(objectRepository),
        renderMW(objectRepository, 'padd')
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
        renderMW(objectRepository, 'pdetail')
    );
    /**
     * Delete a pub with id.
     */
    app.post('/pub/del/:id',
        authMW(objectRepository),
        checkUserIdentityMW(objectRepository),
        loadPubMW(objectRepository),
        deletePubMW(objectRepository)
    );
    /**
     * Render pub modify view.
     */
    app.get('/pub/mod/:id',
        authMW(objectRepository),
        checkUserIdentityMW(objectRepository),
        loadPubMW(objectRepository),
        renderMW(objectRepository, 'pmodd')
    );
    /** 
     * Modify a pub with id.
     *  */
    app.post('/pub/mod/:id',
        authMW(objectRepository),
        checkUserIdentityMW(objectRepository),
        loadPubMW(objectRepository),
        checkPubMW(objectRepository),
        savePubMW(objectRepository),
    );
    /**
     * Get all pub.
     */
    app.get('/pub',
        authMW(objectRepository),
        loadAllPubMW(objectRepository),
        renderMW(objectRepository, 'getAll')
    );
}