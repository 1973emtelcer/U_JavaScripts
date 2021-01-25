'use strict'
const notas = [6,7,2,9,3,4,5,8,2]
//utilizando for
//creamos una variable que es acc fuera del bucle para que no se sobre escriba en cada iteracion
// en esta variable iremos sumando cada una de las puntaciones
let acc =0
//la i empieza por 0 porque el ínidece de los array empeiza en 0
for (let i =0; i < notas.length; i++) {
    acc += notas[i];
    //sumamos a acc el valor actual del aarray en cada iteración que va recorriendo en el bucle
    // acc += notas [i] es igual a acc =acc + arr[i]
}
console.log ('con el bucle FOR la puntuación final es ' + acc);
//utilizando for..of
let Puntuacion = 0;
for (let nota of notas){
    Puntuacion += nota;
};
console.log ('con el bucle FOR OF la puntuación final es ' + Puntuacion)