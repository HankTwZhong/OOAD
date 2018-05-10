let Account = require('./Account');
let ChartInformation = require('./ChartInformation');
let mongoose = require('mongoose');
var db = mongoose.connection;
var calendarSchema = require('./Schemas/calendarSchema');
var Type = require('./Type');

class Calendar {
    constructor(typeList){
        this.typeList = typeList ;
    }
    addType(_account,typeObj){
        if(this.typeList.map((type)=>{
            return type.typeName
        }).indexOf(typeObj.typeName)=== -1){
            this.typeList.push(typeObj);
            calendarSchema.update({account:_account},{$set: {typeList:this.typeList}})
            .then((result) => {
                console.log(result);
            })
        }
        else
            console.log('same Type');
    }
    deleteType(_account,typeName){
        this.typeList = this.typeList.filter((type)=>{
            return type.typeName !== typeName;
        })
        calendarSchema.update({account:_account},{$set: {typeList:this.typeList}})
        .then((result) => {
            console.log(result);
        })
    }

    getTypeList(){
        return this.typeList;
    }

    addEvent(_account, eventData){
        return new Promise((resolve, reject)=>{
            let findType = this.typeList.filter((type)=>{
                if(type.typeName === eventData.title)
                    return  type
            })
            findType[0].addEvent(_account, eventData)
            .then((result)=>{
                resolve(result);
            });
        })

    }

    deleteEvent(_account, eventData){
        // console.log('eventData'+(eventData))
        console.log(typeof(eventData));
        let findType = this.typeList.filter((type)=>{
            if(type.typeName === eventData.title)
            return type;
        })

        findType[0].deleteEvent(_account, eventData._id);
    }

    getEventList(){
        let eventList = [];
        // console.log('here:'+JSON.stringify(this.typeList))
        
        this.typeList.forEach((type)=>{
            type.eventList.forEach((event)=>{
                eventList.push(event);
            })
        })
        return eventList;
    }
}


module.exports = Calendar ;