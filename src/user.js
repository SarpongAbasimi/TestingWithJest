
function User(name){
  this.name = name
}

User.prototype = {
  constructor:User,
  getname :function(){
    return(this.name)
  }
}

module.exports = User