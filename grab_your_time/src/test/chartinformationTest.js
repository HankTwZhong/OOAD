let Type = require('../server/Type');
let Event = require('../server/Event');

let ChartInformation = require('../server/ChartInformation')
let expectTypeList = {"eventList": [],"typeName": "STV"}
let eventList =[{
    title: 'STV',
    start: new Date("1995-12-17T12:00:00"),
    end: new Date("1995-12-17T18:00:00"),
    desc: 'coding'
},{
    title: 'STV',
    start: new Date("1995-12-17T13:00:00"),
    end:new Date("1995-12-17T15:00:00"),
    desc: 'hPTH'
}]



let eve = new Event(eventList[0].title, eventList[0].start, eventList[0].end, eventList[0].desc);
let eve2 = new Event(eventList[1].title, eventList[1].start, eventList[1].end, eventList[1].desc);

expectTypeList.eventList.push(eve);
expectTypeList.eventList.push(eve2)
console.log(expectTypeList);
let char = new ChartInformation();
let result = char.CalculateTotialTime(expectTypeList);
console.log("result:\t"+JSON.stringify(result));