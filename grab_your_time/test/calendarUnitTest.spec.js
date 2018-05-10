let assert = require('assert');
let Account = require('../src/server/Account.js');
let Calendar = require('../src/server/Calendar.js');
let Type = require('../src/server/Type.js');
let Event = require('../src/server/Event.js');

describe.only('Calendar Operation', function() {
  let acc;
  let cal;
  beforeEach(function(){
    acc = new Account("Hank","1234")
    let initTypeList = [];
    cal = new Calendar(initTypeList);
  });

  describe('#getTypeList()', function() {
    it('it should same with assignt element', function() {
      let expectTypeList  = [];
      assert.deepEqual(expectTypeList, cal.getTypeList());
    });
  });

  describe('#addType', function(){
    it('it should show add Type in typelist of calendar', function(){
      let expectTypeList = [{"eventList": [],"typeName": "STV"}]
      let type = new Type('STV',[]);
      cal.addType(acc.account, type);
      assert.deepEqual(expectTypeList, cal.getTypeList());
      cal.deleteType(acc.account, type.typeName);
    })
  })

  describe('#deleteType', function(){
    it('it should show add Type in typelist of calendar', function(){
      let expectTypeList = [{"eventList": [],"typeName": "STV"}]
      let type = new Type('STV',[]);
      cal.addType(acc.account, type);
      cal.deleteType(acc.account, type.typeName);
      assert.deepEqual([], cal.getTypeList());
    })
  })
});