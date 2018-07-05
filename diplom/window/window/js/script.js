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