window.addEventListener('DOMContentLoaded', () => {

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
	})

// Timer

	let = deadline = '2018-06-18';
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

	// плавная прокрутка

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

	// Modal

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
	}

	// Класс

	class Options {
		constructor (height, width, bg, fontSize, textAlign) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}
		createNewDiv(text) {
			let div = document.createElement('div');
			div.textContent = text;

			div.style.cssText = `height: ${this.height};
								width: ${this.width};
								background-color: ${this.bg};
								font-size: ${this.fontSize};
								text-align: ${this.textAlign}`
			document.body.appendChild(div);
		}
	}
	let obj = new Options('200px', '200px', 'red', '14px', 'center');
	obj.createNewDiv('Hello World!');
	let objSecond = new Options('400px', '300px', 'green', '20px', 'right');
	objSecond.createNewDiv('Hi Everyone');
});