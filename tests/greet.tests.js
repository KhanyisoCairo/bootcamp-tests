let assert = require("assert");
let greet = require("../greet");

describe('greet function' , function(){
    it('should greet with name "Cairo"' , function(){
        assert.equal(greet('Cairo'), "Hello, Cairo")
    });

    it('should greet with name "Milani"' , function(){
        assert.equal(greet('Milani'), "Hello, Milani")
    });


});