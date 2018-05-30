let monthBudget = prompt("Ваш бюджет на месяц?"),
	shopName = prompt("Название вашего магазина");

let	mainList = {
		budget: monthBudget,
		shopName: shopName,
		shopGoods: [],
		employers: {},
		open: true
	}

mainList.shopGoods = Array(
		prompt("Какой тип товаров будем продавать?"), 
		prompt("Какой еще тип товаров будем продавать?"), 
		prompt("Какой еще тип товаров будем продавать?")
	);

alert('Бюджет на 1 день = ' + monthBudget / 30);

