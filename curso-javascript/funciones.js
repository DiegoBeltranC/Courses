
//funciones puras:
//modifican otras variables, funciones,etc 
function sum(a, b){
    return a+b
}

//No es pura cuando por ejemplo:
function suma(a, b){
    console.log(a+b)
}

let total = 5
function sideEffect(a){
    total += a
}

//IDENTIFICADOR THIS FUNCTION, ENLACE EXPLICIT AND IMPLICIT

//Implicit
const object = {
    name: 'Juan',
    saludo: function (){
        console.log("mi nombre es: "+this.name)
    }

}

object.saludo()


//Implicit
let dog = {
    name: 'Dog',
    greeting: function (){
        console.log(`My name is: ${this.name}`)
    }
}


//Explicit:
const saludo = function (){
    console.log(`Funcion explicita: ${this.name}`)
}

saludo.call(dog)
dog.greeting()
