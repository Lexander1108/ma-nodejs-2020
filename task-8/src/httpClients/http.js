const http = require('http');
const retry = require('retry');

function httpRequestPromisified(options) {
 return new Promise((resolve, reject) => {
  const request = http.request(options, (response) => {
   // console.log(STATUS: ${response.statusCode});
   // console.log(HEADERS: ${JSON.stringify(response.headers)});

   let rawData = '';

   // eslint-disable-next-line no-return-assign
   response.on('data', (chunk) => (rawData += chunk));
   response.on('end', () => {
    response.data = JSON.parse(rawData);
    setTimeout(() => resolve(response), 500);
   });
  });

  request.on('error', (err) => reject(err));

  if (options.body) request.write(options.body);

  request.end();
 });
}

const options = {
 method: 'GET',
 hostname: 'localhost',
 port: 3000,
 path: '/limit/metrics',
 headers: {
  'Content-Type': 'application/json',
 },
};

function httpClient(time) {
 setInterval(() => {
  const operation = retry.operation({
   retries: 20,
   factor: 2,
   minTimeout: 100,
  });

  operation.attempt((currentAttempt) => {
   httpRequestPromisified(options)
    .then((response) => {
     console.log('Current LIMIT:\n', response.data);
    })
    .then((response) => console.log('Current METRICS\n', response.data))
    .catch((error) => {
     console.error('An error with request to NEW:\n', error.message);
    });
  });
 }, time);
}

module.exports = { httpClient };
