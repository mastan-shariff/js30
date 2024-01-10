const secondsHand = document.querySelector('.sec-hand');
const minutessHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const tick=document.querySelector('.sound');
const bell=document.querySelector('.sound2');
let fiveminutes=0;

function runMyclock() {

    let date = new Date();
    const seconds = date.getSeconds();
    tick.play();

    const secondsDegree = (seconds * 6) - 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

    const mins=date.getMinutes();
    const minsDegree=(mins*6)+((seconds/60)*6)-90;

    if(mins==0){
        bell.play();
    }

    minutessHand.style.transform=`rotate(${minsDegree}deg)`;

    const hour = date.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) - 90;
    
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(runMyclock, 1000);

