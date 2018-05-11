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
let account = new Account('admin', '1234');

let  calendarController = new CalendarController(account);
let  typeController  = new TypeController(account);
let  eventController = new EventController(account);

app.get('/type', calendarController.getTypeList.bind(calendarController));
app.get('/event', calendarController.getEventList.bind(calendarController));
app.post('/event', eventController.addEvent.bind(eventController));
app.delete('/event', eventController.deleteEvent.bind(eventController));
app.post('/type', typeController.addType.bind(typeController));
app.delete('/type', typeController.deleteType.bind(typeController));
app.post('/login',function(req, res){
    account = new Account (req.account,req.password)
    
})
app.listen(1321, function () {
    console.log('listening on port 1321!');
})



