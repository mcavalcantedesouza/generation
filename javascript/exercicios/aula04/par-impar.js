const leia = require('readline-sync');
let numero;

numero = leia.questionInt('Digite um numero: ');

if(numero % 2 == 0){

    if(numero > 0){
        console.log('par e positivo')
    }else{
        console.log('par e negativo')
    }

}else{

    if(numero < 0){
        console.log('impar e negativo')
    }else{
        console.log('impar e positivo')
    }
    
}

