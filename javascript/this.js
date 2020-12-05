'use strict'

let cajas = document.getElementsByClassName('caja');

// -------------------- IDENTIFICAR CAJA QUE HA SIDO SELECCIONADA ----------

function color() {
    this.classList.toggle('negro');
}

for (let index = 0; index < cajas.length; index++) {
    cajas[index].addEventListener('click', color);
    
}