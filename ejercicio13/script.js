'use strict'
const Meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const longerMeses= Meses
.filter (Meses => Meses.length >7)
.map (eachMes => eachMes. toUpperCase());

console.log (longerMeses);

const number0fMeses = longerMeses.length;
console.log ('Solo ${number0fMeses} Meses');