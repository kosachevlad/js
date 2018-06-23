function calc() {

	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

		totalValue.innerHTML = 0;

		function check(elem) {
			elem.addEventListener('keyup', function(){
				this.value = this.value.replace(/[^\d]/, '').substr(0,2);

			});
			
		};
		check(persons);
			check(restDays);

		persons.addEventListener('change', function() {
			personsSum = +this.value;
			total = (daysSum + personsSum) * 4000;
			totalValue.innerHTML = total;
			if(restDays.value == ''){
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			};
			
		});



		restDays.addEventListener('change', function() {
			daysSum = +this.value;
			total = (daysSum + personsSum) * 4000;
			totalValue.innerHTML = total;
			if(persons.value == ''){
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		place.addEventListener('change', function() {
			if (restDays.value == '' || persons.value == '') {
				totalValue.innerHTML = 0;
			} else {
				let a = total;
				totalValue.innerHTML = a * this.options[this.selectedIndex].value;;
			}
		});

		// Очищаем поле "Общая сумма", при удалении одного из полей

		setInterval(function() {
			if (restDays.value == '' || persons.value == '') {
				totalValue.innerHTML = 0;
			}}, 10);

};

module.exports = calc;