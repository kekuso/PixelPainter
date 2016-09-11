'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// middleware
app.use(function(req, res, next) {
  // set a header that will allow any origin to call me
  res.setHeader('Access-Control-Allow-Origin', '*');
  // turn off cache
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/', function (req, res) {
  console.log("Hello server");
  res.send("Hello!");
});

var server = app.listen(app.get('port'), function() {
  console.log("Server listening on port " + server.address().port);
});