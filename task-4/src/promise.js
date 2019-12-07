const { throwDiceAfter } = require('./functions');

const firstNumber = throwDiceAfter(700);
const secondNumber = throwDiceAfter(2000);

firstNumber
	.then((firstValue) => {
		secondNumber
			.then((secondValue) => {
				setTimeout(() => {
					console.log(firstValue + secondValue);
				}, 3000);
			})
			.catch(console.error);
	})
	.catch(console.error);
