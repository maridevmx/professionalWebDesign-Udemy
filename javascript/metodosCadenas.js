'use strict'

let nombre = 'Maridevmx Udemy';

let numeroCaracteres = nombre.length;

console.log(`${nombre} tiene ${numeroCaracteres} caracteres` );

// Obtiene la subcadena de la cadena original dada por las posicones
let segundoNombre = nombre.substring(7,13)
console.log(segundoNombre);

// Obtiene la subcadena de la cadena original dada la posición inicial más el número de caracteres
let subCadena = nombre.substr(7,7);
console.log(subCadena);

// Reemplaza la primera cadena con el valor de la segunda cadena
let nuevoNombre = nombre.replace('Udemy', 'Curso de Desarrollo Web');
console.log(nuevoNombre);

// Cambia la cadena a mayúsculas
let nombreMayuscula = nombre.toUpperCase();
console.log(nombreMayuscula);

// Cambia la cadena a minúsculas
console.log(nombre.toLowerCase());

// Encuentra la posición de la cadena
let posicion = nombre.indexOf('x')
console.log(posicion);

// Encuentra la posición de la última 'e'
console.log(nombre.lastIndexOf('e'));
