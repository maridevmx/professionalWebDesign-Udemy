$(document).ready(function () {
    
    // $(selector).animate({parámetros del objeto}, velocidad, callback)
    $('#boton').on('click', function(){
        $('#caja').animate({
            // width: '300px'
            // opacity: '0.2'
            marginLeft: '+=20px'
        }, 2000, function(){
            // alert('Fin de la animación');
        });

        // $('.caja').toggleClass('animacion');

        $('.caja').animate({
            marginLeft: '-=50px'
        }, 300);
    })

    
});