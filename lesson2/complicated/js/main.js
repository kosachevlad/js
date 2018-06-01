let week = [
	'понедельник', 
	'вторник', 
	'среда', 
	'четверг', 
	'пятница',
	'суббота',
	'воскресенье'
];

for (let i = 0; i < week.length; i++) {
	if (i > 4) {
		document.write('<b>' + week[i] + '</b>' + '<br>');
	} else if (i == 4)  { //Иван в дискорде сказал, что эту переменную можно задать ручками
		document.write('<i>' + week[i] + '<br>' + '</i>');
	} else {
		document.write(week[i] + '<br>');
	}
}

let arr = [
	'123213534',
	'34456',
	'234',
	'3645',
	'2342',
	'7289',
	'986754'
];

for (let i = 0; i < arr.length; i++) {
	let a = arr[i]
	if (a.charAt(0) == 3 || a.charAt(0) == 7) {
		console.log(arr[i])
	} else {
	}
}
