'use strict';

function imgOpening() {
	var linkImg = document.querySelectorAll('div.modal_img>a'),
	    modalImgOpen = document.createElement('div'),
	    openImg = document.createElement('img'),
	    sectionWorks = document.getElementsByClassName('works')[0];

	sectionWorks.appendChild(modalImgOpen);

	var _loop = function _loop(i) {
		linkImg[i].addEventListener('click', function (e) {
			e.preventDefault();
			modalImgOpen.style.display = 'block';
			modalImgOpen.appendChild(openImg);
			modalImgOpen.classList.add('modal_open');
			modalImgOpen.classList.add('fade');
			var linkHref = linkImg[i].getAttribute('href');
			openImg.setAttribute('src', linkHref);
			openImg.classList.add('open_img');
		});
	};

	for (var i = 0; i < linkImg.length; i++) {
		_loop(i);
	}
	modalImgOpen.addEventListener('click', function (e) {
		var target = e.target;
		if (target == this) {
			modalImgOpen.style.display = 'none';
		}
	});
}

module.exports = imgOpening;