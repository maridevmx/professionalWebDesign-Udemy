'use strict'

let fecha = new Date();
document.write(fecha);

console.log(fecha.getHours() + ' Horas')
console.log(fecha.getMinutes() + ' Minutos')
console.log(fecha.getSeconds() + ' Segundos')

let semana = [' Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

console.log('Dia: ' + semana[fecha.getDay()])
console.log('Mes: ' + fecha.getMonth())
console.log('Año: ' + fecha.getFullYear())


function mostrarTiempo() {
    let fecha = new Date();
    let parrafo = document.getElementById('fecha')
    parrafo.innerHTML = fecha
}

let intervalo = setInterval(mostrarTiempo, 1000)