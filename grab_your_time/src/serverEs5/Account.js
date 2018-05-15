let mongoose = require('mongoose');
let connection = mongoose.connect('mongodb://localhost/timelog');
let db = mongoose.connection;
let calendarSchema = require('./Schemas/calendarSchema');

let Calendar = require('./Calendar');
let Type = require('./Type');
class Account {
    constructor(account, password){
        this.account = account;
        this.password = password;
        this.createCaldendar().then((result)=>{
            this.calendar = result
        })
    }

    createCaldendar(){
        return new Promise((resolve, reject) =>{
            calendarSchema.find({account:this.account}).then((result)=>{
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