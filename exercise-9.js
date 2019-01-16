// Logic Challenge - Check AB
function checkAB(num) {
  var data = { a : [], b : [] }

  for(var i = 0; i < num.length; i++) {
    if(num[i] === 'a'){
      data.a.push(i)
    } else if(num[i] === 'b'){
      data.b.push(i)
    } 
  }
  
  for(var i = 0; i < data.a.length; i++) {
    for(var j = 0; j < data.b.length; j++) {
      if(Math.abs(data.a[i] - data.b[j]) === 4){
        return true
      }
    }
  }

  return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false