(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../second.js":2}],2:[function(require,module,exports){
function myModule() {
	this.hello = function() {
		return console.log('hello!');
	}

	this.goodbye = function() {
		return console.log('goodbye!');
		alert('1');
	}

};

module.exports = myModule;
},{}]},{},[1]);
