const leia = require('readline-sync');

let nome, cargo, salario, salarioReajustado, reajuste;

nome = leia.question('Insira o nome do colaborador: ');
cargo = leia.questionInt('Insira um numero de 1 a 6 para escolher um cargo: \n [1]Gerente \n [2]Vendedor \n [3]Supervisor \n [4]Motorista \n [5]Estoquista \n [6]Tecnico de TI ');
salario = leia.questionInt('Entre com o salario do colaborador: ');

switch (cargo) {
    case 1:
        reajuste = 1.10;
        salarioReajustado = salario * reajuste;
        console.log(`O cargo de ${nome} é de Gerente, seu salario é de ${salario} e o salario reajustado é de R$${salarioReajustado.toFixed(2)} \nO reajuste feito foi de 10%`);
        break;
    case 2:
        reajuste = 1.07;
        salarioReajustado = salario * reajuste;
        console.log(`O cargo de ${nome} é de Vendedor, seu salario é de ${salario} e o salario reajustado é de R$${salarioReajustado.toFixed(2)} \nO reajuste feito foi de 7%`);
        break;
    case 3:
        reajuste = 1.09;
        salarioReajustado = salario * reajuste;
        console.log(`O cargo de ${nome} é de Supervisor, seu salario é de ${salario} e o salario reajustado é de R$${salarioReajustado.toFixed(2)} \nO reajuste feito foi de 9%`);
        break;
    case 4:
        reajuste = 1.06;
        salarioReajustado = salario * reajuste;
        console.log(`O cargo de ${nome} é de Motorista, seu salario é de ${salario} e o salario reajustado é de R$${salarioReajustado.toFixed(2)} \nO reajuste feito foi de 6%`);
        break;
    case 5:
        reajuste = 1.05;
        salarioReajustado = salario * reajuste;
        console.log(`O cargo de ${nome} é de Estoquista, seu salario é de ${salario} e o salario reajustado é de R$${salarioReajustado.toFixed(2)} \nO reajuste feito foi de 5%`);
        break;
    case 6:
        reajuste = 1.08;
        salarioReajustado = salario * reajuste;
        console.log(`O cargo de ${nome} é de Técnico de TI, seu salario é de ${salario} e o salario reajustado é de R$${salarioReajustado.toFixed(2)} \nO reajuste feito foi de 8%`);
        break;
    default:
        console.log('Insira uma opção válida.');
}