'use strict';

const pressed = [];
const secretCode = 'miriam';
const title = document.querySelector('h1');

function checkPressed(ev) {
  pressed.push(ev.key);
  console.log(pressed);
  pressed.splice(-secretCode.length - 2, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    title.innerHTML = 'Bingo!';
    cornify_add();
  } else {
    title.innerHTML = 'Type my name';
  }
}

window.addEventListener('keyup', checkPressed);
