'use strict'

 // -------------------- ACCEDER AL FORMULARIO --------------------
 let formulario = document.getElementById('formulario');

 let nombre = formulario.nombre;
 let sexo = formulario.sexo;
 let terminos = formulario.terminos;

 // -------------------- VALIDAR EL FORMULARIO --------------------
 formulario.addEventListener('submit', validar)

 function validar(e) {

    // ----- VALIDACIÓN DE NOMBRE -----
     if (nombre.value > 18) {
         alert('Máximo de caracteres permitidos')   
     } else if (nombre.value == '') {
        alert('Por favor ingresa un nombre')
     } 

     // ----- VALIDACIÓN DE SEXO -----
     if(sexo[0].checked == false && sexo[1].checked == false) {
        alert('Por favor ingresa un sexo')
     }

     // ----- VALIDACIÓN DE TERMINOS -----
     if(!terminos.checked) {
        alert('Acepta los términos')
     }

     // Evita que se envíe el formulario
     e.preventDefault();                        
 }