// 1
let open = document.getElementById('open-btn');
// 2
let nameValue = document.getElementsByClassName('name-value'),
	budgetValue = document.getElementsByClassName('budget-value'),
	goodsValue = document.getElementsByClassName('goods-value'),
	itemsValue = document.getElementsByClassName('items-value'),
	employersValue = document.getElementsByClassName('employers-value'),
	discountValue = document.getElementsByClassName('discount-value'),
	isOpenValue = document.getElementsByClassName('isopen-value');

// 3
let goodsItem = document.getElementsByClassName('goods-item');
// 4
let mainFunctions = document.querySelector('.main-functions');
let buttons = mainFunctions.getElementsByTagName('button');

// 5
let itemsInput = document.querySelector('#items'),
	timeInput = document.querySelector('#time'),
	budgetInput = document.querySelector('#budget');
// 6
let employersItem = document.querySelectorAll('.hire-employers-item');
console.log(employersItem);