function timeStringToSeconds(timeStr) {
  const [h, m, s] = timeStr.split(":").map(Number);
  return h * 3600 + m * 60 + s;
}

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

function startCountdown(element, totalSeconds) {
  function update() {
    if (totalSeconds >= 0) {
      element.textContent = formatTime(totalSeconds);
      totalSeconds--;
      setTimeout(update, 1000);
    } else {
      element.textContent = "Время вышло!";
    }
  }
  update();
}

document.querySelectorAll(".timer").forEach((timer) => {
  const timeStr = timer.dataset.start;
  const totalSeconds = timeStringToSeconds(timeStr);
  startCountdown(timer, totalSeconds);
});
