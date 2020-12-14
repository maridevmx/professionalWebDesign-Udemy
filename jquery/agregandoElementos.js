$(document).ready(function () {
    let contenedor = $('#contenedor');
    let contador = 1;

    $('#agregar').on('click', function () { 
        let caja = $('<div></div>').attr('class', 'caja').text(contador);
        contador++;

        // contenedor.append(caja);
        // contenedor.prepend(caja);
        // contenedor.before(caja);
        contenedor.after(caja);
     });
});