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