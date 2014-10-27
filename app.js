var express = require('express'),
  port = 8080,
  app = express(),
  path = require('path');

app.set('views', path.resolve(__dirname, 'public'));

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

console.log("Listening on port: ", port);
app.listen(port);


