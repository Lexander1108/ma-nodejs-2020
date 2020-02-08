const { startServer } = require('../server/server');
const rax = require('retry-axios');
const axios = require('axios');
startServer(3000);

async function main() {
	const interceptorId = rax.attach();
	const res = await axios({
		method: 'GET',
		url: 'http://localhost:3000/metrics',
		raxConfig: {
			retry: 30,
			noResponseRetries: 2,
			retryDelay: 1000,

			statusCodesToRetry: [ [ 200, 500 ] ],

			onRetryAttempt: (err) => {
				const cfg = rax.getConfig(err);
				console.log(`Retry attempt #${cfg.currentRetryAttempt}`);
			}
		}
	});
	console.clear();
	console.log(res.data);
}

function retry(func, attempt) {
	const maxAttempts = 30;
	try {
		func();
	} catch (err) {
		if (attempt >= maxAttempts) {
			throw new Error('Failed after attempts');
		}
		retry(func, attempt + 1);
	}
}

retry(main, 30);
main().catch(console.log);
