module.exports =  function (regNum){
    var countPaarl = regNum.split(', ');
    var paarl = [];
    console.log(countPaarl)
    for(var i=0; i<countPaarl.length;i++){
      if(countPaarl[i].startsWith('CJ')){
        paarl.push(countPaarl[i]);
        
      } 
    }console.log(paarl)
   return paarl.length;
  }