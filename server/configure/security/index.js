'use strict';

import passport from 'passport';
import setLocalSecurity from './local';
import _ from 'lodash';

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
        const formattedUser = _.omit(user.toJSON(), ['Password', 'Salt']);
        done(null, formattedUser);
      })
      .catch(done);
  });

  setLocalSecurity(app, _db, User);
};
