// Logic Challenge - Change Me!
function changeMe(arr) {
  if(arr.length < 1) {
    console.log('')
  } else {
    var yearNow = 2019

    for(var i = 0; i < arr.length; i++) {
      var ageNow = 'Invalid Birth Year'
      if(arr[i][3] !== undefined || arr[i][0] < yearNow) {
        ageNow = yearNow - arr[i][3]
      }
      data = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2], 
        age: ageNow 
      }
      console.log(i+1 + '. ' + data.firstName + ' ' + data.lastName)
      console.log(data)
    }
  }
  
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""