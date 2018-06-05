let monthBudget,
	shopName,
	time,
	price

function start() {
	monthBudget = prompt("Ваш бюджет", '');

	while (isNaN(monthBudget) || monthBudget == "" || monthBudget == null) {
		monthBudget = prompt("Ваш бюджет", '');
	}

	shopName = prompt("Название вашего магазина").toUpperCase();
	time = 21;

}
start();

let	mainList = {
		budget: monthBudget,
		shopName: shopName,
		shopGoods: [],
		employers: {},
		open: true,
		discount: true,
		shopItems: [],
		chooseGoods: function chooseGoods() {
	for (let i = 0; i < 5; i++) {

	let a = prompt("Какой тип товаров будем продавать?", '');
		
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
				console.log('Верно');
				mainList.shopGoods[i] = a;
			} else {
				console.log('НеВерно');
				alert('Были введены неверные значения! Попробуйте еще раз!');
				i--
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого не может быть!');
		} else if(time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
			} else if(time < 24) {
				console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках только 24 часа!');
			}
	},
	dayBudget: function dayBudget() {
		alert('Бюджет на 1 день = ' + monthBudget / 30);
	},
	discountSystem: function discountSystem(discount) {
		if (mainList.discount == true) {
			price = '80%';
		} else {
			price
		}
	},
	hireEmployers: function hireEmployers() {
		for (let i = 0; i < 4; i++) {

			let a = prompt("Как зовут вашего сотрудника", '');
			
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
				console.log('Верно');
				mainList.employers[i] = a;
			} else {
				console.log('НеВерно');
				alert('Были введены неверные значения! Попробуйте еще раз!');
				i--
			}
		}
	},
	chooseShopItems: function chooseShopItems() {

		let items = prompt("Перечислите через запятую ваши товары", "");
		while((typeof(items)) != 'string' || (typeof(items)) == null || items == '') {
			items = prompt("Перечислите через запятую ваши товары", "");
		} 
			mainList.shopItems = items.split(",");
			mainList.shopItems.push(prompt("Подождите еще ", ""));
			mainList.shopItems.sort();
	}


}
mainList.chooseShopItems();
console.log(mainList.shopItems);
document.write('У нас вы можете купить:<br>');
mainList.shopItems.forEach(function(item, i) {
	
   document.write((i+1) + ": " + item + "<br>");
 });

console.log('наш магазин включает в себя ')
for(let key in mainList.shopItems) {
	console.log((Number(key) + 1) + ": " + mainList.shopItems[key] )
}

console.log(price);
console.log(mainList);

