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

// You can do concise arrow functions if there's only one parameter

const squareNum = (num) => {
  return num * num;
};

// becomes

const squareNum = num => num * num;

// ---------------------------------------------------------------------------

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 
'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

// ----------------------------------------------------------------------------

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}



