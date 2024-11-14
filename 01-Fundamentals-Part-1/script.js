(function () {
  // Linking a JavaScript File
  let js = 'amazing';
  console.log(40 + 8 + 23 - 10);

  // Values and Variables
  console.log('Jonas');
  console.log(23);

  let firstName = 'Matilda';
  console.log(firstName);
  console.log(firstName);
  console.log(firstName);

  // Variable name conventions
  let jonas_matilda = 'JM';
  let $function = 27;

  let person = 'jonas';
  let PI = 3.1415;

  let myFirstJob = 'Coder';
  let myCurrentJob = 'Teacher';

  let job1 = 'programmer';
  let job2 = 'teacher';

  console.log(myFirstJob);

  // Data Types
  let javascriptFun = true;
  console.log(javascriptFun);

  console.log(typeof true);
  console.log(typeof javascriptFun);
  console.log(typeof 23);
  console.log(typeof 'Jonas');

  javascriptFun = 'YES';
  console.log(typeof javascriptFun);

  let year;
  console.log(year);
  console.log(typeof year);

  year = 1991;
  console.log(typeof year);

  console.log(typeof null);

  // let, const and var
  let age = 30;
  age = 31;

  const birthYear = 1991;
  var job = 'programmer';
  job = 'teacher';

  lastName = 'Schmedtmann';
  console.log(lastName);

  // Basic Operators
  // Math operators
  const now = 2037;
  const ageJonas = now - 1991;
  const ageSarah = now - 2018;
  console.log(ageJonas, ageSarah);

  console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
  // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

  const firstName2 = 'Jonas';
  const lastName2 = 'Schmedtmann';
  console.log(firstName2 + ' ' + lastName2);

  // Assignment operators
  let x = 10 + 5; // 15
  x += 10; // x = x + 10 = 25
  x *= 4; // x = x * 4 = 100
  x++; // x = x + 1
  x--;
  x--;
  console.log(x);

  // Comparison operators
  console.log(ageJonas > ageSarah); // >, <, >=, <=
  console.log(ageSarah >= 18);

  const isFullAge = ageSarah >= 18;
  console.log(now - 1991 > now - 2018);

  let x2, y2;
  x2 = y2 = 25 - 10 - 5; // x = y = 10, x = 10
  console.log(x2, y2);

  const averageAge = (ageJonas + ageSarah) / 2;
  console.log(ageJonas, ageSarah, averageAge);

  // String and Template Literals
  const firstName3 = 'Jonas';
  const job3 = 'teacher';
  const birthYear2 = 1991;
  const year3 = 2037;

  const jonas =
    "I'm " +
    firstName3 +
    ', a ' +
    (year3 - birthYear2) +
    ' year old ' +
    job3 +
    '!';
  console.log(jonas);

  const jonasNew = `I'm ${firstName3}, a ${
    year3 - birthYear2
  } year old ${job3}!`;
  console.log(jonasNew);

  console.log(`Just a regular string...`);

  console.log(
    'String with \n\
   multiple \n\
   lines'
  );

  console.log(`String
    multiple
    lines`);
})();
