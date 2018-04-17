var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventSchema = new Schema({
    title: {
        type: String,
        require:true
    },
    start: {
        type: Date,
        require:true
    },
    end: {
        type: Date,
        require:true
    },
    desc: {
        type: String
    }
});


module.exports = mongoose.model('event', eventSchema);