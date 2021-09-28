const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');
    const Diwali = '4 Nov 2021';

function countDown(){
    const DiwaliDate = new Date(Diwali);
    const currentDate = new Date();

    const TotalSec = (DiwaliDate - currentDate) / 1000;

    const days = Math.floor(TotalSec / 3600 / 24);
    const hours = Math.floor(TotalSec / 3600) % 24;
    const minutes = Math.floor(TotalSec / 60) % 60;
    const seconds = Math.floor(TotalSec) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secsEl.innerHTML = seconds;
}
countDown()
setInterval(countDown, 1000);