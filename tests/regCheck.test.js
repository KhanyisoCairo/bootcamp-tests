describe('regCheck' , function(){
    it('should check a registration number' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true)
    });

 

     it('should check a registration number' , function(){
         assert.equal(regCheck('L','L'),true)
     });

     it('should check a registration number' , function(){
         assert.equal(regCheck('EC','EC'),true)
     });

     it('should check a registration number' , function(){
         assert.equal(regCheck('MP','MP'),true)
     });

});