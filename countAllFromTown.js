module.exports = function (regNum, loc) {
  var countFromTown = regNum.split(',');
  console.log(countFromTown)
  console.log(regNum)
  var regNumber = [];

  for (var i = 0; i < countFromTown.length; i++) {

    if (countFromTown[i].startsWith(loc) || countFromTown[i].startsWith(' ' + loc)) {
      regNumber.push(countFromTown[i]);
    }
  }
  return regNumber.length;
}