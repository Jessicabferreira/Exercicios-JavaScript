const leia = require("readline-sync")

let codigo
let nomeProduto
let quantidade
let precoUnitario
let valorTotal

console.log("Digite o código do produto (1 a 6): ")
codigo = leia.questionInt()
console.log("Digite a quantidade:")

quantidade = leia.questionInt()

 

switch (codigo) {
    case 1:
        nomeProduto = "Cachorro Quente"
        precoUnitario = 10.00 
        valorTotal = quantidade * precoUnitario
        console.log("Produto", nomeProduto)
        console.log("Valor total", valorTotal)
        break;
    case 2:
        nomeProduto  = "X-Salada"
        precoUnitario = 15.00 
        valorTotal = quantidade * precoUnitario
        console.log("Produto", nomeProduto)
        console.log("Valor total", valorTotal)
        break;
    case 3:
        nomeProduto  = "X-bacon"
        precoUnitario = 18.00 
        valorTotal = quantidade * precoUnitario
        console.log("Produto", nomeProduto)
        console.log("Valor total", valorTotal)
        break;
    case 4:
        nomeProduto  = "Bauru"
        precoUnitario = 12.00 
        valorTotal = quantidade * precoUnitario
        console.log("Produto", nomeProduto)
        console.log("Valor total", valorTotal)
        break;
    case 5:
        nomeProduto = "Refrigerante"
        precoUnitario = 8.00 
        valorTotal = quantidade * precoUnitario
        console.log("Produto", nomeProduto)
        console.log("Valor total", valorTotal)
        break;
    case 6:
        nomeProduto  = "Suco de laranja"
        precoUnitario = 13.00
        valorTotal = quantidade * precoUnitario
        console.log("Produto", nomeProduto)
        console.log("Valor total", valorTotal)
        break;

    default: 
        console.log("Numero invalido")   

}
