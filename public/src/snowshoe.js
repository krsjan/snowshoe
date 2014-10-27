(function (io) {

  var socket = io();

  var CLIENT_ID = null;

  /* ON EMITS */
  socket.on('game:connection', function (data) {
    CLIENT_ID = data.id;
  });

  window.onload = function () {

    var leButton = document.querySelector('button');

    leButton.onclick = function myClicky() {

      socket.emit('game:start', { id: CLIENT_ID }, function (status) {
        if (status) {
          console.log("Let the games begin");
        }
      });
    };
  };

}(io));
