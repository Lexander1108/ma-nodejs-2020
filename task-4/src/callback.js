function throwDice(min, max) {
	const random = Math.floor(Math.random() * (max - min) + min);
	if (random === 0) {
		// console.log('Lost dice');
		return Error('Lost dice ');
	} else {
		return random;
	}
}

let firstNumber;
let secondNumber;

setTimeout(() => {
	firstNumber = throwDice(0, 6);
	console.log(firstNumber);
}, 700);

setTimeout(() => {
	secondNumber = throwDice(0, 6);
	console.log(secondNumber);
}, 2000);

setTimeout(() => {
	console.log(firstNumber + secondNumber);
}, 3000);
