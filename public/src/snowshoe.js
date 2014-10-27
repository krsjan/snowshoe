(function (io) {

  var socket = io();

  var CLIENT_ID = null;

  /* ON EMITS */
  socket.on('connection', function (data) {
    CLIENT_ID = data.id;
  });


  document.onload = function () {
    var leButton = document.querySelector('button');

    leButton.onclick = function myClicky () {

      socket.emit('game:start', { id: CLIENT_ID }, function (status) {
        if (status) {
          console.log("Let the games begin");
        }
      });
    };
  }

}(io));
