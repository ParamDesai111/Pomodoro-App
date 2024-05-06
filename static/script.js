let seconds = 0;
let intervalId = null;

function updateTime() {
    seconds++;
    document.getElementById('timer').innerText = formatTime(seconds);
    updateProgress(seconds);
}

function formatTime(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    let seconds = totalSeconds % 60;

    return [hours, minutes, seconds]
        .map(v => v < 10 ? "0" + v : v)
        .join(":");
}

function startTimer() {
    if (!intervalId) {
        intervalId = setInterval(updateTime, 1000);
    }
}

function pauseTimer() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function resetTimer() {
    pauseTimer();
    seconds = 0;
    document.getElementById('timer').innerText = "00:00:00";
}

function updateProgress(seconds) {
    const totalSeconds = 25 * 60; // Total seconds for 25 minutes
    const percentage = ((seconds % totalSeconds) / totalSeconds) * 360;
    document.querySelector('.circle-timer').style.background =
        `conic-gradient(red ${percentage}%, blue ${percentage}%)`;
}
