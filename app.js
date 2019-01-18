var express = require('express');
var app = express();

// openshift v2
// var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
// var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

// openshift v3
var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

app.get('/', function (req, res) {
  res.send('Hello World from OpenShift!');
});

app.listen(server_port, server_ip_address, function () {
  console.log('Example app listening on port ', server_port);
});
