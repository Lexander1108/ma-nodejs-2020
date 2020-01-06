second = 0;

function step() {
 second++;
}
setInterval(() => {
 step();
 console.log(second);
 setInterval(() => {
  console.clear();
 }, 1000);
}, 1000);
