'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.route('/').get(function (req, res, next) {
  res.status(200).json({ session: req.session });
}).put(function (req, res, next) {
  // Pretty straightforward route for the front end to update welcomeText.
  console.log(_chalk2.default.magenta('Storing Test Session Data...'));
  var welcomeText = req.body.welcomeText;

  req.session.welcomeText = welcomeText;

  res.status(200).json({ Message: 'Success' });
});

exports.default = router;