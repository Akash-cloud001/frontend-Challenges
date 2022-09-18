const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.minute-hand');
const hrHand = document.querySelector('.hour-hand');
const hand = document.querySelector('.hand');

function setSecond(){
    const currTime = new Date();
    // Fetching the seconds, minutes, hour from the date object of javascript
    const seconds = currTime.getSeconds();
    console.log(seconds);
    const minutes = currTime.getMinutes();
    const hour = currTime.getHours();

    //converting the seconds,minutes,hr into the degree
    const secDegree = (((seconds/60)*360)+90);
    const minDegree = ((minutes/60)*360)+90;
    const hrDegree = ((hour/12)*360)+90;

    //changing the css 
    secHand.style.rotate = `${secDegree}deg`;
    minHand.style.rotate = `${minDegree}deg`;
    hrHand.style.rotate = `${hrDegree}deg`;
}


setInterval(setSecond, 1000);