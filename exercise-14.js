// Logic Challenge - Naik Angkot
function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var dataPenumpang = []
  if(arrPenumpang.length < 1) {
    return []
  } else {
    for(var i = 0; i < arrPenumpang.length; i++) {
      var sampai = false;
      var titik = 0
      
      // find where passanger start at 
      for(var j = 0; j < rute.length; j++) {
        if(rute[j] === arrPenumpang[i][1]) {
          titik = j
          break;
        }
      }      
      
      dataPenumpang.push(penumpang = {
        penumpang : arrPenumpang[i][0],
        naikDari : arrPenumpang[i][1],
        tujuan : arrPenumpang[i][2],
        bayar : 0
      })

      while(!sampai) {
        if(rute[titik] === dataPenumpang[i].tujuan) {
          sampai = true
        } else {
          dataPenumpang[i].bayar += 2000
          titik++
        }
      }
    }
  }
  return dataPenumpang
  
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]