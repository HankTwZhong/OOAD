let express = require('express');
let app = express();
let cors =  require('cors');
let bodyParser = require('body-parser');
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());



let TypeController = require('./Controller/TypeController');
let EventController  = require('./Controller/EventController');
let CalendarController = require('./Controller/CalendarController');
let Account  =  require('./Account');
let account = new Account()

let typeController  = new TypeController(account);
let eventController = new EventController(account);
let calendarController = new CalendarController(account);



app.post('/', (req, res) => {
    console.log('here');
    res.send('so far so good');
})

typeController.addType();
typeController.deleteType();
eventController.addEvent();
calendarController.getCanlender();