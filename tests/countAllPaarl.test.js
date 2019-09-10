let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl function' , function(){
    it('should return true if all from paarl ' , function(){
        assert.equal(countAllPaarl('CJ 1236'),1)
    });
    it('should if the registration is not from Paarl must return 0 ' , function(){
        assert.equal(countAllPaarl('CA 1236'),0)
    });
   
});