const os = require('os');

const redColor = '\x1b[31m';
const greenColor = '\x1b[32m';
const resetColor = '\x1b[0m';

const DEFAULT_RATE = process.env.RATE || 1000;
const DEFAULT_LIMIT = process.env.LIMIT || 300;
const { COLOR } = process.env;
const jsonParse = JSON.parse(COLOR);

const freeMemory = os.freemem() / (1024 * 1024);
const totalMemory = os.totalmem() / (1024 * 1024);
const allocatedMemory = totalMemory - freeMemory;

setInterval(() => {
 const lastFreeMemory = os.freemem() / (1024 * 1024);
 const lastTotalMemory = os.totalmem() / (1024 * 1024);
 const lastAllocatedMemory = lastTotalMemory - lastFreeMemory;
 const delta = lastAllocatedMemory - allocatedMemory;
 console.log('Total system memory:', lastTotalMemory.toFixed(3), 'MB');
 if (lastFreeMemory < DEFAULT_LIMIT && jsonParse === true) {
  console.log('Free memory avaliable:', redColor, lastFreeMemory.toFixed(3), 'MB', resetColor);
 } else if (lastFreeMemory < DEFAULT_LIMIT && jsonParse === false) {
  console.log('Free memory avaliable:', lastFreeMemory.toFixed(3), 'MB');
 } else {
  console.log('Free memory avaliable:', lastFreeMemory.toFixed(3), 'MB');
 }
 console.log('Allocated memory:', lastAllocatedMemory.toFixed(3), 'MB');

 if (delta < 0 && jsonParse === true) {
  console.log(
   'Delta for previous allocated memory value:',
   redColor,
   delta.toFixed(3),
   'MB',
   resetColor,
  );
 } else if (delta > 0 && jsonParse === true) {
  console.log(
   'Delta for previous allocated memory value:',
   greenColor,
   delta.toFixed(3),
   'MB',
   resetColor,
  );
 } else if (delta < 0 && jsonParse === false) {
  console.log('Delta for previous allocated memory value:', delta.toFixed(3), 'MB');
 } else {
  console.log('Delta for previous allocated memory value:', delta.toFixed(3), 'MB');
 }

 if (freeMemory < DEFAULT_LIMIT && jsonParse === true) {
  console.log(
   redColor,
   '!!! ATTENTION: Available memory is under the defined limit !!!',
   resetColor,
  );
 } else if (freeMemory < DEFAULT_LIMIT && jsonParse === false) {
  console.log('!!! ATTENTION: Available memory is under the defined limit !!!');
 }

 setInterval(() => {
  console.clear();
 }, DEFAULT_RATE);
}, DEFAULT_RATE);
