let age = document.getElementById('age');

function showUser(surname, name) {
	this.value = age.value;
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser('asd', 'as');

// let user = {
// 	name: 'John'
// };

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// };

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function(){
// 		alert("Hello " + this.name);
// 	}
// };

// User.prototype.exit = function(name) {
// 	alert("Пользователь " + this.name + " ушел");
// }

// let ivan = new User('Ivan', 23);
// let alex = new User('Alex', 20);

// console.log(ivan, alex)

// ivan.exit();


// "use strict"
// num = 4;
// console.log(num);

// "use strict"
// function showThis(a,b) {
// 	console.log(this);
// 		function sum() {
// 			console.log(this);
// 			return a + b;
// 		}
// 		console.log(sum());
// }
// showThis(4,5);
// showThis(5,5);

// let obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// }

// obj.sum()