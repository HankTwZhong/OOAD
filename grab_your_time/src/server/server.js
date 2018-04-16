var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Service = require('./service')

app.use(bodyParser.json())

app.post('/', (req, res) => {
    console.log('here');
    res.send('so far so good');
})

app.post('/event', (req, res) => {
    let event = req.body;
    Service.recordEvent(event);
    res.send('so far so good');
})

app.post('/findevent', (req, res) => {
    let event = req.body;
    Service.findEvent(event);
    res.send('so far so good');
})

app.listen(1321, function () {
    console.log('listening on port 1321!');
})