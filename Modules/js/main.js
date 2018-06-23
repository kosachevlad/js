// Анонимная самовызывающаяся функция
		// let number = 1;

		// (function(){

		// 	let number = 2;
		// 	console.log(number);

		// 	return console.log(number + 3)

		// }()) 

		// console.log(number)

// Использование объектного интерфейса

			// let user = (function() {
			// 	let privat = function() {
			// 		console.log('i am privat!')
			// 	};
			// 	let sayHello = function() {
			// 		console.log('Hello')
			// 	};
			// 	return {
			// 		sayHello: sayHello,
			// 			privat: privat
			// 		}
			// }());

			// console.log(user.privat());

// Подключение стороннего скрипта

var myModule = require('../second.js');

let myModuleInstance = new myModule();
myModuleInstance.hello();
myModuleInstance.goodbye();