'use strict'
const frase = prompt('Escribe una frase');

function info(cadena){
    var resultado = 'la cadena "${cadena}" está formada por ';
    if (cadena === cadena.toUpperCase()){
        resultado += "solo mayusculas";
    } else if (cadena === cadena.toLowerCase()){
        resultado += "solo minusculas";
    } else {
        resultado += "minusculas y mayusculas";
    }
    return resultado
}

alert (info(frase));