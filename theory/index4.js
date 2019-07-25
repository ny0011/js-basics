const title = document.querySelector("#title");

const BASE_COLOR = "blue";
// https://flatuicolors.com/palette/defo
const OTHER_COLOR = "#8e44ad";

function HandleClick() {
  const currentColor = title.style.color;
  console.log(title.style.color);
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;

  // https://developer.mozilla.org/ko/docs/Web/Events
  title.addEventListener("click", HandleClick);
}

init();

function handleOffline() {
  console.log("bye bye");
}

function handleOnline() {
  console.log("welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
