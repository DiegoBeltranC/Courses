import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/vi';




function fetchData(urlApi){
    return fetch(urlApi);
}

/*
fetchData(`${API}/products`)
    .then((response => response.json()))
    .then(products => {
        console.log(products);
    })
    .then(()=> console.log('Prueba del ulitmo then'))
    .catch(error => console.log("Hay un"));
*/

fetchData(`${API}/product`)
    .then(response => response.json())
    .then(products => {
        return fetchData(`${API}/products/${products[0].id}`)
    })