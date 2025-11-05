import { Stack } from "./Stack";
import leia = require("readline-sync")

const pilha = new Stack<string>();

let opcao: number
let nome: string

do{
console.log("*****************************")
console.log("1- Adicionar livro na pilha")
console.log("2- Listar todos os livros")
console.log("3- Retirar livro da pilha")
console.log("0- Sair")
console.log("*****************************")
console.log("Digite uma opção: ")
opcao = leia.questionInt()

switch (opcao) {
    case 1: {
      nome = leia.question("Digite o nome: ")
      pilha.push(nome)
      console.log("\nPilha:")
      pilha.printStack()
      console.log("\nLivro adicionado!")
      break;
    }

    case 2: {
      if (pilha.isEmpty()) {
        console.log("\nA Pilha está vazia!")
      } else {
        console.log("\nLista de Livros na Pilha:")
        pilha.printStack()
      }
      break
    }

    case 3: {
      if (pilha.isEmpty()) {
        console.log("\nA Pilha está vazia!")
      } else {
        pilha.pop()
        console.log("\nPilha:")
        pilha.printStack()
        console.log("\nUm Livro foi retirado da pilha!")
      }
      break
    }

    case 0:
      console.log("\nPrograma Finalizado!")
      break

    default:
  }
  
} while (opcao !== 0)
