'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _memes = require('./memes');

var _memes2 = _interopRequireDefault(_memes);

var _trolls = require('./trolls');

var _trolls2 = _interopRequireDefault(_trolls);

var _sessions = require('./sessions');

var _sessions2 = _interopRequireDefault(_sessions);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/memes', _memes2.default);
router.use('/trolls', _trolls2.default);
router.use('/sessions', _sessions2.default);
router.use('/users', _users2.default);

router.use(function (req, res) {
  res.status(404).end();
});

exports.default = router;