let Account = require('../server/Account');
var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/timelog');
var db = mongoose.connection;
var calendarSchema = require('../server/Schemas/calendarSchema');
// function createAccountAndCalendar(eventSchemaData){
    let str = new Date(); let end = new Date();
    calendarSchema.create({
        account:'admin' ,
        typeList:[]
    })
    .then((result) =>{
        console.log(result)
    })
// }
// acc.createAccountAndCalendar();
