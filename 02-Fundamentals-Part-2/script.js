// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio';
const private = 534;

// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow Functions
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

// Reviewing Functions
const calcAge4 = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge4(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1950, 'Mike'));

// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [
  firstName,
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  friends,
];
console.log(jonas);
console.log(jonas.length);

const calcAge5 = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age5 = calcAge5(years[0]);
const age6 = calcAge5(years[1]);
const age7 = calcAge5(years[years.length - 1]);
console.log(age5, age6, age7);

const ages = [
  calcAge5(years[0]),
  calcAge5(years[1]),
  calcAge5(years[years.length - 1]),
];
console.log(ages);

// Basic Array Operations (Methods)
const friends2 = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends2.push('Jay');
console.log(friends2);
console.log(newLength);

friends2.unshift('John');
console.log(friends2);

// Remove elements
friends2.pop();
const popped = friends2.pop();
console.log(popped);
console.log(friends2);

friends2.shift();
console.log(friends2);

console.log(friends2.indexOf('Steven'));
console.log(friends2.indexOf('Bob'));

friends2.push(23);
console.log(friends2.includes('Steven'));
console.log(friends2.includes('Bob'));
console.log(friends2.includes(23));

if (friends2.includes('Steven')) {
  console.log('You have a friend called Steven');
}

// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

const jonas2 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

// Dot vs. Bracket Notation
const jonas3 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};
console.log(jonas3);
console.log(jonas3.lastName);
console.log(jonas3['lastName']);

const nameKey = 'Name';
console.log(jonas3['first' + nameKey]);
console.log(jonas3['last' + nameKey]);

const interestedIn = prompt(
  'What do you wnat to know about Jonas? Choose between firstName, lastName, age, job, and friends'
);
if (jonas3[interestedIn]) {
  console.log(jonas3[interestedIn]);
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job, and friends'
  );
}

jonas3.location = 'Portugal';
jonas3['twitter'] = '@jonasschmedtmann';
console.log(jonas3);

// Object Methods
const jonas4 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  calcAge1: function (birthYear) {
    return 2037 - birthYear;
  },
  calcAge2: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },
  calcAge3: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge1()}-year old ${
      jonas4.job
    }, and he has ${
      this.hasDriversLicense ? 'a' : 'no'
    } driver's license.`;
  },
};

console.log(jonas4.calcAge1());
console.log(jonas4.age);
console.log(jonas4.age);

// Iteration: The for Loop
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏿‍♂️`);
}

// Looping Arrays, Breaking and Continuing
const jonas5 = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];
const types = [];

for (let i = 0; i < jonas5.length; i++) {
  // Reading from jonas array
  console.log(jonas5[i], typeof jonas5[i]);

  // Filling types array
  types.push(typeof jonas5[i]);
}

console.log(types);

const years2 = [1991, 2007, 1969, 2020];
const ages8 = [];

for (let i = 0; i < years2.length; i++) {
  ages8.push(2037 - years2[i]);
}
console.log(ages8);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas5.length; i++) {
  if (typeof jonas5[i] !== 'string') continue;
  console.log(jonas5[i], typeof jonas5[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonas5.length; i++) {
  if (typeof jonas5[i] === 'number') break;
  console.log(jonas5[i], typeof jonas5[i]);
}

// Looping Backwards and Loops in Loops
const jonas6 = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

for (let i = jonas6.length - 1; i >= 0; i--) {
  console.log(i, jonas6[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(
      `Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏿‍♂️`
    );
  }
}

// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
