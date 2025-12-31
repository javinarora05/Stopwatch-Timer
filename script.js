
const display = document.querySelector(".display");
const message = document.querySelector(".message");



const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const stopp = document.querySelector("#stop");
const getTime = document.querySelector("#getTime");
const clearTime = document.querySelector("#clearTime");

let startTime = 0;
let timerId = null;
const startTimer = () => {
    
  if (timerId !== null) return;

  timerId = setInterval(() => {
    display.innerHTML = startTime++;
  }, 1000);
};

const stopTimer = () => {
    clearInterval(timerId);
    const p = document.createElement('div');
    message.appendChild(p);
    p.innerHTML = "The Stop time is " + (startTime - 1) + "s"; 
    timerId = null;
}


const resetTimer = () => {
    display.innerHTML = 0;
    timerId = null;
    startTime = 0;
}

const showValue = () => {
   const p = document.createElement('div');
    message.appendChild(p);
    if(startTime != 0){
    p.innerHTML = "The time is " + (startTime - 1) + "s"; 
    }
    else{
        p.innerHTML = "The time is " + startTime + "s"; 
    }
}

const clearTimeValue = () => {
    message.innerHTML = "";
}


start.addEventListener("click" , startTimer);
reset.addEventListener("click" , resetTimer);
stopp.addEventListener("click" , stopTimer);
getTime.addEventListener("click" , showValue);
clearTime.addEventListener("click" , clearTimeValue);










