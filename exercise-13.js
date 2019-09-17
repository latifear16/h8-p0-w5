function sorting(arrNumber) {
    // code di sini
  
    for (i = 0 ; i < arrNumber.length; i++) {
       for (j = 0; j < i; j++) {
           if (arrNumber[i] < arrNumber[j]) {
            var angkakecil = arrNumber[i] 
            arrNumber[i] = arrNumber[j]
            arrNumber[j] = angkakecil
           }
       }
       
    }
    return arrNumber

  }
  
  function getTotal(arrNumber) {
    // code di sini
    console.log("kok kebalik" + arrNumber)
    if (arrNumber.length === 0) {
      return arrNumber
    }

    var freq = []
    var angkaTerbesar = arrNumber[arrNumber.length-1]
    for (i = 0; i < arrNumber.length; i++) {
        var count = 0
        for (j = 0; j < arrNumber.length; j++) {
            if (arrNumber[i] === arrNumber[j]) {
                count ++
            }
        }
        freq.push(count)
      }
      var frekuensi = freq[freq.length-1]
      return "angka paling besar adalah " + angkaTerbesar + " dan jumlah kemunculan sebanyak " + frekuensi 
    }

    // var min = 1
    // var modusIndex = -1
    // for(i = 0; i < freq.length; i++) {
    //     if (freq[i] > min) {
    //         modusIndex = i
    //         min = freq[i]
    //     }
    // }
    // // if(min === ) {
    // //      return 
    // // }
    // var modus = arrNumber[modusIndex]
    // return modus
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);

    return countHighest;
  }

// console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]));
// console.log (getTotal([2, 8, 4, 6, 8, 5, 8, 4]))
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''