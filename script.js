//Project inspired by the bleow kata from codeWars
//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
//Which led me for create a Ceaser Cipher or Rot (rotation) Cipher
//used to encrypt messages, it is one of the oldest and easiest designs
//Simply use a number to add to a letters index to create a new value
//ex. a+1=b ; a+2=c.
//instead of going through creating numberical values for each letter,
//i used the  ascii values(https://www.w3schools.com/charsets/ref_html_ascii.asp).
//Although, it will only function properly with 1-24 for the number input.
//It also returns any character outside the Latin Alphabet

 //converter: pushes acsii values to "coded", which will be used later to add "number", and create a string with the new letters.
function rot(message, number) {

  //array to contain acsii values of each character 
  let coded = [];
 
  //iterate through message and give it a numberical value to add the "number" later
  for(let index in message) {
    coded.push(message.charCodeAt(index));
  }
  if((number) > 24 || number < 1) {
    return document.getElementById("rot").innerHTML = "SYSTEM OVERLOAD"
  }
  //return string
  let converted = '';
  
  for(let ascii of coded) {
      //filters characters outside alphabet according to ascii values(uppercase=65-90)(lowercase=97-122)
    if(ascii < 65 || (ascii > 90 && ascii < 97) || ascii > 122) {
      converted += String.fromCharCode(ascii);
    }
    //if uppercase according to ascii values
    if(ascii >= 65 && ascii <= 90){
        //add the "number" to to the ascii value to be encrypted
        ascii+=parseInt(number);
        //if in range of the uppercase values, add to "converted" encryption
        converted += ascii >= 65 && ascii <= 90
            ? String.fromCharCode(ascii)
            //otherwise recalculate to start from begining of alphabet
            : String.fromCharCode(ascii - 90 + 64);
    }
    //if lowercase ---- same as above only using proper ascii values for the lowercase range 
    if(ascii >= 97 && ascii <= 122){
      ascii+=parseInt(number);
      converted += ascii >= 97 && ascii <= 122 
          ? String.fromCharCode(ascii)
          : String.fromCharCode(ascii - 122 + 96);
    }
    }
  return document.getElementById("rot").innerHTML = `${converted}`
}