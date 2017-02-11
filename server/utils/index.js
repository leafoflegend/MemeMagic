'use strict';

// Backend Utils File
import chalk from 'chalk';

// For salting the user model.
export const saltMyFries = (user) => {
  console.log(chalk.cyan('Trying to find salt...'));
  if (user.changed('Password')) {
    console.log(chalk.cyan('Salting Fries.'));
    user.Salt = user.Model.saltShaker();
    user.Password = user.Model.deepFry(user.Password, user.Salt);
  }
};
