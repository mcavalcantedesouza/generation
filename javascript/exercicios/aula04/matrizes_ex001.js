
let matriz = [
    [4.0, 5.0, 7.0, 3.0],
    [2.5, 6.5, 4.7, 8.0],
    [10.0, 8.5, 9.5, 8.0],
    [9.0, 6.5, 7.6, 8.2],
    [5.0, 5.0, 5.0, 6.3],
    [7.0, 8.0, 9.0, 8.5],
    [5.5, 3.5, 2.5, 1.0],
    [8.0, 9.0, 10.0, 9.5],
    [5.6, 5.8, 6.5, 7.0],
    [7.5, 8.5, 9.5, 10.0] ];

let media, resultado = [];


for(let i = 0; i < matriz.length; i++){
    let soma = 0;
    for(let j = 0; j < matriz[i].length; j++){
        soma += matriz[i][j];
    
    }   
    media = soma / matriz[i].length;
    resultado[i] = media.toFixed(1)
}

console.log(resultado)