'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The exported function that takes a param as to whether or not to sync the db.
exports.default = function () {
  var sync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return _db2.default.sync({ force: sync }).then(function () {
    if (sync) console.log(_chalk2.default.cyan('Rick, that was brutal! (Force Sync Complete)'));else console.log(_chalk2.default.green('Hey, Morty, I got the hardest working Memes in the universe - try not to ruin it, alright Morty? (Your Memes Have Been Synced)'));
  }).catch(function (err) {
    return console.error(err);
  });
};