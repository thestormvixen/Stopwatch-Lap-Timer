window.onload = function () {
 const minutes = document.getElementById("minutes");
 const seconds = document.getElementById("seconds");
 const tens = document.getElementById("tens");

 const startBtn = document.getElementById("start-btn");
 const stopBtn = document.getElementById("stop-btn");
 const resetBtn = document.getElementById("reset-btn");

// sets timer to 00:00:00 on start up
 let minutesSet = 00;
 let secondsSet = 00;
 let tensSet = 00;
 let Interval;

 // Start Button
 startBtn.onclick = function () {
  // Interval changes ever 10s
  Interval = setInterval(startTimer, 10);
  // Starts red dim effect
  dimEffect();
 };

 // Stop Button
 stopBtn.onclick = function () {
  clearInterval(Interval);
  // Creates individual lap stop timer on Stop
  const lap = document.getElementById("laps");
  const li = document.createElement("li");
  li.innerHTML = `lap: <span>${minutes.innerHTML}:${seconds.innerHTML}:${tens.innerHTML}</span>`;

  lap.appendChild(li);
  // Stops red dim effect
  dimEffect();
 };

 // Reset Button
 resetBtn.onclick = function () {
  clearInterval(Interval);
  // Resets timer back to 00
  minutesSet = "00";
  secondsSet = "00";
  tensSet = "00";
  minutes.innerHTML = minutesSet;
  seconds.innerHTML = secondsSet;
  tens.innerHTML = tensSet;
  // Clears Laps
  document.getElementById("laps").innerHTML = "";
 };


 // Create Start Timer function
 function startTimer() {
  tensSet++;

  if (tensSet < 9) {
   tens.innerHTML = "0" + tensSet;
  }

  if (tensSet > 9) {
   tens.innerHTML = tensSet;
  }
  // Seconds activates when Tens reach 99
  if (tensSet > 99) {
   secondsSet++;
   seconds.innerHTML = "0" + secondsSet;
   tensSet = 0;
   tens.innerHTML = "0" + 0;
  }
  // Minutes activates when Seconds reach 60
  if (secondsSet == 60) {
   minutesSet++;
   minutes.innerHTML = "0" + minutesSet;
   secondsSet = 0;
  }

  if (minutesSet > 9) {
   minutes.innerHTML = minutesSet;
  }
 }

 // Dimming Effect Function on Timer
 function dimEffect() {
  const lapTime = document.querySelector(".lap-time");
  lapTime.classList.toggle("dimming-effect");
 }
};