//Project inspired by the bleow kata from codeWars
//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
//Which led me for create a Ceaser Cipher or Rot (rotation) Cipher
//used to encrypt messages, it is one of the oldest and easiest designs
//Simply use a number to add to a letters index to create a new value
//ex. a+1=b ; a+2=c.
//instead of going through creating numberical values for each letter,
//i used the  ascii values(https://www.w3schools.com/charsets/ref_html_ascii.asp).
//It also returns any character outside the Latin Alphabet

 //converter: pushes acsii values to "coded", which will be used later to add "number", and create a string with the new letters.
function rot(message, number) {

  //array to contain acsii values of each character 
  let coded = [];
  //makes numbers above 25 usable
  number = number%26;
  if(number < 0){
    number = 25 - Math.abs(number)
  }
  //iterate through message and give it a numberical value to add the "number" later
  for(let index in message) {
    coded.push(message.charCodeAt(index));
  }
  //if number will not work in function, return system overload and end funciton
  //if(number < 0) {
  //return document.getElementById("rot").innerHTML = "SYSTEM OVERLOAD"
  //}
  //return string
  let converted = '';
  
  for(let ascii of coded) {
    if(ascii >= 65 && ascii <= 90){
      //add the "number" to to the ascii value to be encrypted
      ascii+=parseInt(number);
      //if in range of the uppercase values, add to "converted" encryption
      converted += ascii >= 65 && ascii <= 90
          ? String.fromCharCode(ascii)
          //otherwise recalculate to start from begining of alphabet
          : String.fromCharCode(ascii - 26) 
  } else if(ascii >= 97 && ascii <= 122){
        //cool, now add the roation
        ascii+=parseInt(number);
        //is it still a letter?
        converted += ascii >= 97 && ascii <= 122 
        //yes? cool, return that later
            ? String.fromCharCode(ascii)
            //no? well, was it greater than 0?
            : String.fromCharCode(ascii - 26) 
    }
  }
  return document.getElementById("rot").innerHTML = `${converted}`
}






/*TESTCASE
let fuckmerunning = 0;
while(fuckmerunning <= 26){
  console.log(fuckmerunning ,rot('ABCDEFGHIJKLMNOPQRSTUVWXYZ', fuckmerunning));
  console.log(fuckmerunning ,rot('abcdefghijklmnopqrstuvwxyz', fuckmerunning));
  fuckmerunning++
}

fuckmerunning = 0;
while(fuckmerunning >= -26){
  console.log(fuckmerunning ,rot('ABCDEFGHIJKLMNOPQRSTUVWXYZ', fuckmerunning));
  console.log(fuckmerunning ,rot('abcdefghijklmnopqrstuvwxyz', fuckmerunning));
  fuckmerunning--
}
