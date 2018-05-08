let bodyParser = require('body-parser');

class EventController {
    constructor(account){
        this.account = account;
    }

    addEvent(req, res){
        let event = req.body;
        console.log(event);
        this.account.calendar.addEvent(event)
        .then((result)=>{
            res.send('Add Event Success');
        });
    }

    deleteEvent(req, res){
        let event = req.body;
        this.account.calendar.deleteEvent(event);
        res.send('delete Success');
    }
}

module.exports = EventController;