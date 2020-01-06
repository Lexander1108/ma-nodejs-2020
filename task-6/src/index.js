const os = require('os');

setInterval(() => {
 const freeMemory = os.freemem();
 const totalMemory = os.totalmem();
 const filledMemory = totalMemory - freeMemory;
 console.log('Free memory: ', freeMemory);
 console.log('Total memory: ', totalMemory);
 console.log('Filled memory: ', filledMemory);
 setInterval(() => {
  console.clear();
 }, 1000);
}, 1000);
