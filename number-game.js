const inputForm = document.querySelector("#play");
const boundary = document.querySelector("#boundary");
const inputNumber = document.querySelector("#input_number");

const resultDiv = document.querySelector("#result_div");
const userNumber = document.querySelector("#user_number");
const machineNumber = document.querySelector("#machine_number");
const gameResult = document.querySelector("#game_result");

boundary.addEventListener("input", function () {
    inputNumber.max = boundary.value;
});

inputForm.addEventListener("submit", playGame);

function playGame(e) {
    e.preventDefault();

    resultDiv.style.display = "";
    userNumber.innerText = inputNumber.value;

    machineNumber.innerText = Math.floor(Math.random() * (parseInt(boundary.value) + 1));

    if (userNumber.innerText < machineNumber.innerText)
        gameResult.innerText = "You lose!";
    else if (userNumber.innerText === machineNumber.innerText)
        gameResult.innerText = "You draw!";
    else
        gameResult.innerText = "You win!";
}