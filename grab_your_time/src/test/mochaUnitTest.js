// let Account = require('../server/Account')
// describe('firstTest',function(){
//     let account;
//     before(function(){
//         account = new Account();
//     })
//     it('should have data', function(){
//         console.log('mocha');
//     });
// })

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});