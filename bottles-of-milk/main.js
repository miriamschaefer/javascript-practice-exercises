'use strict';

const p = document.querySelector('.js-p');

function milk() {
  let song = '';
  for (let i = 100; i >= 2; i--) {
    song +=
      ' ' +
      i +
      ' bottles of milk on the wall,' +
      ' ' +
      i +
      ' bottles of milk.' +
      '\n' +
      'Take one down and pass it around, ' +
      (i - 1) +
      ' bottles of milk on the wall.' +
      '\n';
  }
  console.log(
    song +
      '1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around none bottles of milk on the wall'
  );
  p.innerHTML =
    song +
    '1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around none bottles of milk on the wall';
}

milk();
