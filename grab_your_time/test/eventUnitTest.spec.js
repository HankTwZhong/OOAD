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
  describe('deleteEvent', function(){
    it('it should show empty eventList when deleteEvent', function(){
      let expectData = [{
        _id : '8081' ,
        title : 'OOAD',
        start : '2018-05-10T05:33:00.000Z',
        end : '2018-05-10T05:59:00.000Z',
        desc : 'coding'
      }]
      type.deleteEvent('Hank',expectData[0]._id,fakeDB);
      assert.deepEqual([], type.eventList);
    })
  })
});
