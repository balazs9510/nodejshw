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
        console.log("User betöltés hiba: " +err);
        return next(err);
      }
      console.log("Auth called, user: " + result);
      res.tpl.userrole = req.session.userrole;
      res.tpl.user = result;
      return next();
    }).populate('pubs')
      .populate('ratings');
  };
};