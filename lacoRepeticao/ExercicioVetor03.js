const leia = require("readline-sync")

let vetorInteiros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
let indices = []

for(let i = 0; i < vetorInteiros.length; i++){
    indices.push(i)

}
console.log("Vetor ", vetorInteiros.join(" "))

let numero = leia.questionInt("Digite o numero que você deseja encontrar: ")
let posicao = vetorInteiros.indexOf(numero)

if (posicao !== -1){
    console.log("O número", numero, "está localizado na posição", posicao)
}else {
    console.log("O número", numero, "não foi encontrado!")
}
