/**
 * Moraine Server.
 *
 * @author Jackson
 * @type {*|exports|module.exports}
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello Moraine');
});

app.listen(8000);
