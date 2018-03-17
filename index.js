var express = require('express');
var session = require('express-session');
var app = express();

app.use(function (req, res, next) {
    res.error = [];
    res.tpl = {};
    return next();
});

app.use(session({
    secret: 'funnyman',
    cookie: {
        maxAge: 60000
    },
    resave: true,
    saveUninitialized: false
}));

require('./routes/pub')(app);
require('./routes/rating')(app);
require('./routes/outside')(app);

/**
 * Standard error handler
 */
app.use(function (err, req, res, next) {
    res.status(500).send('Houston, we have a problem!');

    console.error(err.stack);
});

app.use(express.static('static'));
var server = app.listen(3000, function () {
});
