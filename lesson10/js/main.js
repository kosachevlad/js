// Интерполяция

// let name = "Ivan",
// 	age = 30,
// 	mail = 'ex@gmail.com';

// document.write(`Пользователю ${name}  ${age} лет. Его адрес:  ${mail}`)

// function makeArray() {

// 	let items = [];

// 	for (let i = 0; i < 10;  i++) {
// 		let item = function() {
// 			console.log(i);
// 		}
// 		items.push(item);
// 	}

// 	return items;

// };
// let arr = makeArray();
	
// arr[1]();
// arr[3]();
// arr[7]();

// let obj = {
// 	number: 5,
// 	sayNumber: function() {
// 		let say = () => {
// 			console.log(this)
// 		}
// 		console.log(this);
// 		say();
// 	}
// }
// obj.sayNumber();

// let btn = document.getElementsByTagName('button')[0];

// btn.addEventListener('click', function() {
// 	let show = () => {
// 		console.log(this);
// 	}
// 	show()
// })

// function calcOrDouble(number, basis = 2) {
// 	console.log(number * basis);

// }
// calcOrDouble(13);

class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	calcArea() {
		return this.height * this.width;
	}
}

const square = new Rectangle(10, 15);

console.log(square.calcArea());