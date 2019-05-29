const fetch = require("node-fetch");

//How to I test for what is being returned.
//If stubbing how do I do that.
//https://jsonplaceholder.typicode.com



exports.promise = (callback)=>{
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(jsonData => callback(jsonData))
  .catch(error=> error)
};



