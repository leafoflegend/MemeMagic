'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _utils = require('../../utils');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Type = _db2.default.Sequelize;

exports.default = _db2.default.define('user', {
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
}, {
  instanceMethods: {
    // Returns user info, except password and salt.
    cleanHands: function cleanHands() {
      console.log(_chalk2.default.cyan('Cleaning hands...'));
      return (0, _utils.packMyFries)(this);
    },
    // Verifies password match.
    verifySaltiness: function verifySaltiness(passAttempt) {
      console.log(_chalk2.default.green('Verifying saltiness...'));
      var isSaltyEnough = this.Model.deepFry(passAttempt, this.Salt) === this.Password;
      if (isSaltyEnough) console.log(_chalk2.default.green('Perfectly salted fries confirmed.'));else console.log(_chalk2.default.red('Fries need more salt.'));
      return isSaltyEnough;
    }
  },
  classMethods: {
    // Generates Salt.
    saltShaker: function saltShaker() {
      console.log(_chalk2.default.green('Shaking some salt...'));
      return _crypto2.default.randomBytes(16).toString('base64');
    },
    // Encrypts user info.
    deepFry: function deepFry(plainText, salt) {
      console.log(_chalk2.default.red('Deep frying...'));
      var hash = _crypto2.default.createHash('sha1');
      hash.update(plainText);
      hash.update(salt);
      return hash.digest('hex');
    }
  },
  // Hooks to always salt and encrypt.
  hooks: {
    beforeCreate: _utils.saltMyFries,
    beforeUpdate: _utils.saltMyFries
  }
});