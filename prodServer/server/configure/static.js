'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Serve up my chosen static files as well as my favicon.
exports.default = function (app) {
  var root = app.getValue('projectRoot');

  var npmPath = _path2.default.join(root, './node_modules');
  var browserPath = _path2.default.join(root, './browser');
  var publicPath = _path2.default.join(root, './public');

  app.use(_express2.default.static(npmPath));
  app.use(_express2.default.static(browserPath));
  app.use(_express2.default.static(publicPath));
  app.use((0, _serveFavicon2.default)(app.getValue('faviconPath')));
};