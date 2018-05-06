var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventSchema = new Schema({
    account: {
        type: String,
        require : true
    },
    type: {
        type: String,
        require:true
    },
    events:[{
        eventName:{
            type: String
        },
        Type:{
            type: String
        },
        startTime: {
            type: Date,
            require:true
        },
        endTime: {
            type: Date,
            require:true
        },
        desciption: {
            type: String
        }
    }]
});


module.exports = mongoose.model('event', eventSchema);