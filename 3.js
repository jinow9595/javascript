const HIDDEN_CLASS = "hidden"

const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const loginSuccess = document.querySelector("h1");
const logout = document.querySelector("button");

loginCheck();

loginForm.addEventListener("submit", loginSubmit);
logout.addEventListener("click", logoutClick);

//localStorage

function loginCheck() {
    const userId = localStorage.getItem("id");

    if (userId !== null) {
        loginSuccess.innerText = `Saved ID : ${userId}`;

        loginSuccess.classList.remove(HIDDEN_CLASS);
        logout.classList.remove(HIDDEN_CLASS);
        loginForm.classList.add(HIDDEN_CLASS);
    } else {
        loginForm.classList.remove(HIDDEN_CLASS);
    }
}

function loginSubmit(e) {
    e.preventDefault(); // 브라우저 기본 동작을 막아줌 ex) submit -> 새로고침 x
    localStorage.setItem("id", loginInput.value);

    loginCheck();
}

function logoutClick() {
    loginSuccess.innerText = "";
    loginInput.value = "";

    loginSuccess.classList.add(HIDDEN_CLASS);
    logout.classList.add(HIDDEN_CLASS);
    loginForm.classList.remove(HIDDEN_CLASS);

    localStorage.removeItem("id");
}