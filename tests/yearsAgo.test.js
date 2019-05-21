describe('yearsAgo function' , function(){
    it(' should return how many years ago' , function(){
        assert.equal(yearsAgo(2018),1 )
    });
    it(' should return how many years ago' , function(){
        assert.equal(yearsAgo(2017),2 )
    });
    it(' should return how many years ago' , function(){
        assert.equal(yearsAgo(2019),0 )
    });

});