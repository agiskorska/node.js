const fs = require('fs');

const gender = ['female','male'];
const maleNames = ['Adam', 'Bob', 'Charlie', 'Dylan', 'Ed', 'Fred', 'George', 'Harry'];
const femaleNames = ['Agatha', 'Beth', 'Cynthia', 'Doris', 'Elizabeth', 'Frida', 'Georgia', 'Hannah'];
const lastNames = ['Adams', 'Bezos', 'Cox', 'Dennis', 'Evans', 'Fox'];

function randChoice() {
  let people = [];

  for (i=0; i<=19; i++) {
    const ranGender = randomizer(gender);
    let firstName;
    const surname = randomizer(lastNames);
    const age = Math.ceil(Math.random()*100);

    if (ranGender == 'male') {
      firstName = randomizer(maleNames);
    } else {
      firstName = randomizer(femaleNames);
    }

    let person = {
      gender: ranGender,
      age: age,
      firstName: firstName,
      lastName: surname, 
    }
    people.push(person);
  }
  return JSON.stringify(people);
}

function randomizer(arr) {
  const randomizer = Math.floor(Math.random()*arr.length % arr.length);
  const value = arr[randomizer];
  return value;
}

const data = randChoice();

fs.writeFile('outputfile.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});