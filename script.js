let body = document.querySelector('body');
themes = document.querySelector('.themes button');
minHand = document.querySelector('.min-hand');
hourHand = document.querySelector('.hour-hand');
secondHand = document.querySelector(".sec-hand");
time = document.querySelector('.date-time h4');
today = document.querySelector('.date');


//mode switch
themes.onclick = () => {
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');
    themes.innerHTML = isDarkMode ? `<ion-icon name="moon"  class="icon"></ion-icon>` : `<ion-icon name="sunny" class="icon"></ion-icon>`;
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");

}

//if we change dark mode at first,when we reload this page dark mode still effort
if (localStorage.getItem("mode") === "Dark Mode") {
    body.classList.add("dark");
    themes.innerHTML = `<ion-icon name="moon"  class="icon"></ion-icon>`;
}


//time update function
const updateTime = () => {
    //get current time
    let currentDate = new Date();

    //hour,second,minute to degree
    secDeg = (currentDate.getSeconds() / 60) * 360;
    minDeg = (currentDate.getMinutes() / 60) * 360;
    hourDeg = (currentDate.getHours() / 12) * 360;

    //move secondhand every seconds
    secondHand.style.transform = ` rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;


    //get hour ,min's values
    minutes = currentDate.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    hours = currentDate.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    //get day 
    day = currentDate.getDay();
    if (day < 10) {
        day = `0${day}`;
    }

    //get month by word
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = months[currentDate.getMonth()];

    //get years
    years = currentDate.getFullYear();

    //difference am and pm
    const ampm = hours >= 12 ? 'PM' : 'AM';


    //to change date time
    time.innerHTML = `${hours} : ${minutes}<sup>${ampm}</sup>`;
    today.innerHTML = `${day} ${month}  ${years}`;
}

//hourhand,sechand,minhand move as real time
setInterval(updateTime, 1000);

updateTime();