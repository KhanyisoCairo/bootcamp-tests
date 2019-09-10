let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment");

describe('mostProfitableDepartment function' , function(){
    it('should  return department with highest profit ' , function(){
        assert.deepEqual(mostProfitableDepartment([{"department":"hardware","sales":4500,"day":"Monday"},{"department":"outdoor","sales":1500,"day":"Monday"}]), "hardware")
    });

 
    it('should  return department with highest profit ' , function(){
        assert.deepEqual(mostProfitableDepartment([{"department":"outdoor","sales":8507,"day":"Wednesday"},{"department":"carpentry","sales":8009,"day":"Wednesday"},]), "outdoor")
    });
});