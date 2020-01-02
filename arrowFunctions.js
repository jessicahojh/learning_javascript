// 1
function sum(a, b) {
    return a+b
}

let sum2 = (a, b) => a + b


// 2
function isPositive(number) {
    return number >= 0
}

let isPositive2 = number => number >= 0


// 3
function randomNumber() {
    return Math.random
}

let randomNumber2 = () => Math.random

// 4
// document.addEventListener('click', function(){
//     console.log('Click')
// })

// document.addEventListener('click', () => console.log('Click'))

// Arrow functions are great for object's 'this'
class Person {
    constructor(name) {
        this.name = name
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()
console.log(this.name)

// Arrow function's 'this' works b/c it is in scope
// The other function doesn't work 