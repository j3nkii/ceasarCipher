//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
let sentence = 'Hello World!'



function rot(message, number) {
  //let rotSentence = document.getElementById("rotInput").value;
 // let rotNumber = document.getElementById("rotNumber").value;
    
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
          ascii+=parseInt(number);
          //if in range add to return string
          ascii >= 65 && ascii <= 90 ? converted = converted.concat(String.fromCharCode(ascii)) 
          //otherwise put it into range
                    : converted = converted.concat(String.fromCharCode(ascii - 90 + 64))
      }
      //if lowercase
      if(ascii >= 97 && ascii <= 122){
        ascii+=parseInt(number);
        ascii >= 97 && ascii <= 122 ? converted = converted.concat(String.fromCharCode(ascii)) 
                  : converted = converted.concat(String.fromCharCode(ascii - 122 + 96))
      }
    }
  return document.getElementById("rot").innerHTML = `${converted}`
  //if greater subtract and assign ot begining
}
//document.getElementById("rot").innerHTML = `${rot(sentence, 13)}`;
//document.getElementById("rot").innerHTML = "asscheeks"
//console.log(rot(rotSentence, rotNumber));