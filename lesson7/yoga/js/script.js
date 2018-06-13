window.addEventListener('DOMContentLoaded', function() {

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

	info.addEventListener('click', function(event){
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

	let = deadline = '2018-06-17';
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
					t.hours = '0' + t.hours;
				};
				if(t.minutes.length == 1) {
					t.minutes = '0' + t.minutes;
				};
				if(t.seconds.length == 1) {
					t.seconds = '0' + t.seconds;
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

	let aboutBtn = document.getElementsByTagName('a')[0],
		photoBtn = document.getElementsByTagName('a')[1],
		priceBtn = document.getElementsByTagName('a')[2],
		contactsBtn = document.getElementsByTagName('a')[3];
	
	aboutBtn.addEventListener('click', function(event){
		event.preventDefault();
		pos = 0,
	   	id = setInterval(frame, 10);

		 	function frame() {
	  			if (pos == 600) {
	  				clearInterval(id);
	  			} else {
	  				pos = pos+10;
	  				window.scrollTo(0, pos);
	  			}
	  		}
	});

	photoBtn.addEventListener('click', function(event){
		event.preventDefault();
		pos = 0,
	   	id = setInterval(frame, 10);

		 	function frame() {
	  			if (pos == 1850) {
	  				clearInterval(id);
	  			} else {
	  				pos = pos+25;
	  				window.scrollTo(0, pos);
	  			}
	  		}
	});

	priceBtn.addEventListener('click', function(event){
		event.preventDefault();
		pos = 0,
	   	id = setInterval(frame, 10);

		 	function frame() {
	  			if (pos == 4600) {
	  				clearInterval(id);
	  			} else {
	  				pos = pos+50;
	  				window.scrollTo(0, pos);
	  			}
	  		}
	});

	contactsBtn.addEventListener('click', function(event){
		event.preventDefault();
		pos = 0,
	   	id = setInterval(frame, 10);

		 	function frame() {
	  			if (pos == 5200) {
	  				clearInterval(id);
	  			} else {
	  				pos = pos+50;
	  				window.scrollTo(0, pos);
	  			}
	  		}
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
	close.addEventListener('click', function() {
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
});