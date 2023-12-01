let power = 0
let intervalId1 = setInterval(function () {
    power++;
    if (power === 15) {
        clearInterval(intervalId1);
    }
    document.getElementById("power").innerHTML = power;
}, 10);