window.onload = function() {

    var seconds = 00;
    var tens = 00;
    var min = 00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendMin = document.getElementById("min")
    var buttonStart = document.getElementById('button-start');
    var buttonLap = document.getElementById('button-lap');
    var buttonReset = document.getElementById('button-reset');
    var lapList = document.getElementById('laps');
    var lapCounter = 1;
    var Interval;
    var click = 0;

    buttonStart.onclick = function() {
        if (click == 0) {
            Interval = setInterval(startTimer, 10);
            click++;
            return;

        }
        if (click == 1) {
            clearInterval(Interval);
            click--;
            return;
        }

    }

    buttonLap.onclick = function() {

        lapList.innerHTML += '<li> <span class="lap-min">' + appendMin.innerHTML + '</span>:<span class="lap-seconds">' + appendSeconds.innerHTML + '</span>:<span class="lap-tens">' + appendTens.innerHTML + '</span> -- Lap ' + lapCounter + '</li>';
        lapCounter++;
        storeLaps();

    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        click = 0
        console.log(click)
        tens = "00";
        seconds = "00";
        min = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMin.innerHTML = seconds;
        lapList.innerHTML = "";
        lapCounter = 1;
        storeLaps();
    }



    function startTimer() {
        tens++;

        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;

        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;

        }
        if (seconds > 59) {
            min++
            appendMin.innerHTML = "0" + min;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;


        }

    }

    function storeLaps() {
        window.localStorage.myLaps = lapList.innerHTML;
    }

    function getLaps() {
        lapList.innerHTML = window.localStorage.myLaps;
    }
    getLaps();


}