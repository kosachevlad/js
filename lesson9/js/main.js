function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function(){
		alert("Hello " + this.name);
	}
};

User.prototype.exit = function(name) {
	alert("Пользователь " + this.name + " ушел");
}

let ivan = new User('Ivan', 23);
let alex = new User('Alex', 20);

console.log(ivan, alex)

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