'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Type = _db2.default.Sequelize;

exports.default = _db2.default.define('troll', {
  Title: {
    type: Type.STRING,
    allowNull: false
  },
  imageURL: {
    type: Type.STRING,
    allowNull: false
  }
});