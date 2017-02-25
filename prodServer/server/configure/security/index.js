'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _local = require('./local');

var _local2 = _interopRequireDefault(_local);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app, _db) {
  // Get the User model.
  var User = _db.model('user');

  // We only give an encrypted User ID to the browser.
  _passport2.default.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // We use the ID given to the browser to set the req.user.
  _passport2.default.deserializeUser(function (id, done) {
    User.findById(id).then(function (user) {
      var formattedUser = (0, _utils.packMyFries)(user);
      done(null, formattedUser);
    }).catch(done);
  });

  (0, _local2.default)(app, _db, User);
};