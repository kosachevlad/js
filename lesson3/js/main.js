let str = "урок-3-был слишком легким";


function first() {
	str = str[0].toUpperCase() + str.substr(1);
}
first();



function second() {
	let pos = -1;

	while ((pos = str.indexOf("-", pos + 1)) != -1) {
		str = str.replace("-", " ");
	}
}
second();

function third() {
	str1 = str.slice(0, -7); // На случай, если неправильно понял задачу,
							 // оставляю 2 варианта: third() и thirdA()
							 // "урок 3 был слишкоо"
	for(i=0; i < 2; i++) {
		str1 = str1.slice(0, -1);
	};
	for(i=0; i < 2; i++) {
		str1 = str1 + "o"
	}
	document.write(str1 + '<br>')

}
third()

function thirdA() {
	str2 = str.slice(-6, str.length); //"легкоо
	for(i=0; i < 2; i++) {
		str2 = str2.slice(0, -1);
	};
	for(i=0; i < 2; i++) {
		str2 = str2 + "o"
	}
	document.write(str2)
}
thirdA()

let arr = [20, 33, 1, "Человек", 2, 3]
function fourth() {
	for(i=0; i < arr.length; i++) {
		arr[i] = Math.pow(arr[i], 3);
	}
	let sum = 0;
	for(i=0; i < arr.length; i++) {
		if (isNaN(arr[i])) {
			arr[i] = 0; //пропускаем строку в массиве при сложении
		} else {
			sum += arr[i];
		}
	}
	console.log(Math.sqrt(sum));
}
fourth();



function fifth(g) {
	if((typeof(g)) != 'string') {
		alert('Аргумент не является строкой!')
	} else {
		g = g.trim();
		if(g.length > 50){
			g = g.slice(0, 50) + "...";

		}
	}
	console.log(g)

}
fifth('     0123456789два01234567890три123456789четыре0123456789пять01234567890    ');


console.log(str);


