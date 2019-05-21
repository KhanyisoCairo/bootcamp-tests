describe('mostProfitableDepartment function' , function(){
    it('should  return department with highest profit ' , function(){
        assert.deepEqual(mostProfitableDepartment([{"department":"hardware","sales":4500,"day":"Monday"},{"department":"outdoor","sales":1500,"day":"Monday"}]), "hardware")
    });

 it('should  return department with highest profit ' , function(){
        assert.deepEqual(mostProfitableDepartment([{"department":"carpentry","sales":5500,"day":"Monday"},{"department":"hardware","sales":7500,"day":"Tuesday"},]), "hardware")
    });
    it('should  return department with highest profit ' , function(){
        assert.deepEqual(mostProfitableDepartment([{"department":"outdoor","sales":8507,"day":"Wednesday"},{"department":"carpentry","sales":8009,"day":"Wednesday"},]), "outdoor")
    });
});