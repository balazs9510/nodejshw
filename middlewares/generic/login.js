/**
 * Login
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        console.log("User login mw called");
        console.log(req.body.email + " " + req.body.pw);
        console.log(res.tpl);
        req.session.userid = "kiscica";
        return next();
    };

};