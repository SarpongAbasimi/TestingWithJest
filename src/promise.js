const myObj = {
  name: 'sarp',
  book: 'books'
}

exports.myPromeis = ()=> {
   const resolved = new Promise( async (resolve, reject)=>{
    if(myObj.name == 'sarp'){
      resolve('yes')
    }
  })
  return resolved
}


