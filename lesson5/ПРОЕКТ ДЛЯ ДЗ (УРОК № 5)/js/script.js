
let open = document.getElementById('open-btn');
	nameValue = document.getElementsByClassName('name-value')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	employersValue = document.getElementsByClassName('employers-value')[0],
	discountValue = document.getElementsByClassName('discount-value')[0],
	isOpenValue = document.getElementsByClassName('isopen-value')[0],

	goodsItem = document.getElementsByClassName('goods-item'),
	goodsBtn = document.getElementsByTagName('button')[1],
	budgetBtn = document.getElementsByTagName('button')[2],
	employersBtn = document.getElementsByTagName('button')[3],
	chooseItem = document.querySelector('#items'),
	timeValue = document.querySelector('#time'),
	countBudgetValue = document.querySelector('#budget'),
	hireEmployersItem = document.querySelectorAll('.hire-employers-item'),
	discountCheck = document.getElementById('discount-check'),
	discountText = document.querySelector('.discount-text');
	

let monthBudget,
	shopName,
	price;

// Объявляем объект mainList
let mainList = {
	budget: monthBudget,
	shopName: shopName,
	shopGoods: [],
	employers: {},
	open: true,
	discount: true,
	shopItems: [],
	discountSystem: function discountSystem(discount) {
		
	},
}

// Конец
// 

open.addEventListener('click', () => {
	monthBudget = prompt("Ваш бюджет", '');

	while (isNaN(monthBudget) || monthBudget == "" || monthBudget == null) {
		monthBudget = prompt("Ваш бюджет", '');
	}
	budgetValue.textContent = monthBudget;
	nameValue.textContent = prompt("Название вашего магазина").toUpperCase();
	// активируем кнопку "рассчитать"
	budgetBtn.removeAttribute('disabled');
	// активируем кнопку "утвердить" 
	for(let i = 0; i < goodsItem.length; i++) {

		goodsItem[i].addEventListener('change', () => {
				let a = goodsItem[i].value;
				if(a != '' && a != null){
				goodsBtn.removeAttribute('disabled');
				} else {
					goodsBtn.setAttribute('disabled', 'true');
				}
		});
	};
	// активируем кнопку "нанять"
	for(let i = 0; i < hireEmployersItem.length; i++) {

		hireEmployersItem[i].addEventListener('change', () => {
				let a = hireEmployersItem[i].value;
				if(a != '' && a != null){
				employersBtn.removeAttribute('disabled');
				} else {
					employersBtn.setAttribute('disabled', 'true');
				}
		});
	};

});


goodsBtn.addEventListener('click', () => {

	for (let i = 0; i < goodsItem.length; i++) {

		let a = goodsItem[i].value;
		
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50 ) {
				console.log('Верно');
				mainList.shopGoods[i] = a;
				goodsValue.textContent = mainList.shopGoods;
			} else {
				console.log('НеВерно');
				alert('Были введены неверные значения! Попробуйте еще раз!');
				i--
			}
		}
});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;
	if(isNaN(items) && items != ''){
		mainList.shopItems = items.split(",");
		mainList.shopItems.sort();
		itemsValue.textContent = mainList.shopItems;
	}
});

timeValue.addEventListener('change', () => {
	let time = timeValue.value;

	if (time < 0) {
		console.log('Такого не может быть!');
		mainList.open = false;
	} else if(time > 8 && time < 20) {
		console.log('Время работать!');
		mainList.open = true;
		} else if(time < 24) {
			console.log('Уже слишком поздно!');
			mainList.open = false;
		} else {
			console.log('В сутках только 24 часа!');
			mainList.open = false;
		};

	if(mainList.open == true) {
		isOpenValue.style.backgroundColor = 'green';
	} else {
		isOpenValue.style.backgroundColor = 'red';
	}

});

budgetBtn.addEventListener('click', () => {
	countBudgetValue.value = monthBudget / 30;
});

employersBtn.addEventListener('click', () => {
	for (let i = 0; i < hireEmployersItem.length; i++) {

		let a = hireEmployersItem[i].value;
		
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
			console.log('Верно');
			mainList.employers[i] = a;

			employersValue.textContent += mainList.employers[i] + ', ';
		}
	}

});

// активируем дискаунт по желанию пользователя (через чекбокс)
discountCheck.addEventListener('change', () => {
	if(discountCheck.checked) {
		discountValue.style.backgroundColor = 'green';
		price = "80%";
		discountText.textContent = price + ' от цены';
		mainList.discount = true;
		
	} else {
		discountValue.style.backgroundColor = 'red';
		discountText.textContent = '';
		mainList.discount = false;
		price = '100%'
	}
});



console.log(mainList.discount);

