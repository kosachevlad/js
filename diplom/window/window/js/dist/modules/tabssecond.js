'use strict';

function tabsSecond() {
	var tabSecond = document.getElementsByClassName('decoration_tab'),
	    contentSecond = document.getElementsByClassName('content_second');

	var _loop = function _loop(i) {
		tabSecond[i].addEventListener('click', function () {
			for (var j = 0; j < tabSecond.length; j++) {
				if (j == i) {
					tabSecond[j].classList.add('after_click');
					contentSecond[j].style.display = 'block';
				} else {
					tabSecond[j].classList.remove('after_click');
					contentSecond[j].style.display = 'none';
				}
			}
		});
	};

	for (var i = 0; i < tabSecond.length; i++) {
		_loop(i);
	};
}

module.exports = tabsSecond;