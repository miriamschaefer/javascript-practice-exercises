'use strict';
let a1 = { arr: [1, 2, 3, 4, 6], count: 6 };
let a2 = { arr: [1, 2, 3, 4, 6, 7, 9, 8, 10], count: 10 };
let a3 = { arr: [1, 2, 3, 4, 6, 9, 8], count: 10 };
let a4 = { arr: [1, 2, 3, 4, 9, 8], count: 10 };

function printMissingNumber(item) {
  const array = item.arr;
  let missing = [];

  for (let i = 1; i <= item.count; i++) {
    if (array.indexOf(i) === -1) {
      missing.push(i);
    }
  }
  console.log(missing);
}

printMissingNumber(a1); //Missing numbers in integer array [1, 2, 3, 4, 6], with total number 6 is 5
printMissingNumber(a2); //Missing numbers in integer array [1, 2, 3, 4, 6, 7, 9, 8, 10], with total number 10 is 5
printMissingNumber(a3); //Missing numbers in integer array [1, 2, 3, 4, 6, 9, 8], with total number 10 is 5 7 10
printMissingNumber(a4); //Missing numbers in integer array [1, 2, 3, 4, 9, 8], with total number 10 is 5 6 7 10
