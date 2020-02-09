const axios = require('axios');
const retry = require('retry');
const { startServer } = require('../server/server');

startServer(3000);

function axiosClient(TIME) {
 setInterval(() => {
  const operation = retry.operation({
   retries: 30,
   factor: 2,
   minTimeout: 100,
   randomize: false,
  });

  operation.attempt(async (currentAttempt) => {
   try {
    const res = await axios.get('http://localhost:3000/metrics');
    console.clear();
    console.log(`status: ${res.status}, res.data`);
   } catch (error) {
    if (operation.retry(error)) {
     console.clear();
     console.error('Error: ', error.message, currentAttempt);
    }
   }
  });
 }, TIME);
}
axiosClient(10000);
module.exports = { axiosClient };
