'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _volleyball = require('volleyball');

var _volleyball2 = _interopRequireDefault(_volleyball);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootPath = _path2.default.join(__dirname, '../../');
var indexPath = _path2.default.join(rootPath, './browser/app.html');
var faviconPath = _path2.default.join(rootPath, './browser/favicon/favicon.ico');

// Configure my built in properties.

exports.default = function (app) {
  app.setValue('projectRoot', rootPath);
  app.setValue('indexPath', indexPath);
  app.setValue('faviconPath', faviconPath);
  app.setValue('log', _volleyball2.default);
};