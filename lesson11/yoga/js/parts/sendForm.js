function sendForm() {

	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы свяжемся с Вами...";
	message.failure = "Что-то пошло не так, попробуйте еще раз...";
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
