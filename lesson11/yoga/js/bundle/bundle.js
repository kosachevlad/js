(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', () => {

	// Slider

	

	// Calc

	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

		totalValue.innerHTML = 0;

		function check(elem) {
			elem.addEventListener('keyup', function(){
				this.value = this.value.replace(/[^\d]/, '').substr(0,2);

			});
			
		};
		check(persons);
			check(restDays);

		persons.addEventListener('change', function() {
			personsSum = +this.value;
			total = (daysSum + personsSum) * 4000;
			totalValue.innerHTML = total;
			if(restDays.value == ''){
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			};
			
		});



		restDays.addEventListener('change', function() {
			daysSum = +this.value;
			total = (daysSum + personsSum) * 4000;
			totalValue.innerHTML = total;
			if(persons.value == ''){
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		place.addEventListener('change', function() {
			if (restDays.value == '' || persons.value == '') {
				totalValue.innerHTML = 0;
			} else {
				let a = total;
				totalValue.innerHTML = a * this.options[this.selectedIndex].value;;
			}
		});

		// Очищаем поле "Общая сумма", при удалении одного из полей

		setInterval(function() {
			if (restDays.value == '' || persons.value == '') {
				totalValue.innerHTML = 0;
			}}, 10);

		//

		let tab = require('../parts/tab.js');
		let timer = require('../parts/timer.js');
		let smoothScroll = require('../parts/smoothScroll.js');
		let modal = require('../parts/modal.js');
		let sendForm = require('../parts/sendForm.js');
		let slider = require('../parts/slider.js');

		tab();
		timer();
		smoothScroll();
		modal();
		sendForm();
		slider();
		
});
},{"../parts/modal.js":2,"../parts/sendForm.js":3,"../parts/slider.js":4,"../parts/smoothScroll.js":5,"../parts/tab.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
function modal() {
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		description = document.querySelectorAll('.description-btn');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	close.addEventListener('click', () => {
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
	for(let i = 0; i < 4; i++){
		description[i].addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	};
};

module.exports = modal;
},{}],3:[function(require,module,exports){
function sendForm() {

	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы свяжемся с Вами...";
	message.failure = "Что-то пошло не так...";
	let statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

	function sendingDataModal(){
		let form = document.getElementsByClassName('main-form')[0],
			input = form.getElementsByTagName('input'),
			statusMessage = document.createElement('div');
			statusMessage.classList.add('status');

		form.addEventListener('submit', function(event) {
			event.preventDefault();
			form.appendChild(statusMessage);

			// AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php')

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						// Добавляем контент на страницу

					}
					else {
						statusMessage.innerHTML = message.failure;
					}
				}
			}
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
				// очищаем поля ввода
			}
		});
	}
	sendingDataModal();

	function sendingDataForm(){
		let contactForm = document.getElementById('form'),
				input = form.getElementsByTagName('input');

		contactForm.addEventListener('submit', function(event) {
			event.preventDefault();
			contactForm.appendChild(statusMessage);

			// AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php')

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			let formData = new FormData(contactForm);

			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						// Добавляем контент на страницу

					}
					else {
						statusMessage.innerHTML = message.failure;
					}
				}
			}
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
				// очищаем поля ввода
			}
		});
	};
	sendingDataForm();

};

module.exports = sendForm;

},{}],4:[function(require,module,exports){
function slider() {

	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

	showSlides(slideIndex);

	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		};
		if (n < 1) {
			slideIndex = slides.length;
		};
		
		for( let i = 0; i < slides.length; i++ ) {
			slides[i].style.display = 'none';
		};

		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		};

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');

	}

	function plusSlides(n) {
		showSlides(slideIndex += n)
	}

	function currentSlide(n) {
		showSlides(slideIndex = n)
	};

	prev.addEventListener('click', function(){
		plusSlides(-1);
	});

	next.addEventListener('click', function(){
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', function(event) {
		for(let i = 0; i < dots.length + 1; i++) {
			if(event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});

};

module.exports = slider;
},{}],5:[function(require,module,exports){
function smoothScroll() {
	function animate(draw, duration) {
		let start = performance.now();

		requestAnimationFrame( function animate( time ) {
			let timePassed = time - start;

			if (timePassed > duration) {
				timepassed = duration;
			}
			draw(timePassed);

			if ( timePassed < duration) {
				requestAnimationFrame( animate );
			}
		})
	}

	let navigation = document.getElementsByTagName('nav')[0];

	navigation.addEventListener('click', (event) => {
		event.preventDefault();

		animate(function(timePassed){
			let target = event.target,
				section = document.getElementById( target.getAttribute('href').slice(1) );

			window.scrollBy( 0, section.getBoundingClientRect().top / 20 - 5);

		}, 1500);
	});
}

module.exports = smoothScroll;
},{}],6:[function(require,module,exports){
function tab() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if( tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show')
		}
	}

	info.addEventListener('click', (event) => {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}

			}
		}
	});
}

module.exports = tab;
},{}],7:[function(require,module,exports){
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
},{}]},{},[1]);
