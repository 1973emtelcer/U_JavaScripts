'use restrict'
const resultados =[
    {nombre: 'C W', pais : 'Jamaica', tiempo:11.80},
    {nombre: 'E T', pais : 'Jamaica', tiempo:10.71},
    {nombre: 'T B', pais : 'EEUU', tiempo:10.83},
    {nombre: 'MJ TL', pais : 'Irlanda', tiempo:10.86},
    {nombre: 'D S', pais : 'Holanda', tiempo:10.90},
    {nombre: 'E G', pais : 'EEUU', tiempo:10.94},
    {nombre: 'ML A', pais : 'Trinidad', tiempo:10.92},
    {nombre: 'JA FP', pais : 'Jamaica', tiempo: 10.86},
];
const ganador = resultados.reduce ((acc, current)=> {
    if (acc.tiempo < current.tiempo){
        return acc
    } else {
        return current
    }
}, {});

console.log(ganador);