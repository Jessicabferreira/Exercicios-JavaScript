import { Queue } from "./Queue";
import leia = require("readline-sync")

const filanome = new Queue<string>();

let num: number
let nome: string

do{
console.log("***************************************")
console.log("1 - Adicionar um novo Cliente na fila") 
console.log("2 - Listar todos os Clientes na fila")
console.log("3 - Retirar Cliente da fila ") 
console.log("0 - Sair")
console.log("***************************************")

console.log("Entre com a opção desejada: ")
num = leia.questionInt()


switch (num){
    case 1:
        nome = leia.question("Digite o nome do Cliente: ")
        filanome.enqueue(nome)
        console.log.apply("Cliente adicionado!")
        break
    case 2:
         console.log("Lista de clientes na fila!")
         filanome.printQueue()
         
        break
    case 3:
        console.log("Cliente foi Chamado!")
        filanome.dequeue()
        filanome.printQueue()
        break
    case 0:
        console.log("sair")
        break

    default:
}

} while (num != 0)

console.log("Programa finalizado!")
