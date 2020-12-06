'use strict'

// -------------------- SETTIMEOUT --------------------
// Ejecución del código después de cierto tiempo
function saludo() {
    alert('Hola Mundo')
    console.log('Ejecución')
}

/* let boton = document.getElementById('btn-iniciar')
boton = addEventListener('click', function(){
    var tiempo = setTimeout(saludo, 3000)
    clearTimeout(tiempo)
}); */

// -------------------- SETINTERVAL --------------------
// Se ejecuta la función cada 3 segundos
let intervalo = setInterval(saludo, 3000)
document.getElementById('btn-detener').addEventListener('click',function() {
    clearInterval(intervalo)
})