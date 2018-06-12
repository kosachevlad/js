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
		hours = String(hours);
		mins = String(mins);
		secs = String(secs);
		if(month.length == 1) {
			month = '0'+month;
		};
		if(day.length == 1) {
			day = '0'+day;
		};
		if(hours.length == 1) {
			hours = '0'+hours;
		};
		if(mins.length == 1) {
			mins = '0'+mins;
		};
		if(secs.length == 1) {
			secs = '0'+secs;
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
	header.style.textAlign = "center";
}
setInterval(printTime, 1000);


