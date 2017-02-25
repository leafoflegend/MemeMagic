'use strict';

import passport from 'passport';
import { Strategy } from 'passport-local';

export default (app, _db, User) => {
  // This is the local strategy for security.
  const LocalStrategy = (email, password, done) => {
    User.findOne({
      where: {
        Email: email
      }
    })
    .then(function (user) {
      // Verify the password attempt.
      if (!user || !user.verifySaltiness(password)) done(null, false);
      else done(null, user);
    })
    .catch(done);
  };

  // Enable this Local Strategy.
  passport.use(
    new Strategy({
      usernameField: 'Email',
      passwordField: 'Password'
    }, LocalStrategy)
  );
};
