'use strict';

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function selectAll(ev) {
  let inBetween = false;

  if (ev.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', selectAll));
