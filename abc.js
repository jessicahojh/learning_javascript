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


