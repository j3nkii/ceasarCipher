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
    number = 26 - Math.abs(number)
  }
  //iterate through message and give it a numberical value based on its ascii to add the "number" later
  for(let index in message) {
    coded.push(message.charCodeAt(index));
  }
  //to be used as a return string
  let converted = '';
  // iterate through ascii values
  for(let ascii of coded) {
    //if its not a letter, nothing happens, and it gets added to return string
    if(ascii < 65 || (ascii > 90 && ascii < 97) || ascii > 122){
      converted+= String.fromCharCode(ascii);
      //otherwise if its an upper case letter we need to add the number passed through the function
      //uppercase and lower case need to be handled at different point in the code to avoid the overlap 
      //uppsercase Z(90) + 10 = 100 which would be mistaken as a lowercase 
    }else if(ascii >= 65 && ascii <= 90){
      //add the number passed to determin new value
      ascii+=parseInt(number);
      //now with the new value, if it's still in the ranges where uppercase number occur,
      //add it to string, otherwise 26 needs to be subtracted as to "reset" the alphabet.
      converted += ascii >= 65 && ascii <= 90
          ? String.fromCharCode(ascii)
          : String.fromCharCode(ascii - 26) 
    //same thing as above but uses the values of the lowercase range.
    //hopefully I can find a way to clean them up and add them together
    } else if(ascii >= 97 && ascii <= 122){
        ascii+=parseInt(number);
        converted += ascii >= 97 && ascii <= 122 
            ? String.fromCharCode(ascii)
            : String.fromCharCode(ascii - 26) 
    }
  }
  return document.getElementById("rot").innerHTML = `${converted}`
}






/*     //TESTCASE
for(let i=0; i <= 26; i++){
  console.log(i ,rot('ABCDEFGHIJKLMNOPQRSTUVWXYZ', i));
  console.log(i ,rot('abcdefghijklmnopqrstuvwxyz', i));
}

zero = 0;
for(let i= -26; i <= 0; i++){
  console.log(i ,rot('ABCDEFGHIJKLMNOPQRSTUVWXYZ', i));
  console.log(i ,rot('abcdefghijklmnopqrstuvwxyz', i));
}
for(let i=0; i <=126; i++){
  console.log(i, rot(String.fromCharCode(i)));
}
*/ 
