function sorting(arrNumber) {
    // code di sini
  
    for (i = arrNumber.length - 1 ; i >= 0; i--) {
       for (j = arrNumber.length - 1; j >= i; j--) {
           if (arrNumber[i] < arrNumber[j]) {
            var angkabesar = arrNumber[i] 
            arrNumber[i] = arrNumber[j]
            arrNumber[j] = angkabesar
           }
       }
       
    }
    return arrNumber

  }
  
  console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]));