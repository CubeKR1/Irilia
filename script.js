const second = 1000;
const minuteSeconds = 60 * second; 
const hourSeconds = 60 * minuteSeconds;
const daySeconds = 24 * hourSeconds;
const yearSeconds = daySeconds * 365;
const time = new Date().getTime();
var ret = [];


function countdown(clockTime, dayTime, monthTime, yearTime, timeZone, id) {
    function updateTime() {
        var d = new Date();
        var secondsSince1970 = Math.floor(d.getTime() / second);
        return secondsSince1970;
    }
    secondsNow = updateTime();
    months = {
        1 : 31,
        2 : 28,
        3 : 31,
        4 : 30,
        5 : 31,
        6 : 30,
        7 : 31,
        8 : 31,
        9 : 30,
        10 : 31,
        11 : 30,
        12 : 31,
    }

    clockArray = clockTime.split(":");
    for (i = 0; i < clockArray.length; i++) {
        clockArray[i] = parseInt(clockArray[i])
    };

    for (i = monthTime - 1; i > 0; i--) {
        dayTime += months[i];
    };

    dayTime += 365 * (yearTime - 1970) + (Math.floor((yearTime - 1972) / 4));
    secondsCountdown = (dayTime * daySeconds + (clockArray[0] + timeZone) * hourSeconds + clockArray[1] * minuteSeconds) / 1000;

    secondsDiff = secondsCountdown - secondsNow;
    
    dayAmount = new Intl.NumberFormat("en-IN", {minimumIntegerDigits: 2}).format(Math.floor(secondsDiff / 86400));
    hourAmount = new Intl.NumberFormat("en-IN", {minimumIntegerDigits: 2}).format(Math.floor((secondsDiff % 86400) / 3600));
    minuteAmount = new Intl.NumberFormat("en-IN", {minimumIntegerDigits: 2}).format(Math.floor(((secondsDiff % 86400) % 3600) / 60));
    secondAmount = new Intl.NumberFormat("en-IN", {minimumIntegerDigits: 2}).format(Math.floor(((secondsDiff % 86400) % 3600) % 60));

    diffArray = [dayAmount, hourAmount, minuteAmount, secondAmount];
    countdownText = diffArray.join(":");

    document.getElementById(id).innerHTML = countdownText;
}

function removeIntervals() {
    for (i = 0; i < ret.length; i++) {
        clearInterval(ret[i]);
        ret.splice([i]);
    }
};

function realCountdown(clockStr, day, month, year, timeZone, id) {
    removeIntervals();
    var intervalValue = setInterval(function() { countdown(clockStr, day, month, year, timeZone, id) }, 1000);
    ret.push(intervalValue);
}