(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  function imgOpening() {
	let linkImg = document.querySelectorAll('div.modal_img>a'),
		modalImgOpen = document.createElement('div'),
		openImg = document.createElement('img'),
		sectionWorks = document.getElementsByClassName('works')[0];

		sectionWorks.appendChild(modalImgOpen);
	for(let i = 0; i < linkImg.length; i++) {
		linkImg[i].addEventListener('click', function(e) {
			e.preventDefault();
			modalImgOpen.style.display = 'block';
			modalImgOpen.appendChild(openImg);
			modalImgOpen.classList.add('modal_open');
			modalImgOpen.classList.add('fade');
			let linkHref = linkImg[i].getAttribute('href');
			openImg.setAttribute('src', linkHref);
			openImg.classList.add('open_img');
		});
	}
	modalImgOpen.addEventListener('click', function(e) {
		let target = e.target;
		if (target == this) {
			modalImgOpen.style.display = 'none';
		}
	});
}

module.exports = imgOpening;
},{}],2:[function(require,module,exports){
function minutePopup() {

	let popup = document.querySelector('.popup');
	
	setTimeout(() => {
	    popup.style.display = 'block';
	  }, 60000);
}

module.exports = minutePopup;
},{}],3:[function(require,module,exports){

function modalCalc() {
	let glazeBtn = document.getElementsByClassName('glazing_price_btn'),
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
  
  let message = {};
		message.loading = "Загрузка...";
		message.success = "Спасибо! Скоро мы свяжемся с Вами...";
		message.failure = "Что-то пошло не так, попробуйте еще раз...";
	let statusMessage = document.createElement('div');
		statusMessage.classList.add('status');


	let data = {
		type: '1-я форма балкона',
	};

	for(let i = 0; i < glazeBtn.length; i ++) {
		glazeBtn[i].addEventListener('click', function() {
			popupCalc.style.display = 'block';
		});
	}
	closeCalc.addEventListener('click', () => {
		popupCalc.style.display = 'none';
		data = {};
	});

	for(let i = 0; i < imgIcons.length; i++) {
		imgIcons[i].addEventListener('click', function(){
			event.preventDefault();
			for(let j = 0; j < imgIcons.length; j++) {
				if (j == i) {
					imgIcons[j].style.width = '120px';
					bigImg[j].style.display = 'inline-block';
				} else {
					imgIcons[j].style.width = 'auto';
					bigImg[j].style.display = 'none';
				}
			}
			data.type = i+1+'-я форма балкона';
		});
	}

	for(let i = 0; i < inputPopup.length; i++) {
		let check = function(elem) {
			elem[i].addEventListener('keyup', function(){
				this.value = this.value.replace(/[^\d]/, '');

			});
		};
		check(inputPopup);
		inputPopup[0].addEventListener('change', function() {
			data.width = inputPopup[0].value + ' мм';
		});
		inputPopup[1].addEventListener('change', function() {
			data.height = inputPopup[1].value + ' мм';
		});		
	}

	setInterval(() => {
    	if (inputPopup[0].value === '' || inputPopup[1].value === '') {
      		popupBtn.setAttribute('disabled', 'true');
     	} else {
      		popupBtn.removeAttribute('disabled', 'true');
     	}
 	}, 0);

	popupBtn.addEventListener('click', function() {
		popupCalc.style.display = 'none';
		popupCalcProfile.style.display = 'block';
	});
	let select = document.getElementById('view_type'),
		checkbox = document.getElementsByClassName('checkbox');

	setInterval(() => {
	     for (let i = 0; i < checkbox.length; i++) {
	       if (checkbox[i].checked === false) {
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
	
	popupProfileBtn.addEventListener('click', function() {
		data.category = select.options[select.selectedIndex].value;
		popupCalcProfile.style.display = 'none';
		popupCalcEnd.style.display = 'block';
	});
	popupCalcProfileClose.addEventListener('click', function() {
		popupCalcProfile.style.display = 'none';
		data = {};
	});
	popupCalcEndClose.addEventListener('click', function() {
		popupCalcEnd.style.display = 'none';
		data = {};
	});

	let popupEndForm = popupCalcEnd.getElementsByClassName('form')[0],
		popupEndBtn = popupEndForm.getElementsByTagName('button')[0],
		inputName = document.getElementsByName('end_user_name')[0],
		inputPhone = document.getElementsByName('end_user_phone')[0];

	inputPhone.addEventListener('keyup', function(){
		this.value = this.value.replace(/[^\d]/, '');
		});

	popupEndBtn.addEventListener('click', function(e) {
		e.preventDefault();
		popupEndForm.appendChild(statusMessage);
	    data.userName = inputName.value;
	    data.userPhone = inputPhone.value;
	    
	    //ajax
	    let request = new XMLHttpRequest();
	    request.open('POST', 'server.php');
	    request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

	    let dataServer = JSON.stringify(data);
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
  
},{}],4:[function(require,module,exports){
function modalHead() {
	let headerBtn = document.getElementsByClassName('header_btn'),
		popupEngineer = document.querySelector('.popup_engineer'),
		close = document.getElementsByClassName('popup_close'),
		phoneLink = document.getElementsByClassName('phone_link'),
		popup = document.querySelector('.popup');

	function modal(btn, elem){
		for(let i = 0; i < btn.length; i++) {
			btn[i].addEventListener('click', (e) => {
				e.preventDefault();
				elem.style.display = 'block';
			});
		}
		for(let i = 0; i < close.length; i++) {
			close[i].addEventListener('click', () => {
				elem.style.display = 'none';
			});
		}
		elem.addEventListener('click', function(event){
			if(event.target == this) {
				elem.style.display = 'none';
			}
		});
	}
	modal(headerBtn, popupEngineer);
	modal(phoneLink, popup);

        let message = {};
		message.loading = "Загрузка...";
		message.success = "Спасибо! Скоро мы свяжемся с Вами...";
		message.failure = "Что-то пошло не так, попробуйте еще раз...";
	let statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

	let formEn = popupEngineer.getElementsByClassName('form')[0],
		form = popup.getElementsByClassName('form')[0],
		inputEn = formEn.getElementsByTagName('input'),
		input = form.getElementsByTagName('input');
		
	function sendingDataModal(form, input){
		
		form.addEventListener('submit', function(event) {
			event.preventDefault();
			form.appendChild(statusMessage);

			// AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php');

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
					}
					else {
						statusMessage.innerHTML = message.failure;
					}
				}
			};
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		});
	}
	sendingDataModal(form, input);
	sendingDataModal(formEn, inputEn);
}

module.exports = modalHead;
},{}],5:[function(require,module,exports){
function modalSix() {
	let formMain = document.querySelectorAll('.main_form');
  let message = new Object();
		message.loading = "Загрузка...";
		message.success = "Спасибо! Скоро мы свяжемся с Вами...";
		message.failure = "Что-то пошло не так, попробуйте еще раз...";
	let statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

  
	function sendingDataMain() {
		for(let i = 0; i < formMain.length; i ++){
			formMain[i].addEventListener('submit', function(event) {
				event.preventDefault();
				formMain[i].appendChild(statusMessage);

				// AJAX
				let request = new XMLHttpRequest();
				request.open("POST", 'server.php');

				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

				let formData = new FormData(formMain[i]);

				request.send(formData);

				request.onreadystatechange = function() {
					if (request.readyState < 4) {
						statusMessage.innerHTML = message.loading;
					} else if (request.readyState === 4) {
						if (request.status == 200 && request.status < 300) {
							statusMessage.innerHTML = message.success;
						}
						else {
							statusMessage.innerHTML = message.failure;
						}
					}
				};

				let inputMain = formMain[i].getElementsByTagName('input');
				for (let j = 0; j < inputMain.length; j++) {
					inputMain[j].value = '';
				}
			});
		}
	}
	sendingDataMain();
	// Запрет на ввод любых символов кроме цифр в поле "Введите телефон"
	let phoneInput = document.getElementsByName('user_phone'); 
		for(let i = 0; i < phoneInput.length; i++) {
			let check = function(elem) {
			elem[i].addEventListener('keyup', function(){
				this.value = this.value.replace(/[^\d]/, '');
			});
		};
		check(phoneInput);
	}
}

module.exports = modalSix;
},{}],6:[function(require,module,exports){
function tabsFirst() {
	let tab = document.getElementsByClassName('glazing_link'),
		tabContent = document.getElementsByClassName('glazing_tab');

	for (let i = 0; i < tab.length; i++) {
		tab[i].addEventListener('click', function(){
			for(let j = 0; j < tab.length; j++) {
				if (j == i) {
					tab[j].classList.add('active');
					tabContent[j].style.display = 'block';
				} else {
					tab[j].classList.remove('active');
					tabContent[j].style.display = 'none';
				}
			}
		});
	}
}

module.exports = tabsFirst;
},{}],7:[function(require,module,exports){
function tabsSecond() {
	let tabSecond = document.getElementsByClassName('decoration_tab'),
		contentSecond = document.getElementsByClassName('content_second');

	for (let i = 0; i < tabSecond.length; i++) {
		tabSecond[i].addEventListener('click', function(){
			for(let j = 0; j < tabSecond.length; j++) {
				if (j == i) {
					tabSecond[j].classList.add('after_click');
					contentSecond[j].style.display = 'block';
				} else {
					tabSecond[j].classList.remove('after_click');
					contentSecond[j].style.display = 'none';
				}
			}
		});
	}
}

module.exports = tabsSecond;
},{}],8:[function(require,module,exports){
function timer() {
	let eTimer = document.getElementsByClassName('eTimer')[0],
		deadLine = '2018-07-04';

	function getTime(deadend) {
			let t = Date.parse(deadend) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / (1000 * 60) % 60)),
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
			let // timer = document.getElementById(id),
			days = document.querySelector('#days'),
			hours = document.querySelector('#hours'),
			minutes = document.querySelector('#minutes'),
			seconds = document.querySelector('#seconds');

			function updateClock() {
				let t = getTime(endtime);
				let arrTime = [t.days, t.hours, t.minutes, t.seconds];
				for (let i = 0; i < arrTime.length; i++) {
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
			let timeInterval = setInterval(updateClock, 1000);
		}
	setClock(eTimer, deadLine);
}

module.exports = timer;
},{}],9:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', () => {

	let timer = require('./modules/timer.js');
	let imgOpening = require('./modules/imgopening.js');
	let minutePopup = require('./modules/minutepopup.js');
	let modalCalc = require('./modules/modalcalc.js');
	let modalHead = require('./modules/modalhead.js');
	let modalSix = require('./modules/modalsix.js');
	let tabsFirst = require('./modules/tabsfirst.js');
	let tabsSecond = require('./modules/tabssecond.js');

	timer();
	imgOpening();
	minutePopup();
	modalCalc();
	modalHead();
	modalSix();
	tabsFirst();
	tabsSecond();
	
});
},{"./modules/imgopening.js":1,"./modules/minutepopup.js":2,"./modules/modalcalc.js":3,"./modules/modalhead.js":4,"./modules/modalsix.js":5,"./modules/tabsfirst.js":6,"./modules/tabssecond.js":7,"./modules/timer.js":8}]},{},[9]);
