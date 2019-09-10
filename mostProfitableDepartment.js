module.exports = function (profitableDepartment) {
  //console.log(profitableDepartment) 
  var department = '';
  var outdoor = 0;
  for (var i = 0; i < profitableDepartment.length; i++) {
    var sales = profitableDepartment[i].sales;
    var depart = profitableDepartment[i].department;

    if (profitableDepartment[i].sales > outdoor) {
      outdoor = sales;
      department = depart;
    }
  }
  //console.log(department)
  return department;
}