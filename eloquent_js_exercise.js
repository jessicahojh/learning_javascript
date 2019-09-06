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

    let count = 0
    for (let i = 0; i < string.length; i++){
        if (string[i] == k){
            count ++
        } 
    } return count
}

console.log(countChar("kakkerlak", "k"))


function range(num1, num2){
    let answer = []
    for (let i = num1; i < (num2+1); i++){
        answer.push(i)
    } return answer
}

console.log(range(1,10))

function sum(anotherFunctionWithArray){
    let answer = 0;
    for (let i = 0; i < anotherFunctionWithArray.length; i++){
        answer += anotherFunctionWithArray[i]
    } return answer
}

console.log(sum(range(1,10)))


function reverseArray(arr){
    let answer = [];
    for (let i = (arr.length-1); i > -1; i--){
        answer.push(arr[i])
    } return answer
}

console.log(reverseArray(['A', 'B', 'C']))

function reverseArrayInPlace(arr){
    let i = 0;
    let j = arr.length-1;
    let holder 
    while (i < j){
        holder = arr[j];
        arr[j] = arr[i];
        arr[i] = holder;
        i++
        j--
    } return arr
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))


// function arrayToList(arr)
// function listToArray(lst)

// console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20

// function deepEqual(a, b){
//     if(a===b){
//         return true
//     } else{
//         return false
//     }

// }

var deepEqual = function (x, y) {
    if (x === y) {
        return true;
    } 
    else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length)
            return false;

    for (let prop in x) {
        if (y.hasOwnProperty(prop))
        {  
            if (! deepEqual(x[prop], y[prop]))
                return false;
        }
        else
            return false;
    }

    return true;
  }
  else 
    return false;
}

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true


function flatten(arr){
    answer = [];
    arr.forEach(function(innerArr){
        console.log(innerArr)

    innerArr.forEach(function(number){
        answer.push(number)
});
}); return answer
}
console.log(flatten([[1, 2, 3], [4, 5], [6]]))







