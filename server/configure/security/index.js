'use strict';

import passport from 'passport';
import setLocalSecurity from './local';
import { packMyFries } from '../../utils';

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
        const formattedUser = packMyFries(user);
        done(null, formattedUser);
      })
      .catch(done);
  });

  setLocalSecurity(app, _db, User);
};
