describe('countAllFromTown function' , function(){
    it('should  return all from town ' , function(){
        assert.equal(countAllFromTown('CL 23563 ','CL'),1 )
    });
    it('should  if registration is CA must return from Town' , function(){
        assert.equal(countAllFromTown('CA 23563 ','CA'),1 )
    });

});