$(document).ready(function () {
    let boton = $('#boton');

    /* boton.click(function () { 
        alert('Hola')
        
    }); */
    

    // Evento con función
    /* function saludo() {
        alert('Saludos')
    }

    boton.on('click', saludo); */

    // Evento con callback (funciones anónimas)
    /* boton.on('mouseenter', function(){
        document.body.style.background = '#000';
    })

    boton.on('mouseleave', function(){
        document.body.style.background = '#fff';         
    }) */

    /* boton.on('click', function(){
        alert('Saludos');
        console.log('Saludos');
    })

    $('#desactivar').on('click', function(){
        boton.off('click');
        console.log('Botón de Ejecutar desactivado');
    }); */

    // Previniendo el comportamiento de los enlaces
    $('a').on('click', function(e){
        e.preventDefault();
        alert('Link desactivado');
    })
});