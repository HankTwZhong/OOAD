let assert = require('assert');
let Account = require('../src/server/Account.js');
let Calendar = require('../src/server/Calendar.js');
let Type = require('../src/server/Type.js');
let Event = require('../src/server/Event.js');

describe('Calendar Operation', function() {
  let acc;
  let cal;
  beforeEach(function(){
    acc = new Account("Hank","1234")
    let initTypeList = [];
    cal = new Calendar(initTypeList);
    let type = new Type('OOAD',[]);
    cal.addType(acc.account, type);
  });
  afterEach(function(){
    let type = new Type('OOAD',[]);
    cal.deleteType(acc.account, type.typeName);
  })

  describe('#addEvent', function(){
    it('it should show add Type in typelist of calendar', function(){
      let typeName = 'OOAD';
      let type = new Type('OOAD',[]);
      cal.addType(acc.account, type);
      let eventData = {
                    "title" : "OOAD",
                    "start" : "2018-05-10T05:33:00.000Z",
                    "end" : "2018-05-10T05:59:00.000Z",
                    "desc" : "coding"
                  };
      cal.addEvent(acc.account, eventData);
      let expectEventData =  [ {
                                title: 'OOAD',
                                start: '2018-05-10T05:33:00.000Z',
                                end: '2018-05-10T05:59:00.000Z',
                                desc: 'coding'
                            } ];
      assert.deepEqual(expectEventData, cal.getEventList());
      // cal.deleteEvent(acc.account,typeName);
    })
  })

  describe('#deleteEvent', function(){
    it('it should show add Type in typelist of calendar', function(){
      let eventData = {
                    "title" : "OOAD",
                    "start" : "2018-05-10T05:33:00.000Z",
                    "end" : "2018-05-10T05:59:00.000Z",
                    "desc" : "coding"
                  };

        let eventData2 = {
          "title" : "OOAD",
          "start" : "2018-05-10T05:33:00.000Z",
          "end" :   "2018-05-10T05:59:00.000Z",
          "desc" : "codingHI"
        };
      cal.addEvent(acc.account, eventData2);
      cal.addEvent(acc.account, eventData).then((result)=>{
        let deleteData = {
          _id:result.typeList[0].eventList[1]._id,
          title:result.typeList[0].eventList[1].title,
          
        };
        cal.deleteEvent(acc.account, deleteData);
        let eventList = cal.getEventList();
      })
    })
  })
});