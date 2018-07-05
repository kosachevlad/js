function tabsFirst() {
	let tab = document.getElementsByClassName('glazing_link'),
		tabContent = document.getElementsByClassName('glazing_tab');

	for (let i = 0; i < tab.length; i++) {
		tab[i].addEventListener('click', function(){
			for(let j = 0; j < tab.length; j++) {
				if (j == i) {
					tab[j].classList.add('active');
					tabContent[j].style.display = 'block';
				} else {
					tab[j].classList.remove('active');
					tabContent[j].style.display = 'none';
				}
			}
		});
	}
}

module.exports = tabsFirst;