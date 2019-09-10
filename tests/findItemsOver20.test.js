let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('findItemsOver20 function' , function(){
    it('should  return all the products that have a quantity higher than 20.  ' , function(){
        assert.deepEqual(findItemsOver20([{name:"pears", qty:24}]), [{name:"pears", qty:24}])
    });
    it('should  return an empty Array if the is no quantity product higher than 20. ' , function(){
        assert.deepEqual(findItemsOver20([{name:"bananas", qty:17},{name:"pears", qty:17}]), [])
    });
});