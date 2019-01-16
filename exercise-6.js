// Logic Challenge - Digit Perkalian Minimum
function digitPerkalianMinimum(angka) {
  var pembagi = 1;
  var minDigit = 0;
  while(pembagi <= (angka/pembagi)) {
    if(angka % pembagi === 0) {
      var temp = '' + (angka / pembagi) + pembagi;
      if(minDigit === 0 || temp.length < minDigit) {
        minDigit = temp.length;
      } 
    }
    pembagi++; 
  }
  return minDigit;
}

// // TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2