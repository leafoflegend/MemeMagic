'use strict';

// Backend Utils File
import chalk from 'chalk';
import _ from 'lodash';

// For salting the user model.
export const saltMyFries = (user) => {
  console.log(chalk.cyan('Trying to find salt...'));
  if (user.changed('Password')) {
    console.log(chalk.cyan('Salting Fries.'));
    user.Salt = user.Model.saltShaker();
    user.Password = user.Model.deepFry(user.Password, user.Salt);
  }
};

// Cleans a user instance of valuable information.
export const packMyFries = (user) => _.omit(user.toJSON(), ['Password', 'Salt']);
