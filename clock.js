const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  let timeString = `${hours}`;
  let time12hour = `AM`;

  if (hours > 12) {
    timeString = `${hours - 12}`;
    time12hour = `PM`;
  } else if (hours === 0) {
    timeString = 12;
  }

  clockTitle.innerHTML = `${timeString}:${minutes}:${seconds} ${time12hour}`;
}

function init() {
  getTime();
}

init();
