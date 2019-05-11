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

const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)

//

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

//
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})

//

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

// .findIndex() method 

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

// .reduce() method

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);













