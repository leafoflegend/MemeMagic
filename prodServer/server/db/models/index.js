'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _memes = require('./memes');

var _memes2 = _interopRequireDefault(_memes);

var _trolls = require('./trolls');

var _trolls2 = _interopRequireDefault(_trolls);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Instantiate M-to-M relationship.
_trolls2.default.belongsToMany(_memes2.default, { through: 'TrollMemes' });
_memes2.default.belongsToMany(_trolls2.default, { through: 'TrollMemes' });

exports.default = {
  Meme: _memes2.default,
  Troll: _trolls2.default,
  User: _users2.default
};