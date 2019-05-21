describe('fromWhere function' , function(){
    it('should  return Bellville if registration number is CY ' , function(){
        assert.equal(fromWhere('CY'),'Bellville')
    });

 it('should  return Paarl if registration number is CJ ' , function(){
        assert.equal(fromWhere('CJ'),'Paarl')
    });

 it('should  return Cape Town if registration number is CA ' , function(){
    assert.equal(fromWhere('CA'),'Cape Town')
});
});