const os = require('os');

function systemStatus() {
	const totalMemory = os.totalmem() / (1024 * 1024);
	const freeMemory = os.freemem() / (1024 * 1024);
	const allocatedMemory = totalMemory - freeMemory / (1024 * 1024);
	return {
		totalMemory,
		freeMemory,
		allocatedMemory
	};
}
module.exports = { systemStatus };

// const { getSystemStatus } = require('./systemStatus.js');

// const systemStatus = getSystemStatus();
// const totalMemory = { totalMemory: systemStatus.totalMemory };
// const freeMemory = { freeMemoey: systemStatus.freeMemory };
// const allocatedMemory = { allocatedMemory: systemStatus.allocatedMemory };
// console.log(totalMemory);
// console.log(freeMemory);
// console.log(allocatedMemory);
