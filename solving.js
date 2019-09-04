function countToTen(){
    for(let x = 0; x < 11; x ++) {
        console.log(x)
    }
}

console.log(countToTen())


function findInArray(array, sought){
    for (let index = 0, size = array.length; index < size; index ++) {
        if (array[index] === sought){
            return("I found it")
        } ;
    }
            
    return("Couldn't find it");
        
    }


console.log(findInArray([3,5,10,9,24], 9))
console.log(findInArray([3,5,10,9,24], 0))


let add = (a, b) => {
    return a+b; 
};

console.log(add(3, 5))


const ageResponse = (age) => {
    if (age < 13) {
        return ("You're so young")
    } else if (age > 13 && age < 20) {
        return ("You're a teenager")
    } else {
        return ("You're getting old now!")
    }
}

console.log(ageResponse(10))
console.log(ageResponse(15))
console.log(ageResponse(22))

// find max 

function findMax(array){
    let currentMax = array[0];

    for (num in array){
        if (array[num] > currentMax){
            currentMax = array[num]
        } ;

    }
    return (currentMax)
}

console.log(findMax([4,7,2,3,1,9,6]))

// even or odd up to n

function evenOrOdd(n){

    for (let num of Array(n+1).keys()){
        if (num % 2 === 0) {
            console.log(num, "is even")
        } else {
            console.log(num, "is odd")
        }
    }

}

console.log(evenOrOdd(15))

// valid parenthesis

function validParenthesis(string){

    let holder = []

    for (item in string) {
        
        if (string[item] === "("){
            holder.push("(")
        } else if (string[item] === ")" && holder.length > 0 ){
            holder.pop()
        } else if (string[item] === ")" && holder.length === 0 ){
            return false
        }

    }

    if (holder.length === 0) {
        return true
    } else {
        return false
    }

}

console.log(validParenthesis("(e)(erfd)(((v)))")) //true
console.log(validParenthesis("())rg(2)")) //false 

console.log("SPACE")


function deepEqual(val1, val2){

    if (val1 === val2){
        return true
    } else if (Object.keys(val1) == Object.keys(val2)) {   
        return true
    } else {
        return false
    }

}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

console.log(Object.keys(obj))
console.log(Object.keys({here: {is: "an"}, object: 2}))

console.log(typeof obj)
console.log(typeof {here: {is: "an"}, object: 2})






