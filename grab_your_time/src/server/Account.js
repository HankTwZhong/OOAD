let mongoose = require('mongoose');
let connection = mongoose.connect('mongodb://localhost/timelog');
let db = mongoose.connection;
let calendarSchema = require('./Schemas/calendarSchema');

let Calendar = require('./Calendar');
let Type = require('./Type');
class Account {
    constructor(account, password){
        this.account = 'admin';
        this.password = '1234';
        this.createCaldendar().then((result)=>{
            this.calendar = result
        })
    }


    // events:[{
    //     eventName: 'coding',
    //     Type:'',
    //     startTime: str,
    //     endTime: end,
    //     desciption: 'hello'
    // }]
    
    createCaldendar(){
        return new Promise((resolve, reject) =>{
            calendarSchema.find({account:'admin'}).then((result)=>{
                let typeList = []
                result[0].typeList.forEach((type)=>{
                    typeList.push(new Type( type.typeName, type.eventList));
                });
                resolve( new Calendar(typeList));
            })
        })
    }
}

module.exports = Account;