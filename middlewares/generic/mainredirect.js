/**
 * This middleware has one purpose, when the user visits the / main page,
 * should be redirected to
 *    - / when not signed in
 *    - /profil when signed in
 */
module.exports = function (objectrepository) {

  return function (req, res, next) {
    console.log('Main redirect called');
    if (typeof req.session.userid === 'undefined') {
      console.log('Redirect /');
      return res.redirect('/');
    } else {
      console.log('Profil /');
      return res.redirect('/profil');
    }
  };

};