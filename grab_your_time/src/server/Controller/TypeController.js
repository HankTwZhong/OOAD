let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let type = require('../Type')
let cors =  require('cors');
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

class TypeController {
    constructor(account){
        this.account = account
    }
    addType(){
        app.post('/type', (req, res) => {
            console.log(req.body)
            let type = req.body;
            this.account.calendar.addType(new Type(type.typeName,[]))
            let calendar = new calendar
            let reulst = type.addType(type);
            res.send(result);
        })
    }
    deleteType(){

    }
}

module.exports = TypeController;