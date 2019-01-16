// Logic Challenge - Mencari Modus
function cariModus(arr) {
  var modus = 0;
  var countModus = 0;

  for(var i = 0; i < arr.length; i++) {
    var count = 0;
    for(var j = 0; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        count++
      }
    }
    if(countModus < count) {
      modus = arr[i]
      countModus = count
    }
  } 
  if(countModus === 1 || countModus === arr.length) {
    return -1
  } else {
    return modus
  }
}

// alternative using obj
function alt_cariModus(arr) {
  var numObj = {}
  var modus = 0
  var count = 0

  for(var i = 0; i < arr.length; i++) {
    if(!numObj[arr[i]]) {
      numObj[arr[i]] = 1
    } else {
      numObj[arr[i]] += 1
    }
  } 
  
  for(num in numObj){
    if(count === 0 || numObj[num] > count) {
      modus = num
      count = numObj[num]
    }
  }

  if(count === 1 || count === arr.length) {
    return -1
  } else {
    return modus
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1