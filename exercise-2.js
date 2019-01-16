// Logic Challenge - Faktor Persekutuan Terbesar

// With iterative 
function fpb(angka1, angka2) {
  // switch if angka2 is greater than angka1
  if(angka2 > angka1) {
    var temp = angka1;
    angka1 = angka2;
    angka2 = temp;
  }

  // divide angka1 with angka2 or vise versa 
  // until one of them is 0
  while(true) {
    if(angka2 === 0) {
      return angka1;
    }
    angka1 %= angka2;
    
    if(angka1 === 0) {
      return angka2;
    }
    angka2 %= angka1;
  }

}

// With recursive
function alt_fpb(angka1, angka2) {
  if(angka2 === 0) {
    return angka1;
  }

  return fpb(angka2, angka1 % angka2);
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1