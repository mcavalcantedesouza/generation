let a,b,c;
const leia = require('readline-sync');

a = leia.questionInt("Insira o primeiro numero inteiro: ");
b = leia.questionInt("Insira o segundo numero inteiro: ");
c = leia.questionInt("Insira o terceiro numero inteiro: ");

if (a + b > c){
    console.log(`A soma de ${a} + ${b} é maior que ${c}.`)
}else if (a + b < c){
    console.log(`A soma de ${a} + ${b} é menor que ${c}.`)
}else {
    console.log(`A soma de ${a} + ${b} é igual a ${c}.`)
}