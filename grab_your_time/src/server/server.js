var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var service = require('./service');
var cors =  require('cors');

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log('here');
    res.send('so far so good');
})

app.post('/event', (req, res) => {
    console.log('here');
    console.log(req);
    let event = req.body;
    service.recordEvent(event);
    res.send('so far so good');
})

app.post('/findevent', (req, res) => {
    let event = req.body;
    service.findEvent(event);
    res.send('so far so good');
})

app.get('/getevent', (req, res) =>{
    let event = req.params;
    let promise = service.getEvent()
    promise.then((result) => {
        res.send(result);
    })
})
app.post('/deleteevent', (req, res) =>{
    let event = req.bod
})

app.listen(1321, function () {
    console.log('listening on port 1321!');
})