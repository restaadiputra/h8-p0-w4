// Logic Challenge - Mengurutkan Abjad
function urutkanAbjad(str) {
  // split string
  var letters = []
  for(var i = 0; i < str.length; i++) {
    letters.push(str[i])
  }

  // sort string
  for(var i = 0; i < letters.length; i++) {
    var pos = i; 
    for(var j = i; j < letters.length; j++) {
      if(letters[j] < letters[pos]) {
        pos = j
      }
    }
    var temp = letters[i]
    letters[i] = letters[pos]
    letters[pos] = temp
  }

  // join string
  var sortStr = ''
  for(var i = 0; i < letters.length; i++) {
    sortStr += letters[i]
  }

  return sortStr;
}

// if using built-in function
function urutkanAbjad2(str) {
  return str.split('').sort().join('')
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'