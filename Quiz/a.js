let startTime = 300;
let min, sec;

let intervalId = setInterval(() => {
  min = Math.floor(startTime / 60);
  sec = startTime % 60;
  console.log(`${min} : ${sec}`);
  startTime--;
  if (startTime <= 0) {
    clearInterval(intervalId);
  }
}, 1000);