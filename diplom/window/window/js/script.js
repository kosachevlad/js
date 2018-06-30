window.addEventListener('DOMContentLoaded', () => {
	let headerBtn = document.getElementsByClassName('header_btn')[0],
		popupEngineer = document.getElementsByClassName('popup_engineer')[0],
		close = document.getElementsByClassName('popup_close')[1];

	headerBtn.addEventListener('click', () => {
		popupEngineer.style.display = 'block';
	});
	close.addEventListener('click', function() {
		popupEngineer.style.display = 'none';
	});
	popupEngineer.addEventListener('click', function(){
		if(event.target == this) {
			popupEngineer.style.display = 'none';
		}
	});
});