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
            // console.log(this.typeName);
            // console.log('allEvent:\t'+JSON.stringify(this.eventList));
            // console.log('eventData:\t'+JSON.stringify(eventData));
            // this.eventList.push(new Event(eventData.title, eventData.start,eventData.end,eventData.desc)) //builder
            // calendarSchema.update({account:'admin', 'typeList.typeName':this.typeName},{$set: {'typeList.$.eventList':this.eventList}})
            // .then((result)=>{
            //     resolve(result);
            // })
            this.eventList.push(new Event(eventData.title, eventData.start,eventData.end,eventData.desc)) //builder
            calendarSchema.findOneAndUpdate({account:'admin', 'typeList.typeName':this.typeName},{$set: {'typeList.$.eventList':this.eventList}},{ new: true })
            .then((result)=>{
                let filteredType = result.typeList.filter((type)=>{
                    if(type.typeName == this.typeName)
                        return type;
                })
                this.eventList = filteredType[0].eventList;
                resolve(result);
            })
        })
    }

    deleteEvent(eventID){
        this.eventList = this.eventList.filter((event)=>{
            var id = mongoose.Types.ObjectId(eventID);
            console.log(event._id)
            return  event._id.toString() !== eventID;
        })
        console.log(this.eventList)
        calendarSchema.update({account:'admin', 'typeList.typeName':this.typeName},{$set: {'typeList.$.eventList':this.eventList}})
        .then((result)=>{
            console.log(result);
        })


    }
}

module.exports = Type;