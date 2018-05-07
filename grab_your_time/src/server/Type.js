var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/timelog');
var calendarSchema = require('./Schemas/calendarSchema');
var Event = require('./Event');

class Type{
    constructor(typeName,eventList){
        this.typeName = typeName;
        this.eventList = eventList;
    }
    addEvent(eventData){
        return new Promise((resolve, reject)=>{
            this.eventList.push(new Event(eventData.title, eventData.start,eventData.end,eventData.desc)) //builder
            calendarSchema.update({account:'admin', 'typeList.typeName':this.typeName},{$set: {'typeList.$.eventList':this.eventList}})
            .then((result)=>{
                resolve(result);
            })
        })

    }
    deleteEvent(eventID){
        this.eventList = this.eventList.filter((event)=>{
            var id = mongoose.Types.ObjectId(eventID);
            return  event._id.toString() !== eventID;
        })
        console.log(this.eventList)
        calendarSchema.update({account:'admin', 'typeList.typeName':this.typeName},{$set: {'typeList.$.eventList':this.eventList}})
        .then((result)=>{
            console.log(result);
        })
        // calendarSchema.remove({'typeList.eventList._id':Id}).then((result)=>{
        //     console.log(result);
        // });

    }
}

module.exports = Type;