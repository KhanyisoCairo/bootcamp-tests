describe('regCheck' , function(){
     it('should check a registration number is GP also the location is the same and return true ' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),false)
     });

     it('should check a registration number is L and the location is L and return false' , function(){
         assert.equal(regCheck('L 76353','L'),true)
     });

     it('should check a registration number for eastern Cape and location EC that are the same and return false ' , function(){
         assert.equal(regCheck('EC 3638','EC'),true)
     });

    

});