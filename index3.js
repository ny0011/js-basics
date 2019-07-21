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
document.querySelector("#title");
