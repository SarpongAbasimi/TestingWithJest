
const fruits = {
  apple: 2, 
  pear: 1
}

exports.myAsync = ()=> {
  return new Promise((resolve, reject) =>{
    if(fruits.apple){
      return resolve('Yes there are 2 apples')
    }else {
      return reject('sorry')
    }
  })
}

exports.myAsyncPear = ()=> {
  return new Promise((resolve, reject) =>{
    if(fruits.pear > 0){
      return resolve('Yes there a pear')
    }else {
      return reject('sorry')
    }
  })
}