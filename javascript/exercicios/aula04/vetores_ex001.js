let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
const leia = require('readline-sync');
let posicao = leia.questionInt('Digite o numero que voce deseja encontrar: ');
let resultado = 0;



for (let num1 = 0; num1 < vetor.length; num1++) {
    if (posicao == vetor[num1]) {
        resultado = vetor[num1];
        console.log(`O numero ${resultado} esta localizado na posicao ${num1}`)
    }

}

if (resultado == 0){
    console.log(`O numero ${posicao} nao foi encontrado!`)
}






