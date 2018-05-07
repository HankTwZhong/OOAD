let bodyParser = require('body-parser');

class EventController {
    constructor(account){
        this.account = account;
    }

    addEvent(req, res){
        let event = req.body;
        console.log('addEventtitle:'+ event.title+'\naddEventDesc'+event.desc);
        this.account.calendar.addEvent(event)
        .then((result)=>{
            console.log('done');
            res.send('Add Event Success');
        });
    }

    deleteEvent(req, res){
        let event = req.body;
        console.log(event)
        this.account.calendar.deleteEvent(event);
        res.send('delete Success');
    }
}

module.exports = EventController;