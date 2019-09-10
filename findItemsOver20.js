module.exports = function (products){
    var allproducts =[];
    for(var i =0; i<products.length;i++){  
      if(products[i].qty > 20){
        allproducts.push(products[i]);
      }
    }
    console.log(allproducts)
    return allproducts;
  }
    
  function findItemsOver(products,threshold){
    var allprod =[];
    for(var i =0; i<products.length;i++){  
     if(products[i].qty > threshold){
        allprod.push(products[i]);
     }
    }console.log(allprod)
  return allprod;
  }