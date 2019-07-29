const body = document.querySelector("body");
const IMG_NUMBER = 5;

/*
function handleImgLoad() {
	console.log("finished loading");
}
*/

function paintImage(imgNumber) {
	const image = new Image();
	image.src = `images/${imgNumber}.jpg`;
	image.classList.add("bgImage");
	body.appendChild(image);

	// api에서 추가하는 게 아니라서 요 이벤트가 작동이 안되나봄???
	//image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
	return Math.ceil(Math.random() * IMG_NUMBER);
}

function init() {
	const randomNumber = genRandom();
	paintImage(randomNumber);
}

init();
