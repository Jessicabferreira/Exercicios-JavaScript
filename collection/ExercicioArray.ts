import readlinesync = require("readline-sync")

const lista: Array<string> = new Array<string>()

let cores: string

for(let i = 0; i<5; i++){
    cores =  readlinesync.question("Digite a cor: ")
    lista.push(cores)
}
console.log("\nListar todas as cores:", lista)
console.log("\nOrdenar as cores:", lista.sort())  
