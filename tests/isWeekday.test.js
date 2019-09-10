let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday function' , function(){
    it('should  return true if its Monday' , function(){
        assert.equal(isWeekday('Monday'),true)
    });
    it('should  return true if its Tuesday' , function(){
        assert.equal(isWeekday('Tuesday'),true)
    });
    it('should  return true if its Wednesday' , function(){
        assert.equal(isWeekday('Wednesday'),true)
    });
    it('should  return false if its Saturday' , function(){
        assert.equal(isWeekday('Saturday'),false)
    });
    it('should  return false if its Sunday' , function(){
        assert.equal(isWeekday('Sunday'),false)
    });
});