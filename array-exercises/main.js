let list_of_numbers = [
  4,
  80,
  85,
  59,
  37,
  25,
  5,
  64,
  66,
  81,
  20,
  64,
  41,
  22,
  76,
  76,
  55,
  96,
  2,
  68,
];

function mergeTwoList(arr) {
  const odd = [];
  const even = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  console.log(odd);
  console.log(even);
  return odd.concat(even);
}
console.log(mergeTwoList(list_of_numbers));

//max integer from array

let myArray = [
  43,
  23,
  6,
  87,
  43,
  1,
  4,
  6,
  3,
  67,
  8,
  3445,
  3,
  7,
  5435,
  63,
  346,
  3,
  456,
  734,
  6,
  34,
];

let largest = myArray[0];

for (let i = 0; i < myArray.length; i++) {
  if (largest < myArray[i]) {
    largest = myArray[i];
  }
}
console.log(largest);

//forEach max integer

var myArray2 = [
  3344,
  34334,
  454543,
  342534,
  4563456,
  3445,
  23455,
  234,
  262,
  2335,
  43323,
  4356,
  345,
  4545,
  452,
  345,
  434,
  36,
  345,
  4334,
  5454,
  345,
  4352,
  23,
  365,
  345,
  47,
  63,
  425,
  6578759,
  768,
  834,
  754,
  35,
  32,
  445,
  453456,
  56,
  7536867,
  3884526,
  4234,
  35353245,
  53244523,
  566785,
  7547,
  743,
  4324,
  523472634,
  26665,
  63432,
  54645,
  32,
  453625,
  7568,
  5669576,
  754,
  64356,
  542644,
  35,
  243,
  371,
  3251,
  351223,
  13231243,
  734,
  856,
  56,
  53,
  234342,
  56,
  545343,
];

//your code here

let max = myArray2[0];

myArray2.forEach(function checkMax(i) {
  if (max > myArray2[i]) {
    max = myArray2[i];
  }
});

console.log(max);

//average with for in loop

var averageArr = [
  2323,
  4344,
  2325,
  324413,
  21234,
  24531,
  2123,
  42234,
  544,
  456,
  345,
  42,
  5445,
  23,
  5656,
  423,
];
function getAverage() {
  let acc = 0;

  for (let number in averageArr) {
    acc += averageArr[number];
  }

  let average = acc / averageArr.length;
  console.log(`The average for averageArr is ${average}.`);
}

getAverage();

//Loop through the array printing only the longitudes.

let coordinatesArray = [
  [33.747252, -112.633853],
  [-33.867886, -63.987],
  [41.303921, -81.901693],
  [-33.350534, -71.653268],
];

for (let i = 0; i < coordinatesArray.length; i++) {
  console.log(coordinatesArray[i][1]);
}
// loop through all its properties and values and print them on the console.

contact = {
  fullname: 'Jane Doe',
  phone: '321-321-4321',
  email: 'test@test.com',
};

let contactPerson = '';
for (key in contact) {
  contactPerson += key + ' : ' + contact[key] + '<br>';
}

console.log(contactPerson);
