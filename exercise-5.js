// Logic Challenge - Ubah Huruf
function ubahHuruf(kata) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var newKata = ''

  for(var i = 0; i < kata.length; i++) {
    var pos = 0
    var found = false

    while(!found) {
      if(kata[i] === alphabet[pos]) {
        found = true;
      } 
      pos++;
    }
    
    newKata += alphabet[(pos) % alphabet.length]
  }
  return newKata
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('z')) // a -> my own test case if letter is 'z'