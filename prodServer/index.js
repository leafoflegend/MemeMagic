'use strict';

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _db = require('./server/db');

var _db2 = _interopRequireDefault(_db);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _sockets = require('./server/sockets');

var _sockets2 = _interopRequireDefault(_sockets);

var _cliInteract = require('cli-interact');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _http2.default.createServer();
var _Port = 3001;

var syncTruth = (0, _cliInteract.getYesNo)(_chalk2.default.cyan('Rick, do you wanna get savage on this database? (Force Sync)'));

// If you want to remove the syncTruth, change syncTruth to true or false manually.

// The order of initializing the backend.
(0, _db2.default)(syncTruth).then(function () {
  return server.on('request', _server2.default);
}).then(function () {
  return (0, _sockets2.default)(server);
}).catch(function (err) {
  return console.error(err);
}).finally(function () {
  return server.listen(_Port, function () {
    return console.log(_chalk2.default.magenta('Meme magic has begun on Port ' + _Port));
  });
});