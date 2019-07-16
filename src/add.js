const fetch = require('node-fetch');
// const axios = require('axios')

exports.add = ()=> {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {   
    if(response.ok){
      return response.json()
    }
  }).then(resolvedData => resolvedData.id)
  .catch(error => 'promise failed')
}


// const add = ()=> {
//   return fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => {   
//     if(response.ok){
//       return response.json()
//     }
//   }).then(resolvedData => resolvedData)
// }