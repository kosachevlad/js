// // 1я часть
// let options = {
// 	name: "test",
// 	width: 1024,
// 	height: 1024
// }

// options.bool = false;
// options.colors = {
// 	border: "black",
// 	background: 'red'
// }



// delete options.bool

// // Когда необходимо перебрать все свойства в объекте

// for( let key in options) {
// 	console.log('Свойство ' + key + " имеет значение " + options[key])
// }

// // Когда необходимо узнать кол-во свойств в объекте

// console.log(Object.keys(options).length);


// 2я часть

// let first = [1,'second',3,4,5];

// // arr.pop(); // убирает последний элемент массива, и также возвращает его

// // arr.push(6) // добавляет (запушивает) элемент в конец массива

// // arr.shift
// // arr.unshift
// first[99] = 99;

// console.log(first)

// // Метод перебора forEach

// first.forEach(function(item, i, arr){
// 	console.log(i + ": " + item + "(массив: " + arr + ")");
// })

// 3я часть

let first = ["aa", "sss", "asd", "q"];
// let i = prompt("", "")
//first = i.split(",") //извлекает из строки данные разделенные запятой и записывает в массив

let i = first.join(",") // наоборот - из массива переводит в строку и разделяет запятой

console.log(i)