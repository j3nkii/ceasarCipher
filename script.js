//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
let sentence = 'Hello World!'

function rot13(message, number) {
  let coded = [];
  //converter
  for(let index in message) {
    //create ascii array
    coded.push(message.charCodeAt(index))
  }
    //return string
    let converted = '';
    
    for(let ascii of coded) {
        //filters characters outside alphabet
      if(ascii < 65 || (ascii > 90 && ascii < 97) || ascii > 122) {
        converted = converted.concat(String.fromCharCode(ascii))
      }
      //if uppercase
      if(ascii >= 65 && ascii <= 90){
          //add cipher
          ascii+=number;
          //if in range add to return string
          ascii >= 65 && ascii <= 90 ? converted = converted.concat(String.fromCharCode(ascii)) 
          //otherwise put it into range
                    : converted = converted.concat(String.fromCharCode(ascii - 90 + 64))
      }
      //if lowercase
      if(ascii >= 97 && ascii <= 122){
        ascii+=number;
        ascii >= 97 && ascii <= 122 ? converted = converted.concat(String.fromCharCode(ascii)) 
                  : converted = converted.concat(String.fromCharCode(ascii - 122 + 96))
      }
    }
  return (converted)
  //if greater subtract and assign ot begining
}

console.log(rot13(sentence, 13));