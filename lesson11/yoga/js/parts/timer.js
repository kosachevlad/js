function timer() {
	let = deadline = '2018-06-28';
	let timeInterval = null;

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor( (t/1000) % 60 ),
		minutes = Math.floor( (t/1000/60) % 60 ),
		hours = Math.floor( (t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	// Таймер, при окончании дедлайна высвечивает 00:00:00

	function setClock(id, endtime) {

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			

			function updateClock() {

				let t = getTimeRemaining(endtime);

				t.hours = String(t.hours);
				t.minutes = String(t.minutes);
				t.seconds = String(t.seconds);

				if(t.hours.length == 1) {
					t.hours = `0${t.hours}`;
				};
				if(t.minutes.length == 1) {
					t.minutes = `0${t.minutes}`;
				};
				if(t.seconds.length == 1) {
					t.seconds = `0${t.seconds}`;
				}

				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;

				

				if (t.total <= 0) {
					clearInterval(timeInterval);
					hours.innerHTML = '0';
					minutes.innerHTML = '0';
					seconds.innerHTML = '0';
				}
			};

			updateClock();
			timeInterval = setInterval(updateClock, 1000);

	};

	setClock('timer', deadline);
}

module.exports = timer;