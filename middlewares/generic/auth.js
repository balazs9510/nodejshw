/**
 * If the user is not logged in, redirects to /
 *  - set the user role to req.tpl.userrole -> this can be used to separate users
 */
module.exports = function (objectRepository) {

  return function (req, res, next) {
    return next();
  };

};