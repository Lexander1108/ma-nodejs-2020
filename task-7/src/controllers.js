const url = require('url');
const { systemStatus } = require('./systemStatus.js');

const getSystemStatus = systemStatus();

let ENV_LIMIT = 3300;

function parseBody(req, callback) {
 const body = [];
 req
  .on('data', (chunk) => body.push(chunk))
  .on('end', () => callback(JSON.parse(Buffer.concat(body).toString())));
}

function defaultController(req, res) {
 res.write(JSON.stringify({ serverStatus: 'working' }));
 res.end();
}

function limitController(req, res) {
 switch (req.method) {
  case 'GET':
   res.write(JSON.stringify({ ENV_LIMIT }));
   res.end();
   break;

  case 'POST':
   parseBody(req, (body) => {
    ENV_LIMIT = body.limit;

    res.write(JSON.stringify({ ENV_LIMIT }));
    res.end();
   });
   break;

  default:
   defaultController(req, res);
 }
}

function metricsController(req, res) {
 const { filter } = url.parse(req.url, true).query;
 const allowedFilters = ['total', 'free', 'allocated'];
 switch (req.method) {
  case 'GET':
   if (filter && !allowedFilters.includes(filter)) {
    res.write(
     JSON.stringify({
      errorCode: 400,
      errorMessage: `You cannot use this filter: '${filter}'. Allowed filters are: ${allowedFilters}`,
     }),
    );
    res.end();
    return;
   }

   switch (filter) {
    case 'total':
     res.write(JSON.stringify({ totalMem: getSystemStatus.totalMemory }));
     res.end();
     break;

    case 'free':
     if (getSystemStatus.freeMemory < ENV_LIMIT) {
      res.write(
       JSON.stringify({
        freeMem: getSystemStatus.freeMemory,
        message: 'Available memory is under the defined limit',
       }),
      );
      res.end();
     } else {
      res.write(JSON.stringify({ freeMem: getSystemStatus.freeMemory }));
      res.end();
     }
     break;

    case 'allocated':
     res.write(JSON.stringify({ allocatedMem: getSystemStatus.allocatedMemory }));
     res.end();
     break;

    default:
     res.write(JSON.stringify(getSystemStatus));
     res.end();
     break;
   }

   break;

  default:
   defaultController(req, res);
 }
}

module.exports = { limitController, metricsController, defaultController };
