let btn = document.querySelector(".btn"),
	elem = document.querySelector(".ball"),
	step = 0;


function animate() {
	step += 5; 
	elem.style.left = step + 'px';
	requestAnimationFrame(animate);
}
cancelAnimationFrame(animate);

btn.addEventListener('click', () => {
	requestAnimationFrame(animate)
});
