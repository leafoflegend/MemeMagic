'use strict';

import passport from 'passport';
import setLocalSecurity from './local';

export default (app, _db) => {
  // Get the User model.
  const User = _db.model('user');

  // We only give an encrypted User ID to the browser.
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // We use the ID given to the browser to set the req.user.
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(user => {
        done(null, user);
      })
      .catch(done);
  });

  setLocalSecurity(app, _db, User);
};
