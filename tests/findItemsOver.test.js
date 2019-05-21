describe('findItemsOver function' , function(){
    it('should  return all the products that have a quantity higher than threshold.  ' , function(){
        assert.deepEqual(findItemsOver([{name:"pears", qty:27}],25), [{name:"pears", qty:27}],25)
    });
    it('should  return all the products that have a quantity higher than threshold. ' , function(){
        assert.deepEqual(findItemsOver([{name:"bananas", qty:37}] ,25), [{name:"bananas", qty:37}],25)
    });
});