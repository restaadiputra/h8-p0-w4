// Logic Challenge - Tukar Besar Kecil
function tukarBesarKecil(kalimat) {
  // split string
  var letters = []
  for(var i = 0; i < kalimat.length; i++) {
    letters.push(kalimat[i])
  }

  // check string
  for(var i = 0; i < letters.length; i++) {
    if(letters[i] === letters[i].toUpperCase()) {
      letters[i] = letters[i].toLowerCase()
    } else {
      letters[i] = letters[i].toUpperCase()
    }
  }

  // join string
  var sortStr = ''
  for(var i = 0; i < letters.length; i++) {
    sortStr += letters[i]
  }

  return sortStr;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"