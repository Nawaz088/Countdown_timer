const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEL = document.getElementById('seconds');

const newDate = "1 jan 2023";

function countdown() {
    const newyeardate = new Date(newDate);
    const currentDate = new Date();
    const totalsec = Math.floor(newyeardate-currentDate)/1000;
    
    const days = Math.floor(totalsec / 3600 / 24);

    const hours = Math.floor(totalsec / 3600) % 24;

    const min = Math.floor(totalsec/60)  % 60;

    const seconds = Math.floor(totalsec%60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = min;
    secondsEL.innerHTML = seconds;
    
}

countdown();
setInterval(countdown, 1000);