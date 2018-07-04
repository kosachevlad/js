'use strict';

window.addEventListener('DOMContentLoaded', function () {

	var headerBtn = document.getElementsByClassName('header_btn'),
	    popupEngineer = document.querySelector('.popup_engineer'),
	    close = document.getElementsByClassName('popup_close'),
	    phoneLink = document.getElementsByClassName('phone_link'),
	    popup = document.querySelector('.popup');

	function modal(btn, elem) {
		for (i = 0; i < btn.length; i++) {
			btn[i].addEventListener('click', function (e) {
				e.preventDefault();
				elem.style.display = 'block';
			});
		};
		for (i = 0; i < close.length; i++) {
			close[i].addEventListener('click', function () {
				elem.style.display = 'none';
			});
		};
		elem.addEventListener('click', function (event) {
			if (event.target == this) {
				elem.style.display = 'none';
			}
		});
	};
	modal(headerBtn, popupEngineer);
	modal(phoneLink, popup);

	var message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы свяжемся с Вами...";
	message.failure = "Что-то пошло не так, попробуйте еще раз...", statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	var formEn = popupEngineer.getElementsByClassName('form')[0],
	    form = popup.getElementsByClassName('form')[0],
	    inputEn = formEn.getElementsByTagName('input'),
	    input = form.getElementsByTagName('input');

	function sendingDataModal(form, input) {

		form.addEventListener('submit', function (event) {
			event.preventDefault();
			form.appendChild(statusMessage);

			// AJAX
			var request = new XMLHttpRequest();
			request.open("POST", 'server.php');

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			var formData = new FormData(form);

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
			for (var _i = 0; _i < input.length; _i++) {
				input[_i].value = '';
			};
		});
	};
	sendingDataModal(form, input);
	sendingDataModal(formEn, inputEn);

	// Модалка по 6 блокам на странице
	var formMain = document.querySelectorAll('.main_form');
	function sendingDataMain() {
		var _loop = function _loop(_i2) {
			formMain[_i2].addEventListener('submit', function (event) {
				event.preventDefault();
				formMain[_i2].appendChild(statusMessage);

				// AJAX
				var request = new XMLHttpRequest();
				request.open("POST", 'server.php');

				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

				var formData = new FormData(formMain[_i2]);

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

				inputMain = formMain[_i2].getElementsByTagName('input');
				for (var j = 0; j < inputMain.length; j++) {
					inputMain[j].value = '';
				}
			});
		};

		for (var _i2 = 0; _i2 < formMain.length; _i2++) {
			_loop(_i2);
		};
	};
	sendingDataMain();
	// Запрет на ввод любых символов кроме цифр в поле "Введите телефон"
	var phoneInput = document.getElementsByName('user_phone');
	for (i = 0; i < phoneInput.length; i++) {
		var check = function check(elem) {
			elem[i].addEventListener('keyup', function () {
				this.value = this.value.replace(/[^\d]/, '');
			});
		};

		;
		check(phoneInput);
	};
	// Табы

	var tab = document.getElementsByClassName('glazing_link'),
	    tabContent = document.getElementsByClassName('glazing_tab');

	var _loop2 = function _loop2(_i3) {
		tab[_i3].addEventListener('click', function () {
			for (var j = 0; j < tab.length; j++) {
				if (j == _i3) {
					tab[j].classList.add('active');
					tabContent[j].style.display = 'block';
				} else {
					tab[j].classList.remove('active');
					tabContent[j].style.display = 'none';
				}
			}
		});
	};

	for (var _i3 = 0; _i3 < tab.length; _i3++) {
		_loop2(_i3);
	};

	// модальное окно с классом popup_calc

	var glazeBtn = document.getElementsByClassName('glazing_price_btn'),
	    popupCalc = document.getElementsByClassName('popup_calc')[0],
	    closeCalc = document.getElementsByClassName('popup_calc_close')[0],
	    balconIcons = document.getElementsByClassName('balcon_icons')[0],
	    imgIcons = balconIcons.getElementsByTagName('img'),
	    bigImgBlock = document.getElementsByClassName('big_img')[0],
	    bigImg = bigImgBlock.getElementsByTagName('img'),
	    inputPopup = popupCalc.getElementsByTagName('input'),
	    popupBtn = popupCalc.getElementsByClassName('popup_calc_button')[0],
	    popupCalcProfile = document.getElementsByClassName('popup_calc_profile')[0],
	    popupProfileBtn = popupCalcProfile.getElementsByClassName('popup_calc_profile_button')[0],
	    popupCalcEnd = document.getElementsByClassName('popup_calc_end')[0];

	console.log(popupBtn);

	for (var _i4 = 0; _i4 < glazeBtn.length; _i4++) {
		glazeBtn[_i4].addEventListener('click', function () {
			popupCalc.style.display = 'block';
		});
	};
	closeCalc.addEventListener('click', function () {
		popupCalc.style.display = 'none';
	});

	var _loop3 = function _loop3(_i5) {
		imgIcons[_i5].addEventListener('click', function () {
			event.preventDefault();
			for (var j = 0; j < imgIcons.length; j++) {
				if (j == _i5) {
					imgIcons[j].style.width = '120px';
					bigImg[j].style.display = 'inline-block';
				} else {
					imgIcons[j].style.width = 'auto';
					bigImg[j].style.display = 'none';
				}
			}
		});
	};

	for (var _i5 = 0; _i5 < imgIcons.length; _i5++) {
		_loop3(_i5);
	};

	for (i = 0; i < inputPopup.length; i++) {
		var _check = function _check(elem) {
			elem[i].addEventListener('keyup', function () {
				this.value = this.value.replace(/[^\d]/, '');
			});
		};

		;
		_check(inputPopup);
	};

	popupBtn.addEventListener('click', function () {
		popupCalc.style.display = 'none';
		popupCalcProfile.style.display = 'block';
	});

	popupProfileBtn.addEventListener('click', function () {
		popupCalcProfile.style.display = 'none';
		popupCalcEnd.style.display = 'block';
	});
});