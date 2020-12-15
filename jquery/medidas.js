$(document).ready(function () {
    let titulo = $('#titulo');
    let info = $('#info');

    console.log(titulo.width());

    // Calcula el ancho del elemento
    info.append('Ancho: ' + titulo.width() + '<br>')

    // Calcula el ancho del elemento + padding
    info.append('Ancho interno: ' + titulo.innerWidth() + '<br>')

    // Calcula el ancho del elemento + padding + borde    
    info.append('Ancho externo: ' + titulo.outerWidth() + '<br>')

    // Calcula el ancho del elemento + padding + borde + margen    
    info.append('Ancho externo: ' + titulo.outerWidth(true) + '<br>')

    // ---------------------------------------------------------------

    // Calcula el alto del elemento
    info.append('Alto: ' + titulo.height() + '<br>')

    // Calcula el alto del elemento + padding
    info.append('Altura interna: ' + titulo.innerHeight() + '<br>')

    // Calcula el alto del elemento + padding + borde
    info.append('Altura externa: ' + titulo.outerHeight() + '<br>')

    // Calcula el alto del elemento + padding + borde + margin
    info.append('Altura externa: ' + titulo.outerHeight(true) + '<br>')
    


});