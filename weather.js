const weather = document.querySelector(".js-weather");

const API_KEY = "7a2ec337bb0f8a923ba9de233bb869b3";
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      //console.log(typeof response);
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      const cloud = json.weather[0].main;
      console.log(cloud);
      weather.innerText = `${cloud}, ${parseInt(temperature)}℃ @${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // js에서 key와 value가 이름이 같다면 아래처럼 이름만 써도 됨.
  const coordsObj = {
    latitude,
    longitude
  };

  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    // get weather
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
