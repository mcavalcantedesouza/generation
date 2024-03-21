let nome,idade,primeiraDoacao;
const leia = require('readline-sync');

nome = leia.question("Digite o nome do doador: ");
idade = leia.questionInt("Digite a idade do doador: ");
primeiraDoacao = leia.keyInYNStrict("E a primeira doacao? ");

console.log(primeiraDoacao)

if(idade >= 18 && idade < 60){
    console.log(`Doador ${nome} está apto para doação.`);
}else if(idade >= 60 && idade <= 69 && primeiraDoacao == false){
    console.log(`Doador ${nome} está apto para doação.`);
}else{
    console.log(`Doador ${nome} não está apto para doação.`);
}