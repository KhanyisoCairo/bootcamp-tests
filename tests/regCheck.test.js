let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck' , function(){
     it('should check a registration number is GP also the location is the same and return true ' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true)
     });

     it('should check a registration number is L and the location is L and return true' , function(){
         assert.equal(regCheck('76353 L','L'),true)
     });

     it('should check a registration number for eastern Cape and location EC that are the same and return false ' , function(){
         assert.equal(regCheck('3638 EC','GP'),false)
     });

     it('should check a registration number for Western Cape and location EC that are the same and return true ' , function(){
        assert.equal(regCheck('CY 3638','CY'),true)
    });
    

});