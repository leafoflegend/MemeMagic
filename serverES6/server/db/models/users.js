'use strict';

import db from '../db';
import { saltMyFries, packMyFries } from '../../utils';
import _ from 'lodash';
import crypto from 'crypto';
import chalk from 'chalk';
const Type = db.Sequelize;

export default db.define('user', {
  // Actual Name
  Name: {
    type: Type.STRING,
    allowNull: false
  },
  // Username
  Username: {
    type: Type.STRING,
    allowNull: false
  },
  // User E-Mail
  Email: {
    type: Type.STRING,
    allowNull: false
  },
  // User SHA-1 Password
  Password: {
    type: Type.STRING
  },
  // User Salt
  Salt: {
    type: Type.STRING
  }
},
  {
    instanceMethods: {
      // Returns user info, except password and salt.
      cleanHands: function () {
        console.log(chalk.cyan('Cleaning hands...'));
        return packMyFries(this);
      },
      // Verifies password match.
      verifySaltiness: function (passAttempt) {
        console.log(chalk.green('Verifying saltiness...'));
        let isSaltyEnough = this.Model.deepFry(passAttempt, this.Salt) === this.Password;
        if (isSaltyEnough) console.log(chalk.green('Perfectly salted fries confirmed.'));
        else console.log(chalk.red('Fries need more salt.'));
        return isSaltyEnough;
      }
    },
    classMethods: {
      // Generates Salt.
      saltShaker: function () {
        console.log(chalk.green('Shaking some salt...'));
        return crypto.randomBytes(16).toString('base64');
      },
      // Encrypts user info.
      deepFry: function (plainText, salt) {
        console.log(chalk.red('Deep frying...'));
        var hash = crypto.createHash('sha1');
        hash.update(plainText);
        hash.update(salt);
        return hash.digest('hex');
      }
    },
    // Hooks to always salt and encrypt.
    hooks: {
      beforeCreate: saltMyFries,
      beforeUpdate: saltMyFries
    }
  }
);
