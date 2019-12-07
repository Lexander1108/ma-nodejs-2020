const { throwDiceAfter } = require('./functions');

const firstNumber = throwDiceAfter(700);
const secondNumber = throwDiceAfter(2000);

async function boot() {
 const firstThrow = await firstNumber;
 const secondThrow = await secondNumber;
 setTimeout(() => {
  console.log(firstThrow + secondThrow);
 }, 3000);
}

boot();
