// const folder = require('./src/task');
const { sum: newTitle1, mars: newTitle2, timeOutToPromise: newTitle3 } = require('./task');

// const test1 = newTitle1;

async function boot() {
	console.log(newTitle1);
	console.log(await newTitle3);
	console.log(newTitle2);
}

boot();
