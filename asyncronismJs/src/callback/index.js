const suma =(a,b)=>{
    return a+b
}

const call = (num1,num2, callback) =>{
    return callback(num1,num2)
}

console.log(call(2,2,suma))


setTimeout(() => console.log('hola'),2000)


myFunct = () => {
    console.log("Hii")
  }
function execCallback(callback) {
    // Tu código aquí 👈
    setTimeout(callback, 2000)
  }
  
execCallback(myFunct)