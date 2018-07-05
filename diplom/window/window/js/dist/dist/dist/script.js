'use strict';

window.addEventListener('DOMContentLoaded', function () {

	var headerBtn = document.getElementsByClassName('header_btn'),
	    popupEngineer = document.querySelector('.popup_engineer'),
	    close = document.getElementsByClassName('popup_close'),
	    phoneLink = document.getElementsByClassName('phone_link'),
	    popup = document.querySelector('.popup');

	function modal(btn, elem) {
		for (var i = 0; i < btn.length; i++) {
			btn[i].addEventListener('click', function (e) {
				e.preventDefault();
				elem.style.display = 'block';
			});
		};
		for (var _i = 0; _i < close.length; _i++) {
			close[_i].addEventListener('click', function () {
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
	message.failure = "Что-то пошло не так, попробуйте еще раз...";
	var statusMessage = document.createElement('div');
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
			for (var i = 0; i < input.length; i++) {
				input[i].value = '';
			};
		});
	};
	sendingDataModal(form, input);
	sendingDataModal(formEn, inputEn);

	// Модалка по 6 блокам на странице
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
	// Табы

	var tab = document.getElementsByClassName('glazing_link'),
	    tabContent = document.getElementsByClassName('glazing_tab');

	var _loop3 = function _loop3(i) {
		tab[i].addEventListener('click', function () {
			for (var j = 0; j < tab.length; j++) {
				if (j == i) {
					tab[j].classList.add('active');
					tabContent[j].style.display = 'block';
				} else {
					tab[j].classList.remove('active');
					tabContent[j].style.display = 'none';
				}
			}
		});
	};

	for (var i = 0; i < tab.length; i++) {
		_loop3(i);
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
	    popupCalcProfileClose = document.getElementsByClassName('popup_calc_profile_close')[0],
	    popupProfileBtn = popupCalcProfile.getElementsByClassName('popup_calc_profile_button')[0],
	    popupCalcEnd = document.getElementsByClassName('popup_calc_end')[0],
	    popupCalcEndClose = document.getElementsByClassName('popup_calc_end_close')[0];

	var data = {
		type: '1-я форма балкона'
	};

	for (var i = 0; i < glazeBtn.length; i++) {
		glazeBtn[i].addEventListener('click', function () {
			popupCalc.style.display = 'block';
		});
	};
	closeCalc.addEventListener('click', function () {
		popupCalc.style.display = 'none';
		data = {};
	});

	var _loop4 = function _loop4(_i2) {
		imgIcons[_i2].addEventListener('click', function () {
			event.preventDefault();
			for (var j = 0; j < imgIcons.length; j++) {
				if (j == _i2) {
					imgIcons[j].style.width = '120px';
					bigImg[j].style.display = 'inline-block';
				} else {
					imgIcons[j].style.width = 'auto';
					bigImg[j].style.display = 'none';
				}
			}
			data.type = _i2 + 1 + '-я форма балкона';
		});
	};

	for (var _i2 = 0; _i2 < imgIcons.length; _i2++) {
		_loop4(_i2);
	};

	var _loop5 = function _loop5(_i3) {
		function check(elem) {
			elem[_i3].addEventListener('keyup', function () {
				this.value = this.value.replace(/[^\d]/, '');
			});
		};
		check(inputPopup);
		inputPopup[0].addEventListener('change', function () {
			data.width = inputPopup[0].value + ' мм';
		});
		inputPopup[1].addEventListener('change', function () {
			data.height = inputPopup[1].value + ' мм';
		});
	};

	for (var _i3 = 0; _i3 < inputPopup.length; _i3++) {
		_loop5(_i3);
	};

	setInterval(function () {
		if (inputPopup[0].value == '' || inputPopup[1].value == '') {
			popupBtn.setAttribute('disabled', 'true');
		} else {
			popupBtn.removeAttribute('disabled', 'true');
		}
	}, 0);

	popupBtn.addEventListener('click', function () {
		popupCalc.style.display = 'none';
		popupCalcProfile.style.display = 'block';
	});
	var select = document.getElementById('view_type'),
	    checkbox = document.getElementsByClassName('checkbox'),
	    checkboxCustom = document.getElementsByClassName('checkbox-custom');

	setInterval(function () {
		for (var _i4 = 0; _i4 < checkbox.length; _i4++) {
			if (checkbox[_i4].checked == false) {
				popupProfileBtn.setAttribute('disabled', 'true');
			};
		};
		if (checkbox[0].checked) {
			checkbox[1].checked = false;
			popupProfileBtn.removeAttribute('disabled', 'true');
			data.checkbox = 'Холодное';
		};
		if (checkbox[1].checked) {
			checkbox[0].checked = false;
			popupProfileBtn.removeAttribute('disabled', 'true');
			data.checkbox = 'Теплое';
		};
	}, 0);

	popupProfileBtn.addEventListener('click', function () {
		data.category = select.options[select.selectedIndex].value;
		popupCalcProfile.style.display = 'none';
		popupCalcEnd.style.display = 'block';
	});
	popupCalcProfileClose.addEventListener('click', function () {
		popupCalcProfile.style.display = 'none';
		data = {};
	});
	popupCalcEndClose.addEventListener('click', function () {
		popupCalcEnd.style.display = 'none';
		data = {};
	});

	var popupEndForm = popupCalcEnd.getElementsByClassName('form')[0],
	    popupEndBtn = popupEndForm.getElementsByTagName('button')[0],
	    inputName = document.getElementsByName('end_user_name')[0],
	    inputPhone = document.getElementsByName('end_user_phone')[0];

	inputPhone.addEventListener('keyup', function () {
		this.value = this.value.replace(/[^\d]/, '');
	});

	popupEndBtn.addEventListener('click', function (e) {
		e.preventDefault();
		popupEndForm.appendChild(statusMessage);
		data.userName = inputName.value;
		data.userPhone = inputPhone.value;

		//ajax
		var request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

		var dataServer = JSON.stringify(data);
		request.send(dataServer);

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
		inputName.value = '';
		inputPhone.value = '';
	});

	// Табы
	var tabSecond = document.getElementById('decorationTab'),
	    contentSecond = document.getElementsByClassName('content_second');

	console.log(tabSecond[0]);

	var _loop6 = function _loop6(_i5) {
		tabSecond[_i5].addEventListener('click', function () {
			for (var j = 0; j < tabSecond.length; j++) {
				if (j == _i5) {
					tabSecond[j].classList.add('after_click');
					contentSecond[j].style.display = 'block';
				} else {
					tabSecond[j].classList.remove('after_click');
					contentSecond[j].style.display = 'none';
				}
			}
		});
	};

	for (var _i5 = 0; _i5 < tabSecond.length; _i5++) {
		_loop6(_i5);
	};
});