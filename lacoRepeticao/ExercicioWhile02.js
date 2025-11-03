const leia = require("readline-sync")

let menores21 = 0
let maiores50= 0
let digiteIdade = 0

while (digiteIdade >= 0){
    digiteIdade = leia.questionInt("Digite uma idade: ")

    if (digiteIdade >= 0){
        if(digiteIdade < 21){
           menores21 ++
        } else if (digiteIdade > 50){
                    maiores50 ++
        } 
    }
}
console.log("Total de pessoas menores de 21 anos: ", + menores21)
console.log("Total de pessoas maiores de 50 anos: ", + maiores50)