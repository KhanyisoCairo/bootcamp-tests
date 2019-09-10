let assert = require("assert");
let transportFee = require("../transportFee");

describe('transportFee function' , function(){
    it('should return morning shift the transport cost is R20 ' , function(){
        assert.equal(transportFee('morning'),'R20' )
    });
    it('should return afternoon shift the transport cost is R10 ' , function(){
        assert.equal(transportFee('afternoon'),'R10' )
    });
    it('should return  free if nightshift you pay nothing' , function(){
        assert.equal(transportFee('night'),'free' )
    });
});