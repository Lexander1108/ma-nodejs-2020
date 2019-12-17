const path = require('path');
const fsp = require('fs').promises;
const zlib = require('zlib');
const { promisify } = require('util');

const gunzip = promisify(zlib.gunzip);
const gzip = promisify(zlib.gzip);

const inputDirName = 'task-5/input';
const outputDirName = 'task-5/output';
const outputFileName = 'result.json.gz';

const inputDir = path.join(process.cwd(), inputDirName);
const outputFilePath = path.join(process.cwd(), outputDirName, outputFileName);
console.log(outputFilePath);

async function getInputFileList() {
	const files = await fsp.readdir(inputDirName);
	return files.map((file) => path.join(inputDir, file));
	// read directory content - get list of filenames
	// create absolute path to each filename
}

async function getObjectFromFile(filePath) {
	const compressedBuffer = await fsp.readFile(filePath);
	const jsonBuffer = await gunzip(compressedBuffer);
	const json = jsonBuffer.toString();
	const object = JSON.parse(json);
	return object;
	// read file to buffer
	// decompress buffer with gunzip
	// convert buffer to JSON string
	// parse JSON string to object
}

function rebuildUrl(originalUrl) {
	const url = new URL(originalUrl);
	const parsed = path.parse(originalUrl);
	url.protocol = 'https';
	url.pathname = '/devices';
	url.searchParams.set('file', parsed.name);
	url.searchParams.set('type', parsed.ext);
	return url.toString();
	// Change protocol, path, search string of URL
	// use URL class
	// Example:
	// from URL: http://example.com/files/devices/keyboards.xls
	// to URL: https://example.com/devices?file=keyboards&type=.xls
}

async function buildOutputObject(files) {
	const result = {};
	for (const file of files) {
		const object = await getObjectFromFile(file);
		object.url = rebuildUrl(object.url);
		const name = path.basename(file.toLowerCase(), '.json.gz');
		result[name] = object;
	}
	return result;

	// for each file:
	// get content with getObjectFromFile() function
	// update "url" field with rebuildUrl() function
	// get category name from file name
	// assign category to result object (list of devices)
}

async function saveOutput(object) {
	const jsonString = await JSON.stringify(object);
	const buf = await Buffer.from(jsonString);
	const zip = await gzip(buf);
	const final = await fsp.writeFile(outputFilePath, zip);
	console.log(final);
	return final;
	// stringify object to JSON string
	// create buffer from string
	// compress buffer with gzip
	// write compressed buffer to file 'output/result.json.gz' (use constants)
}

async function start() {
	const inputFiles = await getInputFileList();
	const outputObject = await buildOutputObject(inputFiles);
	await saveOutput(outputObject);
}

start().catch((err) => console.error('🐞  🤪  🐛\n', err));
