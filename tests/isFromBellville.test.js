describe('isFromBellville function' , function(){
    it('should  return true if a registration number is for Bellville otherwise returns false ' , function(){
        assert.equal(isFromBellville('CY'), true)
    });
    it('should  return false if the registration number is from Cape Town "CA" ' , function(){
        assert.equal(isFromBellville('CA'), false)
    });
    it('should Gauteng "GP" but it will return false since registration is not from Bellville ' , function(){
        assert.equal(isFromBellville('GP'), false)
    });
});