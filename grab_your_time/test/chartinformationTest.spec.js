import assert from 'assert';
import Event from'../src/server/Event';
import ChartInformation from '../src/server/ChartInformation';

describe('chartInformatrion Operation', function() {
    let filteredTypeList ;
    let startDate = "2018-12-15T00:00:00.000Z";
    let endtDate =  "2018-12-20T00:00:00.000Z";
    let expectTypeList ;
    describe('#filterTypeList', function(){
            it('it should show result of filterTypeList method', function(){
                expectTypeList= [{"typeName": "STV", "eventList": []}]
                let eventList =[{
                    title: 'STV',
                    start: new Date("2018-12-17T12:00:00.000Z"),
                    end: new Date("2018-12-17T18:00:00.000Z"),
                    desc: 'coding'
                },{
                    title: 'STV',
                    start: new Date("2018-12-18T13:00:00.000Z"),
                    end:new Date("2018-12-18T15:00:00.000Z"),
                    desc: 'hPTH'
                },{
                    title: 'OOAD',
                    start: new Date("2018-12-25T13:00:00.000Z"),
                    end:new Date("2018-12-25T15:00:00.000Z"),
                    desc: 'hPTH'
                }]


                let expectData = [{
                    title: 'STV',
                    start: new Date("2018-12-17T12:00:00.000Z"),
                    end: new Date("2018-12-17T18:00:00.000Z"),
                    desc: 'coding'
                },{
                    title: 'STV',
                    start: new Date("2018-12-18T13:00:00.000Z"),
                    end:new Date("2018-12-18T15:00:00.000Z"),
                    desc: 'hPTH'
                }]


                let eve = new Event(eventList[0].title, eventList[0].start, eventList[0].end, eventList[0].desc);
                let eve2 = new Event(eventList[1].title, eventList[1].start, eventList[1].end, eventList[1].desc);

                expectTypeList[0].eventList.push(eve);
                expectTypeList[0].eventList.push(eve2);
                let char = new ChartInformation();
                filteredTypeList = char.filterTypeList(expectTypeList, startDate, endtDate);
                assert.equal(JSON.stringify(filteredTypeList), JSON.stringify(expectTypeList));

        })
    })

    describe('#makeChartInformation', function(){
        it('it should show result of makeChartInformation method', function(){
            let char = new ChartInformation();
            let calculateChar = char.makeChartInformation(filteredTypeList);
            assert.equal(8, calculateChar[0].totalSpentHours);
        })
    })

    describe('#getChartInformation', function(){
        it('it should show result of getChartInformation method', function(){
            let char = new ChartInformation();
            let getChartInformation = char.getChartInformation(expectTypeList, startDate, endtDate);
            let calculateChar = char.makeChartInformation(filteredTypeList);
            assert.equal(JSON.stringify(getChartInformation), JSON.stringify(calculateChar));
        })
    })
});