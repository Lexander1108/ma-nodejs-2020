const http = require('http');
const url = require('url');
const { limitController, metricsController, defaultController } = require('./controllers.js');

function startServer(PORT) {
	const server = http.createServer((req, res) => {
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
}
module.exports = {
	startServer
};
