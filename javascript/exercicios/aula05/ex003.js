const leia = require('readline-sync');

let idadeMenor = 0,idadeMaior = 0, idade = 0;

while(idade >= 0){
    idade = leia.questionInt('Digite uma idade ou um numero negativo para sair: '); 
    if (idade < 21 && idade > 0){
        idadeMenor++;
    }

    if (idade > 50){
        idadeMaior++;
    }
    
}

console.log(`Total de pessoas menor de 21 anos: ${idadeMenor}`);
console.log(`Total de pessoas maior de 50 anos: ${idadeMaior}`);


