// Logic Challenge - Angka Prima
function angkaPrima(angka) {
  if(angka < 2) {
    return false;
  } else {
    var i = 2;
    while(i < angka) {
      if(angka % i === 0) {
        return false;
      }
      i++;
    }
    return true;
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false