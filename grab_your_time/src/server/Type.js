var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/timelog');
var eventSchema = require('./Schemas/eventSchema');

class Type{
    deleteEvent(eventID){
        return new Promise((resolve, reject) => {
            eventSchema.remove({_id:eventID})
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }
}

module.exports = Type;