import assert from 'assert';
import Type from '../src/server/Type.js';
import fakeDB from '../src/utils/fakeDB';
import Event from '../src/server/Event';

describe('event Operation', function() {
  let type;
  before(function(){
     type = new Type("OOAD",[]);
  });
  describe('#add Event', function(){
    it('it should show add event in eventList of type', function(done){
      let expectData = {
        _id : '8081' ,
        title : 'OOAD',
        start : '2018-05-10T05:33:00.000Z',
        end : '2018-05-10T05:59:00.000Z',
        desc : 'coding'
      }
      type.addEvent('Hank', expectData, fakeDB).then((result)=>{
        assert.equal(expectData._id,result[0]._id)
        assert.equal(expectData.title,result[0].title)
        assert.equal(expectData.start,result[0].start)
        assert.equal(expectData.end,result[0].end)
        assert.equal(expectData.desc,result[0].desc)
        done()
      }).catch(result => {
        done('something wrong')
      });
    })
  })
  describe('#delete Event', function(){
    it('it should show empty eventList when deleteEvent', function(){
      let expectId = '8081'
      type.deleteEvent('Hank',expectId,fakeDB);
      assert.deepEqual([], type.eventList);
    })
  })
  describe('#get Range Time', function(){
    it('it should get Range Of Time From Condition', function(){
      let expectData = {
        _id : '8081' ,
        title : 'OOAD',
        start : '2018-05-10T05:33:00.000Z',
        end : '2018-06-28T05:59:00.000Z',
        desc : 'coding',
        times: '一週',
        checked: true
      }
      let DataOfEventList =  [{"title":"OOAD","start":"2018-05-10T05:33:00.000Z","end":"2018-05-10T05:59:00.000Z","desc":"coding","_id":"8081"},{"title":"OOAD","start":"2018-05-17T05:33:00.000Z","end":"2018-05-17T05:59:00.000Z","desc":"coding"},{"title":"OOAD","start":"2018-05-24T05:33:00.000Z","end":"2018-05-24T05:59:00.000Z","desc":"coding"},{"title":"OOAD","start":"2018-05-31T05:33:00.000Z","end":"2018-05-31T05:59:00.000Z","desc":"coding"},{"title":"OOAD","start":"2018-06-07T05:33:00.000Z","end":"2018-06-07T05:59:00.000Z","desc":"coding"},{"title":"OOAD","start":"2018-06-14T05:33:00.000Z","end":"2018-06-14T05:59:00.000Z","desc":"coding"},{"title":"OOAD","start":"2018-06-21T05:33:00.000Z","end":"2018-06-21T05:59:00.000Z","desc":"coding"},{"title":"OOAD","start":"2018-06-28T05:33:00.000Z","end":"2018-06-28T05:59:00.000Z","desc":"coding"}];
      type.addCycleEvent('Hank', expectData, fakeDB);
      assert.equal(JSON.stringify(DataOfEventList), JSON.stringify(type.eventList));
    })
  })
});
