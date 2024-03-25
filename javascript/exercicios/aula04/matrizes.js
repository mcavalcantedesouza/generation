const readline = require('readline-sync');

const matriz = new Array(2);

for (let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(3);
}

for (let j = 0; j < matriz.length; j++) {
    for(let k =0; k < matriz[j].length; k++ ){
        matriz[j][k] = readline.questionInt(`Digite numero para preenhcer matriz[${j}][${k}]: `)
    }
}

console.table(matriz)