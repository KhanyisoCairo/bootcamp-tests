let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('countRegNumber function' , function(){
    it('should return 2 registration number' , function(){
        assert.equal(countRegNumber('CY345,CJ678'),2);   
    });
    it('should return 4 registration number' , function(){
        assert.equal(countRegNumber('GP4574,CY345,CJ678,CA7839'),4);   
    });
    it('should return 0 if the is no registration number ' , function(){
        assert.equal(countRegNumber('CA5435'),1);   
    });

});