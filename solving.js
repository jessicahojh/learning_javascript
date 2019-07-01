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