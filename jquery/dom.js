$(document).ready(function () {
    
    /* Acceder al elemento padre */
    
    /* $('#tercera').parent().css({
        background: '#1b3d82'
    }); */

    /* Acceder a los elementos padre */
    // $('tercera').parents();

    /* Acceder a los elementos hijo */
    // $('#padre').children().fadeOut(500);
    // $('#padre').children('#tercera').fadeOut(500);

    /* Encontrar dentro de un contenedor un elemento */
    // $('#contenedor').find('div.caja').slideUp();

    /* Siblings: Permite seleccionar los elementos hermano */
    // $('#tercera').siblings().fadeOut(1500);

    /* Next - Prev */
    $('#tercera').nextAll().css({
        background: '#000'
    });

});