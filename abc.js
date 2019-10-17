let snail = {
    name: "Jessica",
    age: 2,
    sex: 'female'
};

snail.name = "Kelley"
console.log(snail.name)

class Snail {
  constructor(name, age, sex) {
    this._name = name;
    this.age = age;
    this.sex = sex;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName
  }
  
  
}

let jessica = new Snail("Jessica", 2, "female")

// jessica.name = "Kelley"
jessica.name = "Kelley"
console.log(jessica.name)


console.log('BREAKKKKKK')

function start(){
  var i = 0
  for(let i = 0; i < 5; i++)
    console.log(i)

    console.log(i)
  

}

console.log(start())

// var variables are accessible anywhere in the function.
// not just the block
// var variables are attached to the window object

console.log("lalalallla")

function getColor(){
  if(true){
    var color = 'blue'
    console.log(color)
  }
  console.log(color)
}

// console.log(getColor())
// console.log(color)

window.getColor()