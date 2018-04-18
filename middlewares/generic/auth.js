/**
 * If the user is not logged in, redirects to /
 */
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
  var UserModel = requireOption(objectrepository, 'userModel');

  return function (req, res, next) {
    if (typeof req.session.userid === 'undefined') {
      return next();
    }
    UserModel.findOne({ _id: req.session.userid }, function (err, result) {
      if (err) {
        return next(err);
      }
      console.log(req.session.userid)
      console.log(result);
      res.tpl.user = result;

      return next();
    });
  };

};