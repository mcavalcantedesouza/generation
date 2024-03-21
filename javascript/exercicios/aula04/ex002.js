let numero;
const leia = require('readline-sync');

numero = leia.questionInt("Digite um numero: ");

if(numero % 2 == 0){
    if(numero < 0){
        console.log('O numero é par e negativo!')
    }else if(numero > 0){
        console.log('O numero é par e positivo!')
    }else{
        console.log('O numero é par e neutro!')  
    }
    
}else {
    if(numero > 0){
        console.log('O numero é ímpar e positivo!')
    }else{
        console.log('O numero é ímpar e negativo!')
    }
}

