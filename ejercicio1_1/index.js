// base 16 * 23 cm
//altura 13 cm

const volumen = 16*23*13;
console.log ("volumen", volumen + "cm3");

// A= al + 2ab
const areaLateral = 23*13;
const areaBase = 23*16;
const areaTotal = areaLateral + 2*areaBase;
console.log ("areaTotal", areaTotal + "cm2");


// Generalización
const base = 20;
const altura = 10;
const ancho = 16;

const volumen2 = base * altura * ancho;
console.log ("volumen2", volumen2);

const area2 = base*altura + 2 * base * ancho;
console.log ("area2", area2);