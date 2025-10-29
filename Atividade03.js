const leia = require("readline-sync")

let salarioBruto = 2000.00
let adicionalNoturno = 500.00
let horasExtra = 100.00
let descontos = 200.00

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtra * 5) - descontos
console.log("salario Liquido: " + salarioLiquido)