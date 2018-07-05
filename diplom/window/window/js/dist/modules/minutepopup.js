'use strict';

function minutePopup() {

	var popup = document.querySelector('.popup');

	setTimeout(function () {
		popup.style.display = 'block';
	}, 60000);
}

module.exports = minutePopup;