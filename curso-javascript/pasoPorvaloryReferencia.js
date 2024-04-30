//paso por varlor (se modifica el valor en si)
let a = 2
let b = a
console.log(b)

//paso por referencia, se refencia al valor en memoria 

let array = [1,2,3]
let arry2 =  array

array.push(5)
console.log(arry2) //aunque que el valor se agrego despues el valor sigue siendo el mismo

let objeto1 = {nombre: 'juan', edad: 5}

objeto1.nombre = 'diego'
//aqui aunque 