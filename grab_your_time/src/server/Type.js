var Event = require('./Event');

class Type{
    constructor(typeName,eventList){
        this.typeName = typeName;
        this.eventList = eventList;
    }
    addEvent(_account, eventData,calendarSchema){
        return new Promise((resolve, reject)=>{
            if(eventData.start < eventData.end){
                this.eventList.push(new Event(eventData.title, eventData.start,eventData.end,eventData.desc));
                calendarSchema.findOneAndUpdate({account:_account, 'typeList.typeName':this.typeName},{$set: {'typeList.$.eventList':this.eventList}},{ new: true })
                .then((result)=>{

                        let filteredType = result.typeList.filter((type)=>{
                            if(type.typeName == this.typeName)
                            return type;
                        })
                        this.eventList = filteredType[0].eventList;

                    resolve(this.eventList);
                })
                .catch((err)=>{
                    reject(err);
                })
            }
        })
    }

    deleteEvent(_account, eventID,calendarSchema){
        this.eventList = this.eventList.filter((event)=>{
            if(_account === "Hank"){
                var id = mongoose.Types.ObjectId(eventID);
                if(event._id !== id)
                    return event;
            }
            else
                if(event._id.toString() !== eventID)
                    return  event;
        })
        calendarSchema.update({account:_account, 'typeList.typeName':this.typeName},{$set: {'typeList.$.eventList':this.eventList}})
        .then((result)=>{
            console.log(result);
        })
    }
}

module.exports = Type;