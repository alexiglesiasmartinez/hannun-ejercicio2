window.onload = function () {

    // Presetting.
    let seconds = 00;
    let minutes = 00;
    let interval;
    const appendSeconds = document.getElementById('seconds');
    const appendMinutes = document.getElementById('minutes');
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const resetButton = document.getElementById("reset");

    // Start function.
    const startHandler = () => {
        seconds++;
        if (seconds < 9) {
            appendSeconds.innerHTML = "0" + seconds;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 99) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
        if (minutes > 9) {
            appendMinutes.innerHTML = minutes;
        }
    };

    // Start event.
    startButton.addEventListener("click", () => {
        clearInterval(interval);
        interval = setInterval(startHandler, 10);
        if (minutes > 0 || seconds > 0) {
            document.getElementById("stopMessage").style.opacity = "1";
        }
    });

    // Stop event.
    const stopHandler = () => {
        clearInterval(interval);
        document.getElementById("stopMessage").style.opacity = "0";
    };
    document.getElementById("stop").addEventListener("click", stopHandler);

    // Reset event.
    const resetHandler = () => {
        clearInterval(interval);
        document.getElementById("stopMessage").style.opacity = "0";
        minutes = "00";
        seconds = "00";
        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
    };
    document.getElementById("reset").addEventListener("click", resetHandler);
};