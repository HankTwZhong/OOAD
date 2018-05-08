let assert = require('assert');
let Account = require('../src/server/Account.js');
let Calendar = require('../src/server/Calendar.js');
let Type = require('../src/server/Type.js');

describe('Calendar Operation', function() {
  let acc;
  let cal;
  before(function(){
    let initTypeList = [{"eventList": [],"typeName": "OOAD"}];
    cal = new Calendar(initTypeList);
  });

  describe('#getTypeList()', function() {
    it('it should same with assignt element', function() {
      let expectTypeList  = [{"eventList": [],"typeName": "OOAD"}];
      assert.deepEqual(expectTypeList, cal.getTypeList());
    });
  });

  describe('#addType', function(){
    it('it should show add Type in typelist of calendar', function(){
      let type = new Type('STV',[]);
      let expectTypeList = [{"eventList": [],"typeName": "OOAD"},{"eventList": [],"typeName": "STV"}]
      cal.addType(type);
      assert.deepEqual(expectTypeList, cal.getTypeList());
      // cal.deleteType(type.typeName);
    })
  })

  describe('#deleteType', function(){
    it('it should show add Type in typelist of calendar', function(){
      let typeName = 'OOAD';
      cal.deleteType(typeName);
      // assert.deepEqual([], cal.getTypeList());
    })
  })
});