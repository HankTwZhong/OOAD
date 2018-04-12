var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventSchema = new Schema({
    title: {
        type: String,
        require:true
    },
    startTime: {
        type: Date
        
    },
    endTime: {
        type: Date
    }
});


module.exports = mongoose.model('event', eventSchema);