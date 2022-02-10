
let now = new Date();
const height = 188;

// console.log(now);
// alert(now);

// console.log(null === "");
// console.log(undefined === "");
// console.log(null === undefined);
// console.log(null === null);

const array = ["1", 2, 32, "fas"];

array.push("last");

console.log(array);

const me = {
    lastName: "ji",
    firstName: "now"
}

console.log(me);
console.log(me.lastName);
console.log(me["firstName"]);

me.blog = "jinow9595.tistory.com";

console.log(me);

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("#title");

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