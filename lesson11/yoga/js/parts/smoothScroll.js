function smoothScroll() {
	function animate(draw, duration) {
		let start = performance.now();

		requestAnimationFrame( function animate( time ) {
			let timePassed = time - start;

			if (timePassed > duration) {
				timepassed = duration;
			}
			draw(timePassed);

			if ( timePassed < duration) {
				requestAnimationFrame( animate );
			}
		})
	}

	let navigation = document.getElementsByTagName('nav')[0];

	navigation.addEventListener('click', (event) => {
		event.preventDefault();

		animate(function(timePassed){
			let target = event.target,
				section = document.getElementById( target.getAttribute('href').slice(1) );

			window.scrollBy( 0, section.getBoundingClientRect().top / 20 - 5);

		}, 1500);
	});
}

module.exports = smoothScroll;