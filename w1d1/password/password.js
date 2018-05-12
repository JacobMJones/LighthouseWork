/*
var password = process.argv[2];

 function obfuscate(password){
 	var newWord = "";
     for(var i = 0; i < password.length; i++){

         if(password[i] == 'a'){
              newWord += '4';
             continue;
         }
          if(password[i] == 'e'){
              newWord += '3';
              continue;
         }
          if(password[i] == 'o'){
              newWord += '0';
              continue;
         }
          if(password[i] == 'l'){
              newWord += '1';
              continue;
         }         
        newWord += password[i];     
     }

 return newWord;
 }

console.log(obfuscate(password)); 

*/

var password = process.argv[2];

function obfuscate(pass){

  pass = pass.replace( /[a]/g, 4).replace( /[e]/g, 3).replace( /[o]/g, 0).replace( /[l]/g, 1);

  return pass;

}

console.log(obfuscate(password));