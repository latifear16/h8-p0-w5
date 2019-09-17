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

   }
  
  // function setLowerUpperCase (str) {
  //   //code di sini
  // }
  
  // function removeSpaces (str) {
  //   //code di sini
  // }
  
  // function passwordGenerator (name) {
  //   //code di sini
  // }
  
  // console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  // console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  // console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  // console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
  
  console.log(changeVocals('Sergei Dragunov'))
  console.log(reverseWord('Sergei Dragunov'))