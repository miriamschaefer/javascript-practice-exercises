'use strict';

const p = document.querySelector('.js-p');

function sing() {
  const be = 'let it be';
  const whisper = 'words of wisdom, ';
  const answer = 'there will be an answer, ';

  function letItBe() {
    let chorus = '';
    for (let i = 0; i < 5; i++) {
      chorus += be + ', ';
    }
    return chorus;
  }

  const song = letItBe() + `${whisper}` + letItBe() + `${answer}` + `${be}`;
  p.innerHTML = song;
  console.log(song);
}
sing();
