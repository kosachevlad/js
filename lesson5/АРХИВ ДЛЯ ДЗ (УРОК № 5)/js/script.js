// 1
let menuItem = document.getElementsByTagName('li'),
	menu = document.querySelector('.menu');

menu.insertBefore(menuItem[2], menuItem[1]);

let menuItemFifth = document.createElement('li');

menuItemFifth.classList.add('menu-item');
menuItemFifth.textContent = 'Пятый пункт';
menu.appendChild(menuItemFifth);

// 2
document.body.style = "background: url(img/apple_true.jpg) center no-repeat;"
// 3
let title = document.getElementById('title');

title.textContent = "Мы продаем только подлинную технику Apple";
// 4
let adv = document.querySelector('.adv'),
	column = document.querySelectorAll('.column'),
	columnSecond = column[1];

columnSecond.removeChild(adv);
// 5
let promp = document.getElementById('prompt')
	promp.textContent = prompt('Напишите нам ваше отношение к технике Apple','');
