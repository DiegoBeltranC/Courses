//call
const animal = {
    name: 'juanito'
}

function saludo(){
    console.log(`hola ${this.name}`)
}
saludo.call(animal)


//apply
function saludo2(nombre1, nombre2){
    console.log(`mi nombre es: ${this.name} y mis amigos son: ${nombre1} y ${nombre2}`)
}

let nombres = ["raul", "pedro"]
saludo2.apply(animal, nombres)

//blind is the same as call, but we save the things in one variable


