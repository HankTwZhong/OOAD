var express = require('express');
var app = express();
var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/timelog')
var bodyParser = require('body-parser');
var db = mongoose.connection;
var event = require('./Schemas/eventSchema');

app.use(bodyParser.json())

app.post('/', (req, res) => {
    console.log(req.body);
    let id = req.body.id;
    let title = req.body.allDay;
    let start = req.body.start;
    let end = req.body.end;
    console.log(id + '\n' + title + '\n' + start + '\n' + end);
    Service.recordEvent();
    res.send('so far so good');
})

class Service {
    recordEvent() {
        return new Promise((resolve, reject) => {
            db.on('error', console.error.bind(console, 'MongoDB connection error:'));
            console.log(resolve)
            // event.create({

            // })
        })
    }
}


app.listen(1321, function () {
    console.log('listening on port 1321!');
})