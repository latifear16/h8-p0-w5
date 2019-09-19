function totalDigitRekursif(angka) {
var angkaString = angka.toString()  

    if (angkaString.length === 1) {
        return Number(angka)
    }  
    else {
        // angkaString = angkaString.slice(1)
        var angkaTerdepan = angkaString[0]
        angkaString = angkaString.slice(1)  
        return Number(angkaTerdepan) + totalDigitRekursif (Number(angkaString))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5