numbers = [2, 4,3, 2]
let sum = 0
numbers.forEach(element => {
    sum += element
});

console.log(sum)


//EJERCICIO
let calificaciones = [10,9,6,5,6,8,6]

let aprovedGrades = calificaciones.filter(e => e >=7)

let grade = aprovedGrades.reduce((acum,e) => acum +e,0)/aprovedGrades.length

console.log(aprovedGrades)
console.log(grade)

//EJERCICIO RIFA

let raffle = [
    {name: "Juan", ticketNumber: 4, direction: "Bosques de lago"},
    {name: "Pedro", ticketNumber: 1, direction: "Los monos"},
    {name: "Diego", ticketNumber: 3, direction: "Bicentenario"},
    {name: "Fer", ticketNumber: 6, direction: "Solidaridad"},
    {name: "Raul", ticketNumber: 8, direction: "Lagunitas"}
]
let number = 1
let isInRaffle = raffle.find(e => e.ticketNumber==number)
console.log(isInRaffle)
console.log(`Name: ${isInRaffle["name"]}
Direction: ${isInRaffle.direction}
`)
