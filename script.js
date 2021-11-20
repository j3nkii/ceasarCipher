
console.log(
 `****** T O P   S E C R E T *****
  Do not let others lay eyes on your secrets, doing so could bring an early demise. May the Gods be ever smiling upon you.
  
  Using negative numbers will act as a decryptor using the Ceaser Cipher method.`
)
 let force;
 function hack(string){
  for(let i=0; i < 26; i++){
    console.log(i ,rot(string, i));
  }
 }
function rot(message, number) {
  let coded = [];
  let converted = '';
  number = number%26;
  if(number < 0){
    number = 26 - Math.abs(number)
  } 
  for(let index in message) {
    coded.push(message.charCodeAt(index));
    let ascii = coded[index]
    if(ascii < 65 || (ascii > 90 && ascii < 97) || ascii > 122){
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
  force = message;
  return document.getElementById("rot").innerHTML = `${converted}`
}
  /*   //TESTCASE
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
