
exports.name = ()=> {
  return setTimeout(()=> "hello", 1000)
};


const sayHello = ()=>{
 console.log('hey')
}

const name = (sayHello)=> {
  return setTimeout(()=> {
   console.log('hello')
   sayHello()
   console.log('done')
  }, 1000)
};


name(sayHello) 
