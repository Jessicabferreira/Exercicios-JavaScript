const leia = require("readline-sync")

let n1, n2


n1 = leia.questionInt("Digite o primeiro número do intervalo: ")
n2 = leia.questionInt("Digite o último número do intervalo: ")

if(n1 < n2){
    console.log("No intervalo entre" + n1 + "e" + n2 +":")

    for(let i= n1; i<= n2; i++){
        (i % 15 === 0) && console.log(i + "é multiplo de 3 e 5")
}
} else{
    console.log("Intervalo inválido!")
}