let power = 0;
let power2 = 0;
let power3 = 0;

let intervalId1 = setInterval(function () {
    power++;
    if (power === 15) {
        clearInterval(intervalId1);
    }
    document.getElementById("power").innerHTML = power;
}, 100);

let StudyPower = setInterval(function () {
    power2++;
    if (power2 === 6) {
        clearInterval(StudyPower);
    }
    document.getElementById("power2").innerHTML = power2;
}, 100);

let StudyPower2 = setInterval(function () {
    power3++;
    if(power3 === 3){
        clearInterval(StudyPower2)
    }
    document.getElementById("power3").innerHTML = power3;
}, 100);