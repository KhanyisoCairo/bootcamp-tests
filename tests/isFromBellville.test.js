describe('isFromBellville function' , function(){
    it('should  return true if a registration number is for Bellville otherwise returns false ' , function(){
        assert.equal(isFromBellville('CY'), true)
    });
    it('should  return true if a registration number is for Bellville otherwise returns false ' , function(){
        assert.equal(isFromBellville('CA'), false)
    });
    it('should  return true if a registration number is for Bellville otherwise returns false ' , function(){
        assert.equal(isFromBellville('GP'), false)
    });
});