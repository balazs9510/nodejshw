var loginMW = require('../middlewares/generic/login');
var logoutMW = require('../middlewares/generic/logout');
var mainredirectMW = require('../middlewares/generic/mainredirect');
var renderMW = require('../middlewares/generic/render');

module.exports = function (app) {
    var objectRepository = {};
    /**
     * Login
     */
    app.get('/login',
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
        renderMW(objectRepository,'register')
    );
}