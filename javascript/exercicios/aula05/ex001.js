const leia = require('readline-sync');
let num1,num2;


num1 = leia.questionInt('Insira o primeiro numero: ');
num2 = leia.questionInt('Insira o primeiro numero: ');

if (num1 < num2){
    console.log(`No intervalo entre ${num1} e ${num2}: `);

    for(num1 = num1; num1 <= num2; num1++ ) {
        if (num1 % 3 ==0 && num1 % 5 == 0){
            console.log(`${num1} e multiplo de 3 e 5`);
        }

    }
}else{
    console.log('Intervalo inválido.')
}