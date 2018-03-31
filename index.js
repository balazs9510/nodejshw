var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();
var renderMW = require('./middlewares/generic/render');


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(session({
    secret: 'funnyman',
    cookie: {
        maxAge: 60000
    },
    resave: true,
    saveUninitialized: false
}));

/**
 * Parse parameters in POST
 */
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.tpl = {};
    res.tpl.error = [];
    console.log("tpl added");
    return next();
});

require('./routes/pub')(app);
require('./routes/rating')(app);
require('./routes/outside')(app);

app.use('/', function (req, res, next) {
    next();
}, renderMW({}, 'index'));

/**
 * Standard error handler
 */
app.use(function (err, req, res, next) {
    res.status(500).send('Houston, we have a problem!');
    console.error(err.stack);
});

var server = app.listen(3000, function () {
    console.log('server started');
});
