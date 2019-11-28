function isNumberPrime(n) {
 if (n === 1) {
  return false;
 }
 if (n === 2) {
  return true;
 }
 for (let x = 2; x < n; x++) {
  if (n % x === 0) {
   return false;
  }
 }
 return true;
}

let primeNumber = 1;
let Number = 1;

setInterval(() => {
 Number++;
 if (isNumberPrime(Number)) {
  primeNumber = Number;
 }
}, 1);

setInterval(() => {
 console.log(`${+new Date()}:-- IN PROCESS -- Biggest prime number found: ${primeNumber}`);
}, 1000);
