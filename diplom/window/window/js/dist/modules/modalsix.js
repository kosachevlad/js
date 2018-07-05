'use strict';

function modalSix() {
	var formMain = document.querySelectorAll('.main_form');
	function sendingDataMain() {
		var _loop = function _loop(i) {
			formMain[i].addEventListener('submit', function (event) {
				event.preventDefault();
				formMain[i].appendChild(statusMessage);

				// AJAX
				var request = new XMLHttpRequest();
				request.open("POST", 'server.php');

				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

				var formData = new FormData(formMain[i]);

				request.send(formData);

				request.onreadystatechange = function () {
					if (request.readyState < 4) {
						statusMessage.innerHTML = message.loading;
					} else if (request.readyState === 4) {
						if (request.status == 200 && request.status < 300) {
							statusMessage.innerHTML = message.success;
						} else {
							statusMessage.innerHTML = message.failure;
						}
					}
				};

				inputMain = formMain[i].getElementsByTagName('input');
				for (var j = 0; j < inputMain.length; j++) {
					inputMain[j].value = '';
				}
			});
		};

		for (var i = 0; i < formMain.length; i++) {
			_loop(i);
		};
	};
	sendingDataMain();
	// Запрет на ввод любых символов кроме цифр в поле "Введите телефон"
	var phoneInput = document.getElementsByName('user_phone');

	var _loop2 = function _loop2(i) {
		function check(elem) {
			elem[i].addEventListener('keyup', function () {
				this.value = this.value.replace(/[^\d]/, '');
			});
		};
		check(phoneInput);
	};

	for (var i = 0; i < phoneInput.length; i++) {
		_loop2(i);
	};
}

module.exports = modalSix;