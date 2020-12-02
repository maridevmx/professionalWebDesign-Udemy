'use strict'

/* let numero1 = 10;
let numero2 = 20;
let resultado = numero1 + numero2;

document.write(resultado);
document.write('<br>'); */

const suma = function (numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}

document.write(suma(10, 15));
//suma(3, 5);

(function(){
    alert('Hola');
}());