// Three ways to write functions

function plantNeedsWater_1 (day){
  if (day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};


// Function Expressions

const plantNeedsWater_2 = function(day){
  if (day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};  


// Arrow Functions

const plantNeedsWater_3 = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

console.log(plantNeedsWater_1('Wednesday'))
console.log(plantNeedsWater_2('Tuesday'))
console.log(plantNeedsWater_3('Friday'))