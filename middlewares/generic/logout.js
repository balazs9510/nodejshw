/**
 * Logout
 */
module.exports = function (objectRepository) {

  return function (req, res, next) {
    req.session.userid = undefined;
    return next();
  };
};