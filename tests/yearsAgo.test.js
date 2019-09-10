let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('yearsAgo function' , function(){
    it(' should return 1 years when the year is 2018' , function(){
        assert.equal(yearsAgo(2018),1 )
    });
    it(' should return 2 years when the year is 2017' , function(){
        assert.equal(yearsAgo(2017),2 )
    });
    it(' should return 0 because its the current year 2019' , function(){
        assert.equal(yearsAgo(2019),0 )
    });

});