const aleatorio = Math.floor(Math.random() * 10+1)
let playerNumber
do {
    playerNumber = parseInt(prompt("Digite numero: "))
    alert(aleatorio > playerNumber ?  "Pruebe con un numero mayor":"Pruebe con un numero menor")

}while(playerNumber != aleatorio)

console.log("El numbero es: "+ aleatorio)