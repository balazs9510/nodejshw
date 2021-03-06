/**
 * This middleware has one purpose, when the user visits the / main page,
 * should be redirected to
 *    - / when not signed in
 *    - /profil when signed in
 */
module.exports = function (objectrepository) {

  return function (req, res, next) {
    if (typeof req.session.userid === 'undefined') {
      return res.redirect('/');
    } else {
      return res.redirect('/profil');
    }
  };

};