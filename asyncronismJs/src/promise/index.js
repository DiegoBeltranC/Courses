const promise = new Promise(function(resolve,reject){
    resolve('hey!')


});


const cows = 1;

const countCows = new Promise(function(resolve, reject){
    a = 4
    result = "hubo error"
    if (cows > 10){
        resolve(`We have ${cows} cows on the farm`)
    }
    reject()
})


countCows.then((result)=>{
    console.log(result);
}).catch(()=> console.log(a)).finally(()=>console.log('Finally'))
