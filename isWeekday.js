module.exports =function(week){
    if(week.startsWith('M')){
      return true;
    }
    else if(week.startsWith('T')){
      return true;
    }
    else if(week.startsWith('W')){
      return true;
    }
    else if(week.startsWith('F')){
      return true;
    }
    else{
      return false;
      }
  
  }