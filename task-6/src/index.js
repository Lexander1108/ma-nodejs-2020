const os = require('os');
const DEFAULT_RATE = 3000;
process.env.RATE = process.env.RATE || DEFAULT_RATE;
// console.log(process.env.RATE);
setInterval(() => {
	const freeMemory = os.freemem();
	const totalMemory = os.totalmem();
	const filledMemory = totalMemory - freeMemory;
	console.log('Free memory: ', freeMemory);
	console.log('Total memory: ', totalMemory);
	console.log('Filled memory: ', filledMemory);
	setInterval(() => {
		console.clear();
	}, process.env.RATE);
}, process.env.RATE);
