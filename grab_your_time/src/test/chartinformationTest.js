let Type = require('../server/Type');

let ChartInformation = require('../server/ChartInformation')
let expectTypeList = [{"eventList": [],"typeName": "STV"}]
let eventList =[{
    title: 'OOAD',
    start: new Date("1995-12-17T03:24:00"),
    end: {
        type: Date,
        require:true
    },
    desc: {
        type: String
    }
}]


expectTypeList.eventList.push(new Event());
let char = new ChartInformation();
let result = char.CalculateTotialTime(expectTypeList);
console.log(result);