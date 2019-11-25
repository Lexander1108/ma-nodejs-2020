function timeOutToPromise(time, text) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
			console.log(text);
		}, time);
	});
}

module.exports = timeOutToPromise;
