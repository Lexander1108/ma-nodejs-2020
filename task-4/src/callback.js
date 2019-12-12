function getRandomNumber(min, max) {
 const random = Math.floor(Math.random() * (max - min) + min);
 if (random === 0) {
  // console.log('Lost dice');
  return Error('Lost dice ');
 }
 return random;
}

function throwDice(callback) {
 const num = getRandomNumber(0, 6);
 return callback(num);
}

setTimeout(() => {
 throwDice((firstNumber) => {
  console.log(firstNumber);
  setTimeout(() => {
   throwDice((secondNumber) => {
    console.log(secondNumber);
    setTimeout(() => {
     const result = firstNumber + secondNumber;
     console.log(result);
    }, 1000);
   });
  }, 1300);
 });
}, 700);
