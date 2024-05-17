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
// EJERCICIOS
const transactions=[{id:1,description:'Grocery Shopping',amount:-50},{id:2,description:'Salary Deposit',amount:2000},{id:3,description:'Utility Bill Payment',amount:-100},{id:4,description:'Online Purchase',amount:-30}]

const totalBalance=transactions.reduce((acc,transaction)=>acc+transaction.amount,0)
console.log('Total Balance: ',totalBalance)

const maxiumTransaction = transactions.reduce((maximum, transaction) =>{
    return transaction.amount > maximum ? transaction.amount:maximum}, transactions[0].amount)

console.log('maximum Transaction: '+maxiumTransaction)
const purchaseTransactions=transactions.filter(transaction=>transaction.amount<0)
console.log(' Purchase Transactions: ',purchaseTransactions)
const specificTransaction=transactions.find(transaction=>transaction.description==='Online Purchase')
console.log('Specific Transaction: ',specificTransaction)
const indexTransactionWithAmount=transactions.findIndex(transaction=>transaction.amount===-30)
console.log('Index Transaction With Amount -30: ',indexTransactionWithAmount)
transactions.forEach(transaction=>{if(transaction.amount<0){transaction.description=`Expense: ${transaction.description}`}else{transaction.description=`Income: ${transaction.description}`}})
console.log('Udated Transactions: ',transactions)