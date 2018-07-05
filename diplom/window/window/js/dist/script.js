'use strict';

window.addEventListener('DOMContentLoaded', function () {

	var timer = require('./modules/timer.js');
	var imgOpening = require('./modules/imgopening.js');
	var minutePopup = require('./modules/minutepopup.js');
	var modalCalc = require('./modules/modalcalc.js');
	var modalHead = require('./modules/modalhead.js');
	var modalSix = require('./modules/modalsix.js');
	var tabsFirst = require('./modules/tabsfirst.js');
	var tabsSecond = require('./modules/tabssecond.js');

	timer();
	imgOpening();
	minutePopup();
	modalCalc();
	modalHead();
	modalSix();
	tabsFirst();
	tabsSecond();
});