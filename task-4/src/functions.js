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
			console.log(firstValue);
		}, ms);
	});
}

module.exports = { throwDice, throwDiceAfter };
