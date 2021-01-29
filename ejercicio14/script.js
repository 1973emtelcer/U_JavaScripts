'use strict'
const users = [
    {username: `ppc90`, edad:30, premiun: false},
    {username: `plu65`, edad:24, premiun: true},
    {username: `maria3`, edad:36, premiun: false},
    {username: `abc123`, edad:20, premiun: false},
    {username: `sergio58`, edad:26, premiun: true},
 ];

    users.map(user => {
     if (user.premiun) {
         console.log (`${user, user} tiene cuenta premiun`)
     }
 });

 const isNotPremiun = users.filter (user=> !user.premiun);
 console.log (isNotPremiun);