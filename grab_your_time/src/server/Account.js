var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/timelog');
var db = mongoose.connection;
var eventSchema = require('./Schemas/eventSchema');

var Calendar = require('./Calendar');
class Account {
    constructor(account, password){
        this.account = 'so far';
        this.password = 'so good';
        this.Calendar = mongoose.find({
            account: 'admin'
        })
    }
    createAccountAndCalendar(eventSchemaData){
        let str = new Date(); let end = new Date();
        eventSchema.create({
            account:'admin' ,
            type:'ooad' ,
            events:[{
                eventName: 'coding',
                Type:'',
                startTime: str,
                endTime: end,
                desciption: 'hello'
            }]
        })
        .then()
        return eventSchemaData
    }
    createCaldendar(){
        // return this.Calendar;
    }
}

module.exports = Account;