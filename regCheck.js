module.exports =function (regNum,loc){
    if(regNum.startsWith(loc)){
        return true;
    }else if(regNum.endsWith(loc)){
        return true;
    }
     return false;
}

// alert(regCheck('DV 23 NB GP', 'GP'))