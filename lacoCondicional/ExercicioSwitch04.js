const leia = require("readline-sync")

let codigoCargo, cargo, reajuste, novoSalario, nomeColaborador, salario, opcao

console.log("Nome do colaborador: ")
nomeColaborador = leia.question()
console.log("Codigo do cargo (1 a 6): ")
codigoCargo = leia.questionInt()
console.log("Salário:")
salario = leia.questionInt()


switch (codigoCargo) {
    case 1:
        cargo = "Gerente"
        reajuste = 0.10
        novoSalario = salario + (reajuste * salario)
        console.log("Colaborador:", nomeColaborador)
        console.log("Cargo:", cargo)
        console.log("Salário reajustado:", novoSalario)
        break;
    case 2:
        cargo = "Vendedor"
        reajuste = 0.07
        novoSalario = salario + (reajuste * salario)
        console.log("Colaborador:", nomeColaborador)
        console.log("Cargo:", cargo)
        console.log("Salário reajustado:", novoSalario)
        break;
    case 3:
        cargo = "Supervisor"
        reajuste = 0.9
        novoSalario = salario + (reajuste * salario)
        console.log("Colaborador:", nomeColaborador)
        console.log("Cargo:", cargo)
        console.log("Salário reajustado:", novoSalario)
        break;
    case 4:
        cargo = "Motorista"
        reajuste = 0.6
        novoSalario = salario + (reajuste * salario)
        console.log("Colaborador:", nomeColaborador)
        console.log("Cargo:", cargo)
        console.log("Salário reajustado:", novoSalario)
        break;
    case 5:
        cargo = "Estoquista"
        reajuste = 0.5
        novoSalario = salario + (reajuste * salario)
        console.log("Colaborador:", nomeColaborador)
        console.log("Cargo:", cargo)
        console.log("Salário reajustado:", novoSalario)
        break;
    case 6:
        cargo = "Técnico de TI"
        reajuste = 0.8
        novoSalario = salario + (reajuste * salario)
        console.log("Colaborador:", nomeColaborador)
        console.log("Cargo:", cargo)
        console.log("Salário reajustado:", novoSalario)
        break;

    default: 
      console.log("Código invalido")    
}
