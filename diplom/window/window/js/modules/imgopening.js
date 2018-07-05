  function imgOpening() {
	let linkImg = document.querySelectorAll('div.modal_img>a'),
		modalImgOpen = document.createElement('div'),
		openImg = document.createElement('img'),
		sectionWorks = document.getElementsByClassName('works')[0];

		sectionWorks.appendChild(modalImgOpen);
	for(let i = 0; i < linkImg.length; i++) {
		linkImg[i].addEventListener('click', function(e) {
			e.preventDefault();
			modalImgOpen.style.display = 'block';
			modalImgOpen.appendChild(openImg);
			modalImgOpen.classList.add('modal_open');
			modalImgOpen.classList.add('fade');
			let linkHref = linkImg[i].getAttribute('href');
			openImg.setAttribute('src', linkHref);
			openImg.classList.add('open_img');
		});
	}
	modalImgOpen.addEventListener('click', function(e) {
		let target = e.target;
		if (target == this) {
			modalImgOpen.style.display = 'none';
		}
	});
}

module.exports = imgOpening;