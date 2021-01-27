'use strict'
 var number = prompt ("introduce un numero entero");

 var resultado =checkNumber(number);
 alert("el numero" + number+" es "+resultado)
function checkNumber (number){
     if (number % 2 === 0){
    return 'Numero par'; 
  } else {
      return 'Numero impar';
  }
    
};


