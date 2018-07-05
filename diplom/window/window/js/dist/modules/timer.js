'use strict';

function timer() {
	var eTimer = document.getElementsByClassName('eTimer')[0],
	    deadLine = '2018-07-04';

	function getTime(deadend) {
		var t = Date.parse(deadend) - Date.parse(new Date()),
		    seconds = Math.floor(t / 1000 % 60),
		    minutes = Math.floor(t / (1000 * 60) % 60),
		    hours = Math.floor(t / (1000 * 60 * 60) % 24),
		    days = Math.floor(t / (1000 * 60 * 60 * 24));

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	function setClock(id, endtime) {
		var // timer = document.getElementById(id),
		days = document.querySelector('#days'),
		    hours = document.querySelector('#hours'),
		    minutes = document.querySelector('#minutes'),
		    seconds = document.querySelector('#seconds');

		function updateClock() {
			var t = getTime(endtime);
			var arrTime = [t.days, t.hours, t.minutes, t.seconds];
			for (var i = 0; i < arrTime.length; i++) {
				if (arrTime[i] < 10) {
					arrTime[i] = '0' + arrTime[i];
				}
			}
			days.innerHTML = arrTime[0];
			hours.innerHTML = arrTime[1];
			minutes.innerHTML = arrTime[2];
			seconds.innerHTML = arrTime[3];
			if (t.total <= 0) {
				clearInterval(timeInterval);
				days.innerHTML = '00';
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
			}
		}
		var timeInterval = setInterval(updateClock, 1000);
	}
	setClock(eTimer, deadLine);
}

module.exports = timer;