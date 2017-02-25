'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appVariables = require('./app-variables');

var _appVariables2 = _interopRequireDefault(_appVariables);

var _parsing = require('./parsing');

var _parsing2 = _interopRequireDefault(_parsing);

var _static = require('./static');

var _static2 = _interopRequireDefault(_static);

var _security = require('./security');

var _security2 = _interopRequireDefault(_security);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app, _db) {
  // Force the context of this.
  app.setValue = app.set.bind(app);
  // Make a function that gets the path to this app.
  app.getValue = function (path) {
    return app.get(path);
  };

  // Use the two above functions to give myself properties.
  (0, _appVariables2.default)(app);
  // Give myself a logging ability.
  app.use(app.getValue('log'));

  // Configure my static routes, security, and parsing abilities.
  (0, _parsing2.default)(app, _db);
  (0, _security2.default)(app, _db);
  (0, _static2.default)(app);
};