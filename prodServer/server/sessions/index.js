'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseurl = require('parseurl');

var _parseurl2 = _interopRequireDefault(_parseurl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Very basic use of session configuration that simply monitors your views to any URL.
*/
exports.default = function (app) {
  app.use(function (req, res, next) {
    var views = req.session.views;

    if (!views) views = req.session.views = {};

    var pathname = (0, _parseurl2.default)(req).pathname;
    views[pathname] = (views[pathname] || 0) + 1;

    next();
  });
};