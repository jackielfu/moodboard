var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var items = require('../database-mongo');

const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/../react-client/dist/'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(port, function() {
  console.log('listening on port ${`port`}!');
});

