var chargenerator = require('./module/charcode-generator.js');

function gameGenerator (sockets) {

  var results = {};

  registerGame(sockets);
  emitter();
}

function registerGame (sockets) {
  sockets.on('game:round', function (data, ack) {
    results[data.id] ? results[data.id]++ : results[data.id] = 1;

    if (results[data.id] === 6) {
      ender(sockets, id);
    } else {
      emitter()
    }
    ack(true);
  });
}

function emitter (sockets) {
  setTimeout(function () {
    sockets.emit('game:round', { char: chargenerator() });
  }, 1000);
}

function ender (sockets, id) {
  sockets.emit('game:over', { winner: id });
}

module.exports = gameGenerator;

