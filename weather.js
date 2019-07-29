const COORDS = "coords";

function saveCoords(coordsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;

	// js에서 key와 value가 이름이 같다면 아래처럼 이름만 써도 됨.
	const coordsObj = {
		latitude,
		longitude
	};

	saveCoords(coordsObj);
}

function handleGeoError() {
	console.log("cant access geo location");
}

function askForCoords() {
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
	const loadedCoords = localStorage.getItem(COORDS);
	if (loadCoords === null) {
		askForCoords();
	} else {
		// get weather
	}
}

function init() {
	loadCoords();
}

init();
