'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _connectSessionSequelize = require('connect-session-sequelize');

var _connectSessionSequelize2 = _interopRequireDefault(_connectSessionSequelize);

var _secrets = require('../../secrets');

var _secrets2 = _interopRequireDefault(_secrets);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SequelizeStore = (0, _connectSessionSequelize2.default)(_expressSession2.default.Store);

exports.default = function (app, _db) {
  // Enable body parser.
  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));

  // Create and sync my Session Storage.
  // TO-DO - Look into doing this without a library.
  var sessionStore = new SequelizeStore({ db: _db });
  sessionStore.sync();

  // Create a date a year from now.
  var aYearFromNow = new Date();
  aYearFromNow.setYear(aYearFromNow.getFullYear() + 1);

  // Instantiate the use of the session store.
  app.use((0, _expressSession2.default)({
    secret: _secrets2.default.SessionKey,
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: aYearFromNow
    }
  }));

  // Enable passport.
  app.use(_passport2.default.initialize());
  app.use(_passport2.default.session());
};