function changeVocals (str) {
    //code di sini
    var vocals = ''
    for (i = 0 ; i < str.length; i++) {
      switch(str[i]) {
        case 'a' :
        vocals += 'b';
        break;

        case 'i' :
        vocals += 'j';
        break;

        case 'u' :
        vocals += 'v';
        break;

        case 'e' :
        vocals += 'f';
        break;
        
        case 'o' :
        vocals += 'p';
        break;

        case 'A' :
        vocals += 'B';
        break;

        case 'I' :
        vocals += 'J';
        break;

        case 'U' :
        vocals += 'V';
        break;

        case 'E' :
        vocals += 'F';
        break;
        
        case 'O' :
        vocals += 'P';
        break;

        default :
        vocals += str[i];
        break;
      }
    }
    return vocals
  }
  
   function reverseWord (str) {
   //code di sini
  //  var vokalDiubah = changeVocals(str)
  var reverseVocals = ''
   
   for (i = str.length - 1; i >= 0; i--) {
    reverseVocals += str[i]
     }
     return reverseVocals
   }
  
   function setLowerUpperCase (str) {
     //   //code di sini
     var smallAlphabet = 'abcdefghijklmnopqrstuvwxyz'
     var bigAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
     var lowerUpper = ''
     for (i = 0; i < str.length; i++) {
       for (j = 0; j < smallAlphabet.length; j++) {
         if (str[i] === smallAlphabet[j]) {
          lowerUpper += bigAlphabet[j]
         } 
         else if (str[i] === bigAlphabet[j])
         {
           lowerUpper += smallAlphabet[j]
         }
       }
     }
     return lowerUpper
   }
  
  function removeSpaces (str) {
  //   //code di sini
  var begoneSpace = ''
  for (i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      begoneSpace += ''
    } else {
      begoneSpace += str[i]
    }
  }
  return begoneSpace
   }
  
   function passwordGenerator (name) {
  //   //code di sini
    if (name.length < 5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
  
   var gantiVokal = changeVocals(name)
   var balikKata = reverseWord(gantiVokal)
   var hurufBesarKecil = setLowerUpperCase(balikKata)
   var buangSpasi = removeSpaces(hurufBesarKecil)
   
   return buangSpasi
   }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
  
  // console.log(changeVocals('Sergei Dragunov'))
  // console.log(reverseWord('Sergei Dragunov'))
  // console.log(setLowerUpperCase('Sergei Dragunov'))
  // console.log(removeSpaces('Sergei Dragunov'))
