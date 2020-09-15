function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

  for (counter = 0; counter < 10; counter += 1) {
  console.log (`This is your lucky number ${getRandomNumber(5)}`)
  }