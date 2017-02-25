'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentSockets = [];
var totalConnections = 0;

var IO = null;

// Essentially filters through all of the sockets and ensures that we have no duplicate sockets.
var refreshSockets = function refreshSockets(socket) {
  currentSockets = currentSockets.filter(function (e) {
    return e.id !== socket.id;
  });
};

exports.default = function (server) {
  if (server == undefined) return IO;
  if (IO) return IO;

  IO = (0, _socket2.default)(server);

  IO.on('connection', function (socket) {
    totalConnections++;
    socket.name = 'memeLover' + totalConnections;
    // Snatch a users IP.
    var ipAddress = socket.request.connection.remoteAddress;

    // If no sockets have the same IP, begin initialization.
    if (!currentSockets.some(function (e) {
      return e.address == ipAddress;
    })) {
      // Create the data we are interested in.
      var currentSocket = {
        id: socket.id,
        name: socket.name,
        time: new Date(),
        address: ipAddress
      };
      // Push it into an array of all active sockets.
      currentSockets.push(currentSocket);
      console.log(_chalk2.default.magenta(socket.name + ' wants Memes REAL-TIME.'));
      // Begin intialization of sessions.
      socket.emit('InitUser', currentSocket);
    } else {
      // If this IP already exists, then lets deal with it differently.
      console.log(_chalk2.default.red(socket.name + ' is already being delivered Memes.'));
      console.log(_chalk2.default.red('Rick, I don\'t like this guy.'));
      // Knock this socket out of our currently active sockets.
      refreshSockets(socket);
      // Emit an event that punishes said user.
      socket.emit('KickTroll');
      // Disconnect the socket.
      socket.disconnect();
    }

    socket.on('disconnect', function () {
      // If a user leaves, please alert us.
      console.log(_chalk2.default.magenta(socket.name + ' has had enough memes.'));
      // Then remove them from currently active users.
      refreshSockets(socket);
    });
  });
};