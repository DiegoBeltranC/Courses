const persona = (name, funcion,mensaje) => ({
    name: name,
    saludos: funcion(mensaje)
})

const saludo = mensaje => console.log(mensaje)


persona1 = persona("Juan", saludo, "holaaa")

persona1.saludos

const animal = function (tipo, nombre){
    this.tipo = tipo
    this.nombre = nombre
}

let gato = new animal("gato", "siu")
console.log(gato.tipo)
