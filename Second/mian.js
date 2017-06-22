function createCalendar(id, year, month) {
	var elem = document.getElementById(id);

	var mon = month - 1;
	var d = new Date(year, mon);
	var day = new Date();
	var days_in_month = 33 - new Date(year, mon - 1, 32).getDate();
	var table = '<table>';
	var arrayDay = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
	var arrayMont = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
	var nameMonth = document.getElementById("nameMonth");
	nameMonth.textContent = arrayMont[month - 1] + " " + year;

	var number = 0;
	for(var i = days_in_month - getDay(d); i < days_in_month; i++) {
		while(number < getDay(d)) {
			table += '<td>' + arrayDay[number] + ", " + i + '</td>';
			number++;
			break;
		}
	}
	number = getDay(d);
	while(d.getMonth() == mon) {
		if((d.getDate() == day.getDate()) && (now.getMonth() + 1 == month)) {
			table += '<td style="background: #F4F4F4; color: black">' + d.getDate() + '</td>';
			if(getDay(d) % 7 == 6) {
				table += '</tr><tr>';
			}
		}
		else if(number < 7) {
			table += '<td>' + arrayDay[number] + ", " + d.getDate() + '</td>';
			number++;
			if(getDay(d) % 7 == 6) {
				table += '</tr><tr>';
			}
		}
		else {
			table += '<td>' + d.getDate() + '</td>';
			if(getDay(d) % 7 == 6) {
				table += '</tr><tr>';
			}
		}
		d.setDate(d.getDate() + 1);
	}

	if(getDay(d) != 0) {
		for(var i = getDay(d); i < 7; i++) {
			table += '<td></td>';
		}
	}

	table += '</tr></table>';

	elem.innerHTML = table;
}

function getDay(date) {
	var day = date.getDay();
	if(day == 0) {
		day = 7;
	}
	return day - 1;
}

var now = new Date();
createCalendar("calendar", 1900 + now.getYear(), now.getMonth() + 1);

var year = 1900 + now.getYear();
var month = now.getMonth() + 1;

function mothFunctionLeft() {
	var leftClickButton = document.getElementById("leftClickButton");
	if(leftClickButton.onclick) {
		if(month > 0) {
			month--;
			createCalendar("calendar", year, month);
		}
		 if(month == 1) {
			month = 13;
			while(year > 1900) {
				year--;
				break;
			}
		}
	}
}

function montFunctionRight() {
	var rightButtonClick = document.getElementById("rightClickButton");
	if(rightButtonClick.onclick) {
		if(month <= 12) {
			createCalendar("calendar", year, month);
			month++;
		}
		if(month == 13) {
			month = 1;
			while(year < 2100) {
				year++;
				break;
			}
		}
	}
}
function nowButtonClick() {
	var nowButton = document.getElementById("nowButton");
	if(nowButton.onclick){
		createCalendar("calendar", 1900 + now.getYear(), now.getMonth() + 1);
	}
}




