'use strict'

/* let btnSaludar = document.getElementById('btn-saludar');    // Se accede al botón
btnSaludar.addEventListener('click',saludo)                 // Cuando el usuario haga click se ejecuta la función
btnSaludar.addEventListener('click', saludo2)

btnSaludar.removeEventListener('click', saludo)

function saludo() {
    alert('Hola')
}

function saludo2() {
    alert('Hola 2')
} */

/* btnSaludar.removeEventListener('click', function(){
    // Código de función anónima
}) */

function crearCaja() {
    
    let contenedor = document.getElementById('contenedor');
    let caja = document.createElement('div');
    caja.className = 'caja';
    contenedor.appendChild(caja);
}

let btnCaja = document.getElementById('btn-caja');
btnCaja.addEventListener('click', crearCaja);