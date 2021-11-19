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
  //instead of using subtraction, i just move it forward (a-1 && a+25 = z)
  if(number < 0){
    number = 25 - Math.abs(number)
  }
  //iterate through message and give it a numberical value based on its ascii to add the "number" later
  for(let index in message) {
    coded.push(message.charCodeAt(index));
  }

  let converted = '';
  


  for(let ascii of coded) {
    if(ascii < 65 || (ascii < 90 && ascii > 97) || ascii >122){
      converted+= String.fromCharCode(ascii);
    }else if(ascii >= 65 && ascii <= 90){
      ascii+=parseInt(number);
      converted += ascii >= 65 && ascii <= 90
          ? String.fromCharCode(ascii)
          : String.fromCharCode(ascii - 26) 
  } else if(ascii >= 97 && ascii <= 122){
        ascii+=parseInt(number);
        converted += ascii >= 97 && ascii <= 122 
            ? String.fromCharCode(ascii)
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
  */
