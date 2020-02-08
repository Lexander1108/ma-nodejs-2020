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
