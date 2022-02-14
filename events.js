// null, undefined
console.log(null === "");
console.log(undefined === "");
console.log(null === undefined);
console.log(null === null);

// 배열
const array = ["1", 2, 32, "fas"];

array.push("last");

console.log(array);

// 객체
const me = {
    lastName: "ji",
    firstName: "now"
}

console.log(me);
console.log(me.lastName);
console.log(me["firstName"]);

me.blog = "jinow9595.tistory.com";

console.log(me);

// 이벤트 핸들러
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("h1");
const body = document.querySelector("body");

const superEventHandler = {
    mouseenter: function (index) {
        title.style.color = colors[index];
        title.innerText = "The mouse is here!";
    },
    mouseleave: function (index) {
        title.style.color = colors[index];
        title.innerText = "The mouse is gone!";
    },
    contextmenu: function (index) {
        title.style.color = colors[index];
        title.innerText = "That was a right click!";
    },
    resize: function (index) {
        title.style.color = colors[index];
        title.innerText = "You just resized!";
    }
};

title.addEventListener("mouseenter", function () {
    superEventHandler.mouseenter(0);
});

title.addEventListener("mouseleave", function () {
    superEventHandler.mouseleave(1);
});

window.addEventListener("contextmenu", function () {
    superEventHandler.contextmenu(4);
});

window.addEventListener("resize", function () {
    superEventHandler.resize(2);
});

// body.addEventListener("click", backgroundChangeEvent);
// window.addEventListener("resize", innerWidthChangeEvent);

function backgroundChangeEvent() {
    // if (body.className === "test") {
    //     body.className = "";
    // } else {
    //     body.className = "test";
    // }
    body.classList.toggle("test");
}

function innerWidthChangeEvent() {
    if (innerWidth > 1400) {
        body.className = "";
    } else if (innerWidth >= 800) {
        body.classList.add("middleInnerWidth");
        body.classList.remove("minInnerWidth");
    } else {
        console.log(body.classList);
        body.classList.add("minInnerWidth");
        body.classList.remove("middleInnerWidth");
    }
}

// var, let, const - scope
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