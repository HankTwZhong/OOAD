let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let cors =  require('cors');
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

class CalendarController {
    constructor(account){
        this.account = account
    }
    getCanlender(){

    }

}

module.exports = CalendarController;