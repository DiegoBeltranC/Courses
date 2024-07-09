let greetings = [
    "Hola, ¿cómo estás?",
    "Buenos días, espero que estés bien.",
    "¡Hey! ¿Qué tal te va?",
    "Buenas tardes, ¿cómo ha sido tu día?",
    "¡Hola! Qué gusto verte."
];

let information = [
    "Hoy tenemos una reunión a las 3 PM.",
    "El proyecto debe completarse para el viernes.",
    "Recuerda enviar el informe antes del fin de semana.",
    "Hay una actualización importante del sistema.",
    "La nueva política entrará en vigor la próxima semana.",
    "El evento comenzará a las 10 AM.",
    "El informe financiero está disponible en el servidor."
];

let farewalls = [
    "Nos vemos pronto.",
    "Que tengas un excelente día.",
    "Hasta luego, cuídate.",
    "Adiós, que todo vaya bien.",
    "Nos hablamos luego.",
    "Chau, hasta la próxima."
];

let funcAleatorio = (arry)=>{
    return arry[Math.floor(Math.random() * arry.length)]
}

let funcMensaje = (arr1,arr2,arr3)=>{
    console.log(funcAleatorio(arr1)+" "+funcAleatorio(arr2)+""+funcAleatorio(arr3))
}


funcMensaje(greetings, information, farewalls)