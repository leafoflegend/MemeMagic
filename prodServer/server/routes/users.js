'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../db/models/users');

var _users2 = _interopRequireDefault(_users);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


// Signup Route
router.post('/signup', function (req, res, next) {
  // Check if E-Mail is already being used.
  _users2.default.find({
    where: {
      Email: req.body.Email
    }
  })
  // If it is already being used, error, otherwise create.
  .then(function (userExists) {
    if (!userExists) {
      console.log(_chalk2.default.green('Yo dog, were making friends!'));
      _users2.default.create({
        Username: req.body.Username,
        Email: req.body.Email,
        Password: req.body.Password,
        Name: req.body.Name
      }).then(function (createdUser) {
        return res.status(200).send({ message: 'User created!' });
      });
    } else {
      console.log(_chalk2.default.red('Someone tried to impersonate Rick again, but I know a C-137 when I see one.'));
      return res.status(401).send({ message: 'That email is already being used.' });
    }
  }).catch(next);
});

router.get('/me', function (req, res, next) {
  if (req.user) res.status(200).send({ Me: req.user });else res.status(400).send({ Me: 'A girl has no name.' });
});

exports.default = router;