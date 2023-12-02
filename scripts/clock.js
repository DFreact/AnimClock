let time = document.querySelector('.time');
function clocks() {
	getDate();
	window.onload = function () {
		window.setInterval(function () {
			getDate();
		}, 1000);
	};

	function getDate() {
		let date = new Date();
		let hours =
			date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
		let minutes =
			date.getMinutes() < 10
				? '0' + date.getMinutes()
				: date.getMinutes();
		let seconds =
			date.getSeconds() < 10
				? '0' + date.getSeconds()
				: date.getSeconds();
		time.innerHTML = `${hours}:${minutes}:${seconds}`;
	}
}

clocks();

console.log('🚀 ~ file: default.js:4 ~ time:', time.innerHTML);
