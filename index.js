// 아직은 변수 선언 시 const를 사용하고 필요할 때만 let을 사용하자!

// HELLO WORLD!
//alert("I'm working. I'm JS");
//console.log("I'm working. I'm JS");

// variable : Create -> Initialize -> Use
// 변수를 새로 생성했을 때 let을 써주자
let a = 221;
let b = a - 5;
a = 4;
//console.log(b, a);

// 같은 파일 내에 같은 변수를 사용하면 누군가가 변경할 수 있음.
// const 변수 : 값이 상수가 됨. 다시 값을 변경할 수 없음
const c = 11;

// TypeError: Assignment to constant variable
// c = 5;

// var를 쓰면 문제점이 생길 수 있음.
// var를 쓰지말자!
// https://academy.nomadcoders.co/courses/435558/lectures/6689826/comments/2248007
// var d = 22;

/* string
const what = "😍";
console.log(what);
*/
/* Boolean
const ee = true;
*/
/* Number
const ee = 666;
*/
/* Float
const ee = 55.1;
*/

const something = "Something";

const daysOfWeek = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  true,
  something
];

//console.log(daysOfWeek);

// Object : 각 value에 이름을 부여할 수 있음!

const nyInfos = ["NY", "55", true, "Osan"];

const nyInfo = {
  name: "NY",
  age: "55",
  gender: "Female",
  isHandsome: true,
  favMovies: ["Along the gods", "EVA", "Oldboy"],
  favFood: [{ name: "pizza", fatty: true }, { name: "kimchi", fatty: false }]
};
console.log(nyInfo.favFood[1].name);

console.log(nyInfo);
//console.log(nyInfo.gender)

nyInfo.gender = "male";

//console.log(nyInfo.gender)
