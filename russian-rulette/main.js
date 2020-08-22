var bulletPosition = 3;

function spinChamber() {
  var chamberPosition = Math.floor(Math.random() * 6 + 1);
  return chamberPosition;
}

function fireGun() {
  let value = spinChamber();
  console.log(value);

  if (value === bulletPosition) {
    return 'Muerto';
  } else {
    return 'Vivo';
  }
}

console.log(fireGun());
