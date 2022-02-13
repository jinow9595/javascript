var variable = 1;
let variableLet = 2;
const variableConst = 3;

if (true) {
    var variable = 10;

    console.log(`var: ${variable}`); // var: 10
}

if (true) {
    let variableLet = 20;

    console.log(`let: ${variableLet}`); // var: 20
}

if (true) {
    const variableConst = 30;

    console.log(`const: ${variableConst}`); // const: 30
}

variableChange();

function variableChange() {
    var variable = 100;

    console.log(`var : ${variable}`); // var: 100
}

console.log(`var : ${variable}`); // var: 10
console.log(`let : ${variableLet}`); // let: 2
console.log(`const : ${variableConst}`); // const: 3

const array = ["var", "let", "const"];
// array = "array"; // TypeError: Attempted to assign to readonly property.
array.push("can push");

console.log(array); // ["var", "let", "const", "can push"]

const object = {
    name: "object"
}

object.property = "can add";

console.log(object); // {name: "object", property: "can add"}