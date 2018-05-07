let bodyParser = require('body-parser');
let Account  =  require('../Account');
let account = new Account();

class CalendarController {
    constructor(account){
        this.account = account;
    }

    getTypeList(req, res) {
        let calendar = this.account.calendar.getTypeList();
        res.send(calendar);
    }
    
    getEventList(req, res) {
        let eventList = this.account.calendar.getEventList();
        // console.log(eventList);
        res.send(eventList);
    }
}

module.exports = CalendarController;