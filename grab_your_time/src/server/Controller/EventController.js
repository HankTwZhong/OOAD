let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let cors =  require('cors');
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());


class EventController {
    constructor(account){
        this.account = account
    }
    addEvent(){
        app.post('/event', (req, res) => {
            let event = req.body;
        
            res.send(result);
        })
    }

}

module.exports = EventController;