let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('findItemsOver function' , function(){
    it('should  return all the products that have a quantity higher than threshold.  ' , function(){
        assert.deepEqual(findItemsOver([{name:"pears", qty:27}],25), [{name:"pears", qty:27}])
    });
    it('should  return an empty Array if quantity product is  higher lower than  threshold. ' , function(){
        assert.deepEqual(findItemsOver([{name:"bananas", qty:9},{name:"apples", qty:11}], 15),[])
    }); 
    
});