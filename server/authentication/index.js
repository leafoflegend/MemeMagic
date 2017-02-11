'use strict';

import express from 'express';
const router = express.Router();
import chalk from 'chalk';
import passport from 'passport';

// The login route.
router.post('/login', (req, res, next) => {
  console.log(chalk.green('Someones trying to get in...'));
  // The passport callback function.
  const authorizeUser = (err, user) => {
    if (err) return next(err);
    if (!user) {
      console.log(chalk.red('They aint get in, dont worry!'));
      return res.status(401).send({ message: 'Failed login attempt.' });
    }

    // Login time!
    req.logIn(user, () => {
      console.log(chalk.green('They done did get in!'));
      res.status(200).send({
        user: user.cleanHands()
      });
    });
  };

  // Pass passport the authentication function.
  passport.authenticate('local', authorizeUser)(req, res, next);
});

// Logout route.
router.get('/logout', (req, res) => {
  console.log(chalk.green('User Logout Performed.'));
  req.logout();
  res.status(200).end();
});

export default router;
