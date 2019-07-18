const fetch = require('node-fetch');
const axios = require('axios')

// const firstApiCall = () => {
//   return fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => {
//     if(response.ok){
//       return response
//     }
//     throw new Error('Something went wrong')
//   }).then(responsedata => console.log(responsedata.id))
//     .catch(errr => errr)
// }


const apiCall = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    if(response.status == 200){
      return response.data
    }
    throw new Error('Something went wrong')
  }).then(responsedata =>responsedata)
    .catch(errr => console.log('error'))
}

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}
module.exports =  {
  Users: Users,
  apiCall: apiCall
}

