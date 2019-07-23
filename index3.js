// HTML과 연동되는 JS 함수들을 알아보자
// HTML문서 중 JS로 선택된 태그는 객체로 저장된다!!

// document : html 전체 문서 -> 객체로 변환해 저장함.
const title = document.getElementById("title");
title.innerHTML = "HI! From JS";
// const title같은 애들을 DOM(Document Object Module)이라고 함.

// console.dir()로 변수가 가지고 있는 함수들을 확인할 수 있음
title.style.color = "blue";
document.title = "I own you now";
console.dir(title);

// node의 맨 첫번째 자식을 반환함
// .class, #id
const title2 = document.querySelector("#title");

// JS는 이벤트에 대응하기 위해 만들어짐.

// 자바스크립트가 자동으로 함수에 객체를 보냄(이름이 event 객체)
function handleResize(event) {
  console.log(event);
  console.log("I have been resized");
}

// 지금 당장 실행됨
//window.addEventListener("resize", handleResize());

// 이벤트를 받기를 기다리고 있음. resize 이벤트가 일어나면 handleResize()함수가 실행됨
window.addEventListener("resize", handleResize);

function handleClick() {
  title2.style.color = "red";
}

// 한번 클릭하면 바뀌고 그 상태를 유지함.
title2.addEventListener("click", handleClick);

if ("10" === 10) {
  console.log("hi");
} else if ("10" === "10") {
  console.log("lele");
} else {
  console.log("ho");
}

const age = prompt("How old are you?");

console.log(age);

if (age > 18) {
  console.log("you can drink");
} else {
  console.log("too young");
}
