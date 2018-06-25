function sayName(name) {
	let message = "My name is" + name
	return message
}
let arr = [5, -4, 6, 7, -7, 0, 3, 7, 10];
let result = arr.reduce(function(sum, elem) {
	return sum + elem;
})

let assert = require('chai').assert

describe('sayName', function() {
	it("Получаем фразу с новым именем", function() {
		assert.typeOf(sayName('Alex'), 'string')
	});
});

describe('arr', function() {
	it("Получаем сумму чисел массива", function() {
		assert.equal(result, 27)
	});
});