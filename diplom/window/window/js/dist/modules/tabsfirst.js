'use strict';

function tabsFirst() {
	var tab = document.getElementsByClassName('glazing_link'),
	    tabContent = document.getElementsByClassName('glazing_tab');

	var _loop = function _loop(i) {
		tab[i].addEventListener('click', function () {
			for (var j = 0; j < tab.length; j++) {
				if (j == i) {
					tab[j].classList.add('active');
					tabContent[j].style.display = 'block';
				} else {
					tab[j].classList.remove('active');
					tabContent[j].style.display = 'none';
				}
			}
		});
	};

	for (var i = 0; i < tab.length; i++) {
		_loop(i);
	};
}

module.exports = tabsFirst;