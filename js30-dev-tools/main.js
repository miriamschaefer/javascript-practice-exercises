const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

let myVar = '👽';

// Regular

console.log('hiiii');

// Interpolated

console.log('Hiiii, I am a %s', '💩'); // this is to interpole things, but way better to use the ES6 way to do so like this:
console.log(`Hiiii, I am a ${myVar}`);

// Styled

console.log(
  '%c This is used to style the console',
  'font-size: 15px; color: red;'
);

// warning!

console.warn('What are you doin');

// Error :|

console.error('Stop it, please');

// Info

console.info('Hi??'); //not working

// Testing, you can test for something and if it is wrong, it will pop in the console
const title = document.querySelector('h1');
console.assert(title.classList.contains('dev'), 'Not the right element');

// clearing
console.clear();

// Viewing DOM Elements
// this consoles the element and content of the element
console.log(title);

//this consoles the node element so you can check all its properties
console.dir(title);

// Grouping together

dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(`${dog.name}`);
});

// counting

console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/miriamschaefer')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });

//table
console.table(dogs);
