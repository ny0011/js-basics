const clockContainer = document.querySelector(".js-clock"),
	clockTitle = clockContainer.querySelector("h1");

/*
function changeTimeFormat(strings, time) {
	return time < 10 ? `0${time}` : time;
}
*/

function getTime() {
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
	let hourInt = `${hours}`;
	let time12hour = "AM";

	if (hours >= 12) {
		hourInt = `${hours - 12}`;
		time12hour = "PM";
	}

	if (hours === 0 || hours === 12) {
		hourInt = 12;
	}

	clockTitle.innerHTML = `${hourInt
		.toString()
		.padStart(2, "0")}:${minutes
		.toString()
		.padStart(2, "0")}:${seconds
		.toString()
		.padStart(2, "0")} ${time12hour}`;
	//`${changeTimeFormat`${hourInt}`}:${changeTimeFormat`${minutes}`}:${changeTimeFormat`${seconds}`} ${time12hour}`;
	/*  `${hourInt < 10 ? `0${hourInt}` : hourInt}:${
		minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds} ${time12hour}`;
  */
}

function init() {
	setInterval(getTime, 1000);
}

init();
