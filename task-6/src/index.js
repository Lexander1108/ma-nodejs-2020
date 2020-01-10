const os = require('os');

const DEFAULT_RATE = 1000;
const DEFAULT_LIMIT = 300;
const DEFAULT_COLOR = true;

process.env.RATE = process.env.RATE || DEFAULT_RATE;
process.env.LIMIT = process.env.LIMIT || DEFAULT_LIMIT;
process.env.COLOR = process.env.COLOR || DEFAULT_COLOR;

setInterval(() => {
	const freeMemory = os.freemem() / (1024 * 1024);
	const totalMemory = os.totalmem() / (1024 * 1024);
	const filledMemory = totalMemory - freeMemory;
	console.log('Total system memory:', totalMemory.toFixed(3), 'MB');
	console.log('Free memory avaliable:', freeMemory.toFixed(3), 'MB');
	console.log('Allocated memory:', filledMemory.toFixed(3), 'MB');
	setInterval(() => {
		console.clear();
	}, process.env.RATE);
}, process.env.RATE);
