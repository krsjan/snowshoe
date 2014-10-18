var express = require('express'),
  port = 1337,
  app = express(),
  path = require('path');

app.engine('jade', require('jade').__express);
app.set('views', path.resolve(__dirname, 'public'));

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

app.get(/\.html$/, function (req, res) {
  var filepath = req.url.slice(1, req.url.length),
    jaded = filepath.slice(0, filepath.lastIndexOf('.')) + '.jade';

  console.log(filepath);
  /* Set LOCAL to false if online .*/
  res.render(jaded, {
    pretty: true,
    local : true
  });
});

Console.log("Listening on port: ", port)
app.listen(port);


