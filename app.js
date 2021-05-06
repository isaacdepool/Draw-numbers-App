const { one, two, three, four, five, six, seven, eight, nine, zero } = require('./numeros');


function numero(numero) {

    let array = [];
    array = numero.toString().split('');

    let dibujo = '';
    
    for(let i=0; i<=6; i++){

        for(let j=0; j<=array.length-1; j++){

            switch (parseInt(array[j])) {
                case 1:
                    dibujo += one[i].dibujo + '    ';
                    break;
                case 2:
                    dibujo += two[i].dibujo + '    ';
                    break;
                case 3:
                    dibujo += three[i].dibujo + '    ';
                    break;
                case 4:
                    dibujo += four[i].dibujo + '    ';
                    break;
                case 5:
                    dibujo += five[i].dibujo + '    ';
                    break;
                case 6:
                    dibujo += six[i].dibujo + '    ';
                    break;
                case 7:
                    dibujo += seven[i].dibujo + '    ';
                    break;
                case 8:
                    dibujo += eight[i].dibujo + '    ';
                    break;
                case 9:
                    dibujo += nine[i].dibujo + '    ';
                    break;
                case 0:
                    dibujo += zero[i].dibujo + '    ';
                    break;
            
                default:
                    break;
            }
        }

        dibujo += '\n';
    }

    return dibujo;
}

console.log("Ingrese una cadena de digitos: ");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {

    let dibujo = numero(d);

    console.log(dibujo);
  });