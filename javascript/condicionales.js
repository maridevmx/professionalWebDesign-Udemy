'use strict'

let edad = 17;

// if(edad >= 18) {
//     document.write('Eres mayor de edad');
// } else {
//     document.write('Eres menor de edad');
// }

let pais = 'Venezuela';

/* if(pais == 'México') {
    document.write('Eres mexicano');
} else if(pais = 'España') {
    document.write('Eres español');
} else {
    document.write('No sabemos de dónde eres');
} */

switch(pais) {
    case 'México':
        document.write('Eres mexicano');
        break;
    case 'España':
        document.write('Eres español');
        break;

    case 'Colombia':
        document.write('Eres colombiano');
        break;

    default:
        document.write('No sabemos de dónde eres');
        break;
}