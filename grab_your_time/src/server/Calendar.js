let Account = require('./Account');
let ChartInformation = require('./ChartInformation');
let mongoose = require('mongoose');
var db = mongoose.connection;
var calendarSchema = require('./Schemas/calendarSchema');
var Type = require('./Type');


class Calendar {
    constructor(typeList){
        this.typeList = typeList;
    }
    addType(typeObj){
        if(this.typeList.map((type)=>{
            return type.typeName
        }).indexOf(typeObj.typeName)=== -1){
            this.typeList.push(typeObj);
            calendarSchema.update({account:'admin'},{$set: {typeList:this.typeList}})
            .then((result) => {
                console.log(result);
            })
        }
        else
            console.log('same Type');
    }
    deleteType(typeName){
        this.typeList = this.typeList.filter((type)=>{
            return type.typeName !== typeName;
        })

        calendarSchema.update({account:'admin'},{$set: {typeList:this.typeList}})
            .then((result) => {
                console.log(result);
            })
    }

    getTypeList(){
        return this.typeList;
    }

    addEvent(eventData){
        let findType = this.typeList.filter((type)=>{
            return type.typeName === eventData.title;
        })

        findType[0].addEvent(eventData);
    }

    deleteEvent(eventData){
        let findType = this.typeList.filter((type)=>{
            return type.typeName === eventData.title;
        })

        findType[0].deleteEvent(eventData._id);
    }
    getEventList(){

    }
}


module.exports = Calendar ;