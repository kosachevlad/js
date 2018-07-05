function minutePopup() {

	let popup = document.querySelector('.popup');
	
	setTimeout(() => {
	    popup.style.display = 'block';
	  }, 60000);
}

module.exports = minutePopup;