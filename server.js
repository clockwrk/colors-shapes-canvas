let express = require('express'),
    path = require('path'),
    app = express(),
    volleyball = require('volleyball'),
    port = process.env.PORT || 3000;

app.use(volleyball);
app.use(express.static('browser'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/browser/index.html');
});

app.listen(port);
console.log('App listening on port' + port);
