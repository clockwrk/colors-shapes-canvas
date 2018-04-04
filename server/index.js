let express = require('express'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './browser')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../browser/', 'index.html'));
});

app.listen(port);
console.log('App listening on port' + port);
