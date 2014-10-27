var express = require('express'),
  port = 8080,
  app = express(),
  path = require('path');

app.set('views', path.resolve(__dirname, 'public'));

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

//app.get(/\.html$/, function (req, res) {
//  var filepath = req.url.slice(1, req.url.length),
//    jaded = filepath.slice(0, filepath.lastIndexOf('.')) + '.jade';
//
//  console.log(filepath);
//  /* Set LOCAL to false if online .*/
//  res.render(jaded, {
//    pretty: true,
//    local : true
//  });
//});

console.log("Listening on port: ", port)
app.listen(port);


