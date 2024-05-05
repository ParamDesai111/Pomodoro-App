var running = false;
var timer;

function fetchTime() {
    fetch('/time')
        .then(response => response.json())
        .then(data => {
            document.getElementById('timer').innerText = data.current_time;
        });
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(fetchTime, 1000);
    }
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    document.getElementById('timer').innerText = "00:00:00";
}
