'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutID;

  function countUp() {
    const d = new Date(Date.now() - startTime);
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

  start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
  });
  
  stop.addEventListener('click', () => {
    clearTimeout(timeoutID);
  });
  
  reset.addEventListener('click', () => {
    timer.textContent = '0:0:0:0';
  });
}