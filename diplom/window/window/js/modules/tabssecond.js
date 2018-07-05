function tabsSecond() {
	let tabSecond = document.getElementsByClassName('decoration_tab'),
		contentSecond = document.getElementsByClassName('content_second');

	for (let i = 0; i < tabSecond.length; i++) {
		tabSecond[i].addEventListener('click', function(){
			for(let j = 0; j < tabSecond.length; j++) {
				if (j == i) {
					tabSecond[j].classList.add('after_click');
					contentSecond[j].style.display = 'block';
				} else {
					tabSecond[j].classList.remove('after_click');
					contentSecond[j].style.display = 'none';
				}
			}
		});
	}
}

module.exports = tabsSecond;