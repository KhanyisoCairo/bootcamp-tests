module.exports = function (products,threshold){
    var allprod =[];
    for(var i =0; i<products.length;i++){  
     if(products[i].qty > threshold){
        allprod.push(products[i]);
     }
    }console.log(allprod)
  return allprod;
  }