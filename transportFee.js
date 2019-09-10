module.exports =function(shiftFee){
    console.log(shiftFee)
     switch(shiftFee){
       case "morning":
         
         return "R20";
         break;
         
       case "afternoon":
        
         return "R10";
         break;
         
         default :
         return "free"
                    }                
   }