'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app, _db, User) {
  // This is the local strategy for security.
  var LocalStrategy = function LocalStrategy(email, password, done) {
    User.findOne({
      where: {
        Email: email
      }
    }).then(function (user) {
      // Verify the password attempt.
      if (!user || !user.verifySaltiness(password)) done(null, false);else done(null, user);
    }).catch(done);
  };

  // Enable this Local Strategy.
  _passport2.default.use(new _passportLocal.Strategy({
    usernameField: 'Email',
    passwordField: 'Password'
  }, LocalStrategy));
};