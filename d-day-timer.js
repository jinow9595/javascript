const clockTitle = document.querySelector(".js-clock");

calcDday();

setInterval(calcDday, 1000);

function calcDday() {
    const now = new Date();
    const dDay = new Date(now.getFullYear(), 11, 25);

    const leftDate = dDay - now;
    const leftDay = Math.floor(leftDate / (1000 * 60 * 60 * 24));
    const leftHour = Math.floor(leftDate / (1000 * 60 * 60) % 24);
    const leftMin = Math.floor(leftDate / (1000 * 60) % 60);
    const leftSec = Math.floor(leftDate / (1000) % 60);

    if (leftDate > 0)
        clockTitle.innerText = `${leftDay}d ${leftHour}h ${leftMin}m ${leftSec}s`;
    else
        clockTitle.innerText = "D-DAY!";
}
