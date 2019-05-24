function regCheck(regNum,loc){
    if(regNum.startsWith(loc)){
        return true;
    }else if(regNum.endsWith(loc)){
        return false;
    }
    return regNum.endsWith(loc)
}

// alert(regCheck('DV 23 NB GP', 'GP'))