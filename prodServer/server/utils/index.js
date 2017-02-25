'use strict';

// Backend Utils File

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.packMyFries = exports.saltMyFries = undefined;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// For salting the user model.
var saltMyFries = exports.saltMyFries = function saltMyFries(user) {
  console.log(_chalk2.default.cyan('Trying to find salt...'));
  if (user.changed('Password')) {
    console.log(_chalk2.default.cyan('Salting Fries.'));
    user.Salt = user.Model.saltShaker();
    user.Password = user.Model.deepFry(user.Password, user.Salt);
  }
};

// Cleans a user instance of valuable information.
var packMyFries = exports.packMyFries = function packMyFries(user) {
  return _lodash2.default.omit(user.toJSON(), ['Password', 'Salt']);
};