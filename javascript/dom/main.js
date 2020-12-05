'use strict'

let cajas = document.getElementsByTagName('div');
let cajasClass = document.getElementsByClassName('caja');
let primeraCaja = document.getElementById('primeraCaja')

/* primeraCaja.textContent = 'Hola Mundo'
primeraCaja.innerHTML = '<u> Hola Udemy </u>' */

// -------------------- CREANDO NODOS --------------------
let caja = document.createElement('div')                    // Se crea el elemento
let contenido = document.createTextNode('Hola visitante');  // Se crea el texto
caja.appendChild(contenido);                                // Agregar a la caja el contenido
caja.setAttribute('class', 'caja naranja')                          // Se definen los atributos

let contenedor = document.getElementById('contenedor');     // Se establece que el contenedor tendrá la caja creada
contenedor.appendChild(caja);        

// -------------------- MODIFICANDO LA CLASE O ID --------------------
caja.id = 'primera';
caja.className = 'caja naranja';

// -------------------- CONOCER EL ELEMENTO PADRE --------------------
let padre = cajas[0].parentNode;
console.log(padre);

// -------------------- INSERCIÓN DE ELEMENTO --------------------
padre.insertBefore(caja, primeraCaja);  

// -------------------- REEMPLAZAR ELEMENTO --------------------
padre.replaceChild(caja, cajas[3]);

// -------------------- ELIMINAR ELEMENTO --------------------
padre.removeChild(cajas[3]);

