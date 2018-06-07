function printTime() {
let d = new Date(),
	year = d.getFullYear(),
	month = d.getMonth() + 1,
	day = d.getDate(),
	hours = d.getHours(),
	mins = d.getMinutes(),
	secs = d.getSeconds(),
	week = ['Понедельник',
			 'Вторник', 
			 'Среда', 
			 'Четверг', 
			 'Пятница', 
			 'Суббота', 
			 'Воскресенье'],
	weekDay = d.getDay();
	header = document.querySelector('#header');

	function addZero() {
		day = String(day);
		month = String(month);
		if(day.length == 1 && month.length) {
			day = '0'+day;
			month = '0'+month;
		}
	}
	addZero();

	function getWeekDay() {
		
		for(i=0; i < 7; i++){
			if(weekDay == i+1){
				weekDay = week[i];
			}
		}
	}
	getWeekDay();

	header.textContent = hours+":"+mins+":"+secs +" "+day+'.'+month+'.'+year+' ('+weekDay+')';
}
setInterval(printTime, 1000);

let first = document.getElementById('first').value,
	second = document.getElementById('second').value,
	firstDate = new Date(first),
	secondDate = new Date(second),
	result = document.getElementById('result');

// setInterval(header.textContent = firstDate, 1000);
// function calcDays(date1, date2){

// }


