let assert = require('assert');
let Account = require('../src/server/Account.js');
let Calendar = require('../src/server/Calendar.js');
let Type = require('../src/server/Type.js');
let Event = require('../src/server/Event.js');

describe('Calendar Operation', function() {
  let cal;
  let type
  let eventData = {
    title : 'OOAD',
    start : '2018-05-10T05:33:00.000Z',
    end : '2018-05-10T05:59:00.000Z',
    desc : 'coding'
  };
  before(function(){
    cal = new Calendar([]);
    type = new Type('OOAD',[]);
    cal.addType('Hank', type);
  });
  describe('#add && deleteEvent', function(){
    it('it should show add Type in typelist of calendar', function(){
        cal.addEvent('Hank', eventData).then((result)=>{
            let deleteData = {
              _id:result.typeList[0].eventList[0]._id,
              title:result.typeList[0].eventList[0].title,
            };
            cal.deleteEvent('Hank', deleteData);
            let eventList = cal.getEventList();
            assert.deepEqual([], cal.getEventList());
             cal.deleteType('Hank', type.typeName);            
          })
    })
  })
});
