module.exports =function(data){
    console.log(data)
  var list =data.split(', ');
    var call = 0;
    var sms = 0;
    
    for(var i =0; i<list.length;i++){
      if(list[i] === 'call'){
        call++;
      }
      else if(list[i] === 'sms'){
        sms++;
      }
    
   var totalBill = (call*2.75) + (sms*0.65); 
    }
    return "R" + totalBill.toFixed(2);
  }