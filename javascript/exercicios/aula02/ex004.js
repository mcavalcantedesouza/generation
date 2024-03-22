let n1;
let n2;
let n3;
let n4;
let dif;
let leia = require('readline-sync');

n1 = leia.questionFloat('Digite o primeiro valor: ');
n2 = leia.questionFloat('Digite o segundo valor: ');
n3 = leia.questionFloat('Digite o terceiro valor: ');
n4 = leia.questionFloat('Digite o quarto valor: ');

dif = (n1*n2) - (n3*n4);

console.log(`A diferença entre o produto n1 e n2 por n3 e n4 é de ${dif}.`)