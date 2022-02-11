const body = document.querySelector("body");

function backgroundChangeEvent() {
    // if (body.className === "test") {
    //     body.className = "";
    // } else {
    //     body.className = "test";
    // }
    body.classList.toggle("test");
}

body.addEventListener("click", backgroundChangeEvent);

const title = document.querySelector("#title");

function innerWidthChangeEvent() {
    console.log(innerWidth);

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

addEventListener("resize", innerWidthChangeEvent);