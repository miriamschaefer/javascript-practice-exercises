var people = [
  'juan',
  'ana',
  'michelle',
  'daniella',
  'stefany',
  'lucy',
  'barak',
];

function deletePerson(personName) {
  return people.filter((person) => person !== personName);
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));

// Using the same logic given in the example, add the needed code to convert an array of Celsius values into Fahrenheit inside the map function.

const arrayOfCelsiusValues = [-2, 34, 56, -10];

const arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function (value) {
  return value * 1.8 + 32;
});

console.log(arrayOfFahrenheitValues);

// Create a function named myFunction that will multiply each number by 3.

let myNumbers = [23, 234, 345, 4356234, 243, 43, 56, 2];

const newArray = myNumbers.map((element) => element * 3);

console.log(newArray);

// map the names array using the prepender function to create a new array

let names = ['Alice', 'Bob', 'Marry', 'Joe', 'Hilary', 'Stevia', 'Dylan'];

let prepender = function (name) {
  return 'My name is: ' + name;
};

const nameList = names.map((element) => prepender(element));

console.table(nameList);

// Update the map function to create a new array that contains the data types of each corresponding item from the original array.

let arrayOfStrings = ['1', '5', '45', '34', '343', '34', 6556, 323];

let arrayOfStrings2 = arrayOfStrings.map(function (val) {
  return typeof val;
});

console.log(arrayOfStrings2);

// Please update the mapping function so it creates an array where each item contains the following:
// Hello my name is Joe and I am 13 years old.

// let people2 = [
//   { name: 'Joe', birthDate: new Date(1986, 10, 24) },
//   { name: 'Bob', birthDate: new Date(1975, 5, 24) },
//   { name: 'Erika', birthDate: new Date(1989, 6, 12) },
//   { name: 'Dylan', birthDate: new Date(1999, 12, 14) },
//   { name: 'Steve', birthDate: new Date(2003, 4, 24) },
// ];

// const peopleBday = people2.map((person) => console.log(person.birthDate));

// function getAge(birthDate, otherDate) {
//   birthDate = new Date(birthDate);
//   otherDate = new Date(otherDate);
//   for (let i = 0; i < peopleBday.length; i++) {
//   if(otherDate.getMonht() < birthDate.getMonth)
//   }
// }

// let simplifier = function (person) {
//   return `Hello my name is ${person.name} and I am ${
//     person.birthDate - getAge()
//   } years old`;
// };

// console.log(people2.map(simplifier));
