function throwDice(min, max) {
 return Math.floor(Math.random() * (max - min) + min);
}

function throwDiceAfter(ms) {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   const firstValue = throwDice(0, 6);
   if (firstValue === 0) {
    reject(new Error('Lost Dice'));
   }
   resolve(firstValue);
  }, ms);
 });
}

const firstNumber = throwDiceAfter(700);
const secondNumber = throwDiceAfter(2000);

firstNumber
 .then((firstValue) => {
  console.log(firstValue);
  secondNumber
   .then((secondValue) => {
    console.log(secondValue);
    setTimeout(() => {
     console.log(firstValue + secondValue);
    }, 3000);
   })
   .catch(console.error);
 })
 .catch(console.error);

async function boot() {
 const firstThrow = await firstNumber;
 const secondThrow = await secondNumber;
 setTimeout(() => {
  console.log(firstThrow + secondThrow);
 }, 3000);
}

boot();
