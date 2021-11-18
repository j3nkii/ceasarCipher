//Project inspired by the bleow kata from codeWars
//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

function rot(message, number) {
  //let rotSentence = document.getElementById("rotInput").value;
 // let rotNumber = document.getElementById("rotNumber").value;

  //array to contain acsii values of each character 
  let coded = [];
  //converter: pushes acsii values to "coded", which will be used later to add "number", and create a string with the new letters.
  for(let index in message) {
    //create ascii array
    coded.push(message.charCodeAt(index))
  }
    //return string
    let converted = '';
    
    for(let ascii of coded) {
        //filters characters outside alphabet according to ascii values
      if(ascii < 65 || (ascii > 90 && ascii < 97) || ascii > 122) {
        converted += String.fromCharCode(ascii)
      }
      //if uppercase according to ascii values
      if(ascii >= 65 && ascii <= 90){
          //once the values 
          ascii+=parseInt(number);
          //if in range add to return string
          converted += ascii >= 65 && ascii <= 90
              ? String.fromCharCode(ascii)
          //otherwise put it into range
              : String.fromCharCode(ascii - 90 + 64)
      }
      //if lowercase
      //same as above only using proper ascii values
      if(ascii >= 97 && ascii <= 122){
        ascii+=parseInt(number);
        converted += ascii >= 97 && ascii <= 122 
            ? String.fromCharCode(ascii)
            : String.fromCharCode(ascii - 122 + 96)
      }
    }
  return document.getElementById("rot").innerHTML = `${converted}`
}
//document.getElementById("rot").innerHTML = `${rot(sentence, 13)}`;
//document.getElementById("rot").innerHTML = "asscheeks"
//console.log(rot(rotSentence, rotNumber));