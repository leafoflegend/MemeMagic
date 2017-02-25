'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


// The login route.
router.post('/login', function (req, res, next) {
  console.log(_chalk2.default.green('We got a new order for perfectly salted fries!'));
  // The passport callback function.
  var authorizeUser = function authorizeUser(err, user) {
    if (err) return next(err);
    if (!user) {
      console.log(_chalk2.default.red('We would never sell fries of that quality.'));
      return res.status(401).send({ message: 'Failed login attempt.' });
    }

    // Login time!
    req.logIn(user, function () {
      console.log(_chalk2.default.green('Perfect fries delivered to a hungry customer.'));
      res.status(200).send({
        user: user.cleanHands()
      });
    });
  };

  // Pass passport the authentication function.
  _passport2.default.authenticate('local', authorizeUser)(req, res, next);
});

// Logout route.
router.get('/logout', function (req, res) {
  console.log(_chalk2.default.green('User Logout Performed.'));
  req.logout();
  res.status(200).send({ message: 'Successfully logged out.' });
});

exports.default = router;