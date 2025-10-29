const leia = require('readline-sync');

let salario = leia.questionFloat("Digite o salario: R$");
let abono = leia.questionFloat("Digite o Abono: R$");

novoSalario = salario + abono;

console.log("Novo Salario: R$" + novoSalario.toFixed(2));