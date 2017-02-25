'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db2 = require('./db/db');

var _db3 = _interopRequireDefault(_db2);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _configure = require('./configure');

var _configure2 = _interopRequireDefault(_configure);

var _sessions = require('./sessions');

var _sessions2 = _interopRequireDefault(_sessions);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _authentication = require('./authentication');

var _authentication2 = _interopRequireDefault(_authentication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();


(0, _configure2.default)(app, _db3.default);
(0, _sessions2.default)(app);

app.use('/auth', _authentication2.default);
app.use('/api', _routes2.default);

app.get('/*', function (req, res) {
  if (req.session.socketData) {
    console.log(_chalk2.default.magenta('A user @ ' + req.session.socketData.address + ' just visited the site.'));
  }
  res.sendFile(app.getValue('indexPath'));
});

app.use(function (err, req, res, next) {
  console.error(err, typeof next === 'undefined' ? 'undefined' : _typeof(next));
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

exports.default = app;