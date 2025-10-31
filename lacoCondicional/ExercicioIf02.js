const leia = require('readline-sync')

let numero

console.log("Digite um número: ")
numero = leia.questionInt()

if (numero === 0) {
    console.log("O numero é zero.")
}else if (numero > 0)
if(numero % 2 === 0) {
    console.log("O numero", numero, "é par e positivo!")
}   else{
    console.log("O número", numero, "é impar e positivo!")
} else

if(numero % 2 === 0) {
    console.log("O numero", numero, "é par e negativo!")
}   else{
    console.log("O número", numero, "é impar e negativo!")
}
console.log("\nObrigado(a) por participar!")