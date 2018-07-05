'use strict';

function modalCalc() {
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

	var message = {};
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы свяжемся с Вами...";
	message.failure = "Что-то пошло не так, попробуйте еще раз...";
	var statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	var data = {
		type: '1-я форма балкона'
	};

	for (var i = 0; i < glazeBtn.length; i++) {
		glazeBtn[i].addEventListener('click', function () {
			popupCalc.style.display = 'block';
		});
	}
	closeCalc.addEventListener('click', function () {
		popupCalc.style.display = 'none';
		data = {};
	});

	var _loop = function _loop(_i) {
		imgIcons[_i].addEventListener('click', function (e) {
			e.preventDefault();
			for (var j = 0; j < imgIcons.length; j++) {
				if (j == _i) {
					imgIcons[j].style.width = '120px';
					bigImg[j].style.display = 'inline-block';
				} else {
					imgIcons[j].style.width = 'auto';
					bigImg[j].style.display = 'none';
				}
			}
			data.type = _i + 1 + '-я форма балкона';
		});
	};

	for (var _i = 0; _i < imgIcons.length; _i++) {
		_loop(_i);
	}

	var _loop2 = function _loop2(_i2) {
		var check = function check(elem) {
			elem[_i2].addEventListener('keyup', function () {
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

	for (var _i2 = 0; _i2 < inputPopup.length; _i2++) {
		_loop2(_i2);
	}

	setInterval(function () {
		if (inputPopup[0].value === '' || inputPopup[1].value === '') {
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
	    checkbox = document.getElementsByClassName('checkbox');

	setInterval(function () {
		for (var _i3 = 0; _i3 < checkbox.length; _i3++) {
			if (checkbox[_i3].checked === false) {
				popupProfileBtn.setAttribute('disabled', 'true');
			}
		}
		if (checkbox[0].checked) {
			checkbox[1].checked = false;
			popupProfileBtn.removeAttribute('disabled', 'true');
			data.checkbox = 'Холодное';
		}
		if (checkbox[1].checked) {
			checkbox[0].checked = false;
			popupProfileBtn.removeAttribute('disabled', 'true');
			data.checkbox = 'Теплое';
		}
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
}

module.exports = modalCalc;