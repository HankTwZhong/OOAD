let assert = require('assert');
let Account = require('../src/server/Account.js');

describe('Account Operation', function() {
  let acc;
  before(function(){
    acc = new Account();
  });

  describe('constructor', function() {
    it('should Have accoount and password', function() {
      acc = new Account();
      assert.equal('admin',acc.account);
      assert.equal('1234', acc.password);
    });
  });
});