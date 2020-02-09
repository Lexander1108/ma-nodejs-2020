const rp = require('request-promise');
const retry = require('retry');
const { startServer } = require('../server/server');

const options = {
 method: 'GET',
 url: 'http://localhost:3030/metrics',
 json: true,
};

startServer(3000);

function rpn(TIME) {
 setInterval(() => {
  const operation = retry.operation({
   retries: 30,
   factor: 2,
   minTimeout: 100,
   randomize: false,
  });

  operation.attempt((currentAttempt) => {
   rp(options)
    .then((response) => {
     console.log(`Status:\n ${JSON.stringify(response)} on ${currentAttempt} attempt`);
    })
    .catch((error) => {
     console.error(`Status: ${error.statusCode}`);
    });
  });
 }, TIME);
}
rpn(1000);
module.exports = { rpn };
