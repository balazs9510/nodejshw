/**
 * Checks if current user id is equal to a given id.
 *  - this can prevenet that one user can delete/modify other user ratings / pub
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
      return next();
    };
  
  };