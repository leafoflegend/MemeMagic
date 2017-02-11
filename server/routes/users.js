'use strict';

import express from 'express';
const router = express.Router();
import User from '../db/models/users';
import chalk from 'chalk';

// Signup Route
router.post('/signup', (req, res, next) => {
  // Check if E-Mail is already being used.
  User.find({
    where: {
      Email: req.body.Email
    }
  })
  // If it is already being used, error, otherwise create.
  .then(userExists => {
    if (!userExists) {
      console.log(chalk.green('Yo dog, were making friends!'));
      User.create({
        Username: req.body.Username,
        Email: req.body.Email,
        Password: req.body.Password,
        Name: req.body.Name
      })
      .then(createdUser => res.status(200).send({message: 'User created!'}));
    } else {
      const loginError = new Error('That email is already being used.');
      loginError.status = 401;
      console.log(chalk.red('Someone tried to impersonate Rick again, but I know a C-137 when I see one.'));
      return next(loginError);
    }
  })
  .catch(next);
});

export default router;
