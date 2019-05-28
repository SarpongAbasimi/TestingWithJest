const fetch = require("node-fetch");

//How to I test for what is being returned.
//If stubbing how do I do that.
//https://jsonplaceholder.typicode.com

exports.promise = ()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
.then(resolvedData => resolvedData)
.catch(error=> error)
};

