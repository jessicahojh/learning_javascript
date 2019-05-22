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

const squareNum_1 = (num) => {
  return num * num;
};

// becomes

const squareNum_2 = num => num * num;

// ---------------------------------------------------------------------------


// shift gets rid of the first item
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 
'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

// unshift adds an item to the beginning

groceryList.unshift('popcorn');

console.log(groceryList);

// slice slices 

console.log(groceryList.slice(1, 4));

console.log(groceryList);

// indexOf gives you the index of an item

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

// ----------------------------------------------------------------------------

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

let vacationSpots = ['HK', 'NY', 'SF']

for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}


let bobsFollowers = ['TK', 'Jess', 'Jenn', 'AJ']

let tinasFollowers = ['Jess', 'Lola', 'AJ']

let mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++)
    {
      if (bobsFollowers[i] === tinasFollowers[j]){
        mutualFollowers.push(bobsFollowers[i])
      }
    }
}

console.log(mutualFollowers)



// ----------------------------------------------------------------------------


const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}


// do....while 

let cupsOfSugarNeeded = 5
let cupsAdded = 0

do {
  cupsAdded ++
  console.log(cupsAdded)
} while (cupsAdded < cupsOfSugarNeeded);


// break

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];


for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i])
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break
  }
}
console.log("And if you don't know, now you know.")


// iterators 

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

//

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

//

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

//

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers_1 = bigNumbers.map(num => num/100);

console.log(smallNumbers_1)

//

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers)

//
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers_2 = randomNumbers.filter(num => {
  return num < 250;
})

console.log(smallNumbers_2)

//

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

console.log(longFavoriteWords)

// .findIndex() method 

const animals_1 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals_1.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals_1.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

console.log('--')
console.log(foundAnimal)
console.log(startsWithS)
console.log('--')

// .reduce() method

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

//
console.log('')


const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];


console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});

console.log(interestingWords)

console.log(interestingWords.every((word) => {return word.length > 5}));

//

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

//

//forEach() is used to execute the same code on every element in an array but 
//does not change the array and returns undefined.
//map() executes the same code on every element in an array and returns a new 
//array with the updated elements.
//filter() checks every element in an array to see if it meets certain criteria 
//and returns a new array with the elements that return truthy for the criteria.
//findIndex() returns the index of the first element of an array which satisfies 
//a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
//reduce() iterates through an array and takes the values of the elements and 
//returns a single value.
//All iterator methods takes a callback function that can be pre-defined, or a 
//function expression, or an arrow function.

//------------------------------------------------------------------------------

// Objects

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;

console.log(crewCount)
console.log(planetArray)

// Methods

const alienShip_1 = {
  invade_1: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

// new JS ES6 method

const alienShip_2 = {
  invade_2 () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

alienShip_1.invade_1();

alienShip_2.invade_2();


// ------

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';


let alienShip = {
    
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();
alienShip.takeOff();

// ------


let spaceship_2 = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 


for (let crewMember in spaceship_2.crew) {
  console.log(`${crewMember}: ${spaceship_2.crew[crewMember].name}`)
};

for (let crewMember in spaceship_2.crew) {
  console.log(`${spaceship_2.crew[crewMember].name}: ${spaceship_2.crew[crewMember].degree}`)
};


// ---------

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet(); 
// Output: herbivore

//------------

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() { 
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());

//---------------









