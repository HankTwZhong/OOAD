var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var service = require('./service');
var Account = require('./Account');
var Calendar  = require('./Calendar');
var Type = require('./Type');
var cors =  require('cors');

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
let account ;


app.post('/', (req, res) => {
    console.log('here');
    res.send('so far so good');
})

app.post('/event', (req, res) => {
    let event = req.body;
    console.log(event);
    account.calendar.addEvent(event);
    res.send('Add Event Success');
})

// app.post('/findEvent', (req, res) => {
//     let event = req.body;
//     service.findEvent(event);
//     res.send('so far so good');
// })

// app.get('/getEvent', (req, res) =>{
//     let getEvent = service.getEvent()
//     getEvent.then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err)
//         res.send(err);
//     })
// })

// app.delete('/deleteEvent', (req, res) =>{
//     let event = req.body;
//     let type = new Type();
//     let deleteEvent = type.deleteEvent(event._id);
//     deleteEvent.then((result) => {
//         res.send(result);
//     }).catch((err) =>{
//         res.send(err);
//     })
// })

app.delete('/event', (req, res) =>{
        let event = req.body;
        console.log(event)
        account.calendar.deleteEvent(event);
        res.send('delete Success');
        // deleteEvent.then((result) => {
        //     res.send(result);
        // }).catch((err) =>{
        //     res.send(err);
        // })
})

app.get('/event', (req, res) =>{
    // let calendar = account.calendar.getTypeList();
    // let eventList = [];
    // calendar.forEach((type)=>{
    //     type.eventList.forEach((event)=>{
    //         eventList.push(event);
    //     })
    // })
    let eventList = [];
    eventList =account.calendar.getEventList();
    console.log(eventList);
    res.send(eventList);
})


app.post('/type', (req, res) => {
    let type = req.body;
    console.log(account);
    account.calendar.addType(new Type(type.typeName,[]))
    res.send('Add Type Success');
})

app.get('/type', (req, res) =>{
    let calendar = account.calendar.getTypeList();
    res.send(calendar);
})

app.delete('/type', (req, res) =>{
    let typeName = req.body.typeName;
    account.calendar.deleteType(typeName);
    res.send('Delete Type Success');
})

app.listen(1321, function () {
    account = new Account();
    console.log(account)
    console.log('listening on port 1321!');
})