window.addEventListener('DOMContentLoaded', () => {
	
	let headerBtn = document.getElementsByClassName('header_btn'),
		popupEngineer = document.querySelector('.popup_engineer'),
		close = document.getElementsByClassName('popup_close'),
		phoneLink = document.getElementsByClassName('phone_link'),
		popup = document.querySelector('.popup');

	function modal(btn, elem){
		for(i = 0; i < btn.length; i++) {
			btn[i].addEventListener('click', (e) => {
				e.preventDefault();
				elem.style.display = 'block';
			});
		};
		for(i = 0; i < close.length; i++) {
			close[i].addEventListener('click', () => {
				elem.style.display = 'none';
			});
		};
		elem.addEventListener('click', function(){
			if(event.target == this) {
				elem.style.display = 'none';
			}
		});
	};
	modal(headerBtn, popupEngineer);
	modal(phoneLink, popup);

});