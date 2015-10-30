/**
 * Moraine Server.
 *
 * @author Jackson
 * @type {*|exports|module.exports}
 */
var express = require('express');
var cluster = require('cluster');
var app = express();

var numCPUs = require('os').cpus().length;

app.get('/', function (req, res) {
    res.send('Hello Moraine');
});

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    app.listen(8000);
}