// const folder = require('./src/task');
const { sum: newTitle1 } = require('./src/task/index.js');
const { mars: newTitle2 } = require('./src/task/index.js');
const { timeOutToPromise: newTitle3 } = require('./src/task/index.js');

const test1 = newTitle1(1, 2, 3);

async function boot() {
 console.log(test1);
 await newTitle3(2000, 'some text');
 console.log(newTitle2.toString());
}

boot();
