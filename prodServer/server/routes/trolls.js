'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _trolls = require('../db/models/trolls');

var _trolls2 = _interopRequireDefault(_trolls);

var _memes = require('../db/models/memes');

var _memes2 = _interopRequireDefault(_memes);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res, next) {
  console.log(_chalk2.default.green('You are looking for Trolls eh?'));
  res.json({ aTroll: 'Joe Biden' });
});

exports.default = router;