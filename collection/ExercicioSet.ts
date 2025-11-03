import readlinesync = require("readline-sync")

const lista: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6])
let numero: number;

numero= readlinesync.questionInt("Digite o numero que voce deseja encontrar: ")
if(lista.has(numero)){
    console.log(`O número ${numero} foi encontrado!`)
}else{
    console.log(`O número ${numero} não foi encontrado!`)
}