let salario;
let leia;
let abono;
let novoSalario;


leia = require('readline-sync');

salario = leia.questionFloat("Digite o Salario: ");
console.log(`O salário é de R$${salario}`);

abono = leia.questionFloat("Digite o abono: ");
console.log(`O abono é de R$${abono}`);

novoSalario = salario + abono;
console.log(`O novo salário é de R$${novoSalario}`)
