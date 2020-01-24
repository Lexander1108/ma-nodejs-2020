const { limitController, metricsController, defaultController } = require('./controllers.js');

const http = require('http');
const url = require('url');

const PORT = 52420;

const server = http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'application/json' });
 const baseUrl = url.parse(req.url).pathname;

 switch (baseUrl) {
  case '/limit':
   limitController(req, res);
   break;
  case '/metrics':
   metricsController(req, res);
   break;

  default:
   defaultController(req, res);
   break;
 }
});

server.listen(PORT);
console.log(`Server started on ${PORT} port`);
