const fs = require('fs');
const { pipeline, Transform } = require('stream');
const config = require('../config');
const { endResponse } = require('./helpers');

class DotsOutput extends Transform {
	constructor() {
		super();
	}

	_transform(chunk, encoding, next) {
		process.stdout.write('|');
		this.push(chunk);
		setTimeout(() => {
			next();
		}, 1000);
	}
}

function sendJPEG(res) {
	const rs = fs.createReadStream(config.filePath, {
		highWaterMark: config.rate
	});

	rs.on('error', () => {
		endResponse(res, 500);
	});

	const SlowTr = new DotsOutput(config.rate);

	pipeline(rs, SlowTr, res, (err) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(`\nStatus: ${res.statusMessage}`);
	});
}

module.exports = {
	sendJPEG
};
