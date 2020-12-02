'use strict'

let amigos = ['Alejandro', 'César', 'Carlos', 'Manuel']; 

for (const amigo in amigos) {

    if(amigos[amigo] == 'Alejandro') {
        continue;
    }
    
    document.write(amigos[amigo] + '<br>');

    /* if(amigos[amigo] == 'César') {
        break;
    } */
}