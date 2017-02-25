'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var memeDB = 'meme-magic';

console.log(_chalk2.default.yellow('Hey Rick!'));

var _db = new _sequelize2.default(memeDB, null, null, { host: 'localhost', logging: false, dialect: 'postgres', native: true });

exports.default = _db;