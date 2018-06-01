let monthBudget = prompt("Ваш бюджет на месяц?"),
	shopName = prompt("Название вашего магазина");
let time = 19;

let	mainList = {
		budget: monthBudget,
		shopName: shopName,
		shopGoods: [],
		employers: {},
		open: true
	}

for (let i = 0; i < 5; i++) {

	let a = prompt("Какой тип товаров будем продавать?");
	
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('Верно');
		mainList.shopGoods[i] = a;
	} else {
		console.log('НеВерно');
		alert('Были введены неверные значения! Попробуйте еще раз!');
		i--
	}
}

let i = 0; 
// Цикл while
// while (i < 5) {
	
// 	let a = prompt("Какой тип товаров будем продавать?");
	
// 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
// 		console.log('Верно');
// 		mainList.shopGoods[i] = a;
// 	} else {
// 		console.log('НеВерно');
// 		alert('Были введены неверные значения! Попробуйте еще раз!');
// 		i--
// 	}
// 	i++
// }

// Цикл do
// do {

// 	let a = prompt("Какой тип товаров будем продавать?");
	
// 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
// 		console.log('Верно');
// 		mainList.shopGoods[i] = a;
// 	} else {
// 		console.log('НеВерно');
// 		alert('Были введены неверные значения! Попробуйте еще раз!');
// 		i--
// 	}
// 	i++
// } 
// while (i < 5);


if (time < 0) {
	console.log('impossible');
} else if(time > 8 && time < 20) {
	console.log('Time to work')
	} else if(time < 24) {
		console.log('Sorry! Too late');
	} else {
		console.log('sorry only 24hours');
	}

alert('Бюджет на 1 день = ' + monthBudget / 30);
console.log(mainList);

