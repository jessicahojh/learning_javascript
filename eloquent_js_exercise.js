// Four ways to declare a function

function add1(num1, num2){
    return num1+num2
}

let add2 = function(num1, num2){
    return num1+num2
}

let add3 = (num1, num2) => {
    return num1+num2
}

// no parenthesis needed if only one parameter
let oneParam = num1 => {
    return num1
}

console.log(add1(5,2))
console.log(add2(1,4))
console.log(add3(2,3))
console.log(oneParam(6))



// Start Exercise

function sevenLevelTriangle(){
    let hash = [];
    for (let count = 1; count < 8; count++){
        hash.push('#');
        console.log(hash);
    }
}

console.log(sevenLevelTriangle())


function fizzBuzz(num){
    for (let count = 1; count < (num+1); count++){
        if(count % 3 == 0 && count % 5 == 0){
            console.log('fizzbuzz')
        } else if (count % 3 == 0){
            console.log('fizz')
        } else if (count % 5 == 0){
            console.log('buzz')
        } else{
            console.log(count)
        }
    }
}

console.log(fizzBuzz(20))


function chessBoard(){
    let even = ['','#','','#','','#','','#'];
    let odd = ['#','','#','','#','','#',''];

    for (let count = 0; count < 8; count++){
        if (count % 2 == 0){
            console.log(even)
        } else{
            console.log(odd)
        }
    }
}

console.log(chessBoard())


function findMin(num1, num2){
    return Math.min(num1, num2)
}

console.log(findMin(4, 10))
console.log(findMin(20, 5))

// do isEven recursively
function isEven(num){
    if (num == 0){
        return true
    } else if (num == 1){
        return false
    } else if (num < 0){
        return isEven(-num);
    } else {
        return isEven(num-2);
    }
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
console.log(isEven(-4))


// Bean Counting 

function countBs(string){
    count = 0
    for (let i = 0; i < string.length; i++){
        if (string[i] == "B"){
            count ++
        } 
    } return count
}

console.log(countBs("BBC"))

function countChar(string, k){

    count = 0
    for (let i = 0; i < string.length; i++){
        if (string[i] == k){
            count ++
        } 
    } return count
}

console.log(countChar("kakkerlak", "k"))






