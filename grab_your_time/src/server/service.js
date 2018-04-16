var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/timelog')
var bodyParser = require('body-parser');
var eventSchema = require('./Schemas/eventSchema');
var dateFormat = require('dateformat');
var db = mongoose.connection;

class Service {
    recordEvent(event) {
        return new Promise((resolve, reject) => {
            db.on('error', console.error.bind(console, 'MongoDB connection error:'));
            console.log('title:'+event.title+'\n startTime:'+event.startTime+'\n endTime:'+event.endTime);
            eventSchema.create({
                title: event.title,
                startTime:dateFormat(event.startTime, "yyyy/mm/dd HH:mm:ss"),
                endTime:dateFormat(event.endTime, "yyyy/mm/dd HH:mm:ss")
            })
            console.log('done');
        })
    }
    findEvent(event){
        return new Promise((resolve, reject) => {
            eventSchema.find({startTime: event.startTime}).then((result) => {
                console.log('findEvent');
                console.log(result);
            })
        })

    }
}

module.exports = new Service();