let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('totalPhoneBill function' , function(){
    it('should  return the total Bill of calls provided. ' , function(){
        assert.equal(totalPhoneBill('call'), "R2.75")
    });
    it('should  return the total bill of sms provided. ' , function(){
        assert.equal(totalPhoneBill('sms'), "R0.65")
    });


});