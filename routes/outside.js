var loginMW = require('../middlewares/generic/login');
var logoutMW = require('../middlewares/generic/logout');
var mainredirectMW = require('../middlewares/generic/mainredirect');
var renderMW = require('../middlewares/generic/render');
var userMW = require('../middlewares/generic/user');

module.exports = function (app) {
    var objectRepository = {};
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
        loginMW(objectRepository),
        mainredirectMW(objectRepository)
    );
    /**
    * Profil
    */
    app.get('/profil',
        userMW(objectRepository),
        renderMW(objectRepository, 'profil')
    );
}