'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutID;
  let elapsedTime = 0;

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const h = d.getUTCHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const ms = String(d.getMilliseconds());
    const mss = ms.slice(0, 1);
    timer.textContent = `${h}:${m}:${s}:${mss}`;

    timeoutID = setTimeout(() => {
      countUp();
    }, 100);
  }

function setButtonStateInitial (){
    stop.disabled = true;
    reset.disabled = true;
    start.disabled = false;
}

function setButtonStateRunning (){
    stop.disabled = false;
    reset.disabled = true;
    start.disabled = true;
}

function setButtonStateStopped (){
    stop.disabled = true;
    reset.disabled = false;
    start.disabled = false;
}

setButtonStateInitial ();

  start.addEventListener('click', () => {
    setButtonStateRunning ();
    startTime = Date.now();
    countUp();
  });
  
  stop.addEventListener('click', () => {
    setButtonStateStopped();
    clearTimeout(timeoutID);
    elapsedTime += Date.now() - startTime;
  });
  
  reset.addEventListener('click', () => {
    setButtonStateInitial ();
    timer.textContent = '0:0:0:0';
    elapsedTime = 0;
  });
}