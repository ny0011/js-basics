const nyInfo = {
  name: "NY",
  age: "55",
  gender: "Female",
  isHandsome: true,
  favMovies: ["Along the gods", "EVA", "Oldboy"],
  favFood: [{ name: "pizza", fatty: true }, { name: "kimchi", fatty: false }]
};

//console.log(nyInfo, console)

function sayHello(name, age) {
  //console.log("Hello!", name, " you have ", age, " years of age.")
  //console.log(`Hello ${name}! You are ${age} years old`);
  return `Hello ${name}! You are ${age} years old`;
}

const greetNY = sayHello("NY", 14);

//sayHello("ny", 15);
//console.log(greetNY);

const calculator = {
  plus: function(a, b) {
    return a + b;
  }
};
//        console.log()와 비슷함
const plus = calculator.plus(5, 5);
console.log(plus);
