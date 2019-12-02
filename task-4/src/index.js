function throwDice(min, max) {
	let random = Math.random() * (max - min) + min;
	return Math.round(random);
}

let firstNumber;
let secondNumber;

setTimeout(() => {
	firstNumber = throwDice(1, 6);
	console.log(firstNumber);
}, 700);

setTimeout(() => {
	secondNumber = throwDice(1, 6);
	console.log(secondNumber);
}, 2000);

setTimeout(() => {
	console.log(firstNumber + secondNumber);
}, 3000);
