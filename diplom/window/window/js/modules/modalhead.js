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