'use strict';

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const actualYear = new Date().getFullYear();
console.log(actualYear);

const isSomeone19 = people.some((person) => person.year >= actualYear - 19);
console.log(isSomeone19);
// Array.prototype.every() // is everyone 19 or older?

const allOlderThan19 = people.every((person) => person.year >= actualYear - 19);
console.log(allOlderThan19);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comment = comments.find((comment) => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
const findComment = comments.findIndex((comment) => comment.id === 823423);
console.log(findComment);

// delete the comment with the ID of 823423
const deleteComment = comments.splice(findComment, 1);
console.log(comments);
