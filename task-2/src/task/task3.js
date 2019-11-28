function timeOutToPromise(time, text) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(text);
		}, time);
	});
}

module.exports = timeOutToPromise(3000, 'some text');
