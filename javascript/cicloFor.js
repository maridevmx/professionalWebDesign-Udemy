'use strict'

// -------------------- CICLO DEL 1 AL 10 --------------------
/* for (let index = 1; index <= 10; index++) {
    document.write(index);
    document.write('<br>')
    
} */

// -------------------- CICLO DEL 10 AL 1 --------------------
/* for (let index = 10; index >= 1; index--) {
    document.write(index);
    document.write('<br>')
    
} */

let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

for (let index = 0; index < meses.length; index++) {
    document.write(`${index + 1 } .- ${meses[index]}`);
    document.write('<br>')
    
}