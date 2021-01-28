'use strict'
const usuarios = [
    {nombreusuario: 'ppc90', edad:30, premiun: false},
    {nombreusuario: 'plu65', edad:24, premiun: true},
    {nombreusuario: 'maria3', edad:36, premiun: false},
    {nombreusuario: 'abc123', edad:20, premiun: false},
    {nombreusuario: 'sergio58', edad:26, premiun: true},
 ];

 usuarios.map (usuario => {
     if (usuario.premiun) {
         console.log ('${usuario, nombreusuario} tiene cuenta premiun')
     }
 });

 const isNotPremiun = usuarios.filter (usuario=> !usuario.premiun);
 console.log (isNotPremiun);