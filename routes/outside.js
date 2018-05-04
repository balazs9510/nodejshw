var loginMW = require('../middlewares/generic/login');
var logoutMW = require('../middlewares/generic/logout');
var mainredirectMW = require('../middlewares/generic/mainredirect');
var renderMW = require('../middlewares/generic/render');
var registerMW = require('../middlewares/generic/register');
var userModel = require('../models/user');
var authMW = require('../middlewares/generic/auth');
var uploadImageMW = require('../middlewares/generic/imagehandler');
module.exports = function (app) {
    var objectRepository = {
        userModel: userModel
    };
    /**
     * Login
     */
    app.post('/login',
        loginMW(objectRepository),
        mainredirectMW(objectRepository)
    );
    /**
     * Login
     */
    app.get('/logout',
        logoutMW(objectRepository),
        mainredirectMW(objectRepository)
    );
    /**
     * Register
     */
    app.get('/register',
        renderMW(objectRepository, 'register')
    );
    /**
    * Register
    */
    app.post('/register',
        registerMW(objectRepository),
        mainredirectMW(objectRepository)
    );
    app.post('/uploadImage',
        uploadImageMW(objectRepository)
    );
    /**
    * Profil
    */
    app.get('/profil',
        authMW(objectRepository),
        renderMW(objectRepository, 'profil')
    );
    app.get('/',
        authMW(objectRepository),
        renderMW(objectRepository, 'index'));
}