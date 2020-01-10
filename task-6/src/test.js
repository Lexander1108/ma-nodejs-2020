const os = require('os');

const DEFAULT_RATE = 1000;
const DEFAULT_LIMIT = 300;
const DEFAULT_COLOR = true;

process.env.RATE = process.env.RATE || DEFAULT_RATE;
process.env.LIMIT = process.env.LIMIT || DEFAULT_LIMIT;
process.env.COLOR = process.env.COLOR || DEFAULT_COLOR;

redColor = '\x1b[31m';
greenColor = '\x1b[32m';
whiteColor = '\x1b[37m';
resetColor = '\x1b[0m';

setInterval(() => {
 const freeMemory = os.freemem() / (1024 * 1024);
 const totalMemory = os.totalmem() / (1024 * 1024);
 const allocatedMemory = totalMemory - freeMemory;

 console.log('Total system memory:', totalMemory.toFixed(3), 'MB');
 if (freeMemory < process.env.LIMIT) {
  console.log('Free memory avaliable:', redColor, freeMemory.toFixed(3), 'MB', resetColor);
 } else {
  console.log('Free memory avaliable:', freeMemory.toFixed(3), 'MB');
 }
 console.log('Allocated memory:', allocatedMemory.toFixed(3), 'MB');

 if (freeMemory < process.env.LIMIT) {
  console.log(
   redColor,
   '!!! ATTENTION: Available memory is under the defined limit !!!',
   resetColor,
  );
 }

 setInterval(() => {
  console.clear();
 }, process.env.RATE);
}, process.env.RATE);
