// Logic Challenge - Shopping Time!
function shoppingTime(memberId, money) {
  if(memberId === '' || memberId === undefined ) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }

  // List of brand's prices
  var brandPrices = {
    'Sepatu Stacattu' : 1500000,
    'Baju Zoro' : 500000,
    'Baju H&N' : 250000,
    'Sweater Uniklooh' : 175000,
    'Casing Handphone' : 50000
  }

  // Check if person has enough minimum money
  var minMoney = 0 
  for(brand in brandPrices) {
    if(minMoney === 0 || brandPrices[brand] < minMoney) {
      minMoney = brandPrices[brand]
    }
  }
  if(money < minMoney || money === undefined) {
    return 'Mohon maaf, uang tidak cukup'
  }

  // if member id is present and money is enough
  var data = {
    memberId : memberId,
    money : money,
    listPurchased: [],
    changeMoney: 0 
  }
  
  for(item in brandPrices) {
    if(money >= brandPrices[item]) {
      data.listPurchased.push(item)
      money -= brandPrices[item]
    }
  }
  data.changeMoney = money

  return data
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
