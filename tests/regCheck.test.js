describe('regCheck' , function(){
    it('should check a registration number is GP also the location is the same and return true ' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true)
    });

 

     it('should check a registration number is L and the location is L and return true' , function(){
         assert.equal(regCheck('L','L'),true)
     });

     it('should check a registration number for eastern Cape and location EC that are the same and return true ' , function(){
         assert.equal(regCheck('EC','EC'),true)
     });

     it('should check a registration number and location that is for Mpumalanga Province MP and return true' , function(){
         assert.equal(regCheck('MP','MP'),true)
     });

});