let n1;
let n2;
let n3;
let n4;
let leia;
let media;

leia = require('readline-sync');

n1 = leia.questionFloat('Digite a primeira nota: ');
n2 = leia.questionFloat('Digite a segunda nota: ');
n3 = leia.questionFloat('Digite a terceira nota: ');
n4 = leia.questionFloat('Digite a quarta nota: ');

media = (n1+n2+n3+n4)/4;
console.log(`Sua média final é de ${media}.`)